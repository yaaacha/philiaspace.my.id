---
title: Anime Lokal
description: Struktur folder anime lokal yang didukung untuk Manatan.
---

# Manatan Anime Lokal

Manatan dapat memutar anime yang tersimpan secara lokal di perangkat.

## Atur folder anime lokal

1. Buka **Settings** > **Browse**.
2. Atur **Local anime source location** menuju folder penyimpanan anime lokalmu.
3. Buka sumber anime Lokal (biasanya berada di paling bawah jika tidak dipin) dan pilih judul serial.

Jika kamu menambahkan episode di kemudian hari, segarkan daftar episode.

---
## Struktur folder yang didukung

### Format folder tunggal

Kamu dapat menggunakan satu folder per seri, dengan file video langsung di dalamnya.

```text
📁 [Folder anime lokal]
├─ 📁 Judul Anime
│   ├─ 🖼️ cover.jpg
│   ├─ 🎥 ep01.mp4
│   └─ 🎥 ep02.mkv
```

### Format multi-musim
Manatan juga mendukung pustaka dengan folder musiman.

```text
📁 [Folder anime lokal]
├─ 📁 Judul Anime
│   ├─ 📁 Season 1
│   │   ├─ 🖼️ cover.jpg
│   │   ├─ 🎥 ep01.mp4
│   │   └─ 🎥 ep02.mkv
│   └─ 📁 Season 2
│       ├─ 🖼️ cover.jpg
│       ├─ 🎥 ep01.mp4
│       └─ 🎥 ep02.mkv
```

Format umum yang digunakan adalah .mp4 dan .mkv.

---

## Info Tambahan dan Tips

#### Info 1: Pengurutan yang stabil

???+ note info "Pengurutan yang stabil <small>(klik di sini)</small>"

    Gunakan penamaan seperti ep01, ep02, ep10.

#### Info 2: Gambar sampul khusus

???+ note info "Gambar sampul khusus <small>(klik di sini)</small>"

    Tambahkan file cover.jpg di dalam folder serial

#### Info 2: Pembersihan galeri Android

???+ note info "Pembersihan galeri Android <small>(klik di sini)</small>"

    Buat file kosong bernama .nomedia untuk menyembunyikan video/sampul dari aplikasi galeri
	
