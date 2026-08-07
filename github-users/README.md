# Assignment - GitHub Users Search

## Overview

Pada assignment ini, Anda diminta untuk membangun sebuah aplikasi web menggunakan **React** dan **TypeScript** yang terintegrasi dengan **GitHub REST API**.

Aplikasi harus memungkinkan pengguna untuk mencari akun GitHub berdasarkan username, kemudian menampilkan daftar repository milik pengguna yang dipilih.

Assignment ini bertujuan untuk menguji kemampuan dalam membangun aplikasi React modern dengan struktur kode yang rapi, pemanfaatan REST API, routing, serta penanganan asynchronous data.

---

# Learning Objectives

Setelah menyelesaikan assignment ini, peserta diharapkan mampu:

- Membangun aplikasi menggunakan React dan TypeScript.
- Mengonsumsi REST API menggunakan Axios atau Fetch API.
- Mengimplementasikan React Router untuk navigasi antar halaman.
- Mengelola state aplikasi secara efektif.
- Menampilkan data hasil request API.
- Menangani loading, empty state, dan error state.
- Menulis kode yang bersih, terstruktur, dan mudah dipelihara.

---

# Tech Stack

Gunakan teknologi berikut:

- React
- TypeScript
- React Router DOM
- Axios _(atau Fetch API)_

Library tambahan diperbolehkan selama tidak mengubah tujuan utama assignment.

---

# GitHub REST API

Gunakan endpoint berikut.

## Search Users

```http
GET https://api.github.com/search/users?q={username}
```

Contoh:

```http
GET https://api.github.com/search/users?q=octocat
```

---

## User Repositories

```http
GET https://api.github.com/users/{username}/repos
```

Contoh:

```http
GET https://api.github.com/users/octocat/repos
```

---

# Functional Requirements

## 1. Search GitHub Users

Buat halaman utama yang memungkinkan pengguna mencari akun GitHub.

### Acceptance Criteria

- Tersedia input pencarian username.
- Tersedia tombol **Search**.
- Saat pencarian berhasil, tampilkan daftar user.
- Setiap user minimal menampilkan:
  - Avatar
  - Username
  - Tombol atau link untuk melihat repository.

---

## 2. Repository List

Ketika salah satu user dipilih, aplikasi harus menampilkan halaman repository milik user tersebut.

### Acceptance Criteria

Setiap repository minimal menampilkan:

- Repository Name
- Description
- Repository URL

---

## 3. Loading State

Saat aplikasi sedang mengambil data dari API, tampilkan indikator loading.

Contoh:

- Loading Spinner
- Skeleton Loader

---

## 4. Empty State

Apabila data tidak ditemukan, tampilkan pesan yang informatif kepada pengguna.

Contoh:

> No users found.

atau

> No repositories available.

---

## 5. Error Handling

Tangani seluruh kemungkinan request gagal.

Contoh:

- Network Error
- GitHub API Error
- Invalid Username

Tampilkan pesan yang mudah dipahami pengguna.

---

# Non-Functional Requirements

Project harus memenuhi ketentuan berikut.

- Menggunakan Functional Component.
- Menggunakan TypeScript.
- Menggunakan React Router.
- Memiliki struktur folder yang rapi.
- Memisahkan component sesuai tanggung jawabnya.
- Tidak menuliskan seluruh kode dalam satu file.
- Tidak menggunakan data dummy.

---

# Suggested Folder Structure

Struktur berikut hanya sebagai referensi.

```text
src
│
├── components
├── pages
├── hooks
├── services
├── layouts
├── routes
├── types
├── assets
├── utils
└── App.tsx
```

Peserta diperbolehkan menggunakan struktur lain yang lebih baik.

---

# Bonus Features

Nilai tambahan akan diberikan apabila peserta mengimplementasikan salah satu atau beberapa fitur berikut.

- Debounce Search
- Pagination
- Responsive Design
- Dark Mode
- Skeleton Loading
- Custom Hook
- Service Layer
- Environment Variable
- Reusable Components
- TypeScript Interface yang lengkap

---

# Submission Requirements

Project harus dikumpulkan dalam bentuk repository GitHub.

Repository wajib berisi:

- Source Code
- README.md
- Cara menjalankan project

Pastikan project dapat dijalankan menggunakan perintah berikut.

```bash
npm install
npm run dev
```

---

# Evaluation Criteria

| Criteria                   | Weight |
| -------------------------- | -----: |
| Functional Requirements    |    40% |
| Code Quality & Readability |    20% |
| React & TypeScript         |    15% |
| Component Architecture     |    10% |
| Error & Loading Handling   |    10% |
| User Interface             |     5% |

---

# Notes

- Fokus utama penilaian adalah **fungsionalitas**, **struktur kode**, dan **best practice React**.
- Peserta diperbolehkan menggunakan library tambahan apabila dapat memberikan nilai tambah terhadap aplikasi.
- Pastikan kode mudah dibaca dan mudah dipelihara.
- Commit secara berkala dengan pesan commit yang jelas dan deskriptif.

---

# Expected Output

Aplikasi minimal memiliki alur berikut.

```text
Search User
      │
      ▼
List of Users
      │
      ▼
Select User
      │
      ▼
Repository List
```

Selamat mengerjakan dan semoga sukses!
