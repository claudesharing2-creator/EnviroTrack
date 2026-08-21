"use strict";

const LINKS = {
  oss: "https://oss.go.id/",
  kbli: "https://oss.go.id/id/kbli",
  amdalnet: "https://amdalnet.kemenlh.go.id/",
  simpel: "https://simpel.kemenlh.go.id/",
  speed: "https://plb3.kemenlh.go.id/",
  jdihn: "https://jdihn.go.id/",
  ptspKaltim: "https://e-ptsp.kaltimprov.go.id/",
  dpmptspKaltim: "https://dpmptsp.kaltimprov.go.id/",
  gisKaltim: "https://e-ptsp.kaltimprov.go.id/gis/",
  ptspBalikpapan: "https://spontan.balikpapan.go.id/",
  dpmptspBalikpapan: "https://investasi.balikpapan.go.id/",
  ptspKukar: "https://dpmptsp.kukarkab.go.id/website/sp-sop"
};

const REGULATIONS = [
  {id:"pp28-2025",level:"Nasional",scope:"Perizinan berusaha",title:"PP 28 Tahun 2025",about:"Penyelenggaraan Perizinan Berusaha Berbasis Risiko melalui OSS.",status:"Berlaku",verified:true,location:"Indonesia",url:"https://peraturan.bpk.go.id/Details/319773/pp-no-28-tahun-2025"},
  {id:"pp22-2021",level:"Nasional",scope:"Lingkungan",title:"PP 22 Tahun 2021",about:"Penyelenggaraan perlindungan dan pengelolaan lingkungan hidup; dasar persetujuan lingkungan, Pertek, SLO, mutu air, udara, dan limbah.",status:"Berlaku",verified:true,location:"Indonesia",url:"https://peraturan.go.id/id/pp-no-22-tahun-2021"},
  {id:"plhk4-2021",level:"Nasional",scope:"Penapisan",title:"Permen LHK 4 Tahun 2021",about:"Daftar usaha dan/atau kegiatan yang wajib AMDAL, UKL-UPL, atau SPPL.",status:"Berlaku",verified:true,location:"Indonesia",url:"https://peraturan.go.id/id/permen-lhk-no-4-tahun-2021"},
  {id:"plhk5-2021",level:"Nasional",scope:"Pertek & SLO",title:"Permen LHK 5 Tahun 2021",about:"Tata cara penerbitan persetujuan teknis dan surat kelayakan operasional bidang pengendalian pencemaran.",status:"Berlaku",verified:true,location:"Indonesia",url:"https://peraturan.go.id/id/permen-lhk-no-5-tahun-2021"},
  {id:"plhk6-2021",level:"Nasional",scope:"Limbah B3",title:"Permen LHK 6 Tahun 2021",about:"Tata cara dan persyaratan pengelolaan limbah bahan berbahaya dan beracun.",status:"Berlaku",verified:true,location:"Indonesia",url:"https://peraturan.bpk.go.id/Details/211000/permen-lhk-no-6-tahun-2021/"},
  {id:"plh11-2025",level:"Nasional",scope:"Air limbah domestik",title:"Permen LH/BPLH 11 Tahun 2025",about:"Baku mutu air limbah dan standar teknologi pengolahan air limbah domestik.",status:"Berlaku",verified:true,location:"Indonesia",url:"https://peraturan.go.id/files/permenklhbph-no-11-tahun-2025.pdf"},
  {id:"plh19-2010",level:"Sektoral",scope:"Migas",title:"Permen LH 19 Tahun 2010",about:"Baku mutu air limbah bagi usaha dan/atau kegiatan minyak dan gas serta panas bumi.",status:"Periksa ketentuan terkini",verified:true,location:"Indonesia",url:"https://peraturan.go.id/id/permenlh-no-19-tahun-2010"},
  {id:"plhk11-2021",level:"Sektoral",scope:"Emisi",title:"Permen LHK 11 Tahun 2021",about:"Baku mutu emisi mesin dengan pembakaran dalam.",status:"Berlaku",verified:true,location:"Indonesia",url:"https://peraturan.bpk.go.id/Details/235328/permenlhk-no-11-tahun-2021"},
  {id:"plhk19-2021",level:"Nasional",scope:"Limbah non-B3",title:"Permen LHK 19 Tahun 2021",about:"Tata cara pengelolaan limbah nonbahan berbahaya dan beracun.",status:"Berlaku",verified:true,location:"Indonesia",url:"https://peraturan.go.id/id/permen-lhk-no-19-tahun-2021"},
  {id:"kaltim1-2014",level:"Provinsi",scope:"Lingkungan",title:"Perda Kalimantan Timur 1 Tahun 2014",about:"Perlindungan dan pengelolaan lingkungan hidup di Provinsi Kalimantan Timur.",status:"Berlaku",verified:true,location:"Kalimantan Timur",url:"https://peraturan.bpk.go.id/Details/21121/perda-prov-kalimantan-timur-no-1-tahun-2014"},
  {id:"kaltim2-2020",level:"Provinsi",scope:"RPPLH",title:"Perda Kalimantan Timur 2 Tahun 2020",about:"Rencana Perlindungan dan Pengelolaan Lingkungan Hidup Provinsi Kalimantan Timur.",status:"Berlaku",verified:true,location:"Kalimantan Timur",url:"https://peraturan.bpk.go.id/Details/176244/perda-prov-kalimantan-timur-no-2-tahun-2020"},
  {id:"bpn24-2016",level:"Kota",scope:"Air limbah domestik",title:"Perwali Balikpapan 24 Tahun 2016",about:"Pengelolaan air limbah domestik; termasuk kewajiban pengelolaan bagi usaha dan grease trap untuk kegiatan tertentu.",status:"Verifikasi status saat pengajuan",verified:true,location:"Kota Balikpapan",url:"https://jdih.balikpapan.go.id/dokumen/download/181"},
  {id:"bpn3-2025",level:"Kota",scope:"B3 & Limbah B3",title:"Perda Balikpapan 3 Tahun 2025",about:"Kedaruratan penanggulangan B3 dan limbah B3, program darurat, pelaporan, dan latihan.",status:"Berlaku",verified:true,location:"Kota Balikpapan",url:"https://jdih.balikpapan.go.id/dokumen/download/895"},
  {id:"kukar5-2014",level:"Kabupaten",scope:"Lingkungan",title:"Perda Kutai Kartanegara 5 Tahun 2014 jo. Perda 8 Tahun 2024",about:"Perlindungan dan pengelolaan lingkungan hidup Kabupaten Kutai Kartanegara beserta perubahannya.",status:"Berlaku dengan perubahan",verified:true,location:"Kabupaten Kutai Kartanegara",url:"https://jdih.kukarkab.go.id/produk-hukum/peraturan/perubahan-atas-peraturan-daerah-kutai-kartanegara-nomor-5-tahun-2014-tentang-perlindungan-dan-pengelolaan-lingkungan-hidup?purpose=unduh"},
  {id:"kukar18-2024",level:"Kabupaten",scope:"Air limbah domestik",title:"Perda Kutai Kartanegara 18 Tahun 2024",about:"Pengelolaan dan penyelenggaraan sistem air limbah domestik di Kabupaten Kutai Kartanegara.",status:"Berlaku",verified:true,location:"Kabupaten Kutai Kartanegara",url:"https://jdih.kukarkab.go.id/produk-hukum/peraturan/peraturan-daerah-kabupaten-kutai-kartanegara-nomor-18-tahun-2024-tentang-pengelolaan?purpose=unduh"}
];

const PACKS = {
  agriculture:{name:"Pertanian, kehutanan & perikanan",icon:"A",activities:["Pembukaan/penyiapan lahan","Budidaya intensif","Irigasi & pengambilan air","Pengolahan hasil","Cold storage","Pestisida/pupuk","Tambak/keramba","Fasilitas penunjang"]},
  extractive:{name:"Pertambangan & migas",icon:"M",activities:["Survei/seismik","Eksplorasi/pengeboran","Konstruksi fasilitas","Produksi/eksploitasi","Pengolahan/pemurnian","Pipa & gathering","Terminal/stockpile","Penutupan/pascaoperasi"]},
  manufacturing:{name:"Industri pengolahan",icon:"I",activities:["Penerimaan bahan baku","Proses basah","Proses termal","Reaksi/pencampuran","Finishing/coating","Utilitas","Gudang B3","IPAL & pengelolaan limbah"]},
  energy:{name:"Energi & utilitas",icon:"E",activities:["Pembangkit utama","Boiler/turbin","Genset darurat","Transmisi/distribusi","Penyimpanan bahan bakar","Pendingin","Pengolahan air","Fasilitas penunjang"]},
  water:{name:"Air, air limbah & sampah",icon:"W",activities:["Intake air baku","Pengolahan air","Jaringan distribusi","Pengumpulan air limbah","IPAL/IPLT","Pengumpulan sampah","Pengolahan/daur ulang","TPA/residu"]},
  construction:{name:"Konstruksi",icon:"C",activities:["Pembersihan lahan","Pekerjaan tanah","Pondasi & struktur","Batching/asphalt plant","Basecamp","Dewatering","Mobilisasi material","Demobilisasi"]},
  logistics:{name:"Perdagangan, transportasi & logistik",icon:"L",activities:["Gudang & penyimpanan","Cold storage","Bongkar muat","Pelabuhan/jetty","Terminal kendaraan","Bengkel & pencucian","Pipa/angkutan bahan","Fasilitas penunjang"]},
  hospitality:{name:"Akomodasi & makanan",icon:"H",activities:["Akomodasi","Dapur/restoran","Laundry","Kolam/spa","Pengolahan air limbah","Genset/boiler","Penyimpanan bahan","Pengelolaan sampah"]},
  digital:{name:"Informasi & pusat data",icon:"D",activities:["Ruang server","Sistem pendingin","Genset cadangan","Penyimpanan bahan bakar","Baterai/UPS","Menara/jaringan","Pemakaian air","Pengelolaan e-waste"]},
  realestate:{name:"Kawasan & real estat",icon:"R",activities:["Pematangan lahan","Pembangunan gedung","Jalan & drainase","Air bersih","IPAL kawasan","Ruang terbuka hijau","Pengelolaan sampah","Operasional kawasan"]},
  health:{name:"Kesehatan & sosial",icon:"+",activities:["Pelayanan rawat inap","Laboratorium","Radiologi","Laundry","Dapur","Insinerasi/autoklaf","IPAL","Penyimpanan limbah medis"]},
  services:{name:"Jasa lainnya",icon:"J",activities:["Operasional utama","Bangunan/fasilitas","Genset/utilitas","Pemakaian air","Air limbah domestik","Bahan kimia","Sampah & limbah","Mobilitas/parkir"]}
};

const PROFILE_COMMON = {
  location:["forest","conservation","peat","karst","coastal","river","watershed","disaster","industrial-estate"],
  social:["noise","traffic","biodiversity","social","ghg","land-clearing"]
};
const QUESTIONNAIRE_PROFILES = {
  coconut:{name:"Pertanian kelapa",capacityLabel:"Luas areal yang dikelola",units:["ha","pohon produktif","ton kelapa/tahun"],placeholder:"Contoh: 250",activities:["Penyiapan/pembukaan lahan","Pembibitan kelapa","Penanaman & penyulaman","Pemupukan","Pengendalian hama/pestisida","Pemanenan","Pascapanen di kebun","Jalan, drainase & workshop"],questions:[{id:"landStatus",label:"Status lahan",type:"select",options:["APL","Kawasan hutan/pelepasan","Belum diketahui"]},{id:"chemicalUse",label:"Pupuk/pestisida kimia",type:"select",options:["Digunakan dan disimpan","Digunakan tanpa penyimpanan","Tidak digunakan"]},{id:"workshop",label:"Workshop/genset di lokasi",type:"select",options:["Ada","Tidak ada"]}],impacts:["domestic","runoff","usedoil","chemical","battery","storage","spill","packaging","organic","domestic-solid","groundwater","surface","municipal",...PROFILE_COMMON.location,...PROFILE_COMMON.social],defaults:["runoff","packaging","organic","biodiversity","land-clearing"],waste:["b104d","b105d","b107d","b110d","a102d","pesticide-verify"]},
  oilpalm:{name:"Pertanian kelapa sawit",capacityLabel:"Luas kebun inti + plasma",units:["ha","ton TBS/tahun","pohon produktif"],placeholder:"Contoh: 5.000",activities:["Penyiapan/pembukaan lahan","Pembibitan kelapa sawit","Penanaman & penyulaman","Pemupukan","Pengendalian hama/pestisida","Pemanenan TBS","Pascapanen di kebun","Jalan, drainase & workshop"],questions:[{id:"landStatus",label:"Status lahan",type:"select",options:["APL","Kawasan hutan/pelepasan","Belum diketahui"]},{id:"peatUse",label:"Berada pada lahan gambut",type:"select",options:["Ya","Tidak","Belum diketahui"]},{id:"chemicalUse",label:"Pupuk/pestisida kimia",type:"select",options:["Digunakan dan disimpan","Digunakan tanpa penyimpanan","Tidak digunakan"]}],impacts:["domestic","runoff","usedoil","chemical","battery","storage","spill","packaging","organic","domestic-solid","groundwater","surface","municipal",...PROFILE_COMMON.location,...PROFILE_COMMON.social],defaults:["runoff","packaging","organic","biodiversity","land-clearing"],waste:["b104d","b105d","b107d","b110d","a102d","pesticide-verify"]},
  plantation:{name:"Pertanian/perkebunan",capacityLabel:"Luas areal kegiatan",units:["ha","ton produk/tahun","batang/pohon"],placeholder:"Contoh: 1.200",activities:["Penyiapan/pembukaan lahan","Pembibitan","Penanaman","Pemupukan","Pengendalian hama/pestisida","Irigasi","Pemanenan","Pascapanen di kebun"],questions:[{id:"landStatus",label:"Status lahan",type:"select",options:["APL","Kawasan hutan/pelepasan","Belum diketahui"]},{id:"chemicalUse",label:"Pupuk/pestisida kimia",type:"select",options:["Digunakan dan disimpan","Digunakan tanpa penyimpanan","Tidak digunakan"]},{id:"irrigation",label:"Sumber irigasi",type:"select",options:["Tidak ada","Air permukaan","Air tanah","Pemasok/PDAM"]}],impacts:["domestic","runoff","usedoil","chemical","battery","storage","spill","packaging","organic","domestic-solid","groundwater","surface","municipal",...PROFILE_COMMON.location,...PROFILE_COMMON.social],defaults:["runoff","organic","biodiversity"],waste:["b104d","b105d","b107d","b110d","a102d","pesticide-verify"]},
  migas:{name:"Pertambangan minyak dan gas",capacityLabel:"Kapasitas produksi desain",units:["BOPD","MMSCFD","BOEPD","sumur"],placeholder:"Contoh: 45.000",activities:["Survei/seismik","Eksplorasi/pengeboran","Konstruksi fasilitas","Produksi minyak/gas","Separasi & treatment","Pipa & gathering","Terminal/penyimpanan","Penutupan/pascaoperasi"],questions:[{id:"fieldType",label:"Tipe lapangan",type:"select",options:["Onshore","Offshore","Onshore dan offshore"]},{id:"wellCount",label:"Jumlah sumur",type:"number",placeholder:"Contoh: 24"},{id:"injection",label:"Injeksi produced water",type:"select",options:["Ya","Tidak","Belum ditentukan"]}],impacts:["domestic","process","produced","oily","cooling","blowdown","hydrotest","runoff","laboratory","boiler","genset","turbine","flare","vent","voc","fugitive","dust","usedoil","sludge","chemical","catalyst","battery","soil","storage","spill","residue","scrap","packaging","domestic-solid","groundwater","surface","seawater","municipal","reuse",...PROFILE_COMMON.location,...PROFILE_COMMON.social,"odor","vibration","dredging"],defaults:["produced","oily","flare","fugitive","usedoil","sludge","storage","spill","ghg"],waste:["b104d","b105d","b107d","b109d","b110d","a102d","sector-verify"]},
  mining:{name:"Pertambangan dan penggalian",capacityLabel:"Kapasitas produksi/penambangan",units:["ton/tahun","juta ton/tahun","BCM/tahun","ha"],placeholder:"Contoh: 2.500.000",activities:["Eksplorasi","Land clearing","Pengupasan tanah pucuk","Penggalian/penambangan","Pengangkutan","Crushing/screening","Stockpile","Reklamasi & pascatambang"],questions:[{id:"mineMethod",label:"Metode tambang",type:"select",options:["Terbuka","Bawah tanah","Quarry","Belum ditentukan"]},{id:"processing",label:"Pengolahan/pemurnian",type:"select",options:["Ada di tapak","Tidak ada"]},{id:"dewatering",label:"Mine dewatering",type:"select",options:["Ada","Tidak ada"]}],impacts:["domestic","process","runoff","laboratory","genset","kiln","dust","fugitive","usedoil","sludge","chemical","battery","soil","storage","spill","residue","ash","scrap","packaging","groundwater","surface",...PROFILE_COMMON.location,...PROFILE_COMMON.social,"noise","vibration"],defaults:["runoff","dust","usedoil","storage","noise","land-clearing"],waste:["b104d","b105d","b107d","b109d","b110d","a102d","sector-verify"]},
  manufacturing:{name:"Industri pengolahan",capacityLabel:"Kapasitas produk utama",units:["ton/tahun","ton/hari","unit/tahun","m³ produk/hari"],placeholder:"Contoh: 100.000",activities:["Penerimaan bahan baku","Proses basah","Proses termal","Pencampuran/reaksi","Finishing/coating","Pengemasan","Utilitas","IPAL & pengelolaan limbah"],questions:[{id:"wetProcess",label:"Proses menggunakan air",type:"select",options:["Ya","Tidak"]},{id:"thermalProcess",label:"Boiler/furnace/kiln",type:"select",options:["Ada","Tidak ada"]},{id:"chemicalUse",label:"B3/bahan kimia proses",type:"select",options:["Digunakan dan disimpan","Digunakan tanpa penyimpanan","Tidak digunakan"]}],impacts:["domestic","process","oily","cooling","blowdown","runoff","laboratory","boiler","genset","kiln","incinerator","vent","voc","fugitive","dust","usedoil","sludge","chemical","catalyst","battery","storage","spill","residue","ash","scrap","packaging","organic","domestic-solid","groundwater","surface","municipal","reuse",...PROFILE_COMMON.location,...PROFILE_COMMON.social,"odor","vibration"],defaults:["process","boiler","usedoil","chemical","packaging","storage"],waste:["b104d","b105d","b107d","b109d","b110d","a102d","sector-verify"]},
  energy:{name:"Energi dan pembangkitan",capacityLabel:"Kapasitas terpasang",units:["MW","MWe","MWp","MWh/tahun"],placeholder:"Contoh: 100",activities:["Pembangkit utama","Boiler/turbin","Genset darurat","Penyimpanan bahan bakar","Cooling system","Pengolahan air","Transmisi/distribusi","Abu/residu"],questions:[{id:"fuel",label:"Sumber energi/bahan bakar",type:"select",options:["Batubara","Gas","Minyak/BBM","Biomassa","Surya/angin/hidro"]},{id:"coolingSystem",label:"Sistem pendingin",type:"select",options:["Once-through","Cooling tower","Air cooled","Tidak ada"]},{id:"grid",label:"Terhubung jaringan",type:"select",options:["On-grid","Off-grid"]}],impacts:["domestic","process","oily","cooling","blowdown","runoff","boiler","genset","turbine","vent","fugitive","dust","usedoil","sludge","chemical","battery","storage","spill","residue","ash","scrap","groundwater","surface","seawater","municipal",...PROFILE_COMMON.location,...PROFILE_COMMON.social,"noise","vibration"],defaults:["cooling","blowdown","turbine","usedoil","ghg"],waste:["b104d","b105d","b107d","b109d","b110d","a102d","sector-verify"]},
  water:{name:"Air, air limbah dan persampahan",capacityLabel:"Kapasitas pengolahan desain",units:["m³/hari","liter/detik","ton/hari","jiwa terlayani"],placeholder:"Contoh: 5.000",activities:["Intake/pengumpulan","Pra-pengolahan","Pengolahan utama","Pengolahan lumpur","Disinfeksi","Jaringan/pemompaan","Penyimpanan residu","Pembuangan/pemanfaatan"],questions:[{id:"facilityType",label:"Jenis fasilitas",type:"select",options:["SPAM/air minum","IPAL/IPLT","Pengelolaan sampah","Daur ulang/pemulihan"]},{id:"sludge",label:"Menghasilkan lumpur",type:"select",options:["Ya","Tidak"]},{id:"discharge",label:"Tujuan keluaran",type:"select",options:["Badan air","Tanah/pemanfaatan","Pihak ketiga","Belum ditentukan"]}],impacts:["domestic","process","leachate","laboratory","genset","odor","usedoil","sludge","chemical","battery","storage","spill","residue","packaging","organic","domestic-solid","sewage-sludge","groundwater","surface","municipal","reuse",...PROFILE_COMMON.location,...PROFILE_COMMON.social],defaults:["process","sludge","odor","storage"],waste:["b104d","b105d","b107d","b110d","a102d","sector-verify"]},
  construction:{name:"Konstruksi",capacityLabel:"Skala fisik utama",units:["ha tapak","m² luas bangunan","km","unit bangunan"],placeholder:"Contoh: 12",activities:["Pembersihan lahan","Pekerjaan tanah","Dewatering","Pondasi & struktur","Batching/asphalt plant","Basecamp","Mobilisasi material","Demobilisasi"],questions:[{id:"duration",label:"Durasi konstruksi",type:"select",options:["< 1 tahun","1–3 tahun","> 3 tahun"]},{id:"workers",label:"Pekerja puncak",type:"number",placeholder:"Contoh: 250"},{id:"batching",label:"Batching/asphalt plant",type:"select",options:["Ada","Tidak ada"]}],impacts:["domestic","oily","runoff","genset","dust","usedoil","chemical","battery","storage","spill","scrap","packaging","domestic-solid","construction-waste","groundwater","surface",...PROFILE_COMMON.location,...PROFILE_COMMON.social,"noise","vibration"],defaults:["domestic","runoff","dust","noise","traffic","construction-waste"],waste:["b104d","b105d","b107d","b110d","a102d"]},
  logistics:{name:"Transportasi dan logistik",capacityLabel:"Kapasitas layanan/throughput",units:["ton/tahun","TEU/tahun","kendaraan/hari","penumpang/hari"],placeholder:"Contoh: 250.000",activities:["Gudang/penyimpanan","Bongkar muat","Terminal kendaraan","Pelabuhan/jetty","Cold storage","Bengkel & pencucian","Pengisian bahan bakar","Fasilitas penunjang"],questions:[{id:"cargo",label:"Jenis muatan utama",type:"select",options:["Barang umum","B3/kimia","BBM/migas","Curah","Penumpang"]},{id:"workshop",label:"Bengkel/pencucian",type:"select",options:["Ada","Tidak ada"]},{id:"marine",label:"Fasilitas laut/jetty",type:"select",options:["Ada","Tidak ada"]}],impacts:["domestic","oily","runoff","genset","voc","fugitive","dust","usedoil","chemical","battery","storage","spill","scrap","packaging","domestic-solid","groundwater","surface","seawater",...PROFILE_COMMON.location,...PROFILE_COMMON.social,"noise","dredging"],defaults:["domestic","traffic","usedoil","spill"],waste:["b104d","b105d","b107d","b110d","a102d","sector-verify"]},
  forestry:{name:"Kehutanan",capacityLabel:"Luas areal/produksi hasil hutan",units:["ha","m³ kayu/tahun","ton hasil hutan/tahun"],placeholder:"Contoh: 10.000",activities:["Inventarisasi tegakan","Pembukaan akses","Persemaian/penanaman","Pemeliharaan","Pemanenan","Pengangkutan hasil","Basecamp/workshop","Rehabilitasi"],questions:[{id:"forestFunction",label:"Fungsi/status kawasan",type:"select",options:["Hutan produksi","Hutan lindung/konservasi","APL","Belum diketahui"]},{id:"harvest",label:"Pemanenan hasil hutan",type:"select",options:["Kayu","Non-kayu","Tidak ada"]},{id:"workshop",label:"Workshop/genset di tapak",type:"select",options:["Ada","Tidak ada"]}],impacts:["domestic","runoff","genset","dust","usedoil","chemical","battery","storage","spill","organic","domestic-solid","surface",...PROFILE_COMMON.location,...PROFILE_COMMON.social,"noise"],defaults:["runoff","forest","biodiversity","land-clearing"],waste:["b104d","b105d","b107d","b110d","a102d"]},
  fisheries:{name:"Perikanan dan budidaya",capacityLabel:"Kapasitas produksi/budidaya",units:["ton/tahun","ha tambak","unit keramba","kapal"],placeholder:"Contoh: 500",activities:["Persiapan kolam/tambak","Pembenihan","Pembesaran","Pakan & obat","Pergantian/sirkulasi air","Pemanenan","Cold storage","Dermaga/kapal"],questions:[{id:"fisheryType",label:"Jenis kegiatan",type:"select",options:["Budidaya air tawar","Tambak payau","Budidaya laut","Penangkapan"]},{id:"feed",label:"Pakan/obat/kimia",type:"select",options:["Digunakan dan disimpan","Digunakan tanpa penyimpanan","Tidak digunakan"]},{id:"discharge",label:"Air buangan budidaya",type:"select",options:["Ke badan air","Diresirkulasi","Tidak ada"]}],impacts:["domestic","process","runoff","genset","usedoil","chemical","battery","storage","spill","organic","packaging","domestic-solid","surface","seawater",...PROFILE_COMMON.location,...PROFILE_COMMON.social,"odor"],defaults:["process","organic","surface","biodiversity"],waste:["b104d","b105d","b107d","b110d","a102d","sector-verify"]},
  livestock:{name:"Peternakan",capacityLabel:"Populasi/kapasitas ternak",units:["ekor","ekor/tahun","ton produk/tahun"],placeholder:"Contoh: 20.000",activities:["Kandang/area ternak","Pakan & minum","Obat/vaksin","Pemerahan/produksi","Pembersihan kandang","Pengolahan kotoran","Pemotongan internal","Gudang & utilitas"],questions:[{id:"animalType",label:"Jenis ternak",type:"select",options:["Unggas","Sapi/kerbau","Kambing/domba","Babi","Lainnya"]},{id:"manure",label:"Pengelolaan kotoran",type:"select",options:["Kompos","Biogas","IPAL/kolam","Belum ditentukan"]},{id:"slaughter",label:"Pemotongan di lokasi",type:"select",options:["Ada","Tidak ada"]}],impacts:["domestic","process","runoff","genset","odor","usedoil","chemical","medical","storage","spill","organic","packaging","domestic-solid","groundwater","surface",...PROFILE_COMMON.location,...PROFILE_COMMON.social],defaults:["process","organic","odor","ghg"],waste:["b104d","b105d","b107d","b110d","a102d","medical-verify"]},
  hospitality:{name:"Akomodasi dan penyediaan makanan",capacityLabel:"Kapasitas layanan",units:["kamar","kursi","porsi/hari","tamu/hari"],placeholder:"Contoh: 120",activities:["Kamar/akomodasi","Dapur/restoran","Laundry","Kolam/spa","IPAL domestik","Genset/boiler","Cold storage","Pengelolaan sampah"],questions:[{id:"rooms",label:"Jumlah kamar/kursi",type:"number",placeholder:"Contoh: 120"},{id:"laundry",label:"Laundry di lokasi",type:"select",options:["Ada","Tidak ada"]},{id:"kitchen",label:"Dapur/restoran",type:"select",options:["Ada","Tidak ada"]}],impacts:["domestic","process","oily","genset","boiler","odor","usedoil","chemical","battery","storage","spill","packaging","organic","domestic-solid","sewage-sludge","municipal","groundwater",...PROFILE_COMMON.location,...PROFILE_COMMON.social],defaults:["domestic","organic","domestic-solid","odor"],waste:["b104d","b105d","b107d","b110d","a102d"]},
  digital:{name:"Pusat data dan layanan digital",capacityLabel:"Kapasitas fasilitas",units:["MW IT load","rack","server","m² ruang data"],placeholder:"Contoh: 20",activities:["Ruang server","Sistem pendingin","Genset cadangan","UPS/baterai","Penyimpanan bahan bakar","Menara/jaringan","Pengolahan air","Pengelolaan e-waste"],questions:[{id:"redundancy",label:"Konfigurasi daya",type:"select",options:["N","N+1","2N","Belum ditentukan"]},{id:"coolingSystem",label:"Sistem pendingin",type:"select",options:["Air cooled","Water cooled","Hybrid"]},{id:"genset",label:"Genset cadangan",type:"select",options:["Ada","Tidak ada"]}],impacts:["domestic","cooling","blowdown","genset","usedoil","chemical","battery","storage","spill","scrap","packaging","domestic-solid","groundwater","municipal","reuse",...PROFILE_COMMON.location,...PROFILE_COMMON.social,"noise","ghg"],defaults:["cooling","genset","battery","usedoil","ghg"],waste:["b104d","b105d","b107d","b110d","a102d"]},
  realestate:{name:"Kawasan dan real estat",capacityLabel:"Skala pengembangan",units:["ha","unit hunian","m² bangunan","orang terlayani"],placeholder:"Contoh: 50",activities:["Pematangan lahan","Pembangunan bangunan","Jalan & drainase","Air bersih","IPAL kawasan","Ruang terbuka hijau","Pengelolaan sampah","Operasional kawasan"],questions:[{id:"developmentType",label:"Jenis pengembangan",type:"select",options:["Perumahan","Komersial","Kawasan industri","Campuran"]},{id:"occupancy",label:"Populasi rencana",type:"number",placeholder:"Contoh: 5.000"},{id:"estateIpal",label:"IPAL kawasan",type:"select",options:["Ada","Tidak ada/pihak lain"]}],impacts:["domestic","process","runoff","genset","dust","usedoil","chemical","storage","spill","construction-waste","packaging","domestic-solid","sewage-sludge","groundwater","surface","municipal",...PROFILE_COMMON.location,...PROFILE_COMMON.social,"noise"],defaults:["domestic","runoff","construction-waste","land-clearing","traffic"],waste:["b104d","b105d","b107d","b110d","a102d"]},
  health:{name:"Fasilitas pelayanan kesehatan",capacityLabel:"Kapasitas pelayanan",units:["tempat tidur","pasien/hari","sampel/hari"],placeholder:"Contoh: 150",activities:["Rawat inap/jalan","Laboratorium","Radiologi","Farmasi","Laundry","Dapur","Sterilisasi/autoklaf","IPAL & limbah medis"],questions:[{id:"beds",label:"Tempat tidur operasional",type:"number",placeholder:"Contoh: 150"},{id:"lab",label:"Laboratorium/radiologi",type:"select",options:["Ada","Tidak ada"]},{id:"medicalTreatment",label:"Pengolahan limbah medis di tapak",type:"select",options:["Autoklaf","Insinerator","Tidak ada/pihak ketiga"]}],impacts:["domestic","process","laboratory","boiler","genset","incinerator","usedoil","sludge","chemical","medical","battery","storage","spill","packaging","organic","domestic-solid","sewage-sludge","groundwater","municipal",...PROFILE_COMMON.location,...PROFILE_COMMON.social,"odor"],defaults:["process","laboratory","medical","chemical","storage"],waste:["b104d","b105d","b107d","b110d","a102d","medical-verify"]},
  services:{name:"Jasa dan kegiatan lainnya",capacityLabel:"Kapasitas layanan utama",units:["pengunjung/hari","orang/hari","unit/tahun","m²"],placeholder:"Contoh: 500",activities:["Operasional utama","Bangunan/fasilitas","Genset/utilitas","Pemakaian air","Air limbah domestik","Bahan kimia pembersih","Sampah & limbah","Mobilitas/parkir"],questions:[{id:"visitors",label:"Pengguna/pengunjung puncak",type:"number",placeholder:"Contoh: 500"},{id:"genset",label:"Genset/boiler",type:"select",options:["Ada","Tidak ada"]},{id:"chemicalUse",label:"B3/bahan kimia",type:"select",options:["Digunakan dan disimpan","Digunakan tanpa penyimpanan","Tidak digunakan"]}],impacts:["domestic","runoff","genset","usedoil","chemical","battery","storage","spill","packaging","organic","domestic-solid","municipal",...PROFILE_COMMON.location,...PROFILE_COMMON.social,"odor"],defaults:["domestic","domestic-solid","traffic"],waste:["b104d","b105d","b107d","b110d","a102d"]}
};

const WASTE_CATALOG = {
  b104d:{code:"B104d",name:"Kemasan bekas B3",trigger:"Kemasan pupuk/pestisida, bahan kimia, cat, pelarut, atau produk B3 lain",status:"Kandidat"},
  b105d:{code:"B105d",name:"Minyak pelumas bekas",trigger:"Mesin, genset, kendaraan, gearbox, hidrolik, separator, atau peralatan berpelumas",status:"Kandidat"},
  b107d:{code:"B107d",name:"Limbah elektronik",trigger:"Lampu TL, PCB elektronik, kabel/kawat logam, atau perangkat elektronik",status:"Kandidat"},
  b109d:{code:"B109d",name:"Filter bekas pengendalian pencemaran udara",trigger:"Bag filter atau filter fasilitas pengendalian emisi",status:"Kandidat"},
  b110d:{code:"B110d",name:"Kain majun bekas dan sejenis",trigger:"Majun, sarung tangan, absorbent, atau material pembersih terkontaminasi",status:"Kandidat"},
  a102d:{code:"A102d",name:"Baterai/aki bekas",trigger:"Kendaraan, genset, UPS, panel, atau peralatan dengan baterai/aki",status:"Kandidat"},
  a3301:{code:"A330-1",name:"Residu dasar tangki minyak bumi",trigger:"Eksplorasi dan produksi minyak, gas, dan panas bumi",status:"Sektoral"},
  a3302:{code:"A330-2",name:"Residu proses produksi migas",trigger:"Eksplorasi dan produksi minyak, gas, dan panas bumi",status:"Sektoral"},
  b3301:{code:"B330-1",name:"Lumpur bor oil/synthetic base",trigger:"Pengeboran dengan lumpur berbahan dasar minyak atau sintetis",status:"Sektoral"},
  b3302:{code:"B330-2",name:"Serbuk bor oil/synthetic base",trigger:"Cutting pengeboran berbahan dasar minyak atau sintetis",status:"Sektoral"},
  a3371:{code:"A337-1",name:"Limbah klinis infeksius",trigger:"Rumah sakit dan fasilitas pelayanan kesehatan",status:"Sektoral"},
  a3372:{code:"A337-2",name:"Produk farmasi kedaluwarsa",trigger:"Produk farmasi kedaluwarsa dari fasilitas kesehatan",status:"Sektoral"},
  a3373:{code:"A337-3",name:"Bahan kimia kedaluwarsa",trigger:"Bahan kimia kedaluwarsa dari fasilitas kesehatan",status:"Sektoral"},
  a3374:{code:"A337-4",name:"Peralatan laboratorium terkontaminasi B3",trigger:"Laboratorium fasilitas kesehatan",status:"Sektoral"},
  a3375:{code:"A337-5",name:"Peralatan medis mengandung logam berat",trigger:"Peralatan mengandung merkuri, kadmium, atau logam berat sejenis",status:"Sektoral"},
  b3371:{code:"B337-1",name:"Kemasan produk farmasi",trigger:"Kemasan produk farmasi dari fasilitas kesehatan",status:"Sektoral"},
  b3372:{code:"B337-2",name:"Sludge IPAL fasilitas kesehatan",trigger:"Lumpur dari IPAL rumah sakit/fasilitas pelayanan kesehatan",status:"Sektoral"},
  b3421:{code:"B342-1",name:"Sludge minyak atau lemak",trigger:"Pengolahan minyak hewani atau nabati, termasuk minyak kelapa/sawit",status:"Sektoral"},
  b413:{code:"B413",name:"Spent bleaching earth",trigger:"Proses pemucatan pada industri minyak nabati/hewani",status:"Sektoral"},
  "pesticide-verify":{code:"Verifikasi",name:"Pestisida kedaluwarsa/tumpah/residu",trigger:"Kode mengikuti produk, kondisi, sumber, dan Lampiran IX PP 22/2021",status:"Perlu data"},
  "medical-verify":{code:"Verifikasi",name:"Limbah medis/klinis",trigger:"Kode mengikuti jenis limbah infeksius, farmasi, sitotoksik, kimia, atau benda tajam",status:"Perlu data"},
  "sector-verify":{code:"Verifikasi",name:"Limbah proses spesifik sektor",trigger:"Kode ditentukan setelah bahan baku, proses, kontaminan, dan sumber limbah dikonfirmasi",status:"Perlu data"}
};

const ACTIVITY_TRIGGERS = {
  "Pengendalian hama/pestisida":["chemical","packaging","spill","storage"],"Pemupukan":["chemical","packaging","runoff"],"Jalan, drainase & workshop":["usedoil","battery","runoff"],
  "Produksi minyak/gas":["produced","oily","flare","fugitive"],"Eksplorasi/pengeboran":["process","sludge","spill"],"Pipa & gathering":["hydrotest","spill"],"Terminal/penyimpanan":["voc","spill","storage"],
  "Proses basah":["process"],"Proses termal":["boiler","vent"],"Utilitas":["genset","blowdown","usedoil"],"IPAL & pengelolaan limbah":["sludge","storage"],
  "Boiler/turbin":["boiler","turbine","blowdown"],"Cooling system":["cooling","blowdown"],"Abu/residu":["ash","residue"],
  "Bengkel & pencucian":["oily","usedoil","chemical"],"Pelabuhan/jetty":["coastal","seawater","dredging"],"Laboratorium":["laboratory","chemical"],"IPAL & limbah medis":["process","medical","sludge"]
};

const IMPACT_GROUPS = [
  {key:"wastewater",name:"Air limbah",icon:"≈",desc:"Semua aliran keluar dan potensi buangan",items:[["domestic","Domestik/sanitasi"],["process","Proses produksi"],["produced","Produced water"],["oily","Oily water/drainase berminyak"],["cooling","Cooling water"],["blowdown","Boiler/cooling blowdown"],["hydrotest","Hydrotest water"],["runoff","Limpasan area kegiatan"],["leachate","Lindi"],["laboratory","Laboratorium"]]},
  {key:"emission",name:"Emisi udara",icon:"↑",desc:"Sumber tetap, bergerak, dan fugitif",items:[["boiler","Boiler/heater"],["genset","Genset/mesin pembakaran dalam"],["turbine","Turbin/kompresor"],["flare","Flare"],["kiln","Kiln/furnace/smelter"],["incinerator","Insinerator"],["vent","Process vent"],["voc","Tangki/VOC"],["fugitive","Emisi fugitif"],["dust","Debu jalan/stockpile"]]},
  {key:"b3",name:"B3 & limbah B3",icon:"!",desc:"Bahan, timbulan, penyimpanan, dan kondisi darurat",items:[["usedoil","Pelumas/oli bekas"],["sludge","Sludge/residu terkontaminasi"],["chemical","Bahan kimia & kemasan"],["catalyst","Katalis/filter bekas"],["medical","Limbah medis"],["battery","Baterai & e-waste"],["soil","Tanah terkontaminasi"],["storage","TPS limbah B3"],["spill","Tumpahan/kedaruratan B3"]]},
  {key:"solid",name:"Limbah padat non-B3",icon:"▦",desc:"Residu proses dan sampah operasional",items:[["residue","Residu proses"],["ash","Abu/slag (cek status)"],["scrap","Scrap/logam"],["packaging","Kemasan non-B3"],["organic","Sampah organik"],["domestic-solid","Sampah domestik"],["sewage-sludge","Lumpur domestik"],["construction-waste","Sisa konstruksi"]]},
  {key:"water",name:"Penggunaan air",icon:"◇",desc:"Sumber, debit, neraca, dan kewenangan",items:[["groundwater","Air tanah"],["surface","Air permukaan"],["seawater","Air laut"],["municipal","PDAM/pemasok"],["rainwater","Panen air hujan"],["reuse","Reuse/recycle"]]},
  {key:"location",name:"Sensitivitas lokasi",icon:"△",desc:"Batas ekologis dan ruang yang perlu dioverlay",items:[["forest","Kawasan hutan"],["conservation","Kawasan konservasi"],["peat","Gambut"],["karst","Karst"],["coastal","Pesisir/ruang laut"],["river","Sempadan sungai/danau"],["watershed","DAS kritis"],["disaster","Rawan bencana"],["industrial-estate","Kawasan industri"]]},
  {key:"other",name:"Dampak lain",icon:"◎",desc:"Fisik, hayati, sosial, dan iklim",items:[["noise","Kebisingan"],["vibration","Getaran"],["odor","Bau"],["traffic","Lalu lintas"],["biodiversity","Keanekaragaman hayati"],["social","Masyarakat/sosial"],["ghg","Gas rumah kaca"],["land-clearing","Pembukaan lahan"],["dredging","Pengerukan/reklamasi"]]}
];

// Cakupan provinsi mengikuti 38 wilayah administrasi tingkat I Indonesia.
// Urutan dikelompokkan per kawasan agar daftar panjang tetap mudah dipindai.
const PROVINCES = [
  "Aceh","Sumatera Utara","Sumatera Barat","Riau","Jambi","Sumatera Selatan","Bengkulu","Lampung","Kepulauan Bangka Belitung","Kepulauan Riau",
  "DKI Jakarta","Jawa Barat","Jawa Tengah","DI Yogyakarta","Jawa Timur","Banten",
  "Bali","Nusa Tenggara Barat","Nusa Tenggara Timur",
  "Kalimantan Barat","Kalimantan Tengah","Kalimantan Selatan","Kalimantan Timur","Kalimantan Utara",
  "Sulawesi Utara","Sulawesi Tengah","Sulawesi Selatan","Sulawesi Tenggara","Gorontalo","Sulawesi Barat",
  "Maluku","Maluku Utara",
  "Papua Barat","Papua Barat Daya","Papua","Papua Selatan","Papua Tengah","Papua Pegunungan"
];
const REGENCIES = {
  "Kalimantan Timur":["Kabupaten Kutai Kartanegara","Kota Balikpapan","Kabupaten Penajam Paser Utara","Kota Samarinda","Kabupaten Kutai Timur"],
  "Riau":["Kota Pekanbaru","Kabupaten Siak","Kabupaten Bengkalis"],
  "Sumatera Selatan":["Kota Palembang","Kabupaten Musi Banyuasin"],
  "Jawa Barat":["Kabupaten Bekasi","Kabupaten Karawang","Kota Bandung"]
};

const DEFAULT_STATE = {
  view:"screening",step:0,
  kblis:[{code:"06100",title:"Pertambangan Minyak Bumi",description:"Kegiatan pertambangan, pengambilan, dan persiapan minyak bumi.",id:"demo-06100"}],
  projectName:"Proyek Migas Kaltim",projectStatus:"Usaha baru",stage:"Operasi",capacity:"45000",capacityUnit:"BOPD",
  activities:["Eksplorasi/pengeboran","Produksi minyak/gas","Pipa & gathering"],
  impacts:["domestic","process","produced","oily","hydrotest","boiler","genset","turbine","flare","fugitive","usedoil","sludge","chemical","storage","spill","groundwater","surface","noise","traffic","ghg"],
  answers:{fieldType:"Onshore",injection:"Belum ditentukan"},wasteCodes:["b105d","b110d"],showAllImpacts:false,
  province:"Kalimantan Timur",regency:"Kabupaten Kutai Kartanegara",locationFlags:[],openTask:0,
  taskFilter:"all",regFilter:"Semua",regSearch:"",docFilter:"Semua"
};

let state = loadState();
let searchTimer = null;
let toastTimer = null;

function loadState(){
  try{
    const saved=JSON.parse(localStorage.getItem("envirotrack-state")||"{}");
    const merged={...DEFAULT_STATE,...saved,answers:{...DEFAULT_STATE.answers,...(saved.answers||{})}};
    if(!saved.capacityUnit){const match=String(saved.capacity||"").match(/([\d.,]+)\s*(.*)/);if(match){merged.capacity=match[1];merged.capacityUnit=match[2]||profileForCode(saved.kblis?.[0]?.code).units[0];}}
    if(!Array.isArray(merged.wasteCodes))merged.wasteCodes=[];
    if(!PROVINCES.includes(merged.province)){merged.province=DEFAULT_STATE.province;merged.regency=DEFAULT_STATE.regency;}
    const provinceRegencies=REGENCIES[merged.province];
    const knownOtherRegency=Object.entries(REGENCIES).some(([province,items])=>province!==merged.province&&items.includes(merged.regency));
    if(provinceRegencies&&!provinceRegencies.includes(merged.regency))merged.regency=provinceRegencies[0];
    if(!provinceRegencies&&knownOtherRegency)merged.regency="";
    return merged;
  }
  catch{return {...DEFAULT_STATE};}
}
function saveState(silent=true){
  localStorage.setItem("envirotrack-state",JSON.stringify(state));
  const el=document.getElementById("autosave"); if(el)el.textContent="✓ Tersimpan di perangkat";
  if(!silent)showToast("Draf tersimpan di perangkat ini.");
}
function esc(value){return String(value??"").replace(/[&<>'"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c]));}
function showToast(message){const el=document.getElementById("toast");el.textContent=message;el.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove("show"),2600);}
function selectedKbli(){return state.kblis[0]||null;}
function profileForCode(code){
  const c=String(code||"");const n=parseInt(c.slice(0,2),10);
  if(c==="01261")return QUESTIONNAIRE_PROFILES.coconut;
  if(c==="01262")return QUESTIONNAIRE_PROFILES.oilpalm;
  if(c.startsWith("014")||c.startsWith("015"))return QUESTIONNAIRE_PROFILES.livestock;
  if(n===1)return QUESTIONNAIRE_PROFILES.plantation;
  if(n===2)return QUESTIONNAIRE_PROFILES.forestry;
  if(n===3)return QUESTIONNAIRE_PROFILES.fisheries;
  if(c.startsWith("06")||c.startsWith("091"))return QUESTIONNAIRE_PROFILES.migas;
  if(n>=5&&n<=9)return QUESTIONNAIRE_PROFILES.mining;
  if(n>=10&&n<=33)return QUESTIONNAIRE_PROFILES.manufacturing;
  if(n===35)return QUESTIONNAIRE_PROFILES.energy;
  if(n>=36&&n<=39)return QUESTIONNAIRE_PROFILES.water;
  if(n>=41&&n<=43)return QUESTIONNAIRE_PROFILES.construction;
  if(n>=45&&n<=53)return QUESTIONNAIRE_PROFILES.logistics;
  if(n>=55&&n<=56)return QUESTIONNAIRE_PROFILES.hospitality;
  if(n>=61&&n<=63)return QUESTIONNAIRE_PROFILES.digital;
  if(n===68)return QUESTIONNAIRE_PROFILES.realestate;
  if(n>=86&&n<=88)return QUESTIONNAIRE_PROFILES.health;
  return QUESTIONNAIRE_PROFILES.services;
}
function packFor(code){
  const n=parseInt(String(code).slice(0,2),10);
  if(n>=1&&n<=3)return "agriculture";
  if(n>=5&&n<=9)return "extractive";
  if(n>=10&&n<=33)return "manufacturing";
  if(n===35)return "energy";
  if(n>=36&&n<=39)return "water";
  if(n>=41&&n<=43)return "construction";
  if(n>=45&&n<=53)return "logistics";
  if(n>=55&&n<=56)return "hospitality";
  if(n>=61&&n<=63)return "digital";
  if(n===68)return "realestate";
  if(n>=86&&n<=88)return "health";
  return "services";
}
function activePack(){return PACKS[packFor(selectedKbli()?.code||"00")];}
function activeProfile(){return profileForCode(selectedKbli()?.code);}
function isMigas(){return activeProfile()===QUESTIONNAIRE_PROFILES.migas;}
function sectorWasteKeys(){
  const c=selectedKbli()?.code||"";
  if(isMigas())return ["a3301","a3302","b3301","b3302"];
  if(activeProfile()===QUESTIONNAIRE_PROFILES.health)return ["a3371","a3372","a3373","a3374","a3375","b3371","b3372"];
  if(c.startsWith("1042")||c.startsWith("1043"))return ["b3421",...(c==="10423"||["10434","10435","10436","10437"].includes(c)?["b413"]:[])];
  return [];
}
function impactCount(group){return group.items.filter(([key])=>state.impacts.includes(key)).length;}
function hasGroup(key){const g=IMPACT_GROUPS.find(x=>x.key===key);return g&&g.items.some(([id])=>state.impacts.includes(id));}
function officialLink(url,label,className="inline-link"){return `<a class="${className}" href="${url}" target="_blank" rel="noopener noreferrer">${label} ↗</a>`;}
function getPtsp(){
  if(state.regency==="Kota Balikpapan")return {name:"SPONTAN Balikpapan",url:LINKS.ptspBalikpapan};
  if(state.regency==="Kabupaten Kutai Kartanegara")return {name:"DPMPTSP Kukar",url:LINKS.ptspKukar};
  if(state.province==="Kalimantan Timur")return {name:"E-PTSP Kaltim",url:LINKS.ptspKaltim};
  return {name:"OSS / PTSP sesuai kewenangan",url:LINKS.oss};
}

function buildTasks(){
  const ptsp=getPtsp();
  const wasteSummary=state.wasteCodes.map(k=>WASTE_CATALOG[k]).filter(Boolean).map(w=>w.code==="Verifikasi"?w.name:`${w.code} ${w.name}`).join("; ")||"Belum ada kandidat kode dipilih";
  const tasks=[
    {id:"nib",title:"Validasi KBLI, tingkat risiko, dan NIB",cat:"Legalitas",status:"ready",due:"Hari 1",rule:"PP 28/2025",owner:"Legal",reason:"Identitas dan ruang lingkup usaha menentukan perizinan dasar serta kewajiban berikutnya.",evidence:"Kode KBLI, uraian kegiatan, skala, NIB/draf OSS.",system:["OSS",LINKS.oss],ruleUrl:REGULATIONS[0].url},
    {id:"spatial",title:"Unggah polygon dan cek kesesuaian ruang",cat:"Prasyarat",status:"blocked",due:"Hari 2",rule:"Tata ruang pusat/daerah",owner:"GIS",reason:"Koordinat menentukan kewenangan, sensitivitas, dan kesesuaian pemanfaatan ruang.",evidence:"Polygon GeoJSON/KML, luas tapak, dokumen kesesuaian ruang.",system:[state.province==="Kalimantan Timur"?"WebGIS Kaltim":ptsp.name,state.province==="Kalimantan Timur"?LINKS.gisKaltim:ptsp.url],ruleUrl:LINKS.jdihn},
    {id:"screen",title:"Konfirmasi AMDAL / UKL-UPL / SPPL",cat:"Persetujuan lingkungan",status:"ready",due:"Hari 3",rule:"Permen LHK 4/2021",owner:"Environment",reason:"Jenis, skala, dan lokasi kegiatan harus dicocokkan dengan daftar wajib dokumen lingkungan.",evidence:"NIB, KBLI, kapasitas, uraian proses, polygon, hasil penapisan.",system:["AMDALNet",LINKS.amdalnet],ruleUrl:"https://peraturan.go.id/id/permen-lhk-no-4-tahun-2021"},
    {id:"local",title:`Konfirmasi layanan dan kewenangan ${state.regency}`,cat:"Daerah",status:"ready",due:"Hari 3",rule:"PTSP & JDIH daerah",owner:"Legal",reason:"Sebagian proses, rekomendasi, dan ketentuan teknis dipengaruhi lokasi dan kewenangan daerah.",evidence:"Alamat/polygon, identitas pelaku usaha, daftar izin terkait.",system:[ptsp.name,ptsp.url],ruleUrl:LINKS.jdihn}
  ];
  if(hasGroup("wastewater"))tasks.push(
    {id:"ww-map",title:"Inventarisasi dan neraca seluruh aliran air limbah",cat:"Air limbah",status:"ready",due:"Hari 4",rule:"PP 22/2021",owner:"Process",reason:"Setiap aliran perlu sumber, debit, mutu, pengolahan, titik penaatan, dan tujuan pembuangan/pemanfaatan.",evidence:"Water balance, PFD, debit desain, hasil uji, layout IPAL.",system:["AMDALNet",LINKS.amdalnet],ruleUrl:"https://peraturan.go.id/id/pp-no-22-tahun-2021"},
    {id:"ww-pertek",title:"Susun kajian/standar teknis air limbah",cat:"Air limbah",status:"blocked",due:"Hari 12",rule:"Permen LHK 5/2021",owner:"Environment",reason:"Pembuangan atau pemanfaatan air limbah dapat membutuhkan Persetujuan Teknis sesuai jalur yang berlaku.",evidence:"Kajian teknis/standar teknis, desain IPAL, titik penaatan, baku mutu.",system:["AMDALNet",LINKS.amdalnet],ruleUrl:"https://peraturan.go.id/id/permen-lhk-no-5-tahun-2021"},
    {id:"ww-slo",title:"Commissioning, verifikasi, dan SLO air limbah",cat:"Pra-operasi",status:"later",due:"Pra-operasi",rule:"Permen LHK 5/2021",owner:"Operations",reason:"Fasilitas harus sesuai persetujuan teknis sebelum operasi penuh pada jalur yang mensyaratkannya.",evidence:"As-built drawing, SOP, commissioning, hasil uji, bukti kompetensi.",system:["SIMPEL",LINKS.simpel],ruleUrl:"https://peraturan.go.id/id/permen-lhk-no-5-tahun-2021"}
  );
  if(isMigas()&&hasGroup("wastewater"))tasks.push({id:"migas-water",title:"Pisahkan produced water, oily water, hydrotest, dan domestik",cat:"Migas",status:"ready",due:"Hari 5",rule:"Permen LH 19/2010",owner:"Process",reason:"Aliran migas memiliki karakter, parameter, dan jalur pengelolaan yang tidak boleh digabung secara generik.",evidence:"Daftar sumber, debit, karakteristik, flow diagram, titik buang/injeksi.",system:["AMDALNet",LINKS.amdalnet],ruleUrl:"https://peraturan.go.id/id/permenlh-no-19-tahun-2010"});
  if(hasGroup("emission"))tasks.push(
    {id:"air-source",title:"Daftarkan seluruh sumber emisi dan titik pemantauan",cat:"Emisi",status:"ready",due:"Hari 4",rule:"PP 22/2021",owner:"Process",reason:"Boiler, genset, turbin, flare, vent, debu, VOC, dan sumber fugitif memiliki karakter berbeda.",evidence:"Daftar sumber, bahan bakar, kapasitas, jam operasi, koordinat cerobong.",system:["SIMPEL",LINKS.simpel],ruleUrl:"https://peraturan.go.id/id/pp-no-22-tahun-2021"},
    {id:"air-pertek",title:"Tetapkan baku mutu, parameter, frekuensi, dan kebutuhan Pertek",cat:"Emisi",status:"blocked",due:"Hari 10",rule:"Permen LHK 5/2021",owner:"Environment",reason:"Kewajiban mengikuti jenis sumber dan regulasi emisi sektoral yang relevan.",evidence:"Kajian dispersi/teknis bila wajib, data desain, bahan bakar, baku mutu.",system:["AMDALNet",LINKS.amdalnet],ruleUrl:"https://peraturan.go.id/id/permen-lhk-no-5-tahun-2021"},
    {id:"air-report",title:"Siapkan pemantauan dan pelaporan emisi",cat:"Operasi",status:"later",due:"Berkala",rule:"Baku mutu sumber",owner:"Operations",reason:"Pelaporan berkala dan pengujian harus terjadwal sesuai sumber yang aktif.",evidence:"Jadwal sampling, hasil laboratorium, log operasi, laporan elektronik.",system:["SIMPEL",LINKS.simpel],ruleUrl:"https://peraturan.bpk.go.id/Details/235328/permenlhk-no-11-tahun-2021"}
  );
  if(hasGroup("b3"))tasks.push(
    {id:"b3-inventory",title:"Klasifikasi B3, kode limbah, timbulan, dan pengelolaannya",cat:"B3 & limbah B3",status:"ready",due:"Hari 5",rule:"PP 22/2021 · Permen LHK 6/2021",owner:"Environment",reason:`Kandidat saat ini: ${wasteSummary}. Setiap kode harus dikonfirmasi terhadap sumber, bahan, kondisi, dan karakteristik aktual.`,evidence:"SDS, foto/sumber limbah, neraca timbulan, kandidat kode, karakteristik, masa simpan, kontrak pengelola, dan manifest.",system:["SPEED",LINKS.speed],ruleUrl:"https://peraturan.bpk.go.id/Details/161852/pp-no-22-tahun-2021"},
    {id:"b3-storage",title:"Siapkan rincian teknis penyimpanan limbah B3",cat:"B3 & limbah B3",status:"blocked",due:"Hari 14",rule:"Permen LHK 6/2021",owner:"Engineering",reason:"Penyimpanan memerlukan desain, kompatibilitas, kapasitas, simbol/label, tanggap darurat, dan pencatatan.",evidence:"Layout dan desain TPS, SOP, logbook, peralatan darurat, foto fasilitas.",system:["SPEED",LINKS.speed],ruleUrl:"https://peraturan.bpk.go.id/Details/211000/permen-lhk-no-6-tahun-2021/"}
  );
  if(state.impacts.includes("spill"))tasks.push({id:"emergency",title:"Susun program kedaruratan B3 dan limbah B3",cat:"Kedaruratan",status:"ready",due:"Hari 15",rule:state.regency==="Kota Balikpapan"?"Perda Balikpapan 3/2025":"PP 22/2021",owner:"HSE",reason:"Kegiatan dengan produksi, penyimpanan, penggunaan, atau bongkar muat B3 memerlukan kesiapsiagaan yang teruji.",evidence:"Peta risiko, organisasi tanggap darurat, peralatan, prosedur, jadwal latihan.",system:[ptsp.name,ptsp.url],ruleUrl:state.regency==="Kota Balikpapan"?"https://jdih.balikpapan.go.id/dokumen/download/895":"https://peraturan.go.id/id/pp-no-22-tahun-2021"});
  if(hasGroup("solid"))tasks.push({id:"nonb3",title:"Susun neraca dan rencana pengelolaan limbah non-B3",cat:"Limbah non-B3",status:"ready",due:"Hari 7",rule:"Permen LHK 19/2021",owner:"Environment",reason:"Residu perlu ditetapkan status, sumber, volume, penyimpanan, pemanfaatan, dan tujuan akhirnya.",evidence:"Daftar limbah, hasil uji/status, neraca, mitra dan bukti penyerahan.",system:["SIMPEL",LINKS.simpel],ruleUrl:"https://peraturan.go.id/id/permen-lhk-no-19-tahun-2021"});
  if(hasGroup("water"))tasks.push({id:"water-use",title:"Konfirmasi sumber, debit, neraca, dan perizinan penggunaan air",cat:"Sumber daya air",status:"ready",due:"Hari 6",rule:"Aturan sumber daya air",owner:"Project",reason:"Air tanah, air permukaan, air laut, dan pemasok memiliki kewenangan serta dokumen berbeda.",evidence:"Neraca air, koordinat intake/sumur, debit, persetujuan pemasok/izin.",system:[ptsp.name,ptsp.url],ruleUrl:LINKS.jdihn});
  if(hasGroup("location"))tasks.push({id:"location-overlay",title:"Overlay seluruh sensitivitas lokasi",cat:"Lokasi",status:"blocked",due:"Hari 5",rule:"Tata ruang & kawasan",owner:"GIS",reason:"Hutan, konservasi, gambut, karst, pesisir, sempadan, dan kawasan bencana dapat mengubah jalur persetujuan.",evidence:"Polygon, hasil overlay, peta tematik, konfirmasi pengelola kawasan.",system:[state.province==="Kalimantan Timur"?"WebGIS Kaltim":ptsp.name,state.province==="Kalimantan Timur"?LINKS.gisKaltim:ptsp.url],ruleUrl:LINKS.jdihn});
  if(hasGroup("other"))tasks.push({id:"other-impact",title:"Tetapkan baseline dan rencana pengelolaan dampak fisik, hayati, dan sosial",cat:"AMDAL/UKL-UPL",status:"ready",due:"Hari 8",rule:"PP 22/2021",owner:"Environment",reason:"Kebisingan, getaran, bau, lalu lintas, biodiversitas, sosial, GHG, dan pembukaan lahan perlu dikaji sesuai relevansi.",evidence:"Baseline, metode prakiraan, matriks dampak, RKL-RPL atau UKL-UPL.",system:["AMDALNet",LINKS.amdalnet],ruleUrl:"https://peraturan.go.id/id/pp-no-22-tahun-2021"});
  tasks.push({id:"report",title:"Aktifkan kalender pemantauan dan pelaporan berkala",cat:"Operasi",status:"later",due:"Setelah terbit",rule:"Persetujuan proyek",owner:"Compliance",reason:"Frekuensi aktual mengikuti persetujuan lingkungan, Pertek, SLO, dan aturan sektoral/daerah yang terbit.",evidence:"Matriks komitmen, nomor persetujuan, periode laporan, PIC, bukti kirim.",system:["SIMPEL",LINKS.simpel],ruleUrl:"https://peraturan.go.id/id/pp-no-22-tahun-2021"});
  return tasks;
}

const labels=["Profil","Dampak","Lokasi","Hasil","Tracker"];
function heading(n,title,desc,actions=""){return `<div class="heading"><div><span class="kicker">LANGKAH ${n} DARI 5</span><h2>${title}</h2><p>${desc}</p></div>${actions?`<div class="heading-actions">${actions}</div>`:""}</div>`;}
function renderSteps(){document.getElementById("steps").innerHTML=labels.map((x,i)=>`<button class="step ${i===state.step?"active":""} ${i<state.step?"done":""}" data-step="${i}" aria-label="Langkah ${i+1}: ${x}"><span>${i<state.step?"✓":i+1}</span><small>${x}</small></button>`).join("");}
function renderQuestion(q){
  const value=state.answers?.[q.id]??"";
  if(q.type==="select")return `<label class="form-field">${esc(q.label)}<select data-answer="${q.id}"><option value="">Pilih jawaban</option>${q.options.map(x=>`<option ${value===x?"selected":""}>${esc(x)}</option>`).join("")}</select></label>`;
  return `<label class="form-field">${esc(q.label)}<input data-answer="${q.id}" type="${q.type||"text"}" value="${esc(value)}" placeholder="${esc(q.placeholder||"")}"></label>`;
}

function renderProfile(){
  const k=selectedKbli(),profile=activeProfile();
  const selectedCard=k
    ? `<div class="selected-kbli"><span class="kbli-code">${esc(k.code)}</span><div><b>${esc(k.title)}</b><small>${esc(k.description || "Uraian mengikuti KBLI 2025.")}</small></div><button class="icon-button" data-action="remove-kbli" aria-label="Hapus KBLI">×</button></div>`
    : `<div class="empty-note"><b>Belum ada KBLI terpilih</b><p>Cari dan pilih satu hasil untuk membuka penapisan yang sesuai.</p></div>`;
  return heading(1,"Mulai dari KBLI dan jenis kegiatan","Cari seluruh KBLI 2025 langsung dari layanan resmi OSS. Setelah dipilih, EnviroTrack menyesuaikan daftar kegiatan, sumber dampak, dan aturan sektoral.")+
  `<div class="label"><b>KBLI utama</b><small>Wajib · KBLI 2025</small></div>
  <div class="search-wrap"><span class="search-icon">⌕</span><input id="kbli-search" class="searchbox" autocomplete="off" placeholder="Cari kode atau kegiatan, mis. 06100 / minyak / rumah sakit" aria-label="Cari KBLI 2025"><span id="kbli-spinner" class="spinner hide"></span><div id="kbli-suggestions" class="suggestions hide"></div></div>
  <div class="official-line"><span>Seluruh KBLI tersedia melalui pencarian resmi OSS.</span>${officialLink(LINKS.kbli,"Pencarian lengkap OSS")}</div>
  ${selectedCard}
  <details><summary class="helper">API OSS tidak dapat diakses? Masukkan KBLI manual</summary><div class="form-row"><label class="form-field">Kode KBLI<input id="manual-code" maxlength="5" inputmode="numeric" placeholder="Contoh: 06100"></label><label class="form-field">Judul kegiatan<input id="manual-title" placeholder="Nama kegiatan"></label></div><button class="soft" data-action="manual-kbli" style="margin-top:8px">Gunakan KBLI manual</button></details>
  <div class="label"><b>Jenis kegiatan · ${esc(profile.name)}</b><small>Hanya proses yang relevan</small></div><div class="activity-grid">${profile.activities.map(x=>`<button class="activity ${state.activities.includes(x)?"on":""}" data-activity="${esc(x)}"><b>${esc(x)}</b><small>${state.activities.includes(x)?"Dipilih":"Klik untuk memilih"}</small></button>`).join("")}</div>
  ${profile===QUESTIONNAIRE_PROFILES.coconut?`<div class="smart"><span>i</span><div><b>Batas KBLI 01261</b><p>Pengolahan kopra, minyak kelapa, atau produk makanan kelapa bukan bagian kegiatan kebun. Jika ada, tambahkan KBLI 10421, 10422/10423, atau 10793 dan tapis sebagai proses industri terpisah.</p></div></div>`:profile===QUESTIONNAIRE_PROFILES.oilpalm?`<div class="smart"><span>i</span><div><b>Kebun dan pabrik dipisahkan</b><p>KBLI 01262 mencakup pertanian kelapa sawit. Pabrik CPO/CPKO memerlukan KBLI industri terkait, misalnya 10431/10432, dengan satuan dan sumber dampak berbeda.</p></div></div>`:""}
  <div class="form-row"><label class="form-field">Nama proyek<input data-field="projectName" value="${esc(state.projectName)}" placeholder="Nama internal proyek"></label><label class="form-field">Status usaha<select data-field="projectStatus">${["Usaha baru","Pengembangan kapasitas","Perubahan proses/teknologi","Relokasi","Sudah beroperasi"].map(x=>`<option ${state.projectStatus===x?"selected":""}>${x}</option>`).join("")}</select></label></div>
  <div class="form-row"><label class="form-field">Tahap kegiatan<select data-field="stage">${["Survei","Eksplorasi","Konstruksi","Operasi","Ekspansi","Penutupan/pascaoperasi"].map(x=>`<option ${state.stage===x?"selected":""}>${x}</option>`).join("")}</select></label><label class="form-field">${esc(profile.capacityLabel)}<span class="capacity-field"><input data-field="capacity" type="number" min="0" value="${esc(state.capacity)}" placeholder="${esc(profile.placeholder)}"><select data-field="capacityUnit" aria-label="Satuan kapasitas">${profile.units.map(x=>`<option ${state.capacityUnit===x?"selected":""}>${esc(x)}</option>`).join("")}</select></span></label></div>
  <div class="label"><b>Pertanyaan penentu · ${esc(profile.name)}</b><small>Jawaban memicu pertanyaan berikutnya</small></div><div class="form-row dynamic-questions">${profile.questions.map(renderQuestion).join("")}</div>`;
}

function renderImpacts(){
  const profile=activeProfile(),allowed=new Set(profile.impacts);
  const groups=IMPACT_GROUPS.map(g=>({...g,items:state.showAllImpacts?g.items:g.items.filter(([key])=>allowed.has(key))})).filter(g=>g.items.length);
  const waste=[...new Set([...profile.waste,...sectorWasteKeys()])].map(key=>[key,WASTE_CATALOG[key]]).filter(([,x])=>x);
  return heading(2,"Petakan sumber dampak yang relevan",`Daftar sudah disaring untuk ${profile.name}. Pilihan proses dan jawaban profil menentukan sumber yang muncul.`, `<button class="ghost" data-action="toggle-all-impacts">${state.showAllImpacts?"Tampilkan yang relevan":"Lihat semua sumber"}</button>`)+
  `<div class="impact-groups">${groups.map((g,i)=>`<details class="impact-group" ${impactCount(g)||i<2?"open":""}><summary><span class="impact-icon">${g.icon}</span><div><b>${g.name}</b><small>${g.desc}</small></div><span class="count">${impactCount(g)} dipilih</span></summary><div class="subimpact-list">${g.items.map(([key,label])=>`<label class="subimpact"><input type="checkbox" data-impact="${key}" ${state.impacts.includes(key)?"checked":""}> ${label}</label>`).join("")}</div></details>`).join("")}</div>
  ${isMigas()?`<div class="smart"><span>✦</span><div><b>Paket khusus migas aktif</b><p>Produced water, oily drainage, hydrotest, flare, turbin/kompresor, fugitif, LB3, dan potensi tumpahan dipisahkan agar regulasi teknis tidak terlewat.</p></div></div>`:""}
  <details class="waste-panel" ${hasGroup("b3")?"open":""}><summary><div><b>Identifikasi B3 dan limbah B3</b><small>B3 adalah bahan yang digunakan/disimpan; kode berlaku untuk limbah B3 setelah menjadi limbah.</small></div><span class="count">${state.wasteCodes.length} kandidat</span></summary><div class="waste-list">${waste.map(([key,w])=>`<label class="waste-row ${state.wasteCodes.includes(key)?"selected":""}"><input type="checkbox" data-waste="${key}" ${state.wasteCodes.includes(key)?"checked":""}><span class="waste-code ${w.code==="Verifikasi"?"needs-data":""}">${w.code}</span><span><b>${esc(w.name)}</b><small>${esc(w.trigger)}</small></span><em>${w.status}</em></label>`).join("")}</div><div class="waste-foot"><span>Kandidat mengacu Lampiran IX PP 22/2021; kode final harus cocok dengan sumber, bahan, karakteristik, dan kondisi aktual.</span>${officialLink("https://peraturan.bpk.go.id/Details/161852/pp-no-22-tahun-2021","Buka PP 22/2021")}</div></details>
  <div class="label"><b>Proses terpilih · ${esc(profile.name)}</b><small>${state.activities.length} proses</small></div><div class="chips">${state.activities.map(x=>`<span class="chip on">${esc(x)}</span>`).join("")||"<span class='helper'>Kembali ke Profil untuk memilih jenis kegiatan.</span>"}</div>`;
}

function renderLocation(){
  const regs=REGENCIES[state.province]||[];
  const regencyField=regs.length
    ?`<select data-field="regency">${regs.map(x=>`<option ${state.regency===x?"selected":""}>${x}</option>`).join("")}</select>`
    :`<input type="text" data-field="regency" value="${esc(state.regency)}" placeholder="Ketik nama kabupaten/kota" autocomplete="address-level2">`;
  return heading(3,"Tentukan tapak dan kewenangan","Lokasi memicu overlay tata ruang, kawasan sensitif, pembagian kewenangan, serta regulasi provinsi dan kabupaten/kota.")+
  `<div class="map"><span class="island one"></span><span class="island two"></span><span class="island three"></span><span class="pin">●</span><div class="mapbox"><b>Polygon belum diunggah</b><small>GeoJSON atau KML · simulasi prototipe</small><button class="primary" data-action="upload-polygon">Unggah polygon</button></div></div>
  <div class="form-row"><label class="form-field">Provinsi<select data-field="province">${PROVINCES.map(x=>`<option ${state.province===x?"selected":""}>${x}</option>`).join("")}</select><small>38 provinsi Indonesia tersedia</small></label><label class="form-field">Kabupaten / kota${regencyField}<small>${regs.length?"Pilih wilayah tapak":"Ketik sesuai alamat tapak atau polygon"}</small></label></div>
  <div class="checks">${[["estate","Berada di kawasan industri"],["forest-cross","Beririsan kawasan hutan"],["marine-cross","Memakai ruang laut/pesisir"],["cross-admin","Lintas kabupaten/provinsi"],["protected","Dekat kawasan lindung/konservasi"],["river-buffer","Berada dekat sempadan sungai/danau"]].map(([key,label])=>`<label><input type="checkbox" data-location="${key}" ${state.locationFlags.includes(key)?"checked":""}> ${label}</label>`).join("")}</div>
  <div class="smart"><span>i</span><div><b>Lapisan daerah</b><p>${state.province==="Kalimantan Timur"?"Pilot regulasi daerah tersedia untuk Provinsi Kalimantan Timur, Kota Balikpapan, dan Kabupaten Kutai Kartanegara.":"Regulasi lokal daerah ini belum dipetakan di prototipe. Tracker akan menambahkan tugas verifikasi JDIH dan PTSP setempat."}</p></div></div>`;
}

function relevantRules(){
  const ids=["pp28-2025","pp22-2021","plhk4-2021"];
  if(hasGroup("wastewater"))ids.push("plhk5-2021","plh11-2025");
  if(isMigas()&&hasGroup("wastewater"))ids.push("plh19-2010");
  if(hasGroup("emission"))ids.push("plhk11-2021");
  if(hasGroup("b3"))ids.push("plhk6-2021");
  if(hasGroup("solid"))ids.push("plhk19-2021");
  if(state.province==="Kalimantan Timur")ids.push("kaltim1-2014","kaltim2-2020");
  if(state.regency==="Kota Balikpapan")ids.push("bpn24-2016","bpn3-2025");
  if(state.regency==="Kabupaten Kutai Kartanegara")ids.push("kukar5-2014","kukar18-2024");
  return REGULATIONS.filter(r=>ids.includes(r.id));
}
function docRecommendation(){return state.capacity?"AMDAL / UKL-UPL":"Perlu data skala";}
function renderResult(){
  const k=selectedKbli(),t=buildTasks(),rules=relevantRules();
  return `<div class="result-head"><span class="ok">✓</span><div><label>HASIL PENAPISAN INDIKATIF</label><h2>${esc(k?.code||"KBLI belum dipilih")} · ${esc(k?.title||"")}</h2><p>${esc(state.projectStatus)} · ${esc(state.stage)} · ${state.capacity?`${esc(state.capacity)} ${esc(state.capacityUnit)}`:"kapasitas belum diisi"} di ${esc(state.regency)}, ${esc(state.province)}</p></div><div class="confidence"><b>${k&&state.capacity?"86%":"64%"}</b><small>kelengkapan input</small></div></div>
  <div class="stats"><div class="stat"><small>Dokumen lingkungan</small><b>${docRecommendation()}</b><span>Final setelah skala & lokasi dicocokkan</span></div><div class="stat"><small>Platform utama</small><b>OSS + AMDALNet</b><span>PTSP mengikuti kewenangan</span></div><div class="stat"><small>Kewajiban terpicu</small><b>${t.length} tugas</b><span>${state.impacts.length} sumber dampak</span></div></div>
  <div class="alert"><span>!</span><div><b>Hasil indikatif, bukan keputusan instansi</b><p>Ambang skala rinci pada Permen LHK 4/2021 dan sensitivitas polygon tetap harus diverifikasi.</p></div><button class="soft" data-step="2">Lengkapi lokasi</button></div>
  <h3 class="rules-title">Regulasi yang terpicu · ${rules.length}</h3><div class="rules">${rules.map(r=>`<div class="rule"><span class="badge ${r.level==="Nasional"?"general":r.level==="Sektoral"?"sectoral":"local"}">${r.level.toUpperCase()}</span><p><b>${esc(r.title)}</b><small>${esc(r.about)}</small></p>${officialLink(r.url,"Sumber")}</div>`).join("")}</div>`;
}

function taskRows(tasks){
  return `<div class="tasklist">${tasks.map((x,i)=>`<article class="task"><button class="task-main" data-task="${x.id}"><span class="task-state ${x.status}">${x.status==="later"?"◷":x.status==="blocked"?"↳":""}</span><span class="task-copy"><small>${esc(x.cat)}</small><b>${esc(x.title)}</b><em>${esc(x.rule)}</em></span><span class="owner">${esc(x.owner)}</span><span class="due">${esc(x.due)}</span><span>${state.openTask===x.id?"⌃":"⌄"}</span></button>${state.openTask===x.id?`<div class="task-detail"><div><small>MENGAPA WAJIB</small><p>${esc(x.reason)}</p></div><div><small>BUKTI YANG DIBUTUHKAN</small><p>${esc(x.evidence)}</p></div><div class="task-links"><a href="${x.system[1]}" target="_blank" rel="noopener noreferrer">Buka ${esc(x.system[0])} ↗</a><a class="secondary" href="${x.ruleUrl}" target="_blank" rel="noopener noreferrer">Buka aturan ↗</a><button data-action="start-task" data-id="${x.id}">Mulai tugas</button></div></div>`:""}</article>`).join("")}</div>`;
}
function renderTracker(){
  const all=buildTasks(),blocked=all.filter(x=>x.status==="blocked").length,later=all.filter(x=>x.status==="later").length;
  return `<div class="tracker-head"><div><span class="kicker">CHECKLIST PROYEK</span><h2>${esc(state.projectName)} — ${all.length} tugas</h2></div><button class="ghost" data-view="tasks">Lihat semua tugas</button></div><div class="progress"><div class="ring"><b>18%</b></div><div class="progress-info"><b>2 tugas contoh selesai</b><p>${blocked} menunggu prasyarat · ${later} untuk pra-operasi/operasi</p><div class="bar"><span></span></div></div></div>${taskRows(all)}`;
}

function renderContext(){
  const k=selectedKbli(),pack=activePack(),profile=activeProfile(),tasks=buildTasks();
  document.getElementById("context").innerHTML=`<div class="context-title"><span>RINGKASAN PROYEK</span><span>LIVE</span></div><div class="project-card"><span class="sector-icon">${pack.icon}</span><div><b>${esc(state.projectName)}</b><small>${esc(profile.name)}</small></div><em>${esc(k?.code||"—")}</em></div><dl class="facts"><div><dt>Status</dt><dd>${esc(state.projectStatus)}</dd></div><div><dt>Tahap</dt><dd>${esc(state.stage)}</dd></div><div><dt>Kapasitas</dt><dd>${state.capacity?`${esc(state.capacity)} ${esc(state.capacityUnit)}`:"Belum diisi"}</dd></div><div><dt>Lokasi</dt><dd>${esc(state.regency)}</dd></div><div><dt>Sumber dampak</dt><dd>${state.impacts.length} dipilih</dd></div><div><dt>Kandidat LB3</dt><dd>${state.wasteCodes.length}</dd></div></dl><div class="divider"></div><div class="trigger-head"><span>YANG SUDAH TERPICU</span><b>${tasks.length}</b></div><div class="trigger-list"><div class="trigger"><span class="dot green-dot"></span><p><b>Dokumen lingkungan</b><small>AMDAL / UKL-UPL / SPPL ditapis</small></p></div>${hasGroup("wastewater")?'<div class="trigger"><span class="dot blue-dot"></span><p><b>Air limbah</b><small>Inventarisasi, Pertek, dan SLO</small></p></div>':""}${hasGroup("emission")?'<div class="trigger"><span class="dot orange-dot"></span><p><b>Emisi</b><small>Sumber, baku mutu, pemantauan</small></p></div>':""}${hasGroup("b3")?'<div class="trigger"><span class="dot red-dot"></span><p><b>B3 & limbah B3</b><small>Kode kandidat, neraca, TPS, dan manifest</small></p></div>':""}${state.province==="Kalimantan Timur"?'<div class="trigger"><span class="dot purple-dot"></span><p><b>Regulasi daerah</b><small>Pilot Kaltim aktif</small></p></div>':""}</div><div class="divider"></div><div class="legal"><span>§</span><div><b>Dasar aturan transparan</b><p>Tugas memuat sistem tujuan, regulasi, alasan pemicu, dan bukti.</p>${officialLink("#regulasi","Buka basis regulasi")}</div></div><p class="disclaimer">Prototipe pendukung keputusan. Verifikasi tenaga ahli dan keputusan instansi tetap diperlukan.</p>`;
}

function renderScreening(){
  document.getElementById("stepbar").classList.remove("hide");
  document.getElementById("panel-footer").classList.remove("hide");
  document.getElementById("content").className="content";
  renderSteps();
  document.getElementById("screen").innerHTML=[renderProfile,renderImpacts,renderLocation,renderResult,renderTracker][state.step]();
  renderContext();
  const back=document.getElementById("back"),next=document.getElementById("next");
  back.disabled=state.step===0;
  next.innerHTML=(state.step===4?"Buka proyek saya":state.step===3?"Buat checklist":"Lanjutkan")+" <span>→</span>";
}

const demoProjects=[
  {name:"Proyek Migas Kaltim",kbli:"06100",sector:"Pertambangan minyak bumi",location:"Kutai Kartanegara",progress:38,next:"Konfirmasi penapisan AMDAL",status:"Aktif"},
  {name:"Pabrik Pengolahan Pangan",kbli:"10799",sector:"Industri produk makanan",location:"Kabupaten Bekasi",progress:62,next:"Finalisasi kajian air limbah",status:"Aktif"},
  {name:"Rumah Sakit Kota",kbli:"86101",sector:"Aktivitas rumah sakit",location:"Kota Balikpapan",progress:21,next:"Inventaris limbah medis",status:"Draf"}
];
function viewHeader(title,desc,actions=""){return `<div class="view-head"><div><span class="kicker">WORKSPACE ENVIROTRACK</span><h2>${title}</h2><p>${desc}</p></div><div class="view-head-actions">${actions}</div></div>`;}
function renderProjects(){return `<div class="view-shell">${viewHeader("Proyek saya","Pantau progres, kewajiban berikutnya, dan lokasi setiap proyek.",'<button class="primary" data-action="new-project">+ Penapisan baru</button>')}<div class="project-grid">${demoProjects.map((p,i)=>`<article class="project-item"><div class="project-item-head"><div><small>KBLI ${p.kbli}</small><h3>${p.name}</h3><small>${p.sector}</small></div><span class="status ${p.status==="Aktif"?"verified":"reviewing"}">${p.status}</span></div><div class="progress-line"><span style="width:${p.progress}%"></span></div><div class="project-meta"><div><span>Progres</span><b>${p.progress}% selesai</b></div><div><span>Lokasi</span><b>${p.location}</b></div></div><div class="card-actions"><span class="helper">Berikutnya: ${p.next}</span><button class="soft" data-action="open-project" data-index="${i}">Buka proyek →</button></div></article>`).join("")}</div></div>`;}

function renderAllTasks(){
  const all=buildTasks();let shown=all;
  if(state.taskFilter!=="all")shown=all.filter(x=>x.status===state.taskFilter);
  return `<div class="view-shell">${viewHeader("Checklist tugas",`${all.length} kewajiban tersusun dari KBLI, kegiatan, sumber dampak, lokasi, dan tahap proyek.`,'<button class="ghost" data-action="export-checklist">Ekspor checklist</button>')}<div class="view-card"><div class="toolbar"><div class="filter-chips">${[["all","Semua"],["ready","Siap"],["blocked","Terblokir"],["later","Pra-operasi"]].map(([k,l])=>`<button class="filter-chip ${state.taskFilter===k?"active":""}" data-task-filter="${k}">${l}</button>`).join("")}</div><span class="helper">${shown.length} tugas ditampilkan</span></div>${taskRows(shown)}</div></div>`;
}

const DOCUMENTS=[
  ["NIB-2026.pdf","Legalitas","Terverifikasi","12 Agu 2026"],["Polygon-tapak.geojson","Lokasi","Perlu review","14 Agu 2026"],["Neraca-air-v2.xlsx","Air limbah","Draf","18 Agu 2026"],["Layout-TPS-LB3.pdf","Limbah B3","Draf","18 Agu 2026"],["Hasil-uji-emisi.pdf","Emisi","Kadaluarsa 30 hari","02 Agu 2026"],["Matriks-RKL-RPL.xlsx","AMDAL","Belum lengkap","19 Agu 2026"]
];
function renderDocuments(){
  const cats=["Semua",...new Set(DOCUMENTS.map(x=>x[1]))];const docs=state.docFilter==="Semua"?DOCUMENTS:DOCUMENTS.filter(x=>x[1]===state.docFilter);
  return `<div class="view-shell">${viewHeader("Dokumen","Satu tempat untuk bukti, draf, masa berlaku, dan keterkaitannya dengan tugas.",'<button class="primary" data-action="upload-doc">+ Tambah dokumen</button>')}<div class="view-card"><div class="toolbar"><div class="filter-chips">${cats.map(x=>`<button class="filter-chip ${state.docFilter===x?"active":""}" data-doc-filter="${esc(x)}">${esc(x)}</button>`).join("")}</div></div><div class="doc-grid">${docs.map((d,i)=>`<article class="doc-card"><span class="doc-icon">${d[0].split(".").pop().toUpperCase()}</span><span class="doc-copy"><b>${esc(d[0])}</b><small>${esc(d[1])} · ${esc(d[3])}</small><span class="status ${d[2]==="Terverifikasi"?"verified":d[2].includes("Kadaluarsa")?"blocked":"reviewing"}">${esc(d[2])}</span></span><button class="icon-button" data-action="doc-menu" data-index="${i}" aria-label="Menu dokumen">•••</button></article>`).join("")}</div></div></div>`;
}

function renderCalendar(){
  const blanks=5,days=31;const events={3:["Laporan SIMPEL","green"],7:["Uji emisi genset","orange"],12:["Review kajian air limbah","green"],18:["Manifest LB3","orange"],24:["RKL-RPL semester","green"]};
  const cells=Array.from({length:blanks},(_,i)=>`<div class="day muted">${27+i}</div>`).concat(Array.from({length:days},(_,i)=>{const d=i+1,e=events[d];return `<div class="day ${d===21?"today":""}"><b>${d}</b>${e?`<span class="event-dot ${e[1]==="orange"?"orange":""}">${e[0]}</span>`:""}</div>`;}));
  return `<div class="view-shell">${viewHeader("Kalender kepatuhan","Tenggat tugas, pengujian, masa berlaku, dan laporan berkala dalam satu agenda.",'<button class="primary" data-action="add-event">+ Tambah agenda</button>')}<div class="calendar-layout"><div class="calendar"><div class="calendar-head">${["Sen","Sel","Rab","Kam","Jum","Sab","Min"].map(x=>`<span>${x}</span>`).join("")}</div><div class="calendar-grid">${cells.join("")}</div></div><aside class="view-card"><div class="label" style="margin-top:0"><b>Agenda mendatang</b><small>Agustus 2026</small></div><div class="agenda">${[["03 Agu","Laporan pemantauan SIMPEL","Compliance"],["07 Agu","Pengujian emisi genset","Operations"],["12 Agu","Review kajian air limbah","Environment"],["18 Agu","Rekonsiliasi manifest LB3","HSE"],["24 Agu","Laporan RKL-RPL semester","Environment"]].map((x,i)=>`<div class="agenda-item"><span class="dot ${i%2?"orange-dot":"green-dot"}"></span><div><b>${x[1]}</b><small>${x[0]} · ${x[2]}</small></div></div>`).join("")}</div></aside></div></div>`;
}

function renderRegulations(){
  const q=state.regSearch.toLowerCase();let regs=REGULATIONS.filter(r=>(state.regFilter==="Semua"||r.level===state.regFilter)&&(!q||`${r.title} ${r.about} ${r.scope} ${r.location}`.toLowerCase().includes(q)));
  if(state.province!=="Kalimantan Timur")regs=regs.filter(r=>["Nasional","Sektoral"].includes(r.level));
  return `<div class="view-shell">${viewHeader("Basis regulasi","Cari aturan pusat, sektoral, provinsi, dan kabupaten/kota beserta status, alasan relevansi, dan sumber resminya.",officialLink(LINKS.jdihn,"Buka JDIHN","ghost"))}<div class="reg-note"><span>§</span><div><b>Cakupan lokal: ${esc(state.province)}</b><p>${state.province==="Kalimantan Timur"?"Pilot tervalidasi mencakup Kaltim, Balikpapan, dan Kutai Kartanegara. Status tetap diperiksa kembali saat pengajuan.":"Aturan lokal provinsi/kabupaten ini belum dipetakan. Gunakan JDIHN, JDIH daerah, dan PTSP untuk verifikasi."}</p></div><button class="soft" data-view="screening" data-step="2">Ubah lokasi</button></div><div class="view-card"><div class="toolbar"><div class="search-wrap"><span class="search-icon">⌕</span><input id="reg-search" class="searchbox" value="${esc(state.regSearch)}" placeholder="Cari nomor, topik, sektor, atau daerah"></div><select data-field="province" aria-label="Provinsi regulasi">${PROVINCES.map(x=>`<option ${state.province===x?"selected":""}>${x}</option>`).join("")}</select></div><div class="filter-chips">${["Semua","Nasional","Sektoral","Provinsi","Kabupaten","Kota"].map(x=>`<button class="filter-chip ${state.regFilter===x?"active":""}" data-reg-filter="${x}">${x}</button>`).join("")}</div><div style="margin-top:10px">${regs.length?regs.map(r=>`<article class="reg-card"><span class="badge ${r.level==="Nasional"?"general":r.level==="Sektoral"?"sectoral":"local"}">${r.level.toUpperCase()}</span><div class="reg-card-copy"><b>${esc(r.title)}</b><p>${esc(r.about)}</p><small>${esc(r.scope)} · ${esc(r.location)}</small></div><div class="reg-card-side"><span class="status ${r.status==="Berlaku"||r.status.includes("perubahan")?"verified":"reviewing"}">${esc(r.status)}</span>${officialLink(r.url,"Sumber resmi")}</div></article>`).join(""):`<div class="empty-note"><b>Belum ada aturan lokal terpetakan</b><p>Buka JDIHN/JDIH daerah dan tambahkan hasil verifikasi ke proyek.</p>${officialLink(LINKS.jdihn,"Cari di JDIHN")}</div>`}</div></div></div>`;
}

function renderView(){
  const screening=state.view==="screening";
  document.getElementById("stepbar").classList.toggle("hide",!screening);
  document.getElementById("panel-footer")?.classList.toggle("hide",!screening);
  const titles={screening:["PENAPISAN PROYEK",state.step===4?"Tracker proyek":"Proyek baru"],projects:["PORTOFOLIO","Proyek saya"],tasks:["PELAKSANAAN","Checklist tugas"],documents:["EVIDENCE VAULT","Dokumen"],calendar:["JADWAL KEPATUHAN","Kalender"],regulations:["KNOWLEDGE BASE","Basis regulasi"]};
  document.getElementById("page-eyebrow").textContent=titles[state.view][0];document.getElementById("page-title").textContent=titles[state.view][1];
  document.querySelectorAll("[data-view]").forEach(b=>b.classList.toggle("active",b.dataset.view===state.view&&b.closest(".nav")));
  const content=document.getElementById("content");
  if(screening){content.innerHTML=`<section class="panel"><div class="screen" id="screen"></div><footer class="panel-footer" id="panel-footer"><button class="back" id="back">← Kembali</button><span class="note">Hasil menyesuaikan data yang kamu masukkan</span><button class="next" id="next">Lanjutkan <span>→</span></button></footer></section><aside class="context" id="context" aria-label="Ringkasan proyek"></aside>`;renderScreening();}
  else{content.className="content full";content.innerHTML={projects:renderProjects,tasks:renderAllTasks,documents:renderDocuments,calendar:renderCalendar,regulations:renderRegulations}[state.view]();}
  document.getElementById("task-count").textContent=buildTasks().length;
  history.replaceState(null,"",`#${{screening:"penapisan",projects:"proyek",tasks:"tugas",documents:"dokumen",calendar:"kalender",regulations:"regulasi"}[state.view]}`);
  saveState();
}

async function searchKbli(query){
  const list=document.getElementById("kbli-suggestions"),spinner=document.getElementById("kbli-spinner");if(!list||!spinner)return;
  if(query.trim().length<2){list.classList.add("hide");list.innerHTML="";return;}
  spinner.classList.remove("hide");
  const url=`https://gw.oss.go.id/v2/portal/kbli?kategori=semua&search=${encodeURIComponent(query.trim())}&lang=id&localization=id&limit=9&id_version=fff4053d-cbb0-51e9-9dc5-1e85b5740704`;
  try{
    const response=await fetch(url,{headers:{Accept:"application/json"}});if(!response.ok)throw new Error("OSS unavailable");
    const json=await response.json();const results=json?.data?.result||[];
    list.innerHTML=results.length?results.map(r=>{const s=r._source||{},loc=s.localization?.id||{};return `<button class="suggestion" data-kbli-id="${esc(r._id)}" data-kbli-code="${esc(s.kode)}" data-kbli-title="${esc(loc.judul)}" data-kbli-description="${esc(loc.uraian||"")}"><strong>${esc(s.kode)}</strong><div><b>${esc(loc.judul)}</b><small>${esc((loc.uraian||"").slice(0,180))}${(loc.uraian||"").length>180?"…":""}</small></div></button>`;}).join(""):`<div class="empty-note"><b>Tidak ada hasil</b><p>Coba kata kunci lain atau buka pencarian OSS.</p></div>`;
    list.classList.remove("hide");
  }catch{
    list.innerHTML=`<div class="empty-note"><b>Layanan KBLI OSS belum dapat dijangkau</b><p>Gunakan input manual atau buka pencarian resmi OSS.</p>${officialLink(LINKS.kbli,"Buka OSS KBLI")}</div>`;list.classList.remove("hide");
  }finally{spinner.classList.add("hide");}
}

function addTriggeredImpacts(keys=[]){state.impacts=[...new Set([...state.impacts,...keys])];}
function addWasteCodes(keys=[]){state.wasteCodes=[...new Set([...state.wasteCodes,...keys])];}
function removeImpacts(keys=[]){state.impacts=state.impacts.filter(k=>!keys.includes(k));}
function removeWasteCodes(keys=[]){state.wasteCodes=state.wasteCodes.filter(k=>!keys.includes(k));}
function applyAnswerTriggers(id,value){
  if(id==="chemicalUse"&&value.includes("Digunakan")){addTriggeredImpacts(["chemical","packaging",...(value.includes("disimpan")?["storage","spill"]:[])]);addWasteCodes(["b104d"]);if([QUESTIONNAIRE_PROFILES.coconut,QUESTIONNAIRE_PROFILES.oilpalm,QUESTIONNAIRE_PROFILES.plantation].includes(activeProfile()))addWasteCodes(["pesticide-verify"]);}
  if(id==="chemicalUse"&&value==="Tidak digunakan"){removeImpacts(["chemical"]);removeWasteCodes(["b104d","pesticide-verify"]);}
  if(id==="workshop"&&value==="Ada"){addTriggeredImpacts(["usedoil","battery","storage"]);addWasteCodes(["b105d","b110d","a102d"]);}
  if(id==="workshop"&&value==="Tidak ada"){removeImpacts(["usedoil","battery"]);removeWasteCodes(["b105d","b110d","a102d"]);}
  if(id==="irrigation"){if(value==="Air permukaan")addTriggeredImpacts(["surface"]);if(value==="Air tanah")addTriggeredImpacts(["groundwater"]);if(value==="Pemasok/PDAM")addTriggeredImpacts(["municipal"]);}
  if(id==="peatUse"&&value==="Ya")addTriggeredImpacts(["peat"]);
  if(id==="fieldType"&&value.includes("Offshore"))addTriggeredImpacts(["coastal","seawater","dredging"]);
  if(id==="wetProcess"&&value==="Ya")addTriggeredImpacts(["process"]);
  if(id==="wetProcess"&&value==="Tidak")removeImpacts(["process"]);
  if(id==="thermalProcess"&&value==="Ada")addTriggeredImpacts(["boiler","vent"]);
  if(id==="thermalProcess"&&value==="Tidak ada")removeImpacts(["boiler","vent"]);
  if(id==="dewatering"&&value==="Ada")addTriggeredImpacts(["process","surface"]);
  if(id==="batching"&&value==="Ada")addTriggeredImpacts(["process","dust"]);
  if(id==="workshop"&&value==="Ada")addTriggeredImpacts(["oily"]);
  if(id==="marine"&&value==="Ada")addTriggeredImpacts(["coastal","seawater","dredging"]);
  if(id==="lab"&&value==="Ada")addTriggeredImpacts(["laboratory","chemical"]);
  if(id==="medicalTreatment"&&value==="Insinerator")addTriggeredImpacts(["incinerator"]);
  if(id==="feed"&&value.includes("Digunakan")){addTriggeredImpacts(["chemical","packaging",...(value.includes("disimpan")?["storage"]:[])]);addWasteCodes(["b104d"]);}
  if(id==="slaughter"&&value==="Ada")addTriggeredImpacts(["process","organic","odor"]);
  if(id==="laundry"&&value==="Ada")addTriggeredImpacts(["process","chemical"]);
  if(id==="kitchen"&&value==="Ada")addTriggeredImpacts(["oily","organic","odor"]);
  if(id==="genset"&&value==="Ada"){addTriggeredImpacts(["genset","usedoil","battery"]);addWasteCodes(["b105d","b110d","a102d"]);}
  if(id==="estateIpal"&&value==="Ada")addTriggeredImpacts(["domestic","process","sewage-sludge"]);
  if(id==="cargo"&&(value==="B3/kimia"||value==="BBM/migas"))addTriggeredImpacts(["chemical","storage","spill","voc"]);
  if(id==="facilityType"&&value==="Pengelolaan sampah")addTriggeredImpacts(["leachate","odor","residue"]);
}
function setKbli(data){
  state.kblis=[data];const profile=profileForCode(data.code);
  state.activities=profile.activities.slice(0,3);state.capacity="";state.capacityUnit=profile.units[0];state.answers={};state.impacts=[...profile.defaults];state.wasteCodes=profile===QUESTIONNAIRE_PROFILES.migas?["b105d","b110d"]:[];state.showAllImpacts=false;
  state.projectName=data.title;saveState();renderView();showToast(`KBLI ${data.code} dipilih. Pertanyaan, satuan, dampak, dan kandidat limbah sudah disesuaikan.`);
}
function updateField(el){
  const key=el.dataset.field;if(!key)return;state[key]=el.value;
  if(key==="province")state.regency=(REGENCIES[state.province]||[])[0]||"";
  saveState();renderView();
}

document.addEventListener("input",e=>{
  if(e.target.id==="kbli-search"){clearTimeout(searchTimer);searchTimer=setTimeout(()=>searchKbli(e.target.value),350);}
  if(e.target.id==="reg-search"){state.regSearch=e.target.value;clearTimeout(searchTimer);searchTimer=setTimeout(()=>renderView(),250);}
  if(e.target.matches("[data-field][type='text'],[data-field]:not(select)")){state[e.target.dataset.field]=e.target.value;saveState();}
  if(e.target.matches("input[data-answer]")){state.answers[e.target.dataset.answer]=e.target.value;saveState();}
});
document.addEventListener("change",e=>{
  if(e.target.matches("select[data-field]"))updateField(e.target);
  if(e.target.matches("select[data-answer]")){const id=e.target.dataset.answer;state.answers[id]=e.target.value;applyAnswerTriggers(id,e.target.value);saveState();renderView();}
  if(e.target.matches("[data-impact]")){const k=e.target.dataset.impact;state.impacts=e.target.checked?[...new Set([...state.impacts,k])]:state.impacts.filter(x=>x!==k);saveState();renderView();}
  if(e.target.matches("[data-waste]")){const k=e.target.dataset.waste;state.wasteCodes=e.target.checked?[...new Set([...state.wasteCodes,k])]:state.wasteCodes.filter(x=>x!==k);addTriggeredImpacts(e.target.checked?["storage"]:[]);saveState();renderView();}
  if(e.target.matches("[data-location]")){const k=e.target.dataset.location;state.locationFlags=e.target.checked?[...new Set([...state.locationFlags,k])]:state.locationFlags.filter(x=>x!==k);saveState();}
});
document.addEventListener("click",e=>{
  const viewEl=e.target.closest("[data-view]");if(viewEl){e.preventDefault();state.view=viewEl.dataset.view;if(viewEl.dataset.step!==undefined)state.step=+viewEl.dataset.step;renderView();return;}
  const step=e.target.closest("[data-step]");if(step){state.view="screening";state.step=+step.dataset.step;renderView();return;}
  const result=e.target.closest("[data-kbli-code]");if(result){setKbli({id:result.dataset.kbliId,code:result.dataset.kbliCode,title:result.dataset.kbliTitle,description:result.dataset.kbliDescription});return;}
  const activity=e.target.closest("[data-activity]");if(activity){const k=activity.dataset.activity,adding=!state.activities.includes(k);state.activities=adding?[...state.activities,k]:state.activities.filter(x=>x!==k);if(adding){const triggers=ACTIVITY_TRIGGERS[k]||[];addTriggeredImpacts(triggers);if(triggers.includes("usedoil"))addWasteCodes(["b105d","b110d"]);if(triggers.includes("chemical")||triggers.includes("packaging"))addWasteCodes(["b104d"]);if(triggers.includes("battery"))addWasteCodes(["a102d","b107d"]);}saveState();renderView();return;}
  const task=e.target.closest("[data-task]");if(task&&!e.target.closest("a")){state.openTask=state.openTask===task.dataset.task?null:task.dataset.task;renderView();return;}
  const tf=e.target.closest("[data-task-filter]");if(tf){state.taskFilter=tf.dataset.taskFilter;renderView();return;}
  const rf=e.target.closest("[data-reg-filter]");if(rf){state.regFilter=rf.dataset.regFilter;renderView();return;}
  const df=e.target.closest("[data-doc-filter]");if(df){state.docFilter=df.dataset.docFilter;renderView();return;}
  const action=e.target.closest("[data-action]");if(!action)return;
  const a=action.dataset.action;
  if(a==="save")saveState(false);
  if(a==="toggle-all-impacts"){state.showAllImpacts=!state.showAllImpacts;renderView();}
  if(a==="remove-kbli"){state.kblis=[];state.activities=[];renderView();}
  if(a==="manual-kbli"){const code=document.getElementById("manual-code")?.value.trim(),title=document.getElementById("manual-title")?.value.trim();if(!/^\d{2,5}$/.test(code||"")||!title)return showToast("Isi kode angka dan judul kegiatan terlebih dahulu.");setKbli({id:`manual-${code}`,code,title,description:"KBLI dimasukkan manual — verifikasi uraian pada OSS."});}
  if(a==="upload-polygon")showToast("Unggah polygon adalah simulasi. Integrasi berkas akan ditambahkan di versi backend.");
  if(a==="start-task")showToast("Tugas ditandai mulai. Bukti dapat ditambahkan di menu Dokumen.");
  if(a==="new-project"){state.view="screening";state.step=0;renderView();}
  if(a==="open-project"){const p=demoProjects[+action.dataset.index];state.projectName=p.name;state.view="screening";state.step=4;renderView();}
  if(a==="upload-doc")showToast("Pemilih dokumen akan terhubung ke penyimpanan aman pada versi backend.");
  if(a==="doc-menu")showToast("Aksi dokumen: pratinjau, ganti versi, tautkan ke tugas, atau arsipkan.");
  if(a==="add-event")showToast("Form agenda akan menyimpan tenggat dan pengingat pada versi backend.");
  if(a==="export-checklist")showToast("Checklist siap diekspor setelah integrasi akun dan penyimpanan diaktifkan.");
});

document.addEventListener("click",e=>{if(!e.target.closest(".search-wrap")){document.getElementById("kbli-suggestions")?.classList.add("hide");}});
window.addEventListener("hashchange",()=>{
  const map={"#penapisan":"screening","#proyek":"projects","#tugas":"tasks","#dokumen":"documents","#kalender":"calendar","#regulasi":"regulations"};
  const v=map[location.hash];if(v&&v!==state.view){state.view=v;renderView();}
});
document.addEventListener("DOMContentLoaded",()=>{
  const map={"#penapisan":"screening","#proyek":"projects","#tugas":"tasks","#dokumen":"documents","#kalender":"calendar","#regulasi":"regulations"};if(map[location.hash])state.view=map[location.hash];
  renderView();
});
document.addEventListener("click",e=>{
  if(e.target.closest("#back")){state.step=Math.max(0,state.step-1);renderView();}
  if(e.target.closest("#next")){
    if(state.step===0&&(!selectedKbli()||!state.capacity||!state.capacityUnit||!state.activities.length)){showToast("Pilih KBLI, sedikitnya satu kegiatan, lalu isi kapasitas dan satuannya.");return;}
    if(state.step===1&&!state.impacts.length){showToast("Pilih sedikitnya satu sumber dampak yang benar-benar ada.");return;}
    if(state.step===4){state.view="projects";}else state.step=Math.min(4,state.step+1);renderView();
  }
});
