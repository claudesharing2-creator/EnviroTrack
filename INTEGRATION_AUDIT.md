# Audit Integrasi Studio AMDAL ke EnviroTrack

## Dasar sumber eksternal

AMDALNet dipublikasikan sebagai sistem informasi dokumen lingkungan hidup berbasis geospasial untuk digitalisasi dokumen dan proses persetujuan lingkungan. Sumber pemerintah menjelaskan aktor pemrakarsa, penyusun, penilai/pemeriksa, sektor terkait, serta publik/masyarakat; modul utamanya meliputi Penapisan Otomatis, Asistensi Pelingkupan, dan AMDAL Digital Workspace.  
Sumber: https://infopublik.id/kategori/nasional-sosial-budaya/709525/ini-empat-proses-tahapan-persetujuan-lingkungan-di-aplikasi-amdalnet

Portal AMDALNet publik menyediakan katalog panduan, termasuk panduan penapisan AMDAL/UKL-UPL/SPPL bagi pelaku usaha OSS serta materi pendokumentasian dan sinkronisasi data.  
Sumber: https://amdalnet.kemenlh.go.id/#/home/amdal-digital

## Temuan EnviroTrack

EnviroTrack adalah aplikasi statis JavaScript yang sudah menyediakan penapisan berbasis KBLI, profil kegiatan, kapasitas, dampak, lokasi, peta, tracker tugas, dokumen lokal berbasis IndexedDB, kalender, dan basis regulasi. State disimpan pada `localStorage` dengan kunci `envirotrack-state-v2`; dokumen disimpan secara lokal melalui IndexedDB atau folder perangkat. UI dimuat dari `index.html`, `styles.css`, dan `app-20260821-17.js`.

## Rekomendasi integrasi

Tambahkan view mandiri `Studio AMDAL` pada workspace EnviroTrack, bukan memindahkan aplikasi React Jelajah AMDAL secara penuh. Modul akan memakai data proyek EnviroTrack yang sudah dipilih dan menyimpan progres latihan lokal di dalam state yang sama. Lingkup versi pertama: jalur lima fase, kartu status tim/dokumen, ringkasan hasil penapisan EnviroTrack, serta latihan pemahaman. Tidak ada koneksi ke AMDALNet, OSS, atau data instansi.

## Batasan

Integrasi tidak menggunakan logo, aset, API, kode sumber, atau data pengguna AMDALNet. Modul ditandai sebagai latihan/edukasi dan tidak menghasilkan keputusan atau pengajuan resmi.

## Verifikasi pratinjau

Pratinjau lokal pada rute `#studio-amdal` berhasil memuat navigasi Studio AMDAL, jalur lima fase, konteks proyek EnviroTrack, checkpoint Penapisan, dan cek pemahaman. Tidak ada request menuju AMDALNet pada pemuatan modul. Perpindahan dari checkpoint Penapisan ke Tim telah terverifikasi. Anomali tombol penugasan disebabkan atribut `data-amdal-team` yang tidak cocok dengan handler aksi; atribut telah diselaraskan menjadi `data-action="amdal-team"`. Setelah cache-busting aset dinaikkan, pratinjau dikonfirmasi memuat `app-20260821-17.js?v=20260824-34` dan markup tombol yang benar. Uji akhir berhasil: penerimaan penugasan mengubah state lokal dan label tombol, sementara jawaban cek pemahaman menampilkan umpan balik serta menyimpan progres lokal.
