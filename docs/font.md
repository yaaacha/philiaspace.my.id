# Apakah kamu sudah pakai font yang benar?

---

Diunggah: 10 Agustus 2025 · Diperbarui: 6 November 2026 – `Yaaacha`

---

??? warning "Perhatian <small>(klik di sini)</small>"
    - Panduan ini adaptasi dan lokalisasi dari [TheMoeWay](https://learnjapanese.moe/font/), dengan referensi dan sumber belajar yang diganti ke versi bahasa Indonesia.
    - Kalau kamu nyaman baca panduan bahasa Inggris, versi aslinya ada di tautan itu.

![Chinese vs Japanese font](img/font1.png)

Komputer dan HP biasanya menampilkan kanji dengan font China. Bentuk kanji Jepang sedikit berbeda. Kalau matamu terbiasa dengan bentuk versi China, kamu bisa salah ingat bentuk kanji yang benar, apalagi saat menulis.

---

## Cek Font Kamu

Kanji yang paling kelihatan bedanya adalah [直](https://jisho.org/search/%E7%9B%B4%20%23kanji), yang dipakai di kata [直す](https://jpdb.io/search?q=%E7%9B%B4%E3%81%99) (*naosu*, memperbaiki).

<div style="display: flex; gap: 20px;">
  <figure style="text-align: center;">
    <img src="../img/font2.png" width="300" />
    <figcaption>Naosu di font China (DengXian)</figcaption>
  </figure>

  <figure style="text-align: center;">
    <img src="../img/font3.png" width="300" />
    <figcaption>Naosu di font Jepang (IPAex Gothic)</figcaption>
  </figure>
</div>

Lihat 直 di kalimat sebelumnya. Kalau bentuknya seperti gambar kanan, kamu sudah pakai font Jepang dan halaman ini bisa dilewati. Kalau seperti gambar kiri, ikuti langkah sesuai perangkatmu di bawah.

---

## Windows

Pilih salah satu cara.

=== "Cara 1: Pasang font Jepang (disarankan)"

    1. Tekan ++win+i++ untuk membuka `Settings`
    2. Buka `System` > `Optional features`
    3. Klik `View features` (di samping `Add an optional feature`)
    4. Ketik `Japanese` di kolom pencarian
    5. Centang `Japanese supplemental fonts`, lalu klik `Next` > `Install`

    Di Windows 10, jalurnya `System` > `Optional features` > `Add a feature`, lalu cari `Japanese supplemental fonts` dan klik `Install`.

    ??? tip "Cara lanjutan: PowerShell"
        Font Jepang juga bisa dipasang lewat `Windows PowerShell (Administrator)`. Tidak perlu restart.

        ```powershell
        Add-WindowsCapability -Online -Name Language.Fonts.Jpan~~~und-JPAN~0.0.1.0
        ```

    Setelah fontnya terpasang, atur font di browser berbasis Chromium (Chrome, Edge, Brave, dan sejenisnya):

    1. Buka menu :material-dots-vertical: > `Settings` > `Appearance` (di Brave namanya `Content`) > `Customize fonts`
    2. Atur fontnya seperti ini:
        - `Standard font`: `Meiryo UI`
        - `Serif font`: `Yu Mincho`
        - `Sans-serif font`: `Meiryo`
        - `Fixed-width font`: `MS Gothic`

    Di Firefox, pengaturan ini biasanya sudah otomatis.

=== "Cara 2: Jadikan bahasa Jepang bahasa tampilan"

    Cara ini paling pasti membuat kanji tampil versi Jepang, tapi **seluruh tampilan Windows ikut berubah jadi bahasa Jepang**. Pakai hanya kalau kamu memang mau.

    1. Buka `Settings` > `Time & language` > `Language & region`
    2. Klik `Add a language`, cari `Japanese`, pilih, lalu klik `Next`
    3. Centang `Set as my Windows display language`. Pastikan `Language pack` dan `Basic typing` juga tercentang
    4. Klik `Install`
    5. Setelah unduhan selesai, Windows akan meminta kamu `Sign out` untuk menerapkan bahasa barunya

??? question "Sudah pasang font Jepang, tapi kanji masih versi China?"
    Biasanya karena `Chinese supplemental fonts` juga terpasang. Ubah locale sistem ke Jepang:

    1. Tekan ++win+r++ untuk membuka kotak `Run`
    2. Ketik `intl.cpl`, lalu tekan ++enter++
    3. Buka tab `Administrative`, lalu klik `Change system locale...`
    4. Pilih `Japanese (Japan)`, lalu klik `OK`

---

## macOS

Tambahkan bahasa Jepang sebagai bahasa pilihan:

1. Buka menu Apple > `System Settings` > `General` > `Language & Region`
2. Di `Preferred Languages`, klik `+`, lalu pilih `Japanese 日本語`

Bahasa tampilan Mac tidak berubah selama bahasa Jepang tidak kamu taruh di urutan teratas.

---

## Linux

1. Pastikan `ja_JP.UTF-8` ada di daftar locale sistemmu. Kalau belum ada, hapus tanda `#` di baris `#ja_JP.UTF-8 UTF-8` dalam file `/etc/locale.gen`, lalu jalankan:

    ```bash
    sudo locale-gen
    ```

2. Pasang paket [noto-fonts-cjk](https://archlinux.org/packages/extra/any/noto-fonts-cjk/). Di Arch, paket ini dari repositori resmi dan biasanya langsung mengatur aturan fontconfig yang diperlukan

Kalau distro, font, atau cara pasangmu berbeda, fontconfig belum tentu sudah benar. Cara paling aman: buat file aturan fontconfig khusus teks Jepang di folder `~/.config/fontconfig/conf.d` (buat foldernya kalau belum ada). Pakai [bagian ini](https://wiki.archlinux.org/title/Font_configuration/Examples#Japanese) dari Arch Wiki atau [contoh file dari tatsumoto-ren](https://github.com/tatsumoto-ren/dotfiles/blob/main/.config/fontconfig/conf.d/99-japanese-fonts.conf) sebagai acuan.

---

## Kalau Font China Masih Muncul di Browser

### Chromium (Chrome, Edge, Brave)

Kadang font China tetap muncul walaupun pengaturan sistem sudah benar. Paksa fontnya:

1. Buka menu :material-dots-vertical: > `Settings` > `Appearance` > `Customize fonts`
2. Atur fontnya seperti ini:
    - `Standard font`: `Noto Sans CJK JP Regular`
    - `Serif font`: `Noto Serif CJK JP Regular`
    - `Sans-serif font`: `Noto Sans CJK JP Regular`

Di Windows yang tidak punya font Noto, pakai pengaturan Meiryo dari [Cara 1](#windows).

### Firefox

Firefox memakai font China sebagai cadangan kalau bahasa Jepang tidak ada di pengaturan bahasanya, atau kalau halaman web tidak menandai teksnya sebagai bahasa Jepang (`lang="ja"`). Untuk mengubahnya:

1. Buka `about:config` di tab baru
2. Lewati halaman peringatan kalau muncul
3. Cari `font.cjk_pref_fallback_order`
4. Pindahkan `ja` ke posisi paling depan

!!! warning "Jangan hapus komanya"
    Koma memisahkan tiap kode bahasa, jadi jangan sampai ikut terhapus.

=== "Sebelum"
    ![Firefox settings 1](img/font10.png)
=== "Sesudah"
    ![Firefox settings 2](img/font11.png)

---

## Android

Tambahkan bahasa Jepang (tertulis 日本語) sebagai bahasa kedua di pengaturan bahasa HP. Bahasa tampilan HP tidak berubah selama bahasa Jepang tidak kamu geser ke urutan teratas.

![Android settings](img/font9.jpg)

---

## iOS

Tambahkan keyboard Jepang, kana atau romaji, pilih yang nyaman untukmu. Biasanya ini sudah cukup.

---

## Anki

Font China paling terasa mengganggu di kartu Anki. Kana tampil sans-serif sementara kanjinya serif, ukurannya tidak seimbang, **dan** bentuk kanjinya versi China.

<figure>
  <img src="../img/font4.png" width="900" />
  <figcaption>Sayangnya, banyak kartu orang yang tampilannya seperti ini.</figcaption>
</figure>

Kalau font Jepang sudah terpasang di sistem, Anki seharusnya otomatis memakainya. Kalau tidak, paksa dengan salah satu cara di bawah. Font yang disarankan adalah IPAex Gothic, font sans-serif Jepang yang rapi. [Unduh di sini](https://moji.or.jp/wp-content/ipafont/IPAexfont/ipaexg00401.zip).

=== "Pasang font di sistem"

    1. Pasang fontnya, lalu restart komputer:
        - Windows: klik dua kali file fontnya, lalu klik `Install`
        - macOS: seret file fontnya ke Font Book
        - Linux: pindahkan file ke `~/.local/share/fonts/`, lalu jalankan `fc-cache -f -v`
    2. Di Anki, buka `Add` > `Cards` > `Styling`
    3. Atur `font-family` di bagian `.card`:

        ```css
        .card {
          font-family: IPAexGothic; /* font yang dipakai kartu */
        }
        ```

=== "Taruh font di collection.media"

    Cara ini juga jalan di AnkiDroid, karena fontnya ikut tersinkron bersama kartu.

    1. Ganti nama file font supaya diawali garis bawah, misalnya `_ipaexg.ttf`. Tanpa garis bawah, `Check Media` di Anki menganggap file ini tidak terpakai dan bisa menghapusnya
    2. Salin file font itu ke folder `collection.media`:
        - Windows: `C:\Users\<user>\AppData\Roaming\Anki2\(profile)\collection.media`
        - macOS: `~/Library/Application Support/Anki2/(profile)/collection.media`
        - Linux: `~/.local/share/Anki2/(profile)/collection.media`
        - Android: `/storage/emulated/0/AnkiDroid/collection.media`
    3. Di Anki, buka `Add` > `Cards` > `Styling`
    4. Tambahkan kode ini

        ```css
        @font-face {
          font-family: CustomFont; /* nama font, bebas */
          src: url('_ipaexg.ttf'); /* nama file font di collection.media */
        }

        .card {
          font-family: CustomFont; /* pakai nama font di atas */
        }
        ```

    !!! warning "Jangan salin mentah-mentah"
        Kalau styling kartumu sudah punya `.card`, cukup tambahkan baris yang belum ada. Jangan timpa seluruh isinya.

Hasilnya:

=== "Definisi bahasa Jepang"
    ![Kartu dengan definisi bahasa Jepang](img/font5.png)
=== "Definisi bilingual"
    ![Kartu dengan definisi bilingual](img/font6.png)

Ganti juga font editor Anki supaya kanji tampil benar saat kamu mengedit kartu:

1. Buka `Add` > `Fields`
2. Di setiap field, ganti `Editing font` ke salah satu font Jepang ini:
    - IPAexGothic
    - Meiryo
    - MS Gothic
    - Yu Gothic
    - Hiragino Kaku Gothic Pro
    - Noto Sans CJK JP Regular

---

## Yomitan

Yomitan seharusnya mengikuti font browser. Kalau ternyata tidak, paksa lewat `Popup CSS` di pengaturan Yomitan:

```css
.kanji-link,
.source-text,
.gloss-content,
.tag-label-content {
  font-family: IPAexGothic;
}
```

<figure>
  <img src="../img/font7.png" width="900" />
  <figcaption>Definisi Jepang-Jepang dengan font IPAex Gothic.</figcaption>
</figure>
