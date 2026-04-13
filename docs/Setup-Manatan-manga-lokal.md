---
title: Manga Lokal
description: Struktur folder manga lokal yang didukung untuk Manatan.
---

# Manga Lokal

Manatan dapat membaca manga yang tersimpan secara lokal di perangkat.

## Atur folder manga lokal

1. Buka **Settings** > **Browse**.
2. Atur **Local Manga source location** menuju folder penyimpanan manga lokalmu.
3. Buka **Browse** > **Source** > **Local source**.
4. Pilih serial yang ingin dibaca.

Jika Kamu menambahkan bab baru di kemudian hari, segarkan daftar bab.

---
## Struktur folder yang didukung

Di dalam folder manga lokal Kamu:

- satu folder untuk setiap serial
- setiap bab berupa folder berisi gambar atau satu file arsip

### Folder bab (direkomendasikan)

```text
📁 [Folder Manga lokal]
├─ 📁 Judul Serial
│   ├─ 🖼️ cover.jpg
│   ├─ 📁 001
│   │   ├─ 🖼️ 001.jpg
│   │   └─ 🖼️ 002.jpg
│   └─ 📁 002
│       ├─ 🖼️ 001.jpg
│       └─ 🖼️ 002.jpg
```

### Bab dalam bentuk arsip
```text
📁 [Folder Manga lokal]
├─ 📁 Judul Serial
│   ├─ 📦 001.cbz
│   └─ 📦 002.cbz
```

Format bab yang didukung mencakup folder gambar dan file arsip seperti .zip/.cbz dan .rar/.cbr.

---
## Masalah Umum

#### Masalah 1: Serial saya tidak muncul

???+ note question "Serial saya tidak muncul"

    1. Pastikan jalur (path) folder sudah benar.
    2. Pastikan folder/file bab berada di dalam folder seri.
    3. Segarkan daftar.

#### Masalah 2: Bab berada dalam urutan yang salah

???+ note question "Bab berada dalam urutan yang salah"

    Gunakan penamaan dengan awalan nol seperti `001`, `002`, `010`.

#### Masalah 2: Galeri Android menampilkan gambar manga

???+ note question "Galeri Android menampilkan gambar manga>"

    Buat file kosong bernama `.nomedia` di dalam folder lokal.
	