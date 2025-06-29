// src/index.js
const axios = require('axios');

let apiKey = null;

const auth = {
    key: (key) => {
        apiKey = key;
        console.clear();
        console.log(`🔑 API Key set to: ${apiKey}`);
    },

    start: async (connectFunction) => {
        if (!apiKey) {
            console.clear();
            console.error('❌ API Key is missing. Please set it using auth.key("...") first.');
            return;
        }

        console.clear();
        console.log('🚀 Validating API Key and IP...');

        try {
            const ip = await getPublicIP();
            console.log(`🌐 Your Public IP: ${ip}`);

            const ipRes = await axios.get(`https://apikey-mu.vercel.app/active?ip=${ip}`);
            if (ipRes.data?.active === false) {
                console.clear();
                console.log(`⛔ Access blocked. Your IP is not allowed.`);
                return;
            }

            const keyRes = await axios.get(`https://apikey-mu.vercel.app/active?apikey=${apiKey}`);
            const { active, reason } = keyRes.data;

            if (!active) {
                console.clear();
                console.log(`❌ API Key rejected. Reason: ${reason || 'Unknown reason.'}`);
                return;
            }

            console.clear();
            console.log('✅ Validation passed. Access granted.');
            await new Promise(resolve => setTimeout(resolve, 1500));
            console.clear();
            await connectFunction();

        } catch (err) {
            console.clear();
            console.error('⚠️ Validation failed:', err.message);
        }
    }
};

async function getPublicIP() {
    try {
        const res = await axios.get('https://api.ipify.org?format=json');
        return res.data.ip;
    } catch {
        return '0.0.0.0';
    }
}

module.exports = auth;
