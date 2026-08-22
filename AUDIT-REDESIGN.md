# Audit lanjutan dan redesign EnviroTrack

**Status:** selesai pada 23 Agustus 2026  
**Target:** desktop dan mobile  
**Stack:** vanilla HTML, CSS, dan JavaScript; tidak ada migrasi framework

## Temuan audit yang ditutup

Audit sebelumnya menunjukkan bahwa menu Basis regulasi mencampur dua konteks: katalog umum dan aturan yang terpicu proyek. Implementasi lama menampilkan copy tentang lokasi penapisan dan memiliki tombol “Relevan untuk proyek aktif”, sehingga pengguna dapat mengira halaman tersebut hanya valid setelah penapisan. Hal ini sudah diperbaiki.

Sekarang navigasi utama **Basis regulasi** selalu membuka **Katalog general**. Katalog tersebut dapat menelusuri regulasi nasional, sektoral, dan daerah tanpa membuka penapisan proyek. Mode **Terpicu proyek aktif** tetap tersedia sebagai filter sekunder untuk menampilkan aturan yang terkait KBLI, sumber dampak, dan lokasi proyek aktif. Filter wilayah juga diubah menjadi **Wilayah aturan**, dengan catatan yang jelas bahwa indeks daerah saat ini baru dipetakan untuk Kalimantan Timur, Kota Balikpapan, dan Kabupaten Kutai Kartanegara.

Regulasi yang diperiksa ulang dari sumber resmi mencakup PP 28 Tahun 2025, Permen LH/BPLH 22 Tahun 2025, Permen LH/BPLH 6 Tahun 2026, dan Permen LH/BPLH 11 Tahun 2025. PP 28 Tahun 2025 berstatus berlaku dan mencabut PP 5 Tahun 2021 menurut metadata Peraturan BPK.[1] Tiga peraturan menteri lainnya berstatus berlaku menurut basis data peraturan.go.id.[2][3][4]

## Arah redesign

UI lama terlalu menyerupai template AI dashboard: sidebar padat, banyak kartu seragam, shadow dekoratif, heading hero sangat besar, dan dua lapisan CSS yang saling override. Redesign mempertahankan struktur aplikasi dan fungsionalitas yang ada, tetapi mengubah permukaan visual menjadi **minimalis editorial untuk workbench kepatuhan**.

| Area | Perubahan |
|---|---|
| Warna | Satu accent hijau gelap, off-white netral, dan abu-abu bertona hijau. Gradient biru/ungu dan accent berlebihan dihilangkan. |
| Tipografi | Satoshi tetap dipakai; heading lebih terukur, sentence case, `text-wrap: balance`, dan body text dibatasi agar mudah dibaca. |
| Layout | Container, whitespace, dan grid dirapikan. Kartu tidak lagi bergantung pada shadow berat. |
| Desktop | Sidebar lebih tenang, topbar lebih ringan, hero editorial lebih pendek, dan daftar regulasi lebih scanable. |
| Mobile | Bottom navigation tetap dipertahankan tetapi diringkas, segmented control dan filter regulasi tersusun vertikal, serta target sentuh dibuat lebih jelas. |
| Aksesibilitas | Skip link ditambahkan, focus ring dipertahankan, reduced-motion rule diperkuat, dan teks tombol tetap eksplisit. |
| Motion | Motion tetap ringan melalui GSAP yang sudah ada; tidak ditambahkan efek cinematic yang mengganggu pekerjaan compliance. |

Skill desain yang diberikan mendorong AIDA, hero lebar, komponen kreatif, dan GSAP. Untuk aplikasi ini, elemen tersebut diterapkan secara selektif. Landing page tetap memiliki urutan perhatian, penjelasan alur, faktor keputusan, readiness, sistem resmi, dan CTA; halaman internal diprioritaskan sebagai workbench yang cepat dipindai, bukan galeri visual.

## Verifikasi

Pemeriksaan lokal berhasil pada seluruh berkas JavaScript dengan `node --check`. Tidak ditemukan lagi copy lama “Relevan untuk proyek aktif”, “Wilayah indeks”, atau kalimat yang menyatakan katalog umum mengikuti lokasi penapisan pada renderer aktif. Preview desktop 1440×1100 dan mobile 390×844 berhasil dimuat. Menu Basis regulasi terbukti membuka Katalog general, sedangkan tab Terpicu proyek aktif menampilkan 15 aturan berdasarkan proyek demo.

Perubahan utama berada pada `index.html`, `styles.css`, dan `app-20260821-17.js`. Asset aktif diberi cache-busting versi `20260823-18` agar deployment publik mengambil perubahan terbaru.

> Batasan yang tetap berlaku: hasil penapisan masih prototipe indikatif, dokumen masih disimpan sebagai metadata lokal, dan indeks regulasi daerah belum mencakup seluruh Indonesia. Katalog ini bukan keputusan hukum atau keputusan instansi.

## Referensi

[1]: https://peraturan.bpk.go.id/Details/319773/pp-no-28-tahun-2025 "PP Nomor 28 Tahun 2025 — Peraturan BPK"
[2]: https://peraturan.go.id/id/permenklhbph-no-22-tahun-2025 "Permen LH/BPLH Nomor 22 Tahun 2025 — peraturan.go.id"
[3]: https://peraturan.go.id/id/permenklhbph-no-6-tahun-2026 "Permen LH/BPLH Nomor 6 Tahun 2026 — peraturan.go.id"
[4]: https://peraturan.go.id/id/permenklhbph-no-11-tahun-2025 "Permen LH/BPLH Nomor 11 Tahun 2025 — peraturan.go.id"
