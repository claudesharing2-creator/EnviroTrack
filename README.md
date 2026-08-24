# EnviroTrack Indonesia

**EnviroTrack** adalah aplikasi web static untuk membantu menyusun penapisan awal kegiatan lingkungan, konteks lokasi, dokumen, checklist, dan pekerjaan lanjutan secara lebih terarah.

> **Status proyek:** `PUBLIC BETA`. EnviroTrack adalah alat bantu acuan, bukan aplikasi resmi pemerintah, bukan penerbit keputusan lingkungan, dan bukan pengganti tenaga ahli, OSS, AMDALNet, atau instansi yang berwenang.

**Website live:** https://claudesharing2-creator.github.io/EnviroTrack/

**Pembuat:** Rizky Bakti Caturraga

## Ringkasan singkat

EnviroTrack membantu pengguna memulai dari konteks kegiatan, bukan langsung menebak dokumen atau keputusan. Pengguna memasukkan profil kegiatan, KBLI, kapasitas, proses, sumber dampak, kandidat B3/LB3, dan lokasi. Aplikasi kemudian menyusun rekomendasi acuan, tugas, dokumen, konteks regulasi, serta hal-hal yang masih perlu diverifikasi.

Aplikasi ini menggunakan pendekatan **local-first**. Data proyek disimpan di browser pengguna, sedangkan dokumen dapat disimpan sebagai metadata lokal melalui IndexedDB atau, jika didukung perangkat, disalin ke folder lokal yang dipilih pengguna. Tidak ada akun atau backend aplikasi yang diperlukan untuk alur utama.

## Tujuan produk

EnviroTrack dibuat untuk membantu pengguna menjawab empat pertanyaan kerja:

1. **Data apa yang perlu dikumpulkan?**
2. **Sumber dampak apa yang perlu diperiksa?**
3. **Dokumen dan bukti apa yang perlu disiapkan?**
4. **Pekerjaan apa yang perlu dilakukan berikutnya?**

Produk ini tidak mencoba menggantikan proses resmi. Nilainya berada pada penyusunan konteks, penelusuran alasan, pengelolaan pekerjaan, dan kesiapan sebelum pengguna melakukan verifikasi atau pengajuan melalui jalur yang berwenang.

## Alur pengguna utama

Alur utama EnviroTrack terdiri dari lima langkah:

| Langkah | Nama | Fungsi |
|---|---|---|
| 1 | **Profil** | Memasukkan KBLI, nama kegiatan, kapasitas, tahap kegiatan, status usaha, proses yang benar-benar dilakukan, dan pertanyaan penentu. |
| 2 | **Dampak** | Memilih atau meninjau sumber dampak seperti air, emisi, limbah, energi, transportasi, bangunan, dan dampak lain yang relevan. |
| 3 | **Lokasi** | Memasukkan konteks administrasi, mengimpor polygon GeoJSON/KML, memeriksa geometri, dan meninjau layer peta. |
| 4 | **Hasil** | Melihat Kesimpulan Acuan, arah dokumen yang disarankan, regulasi terpicu, pekerjaan verifikasi, dan register hasil resmi bila pengguna memiliki bukti resmi. |
| 5 | **Tracker** | Mengubah kebutuhan menjadi tugas, bukti, status, checklist, dan agenda pekerjaan. |

Pengguna juga dapat membuka menu lain melalui workspace:

| Menu | Fungsi |
|---|---|
| **Beranda** | Overview singkat workspace, ringkasan status, dan jalur kembali ke landing page. |
| **Penapisan baru** | Membuat workspace/proyek baru dengan formulir kosong. Tidak membawa data proyek sebelumnya. |
| **Studio AMDAL** | Mode latihan lokal untuk memahami lima fase proses, bukan sistem resmi. |
| **Proyek saya** | Meninjau proyek atau workspace lokal yang tersimpan. |
| **Checklist tugas** | Meninjau pekerjaan, status, pemilik, bukti, dan tenggat. |
| **Dokumen** | Mengatur metadata dokumen, file lokal, ekspor state, ekspor ZIP, dan penghapusan state browser. |
| **Kalender** | Menyusun agenda tindak lanjut dari tugas dan kewajiban yang terpicu. |
| **Basis regulasi** | Meninjau katalog regulasi umum dan aturan yang terpicu oleh konteks proyek. |

## Fitur utama

### 1. Landing page dan entry gate

Landing page menjelaskan tujuan EnviroTrack, alur kerja, cakupan, status Public Beta, dan batasan penggunaan. Pengguna tidak langsung dilempar ke formulir; mereka dapat memilih cara masuk melalui entry gate:

- **Lanjutkan workspace terakhir**.
- **Mulai penapisan baru** dengan formulir kosong.
- **Load save file** dari file state JSON.
- **Load workspace ZIP** yang berisi state dan file bundle.
- **Buka workspace kosong** untuk masuk ke overview tanpa memilih proyek.

Entry gate menjaga agar proyek lokal tidak diubah sampai pengguna memilih tindakan secara sadar.

### 2. Pencarian KBLI local-first

Pencarian KBLI menggunakan katalog lokal `assets/kbli-2025-catalog.js` yang dimuat ke global `window.ENVIRO_KBLI_2025` sebagai sumber awal. Pencarian lokal tidak mengirim query ke OSS.

Pencarian resmi OSS hanya dilakukan melalui tindakan eksplisit pengguna setelah hasil lokal tidak tersedia atau pengguna memilih jalur resmi. Aplikasi menampilkan sumber hasil secara jelas sehingga hasil katalog lokal dan hasil OSS tidak tercampur.

Selain pencarian, pengguna dapat memasukkan kode KBLI final lima digit secara manual. Input manual diberi catatan bahwa uraian kegiatan tetap perlu diverifikasi melalui sumber resmi.

### 3. Korelasi kegiatan dan proses

Setelah KBLI dipilih, aplikasi menampilkan korelasi kegiatan dan proses yang relevan. Pengguna tetap harus memilih proses yang benar-benar dilakukan; korelasi tidak dimaksudkan untuk menganggap semua proses otomatis terjadi.

Pemilihan proses dapat memicu sumber dampak, kandidat B3/LB3, tugas, dokumen, atau pertanyaan tambahan. Fungsi pemicu utama di source aktif meliputi:

- `setKbli`
- `addTriggeredImpacts`
- `addWasteCodes`
- `removeImpacts`
- `removeWasteCodes`
- `applyAnswerTriggers`

Jangan menghapus helper tersebut karena mereka menjaga korelasi KBLI, proses, dampak, dan kandidat limbah tetap berjalan.

### 4. Sumber dampak dan B3/LB3

Aplikasi menyediakan pilihan sumber dampak yang lebih spesifik terhadap konteks kegiatan, termasuk air, emisi, limbah, bangunan/fasilitas, genset/utilitas, pemakaian air, air limbah domestik, bahan kimia pembersih, sampah/limbah, dan mobilitas/parkir.

Katalog `assets/b3-lb3-master-2026.js` berisi kandidat B3/LB3 yang berasal dari master lokal. Kode atau kandidat yang ditampilkan bukan penetapan hukum otomatis dan tetap perlu dicocokkan dengan karakteristik bahan, proses, dokumen keselamatan, dan regulasi yang berlaku.

### 5. Lokasi, polygon, dan GIS

Fitur lokasi menggunakan Leaflet dan peta dasar OpenStreetMap. Pengguna dapat:

- meninjau konteks provinsi dan kabupaten/kota;
- memasukkan atau mengimpor polygon GeoJSON/KML;
- memeriksa geometri polygon, termasuk geometri yang tidak valid atau self-intersection;
- melihat konteks administrasi;
- menampilkan rekomendasi verifikasi lokasi;
- meninjau katalog layer tata ruang dan kawasan sensitif;
- mengatur visibilitas dan opacity layer;
- menggunakan GetFeatureInfo pada titik atau bounding box jika tersedia.

Polygon lokal dapat digunakan untuk membantu pengguna meninjau tapak, tetapi tidak otomatis membuktikan status tata ruang, kawasan sensitif, atau persetujuan. Flag lokasi harus dibaca sebagai **pernyataan pengguna atau pemicu verifikasi**, bukan hasil overlay resmi.

### 6. Katalog layer resmi dan WMS

Katalog layer membedakan antara layanan yang sudah dikonfirmasi dan endpoint yang masih pending. Preset **Semua layer terverifikasi** hanya mengaktifkan service yang memiliki endpoint dan nama layer yang telah dikonfirmasi.

Layer pending tidak dikirim atau diminta secara otomatis. Layer WMS yang aktif dipakai sebagai visualisasi peta. WMS tidak menyediakan geometri vektor yang diperlukan aplikasi untuk menghitung irisan polygon secara andal.

Karena itu, EnviroTrack tidak mengklaim bahwa sebuah polygon beririsan dengan kawasan resmi hanya berdasarkan tampilan WMS. Analisis irisan resmi membutuhkan sumber vektor seperti WFS, vector tile yang sesuai, atau data geospasial yang dapat digunakan secara legal dan teknis.

### 7. Kesimpulan Acuan

Kesimpulan Acuan menyajikan hasil indikatif berdasarkan data yang dimasukkan pengguna. Bagian ini dirancang agar pengguna dapat melihat:

- arah dokumen yang disarankan;
- alasan suatu dokumen atau pekerjaan terpicu;
- sumber dampak yang perlu diperhatikan;
- regulasi yang menjadi konteks;
- bukti dan verifikasi yang perlu disiapkan;
- pekerjaan lanjutan yang dapat dimasukkan ke tracker.

Istilah **acuan**, **indikatif**, **kandidat**, dan **perlu diverifikasi** sengaja dipertahankan agar aplikasi tidak menyamakan hasil heuristic dengan keputusan instansi.

### 8. Guard hasil resmi

Register hasil resmi dipisahkan dari Kesimpulan Acuan. Memilih jenis dokumen seperti AMDAL saja tidak cukup untuk membuat aplikasi menyatakan hasil resmi.

Sebuah record hanya boleh berstatus hasil resmi lengkap apabila informasi minimum berikut tersedia:

- jenis dokumen;
- status akhir, misalnya `Terbit / berlaku` atau `Ditolak / dihentikan`;
- nomor atau ID hasil, atau sumber resmi yang dapat ditelusuri;
- tanggal hasil;
- status kewenangan `Terkonfirmasi`;
- instansi;
- referensi atau sumber;
- tanggal kewenangan.

Sebelum lengkap, UI menggunakan label **Kandidat hasil · belum resmi**. Status internal seperti `self_declared`, `evidence_submitted`, dan `completed` tidak boleh diperlakukan sebagai keputusan instansi.

### 9. Studio AMDAL

Studio AMDAL adalah overlay pembelajaran lokal dengan lima fase:

1. Penapisan.
2. Tim.
3. Dokumen.
4. Pemeriksaan.
5. Keputusan.

Studio menggunakan konteks proyek EnviroTrack untuk membantu pengguna memahami hubungan antara data kegiatan, kesiapan tim, dokumen, checkpoint pemeriksaan, dan keputusan yang perlu dikonfirmasi.

Studio tidak:

- mengirim data ke AMDALNet;
- mengirim data ke OSS;
- melakukan submission;
- menyediakan editor resmi AMDALNet;
- mereplikasi alur reviewer atau pemeriksaan lintas-peran;
- menghasilkan keputusan resmi.

### 10. Dokumen dan penyimpanan local-first

Menu Dokumen membantu pengguna mengorganisasi file dan metadata secara lokal.

| Data | Media penyimpanan | Catatan |
|---|---|---|
| State proyek | `localStorage` dengan key `envirotrack-state-v2` | Berisi progress, profil, dampak, lokasi, tugas, dan preferensi proyek. |
| Dokumen dan metadata file | IndexedDB browser | Tetap berada pada browser/perangkat yang digunakan. |
| Folder perangkat | File System Access API jika didukung | Pengguna memilih directory; file dapat disalin ke folder yang dipilih. |
| Preferensi onboarding | `localStorage` dengan key terpisah `envirotrack-onboarding-v1` | Tidak dicampur dengan save file proyek. |

Fitur **Hapus data aplikasi** menghapus state browser EnviroTrack dan database IndexedDB. Fitur tersebut tidak menghapus file yang sebelumnya sudah disalin ke folder perangkat karena browser tidak memiliki kewenangan untuk menghapus folder eksternal secara umum.

### 11. Ekspor dan impor

Aplikasi menyediakan dua pola portabilitas:

- **Save file/state JSON:** menyimpan state proyek dan progress tanpa semua file dokumen.
- **Workspace ZIP:** menyimpan state bersama bundle dokumen dan README agar dapat dipindahkan secara manual.

Ekspor bukan sinkronisasi cloud. Jika pengguna membuka aplikasi pada browser atau perangkat lain, state hanya muncul setelah pengguna melakukan load file atau ZIP secara manual.

### 12. Checklist tugas dan kalender

Kewajiban dan pekerjaan yang terpicu dapat menjadi checklist. Item dapat memuat status, prioritas, pemilik, tenggat, bukti, referensi, dan alasan pemicu.

Kalender menyusun agenda dari pekerjaan yang tersedia. Kalender bukan layanan sinkronisasi eksternal; integrasinya bersifat internal terhadap state workspace. Pengguna tetap bertanggung jawab memeriksa tanggal, kewajiban, dan sumber resmi sebelum menjadikannya jadwal formal.

### 13. Basis regulasi

Menu Basis regulasi memiliki dua sudut pandang:

- **Katalog umum:** aturan yang tersedia sebagai referensi umum.
- **Terpicu proyek aktif:** aturan yang berkaitan dengan konteks proyek yang sedang dipilih.

Basis regulasi saat ini memuat konteks peraturan lingkungan dan kewenangan, termasuk antara lain PP 22/2021, PP 28/2025, Permen LHK 4/2021, Permen LHK 5/2021, Permen LHK 6/2021, Permen LH/BPLH 22/2025, Permen LH/BPLH 11/2025, dan Permen LH/BPLH 6/2026. Daftar ini merupakan katalog acuan aplikasi, bukan jaminan bahwa seluruh perubahan regulasi sudah tercakup.

Setiap keputusan operasional harus memeriksa versi regulasi terbaru dan sumber resmi. Referensi awal yang digunakan dalam audit proyek tercantum pada bagian [Referensi regulasi](#referensi-regulasi).

## Privacy dan keamanan

EnviroTrack dirancang dengan prinsip berikut:

1. Data proyek utama diproses secara lokal di browser.
2. Tidak ada login atau backend aplikasi untuk alur utama.
3. File lokal tidak otomatis diunggah ke server aplikasi.
4. Pencarian OSS hanya dilakukan setelah aksi eksplisit pengguna.
5. Studio AMDAL tidak mengirim data ke AMDALNet atau OSS.
6. Endpoint WMS yang belum dikonfirmasi tidak dipanggil otomatis.
7. File yang sudah disalin ke folder perangkat tidak dihapus oleh tombol hapus data browser.
8. Tidak boleh ada API key, token, credential, password, atau data pribadi di source frontend.

Aplikasi tetap memuat beberapa resource eksternal seperti font, library JavaScript, tile OpenStreetMap, layanan OSS ketika diminta secara eksplisit, dan layer WMS yang dikonfirmasi. Local-first berarti data proyek tidak memiliki backend aplikasi untuk sinkronisasi otomatis; local-first bukan berarti halaman sama sekali tidak pernah melakukan koneksi jaringan.

## Aksesibilitas dan responsive UI

UI saat ini mempertahankan beberapa prinsip berikut:

- skip link ke konten utama;
- label dan hint pada kontrol form;
- navigasi keyboard dan focus-visible;
- tombol dengan target sentuh yang memadai;
- layout desktop dan mobile;
- dukungan `prefers-reduced-motion`;
- transisi singkat untuk popup, navigasi, toast, dan onboarding;
- bottom navigation mobile yang memperhitungkan safe area;
- onboarding opsional yang dapat dilewati dan dibuka ulang;
- tidak ada horizontal overflow pada viewport mobile yang diuji.

Walkthrough onboarding muncul setelah pengguna masuk melalui alur normal dan membuat workspace baru. Tutorial dapat dilewati, diselesaikan, atau dibuka kembali dari tombol **Panduan**.

## Arsitektur teknis

EnviroTrack adalah aplikasi **vanilla HTML/CSS/JavaScript** tanpa build system frontend.

```text
index.html
├── landing page
├── entry gate
├── workspace shell
├── navigation dan view containers
└── script/style references

styles.css
├── design tokens dan layout
├── responsive breakpoints
├── motion dan reduced-motion
├── map, modal, form, tracker, dan onboarding styles
└── mobile safe-area rules

app-20260821-17.js
├── state default dan persistence
├── render view
├── event delegation
├── KBLI dan korelasi proses
├── dampak dan B3/LB3
├── lokasi, polygon, Leaflet, WMS
├── Kesimpulan Acuan dan guard hasil resmi
├── dokumen, IndexedDB, File System Access
├── export/import JSON dan ZIP
├── tracker dan kalender
├── Studio AMDAL lokal
└── onboarding walkthrough

assets/
├── kbli-2025-catalog.js
├── b3-lb3-master-2026.js
├── enviro-hero.jpg
├── enviro-water.jpg
├── enviro-field.jpg
└── landscape.svg
```

### File JavaScript historis

File `app.js` dan `app-20260821-7.js` sampai `app-20260821-16.js` merupakan snapshot atau versi historis dari proses pengembangan. **Source aktif saat ini adalah `app-20260821-17.js`** yang dimuat oleh `index.html`.

Jangan memperbaiki file historis dengan asumsi perubahan akan masuk ke aplikasi live. Jika fitur baru perlu ditambahkan, ubah source aktif dan naikkan cache-bust asset di `index.html`.

## Menjalankan secara lokal

Karena proyek ini static, tidak diperlukan instalasi dependency untuk menjalankan aplikasi dasar.

```bash
cd EnviroTrack
python3 -m http.server 4173
```

Kemudian buka:

```text
http://127.0.0.1:4173/
```

Jangan membuka file dengan `file://` jika ingin menguji resource, IndexedDB, fetch, peta, atau perilaku browser secara realistis. Gunakan HTTP server lokal.

Untuk pemeriksaan sintaks JavaScript:

```bash
node --check app-20260821-17.js
```

Untuk memeriksa whitespace dan konflik diff:

```bash
git diff --check
```

## Deployment

Deployment dilakukan oleh GitHub Actions pada `.github/workflows/pages.yml`.

Workflow berjalan ketika ada push ke branch `main` atau ketika dijalankan manual. Workflow menggunakan GitHub Pages artifact lalu melakukan deploy ke environment Pages.[1]

Alur deployment:

```text
push ke main
   ↓
GitHub Actions: Deploy GitHub Pages
   ↓
checkout repository
   ↓
upload seluruh static site sebagai Pages artifact
   ↓
deploy ke GitHub Pages
   ↓
verifikasi URL live
```

Sebelum push, pastikan:

1. source aktif sudah benar;
2. cache-bust CSS/JS dinaikkan bila diperlukan;
3. `node --check` lulus;
4. `git diff --check` lulus;
5. regression browser lulus;
6. screenshot desktop dan mobile ditinjau;
7. tidak ada validation artifact atau data pengguna di repository;
8. deployment Pages selesai sukses;
9. URL live diuji ulang setelah deployment.

## Panduan aman untuk AI atau kontributor berikutnya

AI atau kontributor yang melanjutkan proyek ini sebaiknya mengikuti urutan berikut:

### 1. Baca source aktif terlebih dahulu

Mulai dari:

- `README.md` ini;
- `index.html`;
- `styles.css`;
- `app-20260821-17.js`;
- `INTEGRATION_AUDIT.md`;
- `AUDIT-REDESIGN.md`.

Jangan menjadikan file `app-20260821-7.js` sampai `app-20260821-16.js` sebagai source utama.

### 2. Audit sebelum mengubah

Identifikasi view, state, handler, selector, dan copy yang terdampak. Pastikan perubahan baru tidak:

- menghilangkan helper korelasi KBLI/dampak/B3;
- mencampur state onboarding dengan save file proyek;
- membuat pencarian OSS berjalan otomatis;
- menghapus file folder perangkat saat clear browser data;
- membuat flag GIS terbaca sebagai overlay resmi;
- membuat kandidat hasil terbaca sebagai keputusan resmi;
- memanggil endpoint WMS pending;
- mengubah Studio AMDAL menjadi jalur submission;
- merusak export/import JSON/ZIP;
- menghilangkan akses keyboard atau responsive layout.

### 3. Implementasikan perubahan kecil

Aplikasi memakai HTML string renderer dan event delegation. Pertahankan pola tersebut apabila tidak ada alasan kuat untuk refactor besar. Gunakan `esc()` atau mekanisme escaping yang tersedia sebelum memasukkan data pengguna ke HTML.

Jika menambah state, tetapkan default yang backward-compatible. Jika mengubah struktur state, pertahankan migrasi atau fallback untuk save file lama bila memungkinkan.

### 4. Jalankan quality gate

Minimal jalankan:

```bash
node --check app-20260821-17.js
git diff --check
```

Kemudian jalankan browser regression desktop dan mobile. Uji minimal:

- landing dan entry gate;
- mulai penapisan baru;
- load/save state;
- KBLI lokal dan manual;
- korelasi dampak dan B3/LB3;
- polygon dan peta;
- hasil serta official result guard;
- Dokumen dan clear local data;
- Studio AMDAL;
- checklist dan kalender;
- onboarding;
- keyboard, focus, reduced motion, dan horizontal overflow.

### 5. Review visual dan privacy

Ambil screenshot desktop dan mobile. Periksa hierarchy, spacing, crop, overflow, target sentuh, keterbacaan modal, serta safe area. Baca ulang copy privacy, disclaimer, sumber resmi, dan status internal/official.

### 6. Publish dengan cache-bust

Jika asset aktif berubah, naikkan query version pada `index.html`, tunggu workflow Pages selesai, lalu buka URL live dengan query cache-check. Jangan menyimpulkan deployment sukses hanya berdasarkan server lokal.

## Testing dan artefak validasi

Test browser dan artefak audit disimpan di luar repository pada direktori validasi lokal, misalnya:

```text
/home/ubuntu/EnviroTrack-validation/
```

Artefak tersebut dapat berisi screenshot, log regression, test Playwright/Python, audit compliance, dan review visual. Artefak validasi tidak boleh ikut di-commit ke repository production apabila berisi data uji atau catatan internal.

Regression terakhir sebelum dokumentasi ini mencakup pengujian desktop/mobile untuk accessibility, Studio AMDAL, export checklist, compliance flow, official result guard, local KBLI, document download, E2E screening, KBLI/B3, lokasi, peta, motion, popup, onboarding, dan WMS.

## Riwayat perubahan utama

| Commit | Perubahan |
|---|---|
| `c703b9b` | Merge Studio AMDAL lokal ke `main`. |
| `2f5b515` | Menambahkan compliance guardrails dan kontrol privacy/local data. |
| `5b7a2b2` | Merge perbaikan compliance ke production. |
| `9297568` | Memperbaiki persistensi input KBLI manual dan cache-bust. |
| `a0009af` | Menambahkan optional onboarding walkthrough dan label Public Beta. |
| `d833b11` | Melindungi onboarding dan bottom navigation dari safe area mobile. |

## Batasan yang harus tetap dipertahankan

### Batasan regulasi

Recommendation engine menggunakan aturan dan heuristic internal. Ia tidak dapat menggantikan penilaian resmi, konsultasi, pemeriksaan dokumen, atau keputusan instansi.

Katalog regulasi dapat berubah dan belum tentu mencakup seluruh peraturan sektoral, daerah, teknis, atau perubahan terbaru. Setiap keluaran harus diverifikasi melalui sumber resmi.

### Batasan AMDALNet dan OSS

EnviroTrack tidak mengklaim terintegrasi sebagai client resmi AMDALNet atau OSS. Link atau pencarian resmi hanya menjadi jalur rujukan atau aksi eksplisit pengguna. Tidak ada submission otomatis.

### Batasan GIS

OSM dan WMS membantu orientasi serta visualisasi. Tampilan layer tidak sama dengan keputusan tata ruang, bukti status kawasan, atau hasil irisan polygon resmi. Endpoint pending tidak boleh dipanggil hanya karena ditemukan dari halaman publik.

### Batasan local-first

Local-first berarti state berada pada browser/perangkat pengguna dan tidak otomatis tersinkronisasi antarperangkat. Penghapusan data browser tidak menghapus file eksternal yang sebelumnya disalin ke folder perangkat.

### Batasan Public Beta

Fitur, copy, katalog, dan alur dapat berubah. Jangan gunakan EnviroTrack sebagai satu-satunya dasar untuk keputusan investasi, pengajuan, penandatanganan, atau tindakan hukum/administratif tanpa verifikasi yang sesuai.

## Kepemilikan dan penggunaan source

Repository ini belum memiliki file lisensi open-source. Jangan mengasumsikan bahwa source boleh disalin, dimodifikasi, diterbitkan ulang, atau digunakan secara komersial tanpa persetujuan pembuat.

Untuk pengembangan internal, pertahankan attribution berikut:

> EnviroTrack Indonesia — dibuat oleh Rizky Bakti Caturraga.

Jika proyek akan dikomersialkan, bekerja dengan kontributor eksternal, atau membuka sebagian source sebagai open source, tambahkan kebijakan lisensi dan kontribusi yang jelas sebelum distribusi.

## Referensi regulasi

Referensi berikut dipakai sebagai konteks audit dan katalog aplikasi. Referensi bukan pengganti pembacaan naskah resmi dan bukan jaminan bahwa seluruh ketentuan terbaru sudah tercakup.

- [PP Nomor 22 Tahun 2021 — Peraturan BPK][2]
- [PP Nomor 28 Tahun 2025 — Peraturan BPK][3]
- [Permen LHK Nomor 4 Tahun 2021 — peraturan.go.id][4]
- [Permen LHK Nomor 5 Tahun 2021 — peraturan.go.id][5]
- [Permen LHK Nomor 6 Tahun 2021 — peraturan.go.id][6]
- [Permen LH/BPLH Nomor 22 Tahun 2025 — peraturan.go.id][7]
- [Permen LH/BPLH Nomor 11 Tahun 2025 — peraturan.go.id][8]
- [Permen LH/BPLH Nomor 6 Tahun 2026 — peraturan.go.id][9]
- [Portal AMDALNet publik][10]
- [Portal OSS][11]
- [GitHub Pages documentation][1]

[1]: https://docs.github.com/en/pages "GitHub Pages documentation"
[2]: https://peraturan.bpk.go.id/Details/161852/pp-no-22-tahun-2021 "PP Nomor 22 Tahun 2021 — Peraturan BPK"
[3]: https://peraturan.bpk.go.id/Details/319773/pp-no-28-tahun-2025 "PP Nomor 28 Tahun 2025 — Peraturan BPK"
[4]: https://peraturan.go.id/id/permen-lhk-no-4-tahun-2021 "Permen LHK Nomor 4 Tahun 2021 — peraturan.go.id"
[5]: https://peraturan.go.id/id/permen-lhk-no-5-tahun-2021 "Permen LHK Nomor 5 Tahun 2021 — peraturan.go.id"
[6]: https://peraturan.go.id/id/permen-lhk-no-6-tahun-2021 "Permen LHK Nomor 6 Tahun 2021 — peraturan.go.id"
[7]: https://peraturan.go.id/id/permenklhbph-no-22-tahun-2025 "Permen LH/BPLH Nomor 22 Tahun 2025 — peraturan.go.id"
[8]: https://peraturan.go.id/id/permenklhbph-no-11-tahun-2025 "Permen LH/BPLH Nomor 11 Tahun 2025 — peraturan.go.id"
[9]: https://peraturan.go.id/id/permenklhbph-no-6-tahun-2026 "Permen LH/BPLH Nomor 6 Tahun 2026 — peraturan.go.id"
[10]: https://amdalnet.kemenlh.go.id/ "AMDALNet publik"
[11]: https://oss.go.id/id "OSS Republik Indonesia"

## Kontak pembuat

- LinkedIn: https://www.linkedin.com/in/rizkycaturraga/
- Instagram: https://www.instagram.com/rzkycaturraga/
