# auth-code-pablo

`auth-code-pablo` adalah library Node.js sederhana untuk autentikasi API Key dan menghubungkan ke WhatsApp secara otomatis setelah verifikasi berhasil.

## 📦 Instalasi

Instalasi paket melalui npm:

```bash
npm install auth-code-pablo
```

## 🛠️ Cara Penggunaan

### 1. Import Modul

```javascript
const auth = require('auth-code-pablo');
```

### 2. Mengatur API Key

Setel API Key Anda menggunakan metode `key()`:

```javascript
auth.key('YOUR_API_KEY');
```

### 3. Memulai Autentikasi dan Koneksi

Definisikan fungsi untuk menghubungkan ke WhatsApp dan mulai proses autentikasi:

```javascript
const connectToWhatsApp = () => {
    console.log('📱 Menghubungkan ke WhatsApp...');
    // Logika untuk menghubungkan ke WhatsApp
};

auth.start(connectToWhatsApp);
```

### Contoh Lengkap

```javascript
const auth = require('auth-code-pablo');

// Atur API Key Anda
auth.key('YOUR_API_KEY');

// Definisikan fungsi koneksi WhatsApp
const connectToWhatsApp = () => {
    console.log('📱 Menghubungkan ke WhatsApp...');
    // Logika koneksi WhatsApp Anda di sini
};

// Mulai proses autentikasi dan koneksi
auth.start(connectToWhatsApp);
```

## ⚙️ Metode

### `auth.key(apiKey)`

- **Deskripsi**: Mengatur API Key yang akan digunakan untuk autentikasi.
- **Parameter**:
  - `apiKey` (string): API Key Anda.

### `auth.start(callback)`

- **Deskripsi**: Memulai proses autentikasi. Jika API Key valid, akan menjalankan fungsi callback yang disediakan.
- **Parameter**:
  - `callback` (function): Fungsi yang akan dijalankan setelah autentikasi berhasil (misalnya, menghubungkan ke WhatsApp).

## 🔗 Tautan

- **Website Resmi**: [https://www.npmjs.com/package/auth-code-pablo](https://www.npmjs.com/package/auth-code-pablo)
- **Repository GitHub**: [https://github.com/PabloTzy/auth-code-pablo](https://github.com/PabloTzy/auth-code-pablo)

## 📄 Lisensi

Lisensi proyek ini menggunakan [MIT License](./LICENSE).

## 👤 Kontributor

- **Pablo** - *Developer Code* - [UsernameGitHub](https://github.com/PabloTzy)

Lihat daftar [kontributor](https://github.com/username/auth-code-pablo/graphs/contributors) untuk detail lebih lanjut.

## 📫 Cara Menghubungi

Jika Anda memiliki pertanyaan atau saran, silakan buka [isu](https://github.com/username/auth-code-pablo/issues) di repository ini atau hubungi saya di [pablobotz110@gmail.com@gmail.com](mailto: pablobotz110@gmail.com@gmail.com).
