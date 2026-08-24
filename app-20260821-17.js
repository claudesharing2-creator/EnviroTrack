"use strict";

const LINKS = {
  ahu: "https://ahu.go.id/",
  coretax: "https://coretaxdjp.pajak.go.id/",
  oss: "https://oss.go.id/",
  kbli: "https://oss.go.id/id/kbli",
  amdalnet: "https://amdalnet.kemenlh.go.id/",
  simpel: "https://simpel.kemenlh.go.id/",
  speed: "https://plb3.kemenlh.go.id/",
  jdihn: "https://jdihn.go.id/",
  wilayahRef: "https://jdih.acehprov.go.id/dih/detail/82fbc6e4-ea70-442c-8f28-4406b2d20b6d",
  ptspKaltim: "https://e-ptsp.kaltimprov.go.id/",
  dpmptspKaltim: "https://dpmptsp.kaltimprov.go.id/",
  gisKaltim: "https://e-ptsp.kaltimprov.go.id/gis/",
  ptspBalikpapan: "https://spontan.balikpapan.go.id/",
  dpmptspBalikpapan: "https://investasi.balikpapan.go.id/",
  ptspKukar: "https://dpmptsp.kukarkab.go.id/website/sp-sop"
};

const OFFICIAL_MAP_LAYERS = [
  {id:"admin-kabkota-big",title:"Batas administrasi kabupaten/kota · BIG",scope:"Administrasi",serviceType:"ArcGIS REST MapServer",endpoint:"https://geoservices.big.go.id/rbi/rest/services/BATASWILAYAH/BATAS_KABKOTA_LN/MapServer",layerName:"0",publisher:"Badan Informasi Geospasial (BIG)",legalBasis:"Dataset batas wilayah administrasi nasional BIG",officialUrl:"https://geoservices.big.go.id/portal/apps/webappviewer/index.html?id=49bda2cefd3f4b92aa726300bcdb40f7",coverage:"Indonesia",crs:"EPSG:4326",dataDate:"Edisi Juni 2026",verifiedAt:"24 Agu 2026",status:"active",defaultVisible:false,geometryType:"polyline",adminRole:"context-only"},
  {id:"rtr-rdtr-kaltim",title:"RTR/RDTR · Kalimantan Timur",scope:"Tata ruang",serviceType:"WMS",endpoint:"",layerName:"",publisher:"ATR/BPN atau walidata pemda",legalBasis:"Peraturan RTR/RDTR yang berlaku",officialUrl:"https://bhumi.atrbpn.go.id/",coverage:"Kalimantan Timur",crs:"Perlu konfirmasi",status:"not-configured",defaultVisible:false},
  {id:"rtr-ksn-ikn",title:"RTR KSN IKN · Kawasan lindung & budi daya",scope:"Tata ruang",serviceType:"WMS",endpoint:"https://geodata.ikn.go.id/geoserver/ows",layerName:"geonode:rtr_ksn",publisher:"Otorita Ibu Kota Nusantara (OIKN)",legalBasis:"RTR KSN IKN 2024–2044",officialUrl:"https://satudata.ikn.go.id/dataset/kawasan-lindung-dan-kawasan-budi-daya-rtr-ksn-ikn/resource/e46e33a6-6364-4622-8dd2-372b16636def?inner_span=True",coverage:"IKN",crs:"EPSG:4326 / CRS:84",dataDate:"29 Jul 2026",verifiedAt:"24 Agu 2026",featureInfoStatus:"public-probe-ok",status:"active",defaultVisible:false},
  {id:"rdtr-ikn-wp5-drainase",title:"RDTR · Jaringan drainase WP 5 IKN Timur 2",scope:"RDTR / struktur ruang",serviceType:"WMS",endpoint:"https://geodata.ikn.go.id/geoserver/ows",layerName:"geonode:rdtr_wp5_ln_sr_drainase",publisher:"Otorita Ibu Kota Nusantara (OIKN)",legalBasis:"Dataset RDTR WP 5 IKN Timur 2",officialUrl:"https://satudata.ikn.go.id/dataset/rdtr-struktur-ruang-jaringan-drainase-wp-5-ikn-timur-2",coverage:"WP 5 IKN Timur 2",crs:"EPSG:4326 / CRS:84",dataDate:"Metadata katalog OIKN",verifiedAt:"24 Agu 2026",featureInfoStatus:"public-probe-ok",status:"active",defaultVisible:false},
  {id:"kawasan-hutan-sigap",title:"Kawasan hutan · SIGAP",scope:"Kawasan sensitif",serviceType:"WMS",endpoint:"https://sigap.kehutanan.go.id/sigap-forge-geoserver-2026/sigap/wms",layerName:"kwshutan_ar_250k_des2025",publisher:"Kementerian Kehutanan · SIGAP",legalBasis:"Data Kawasan Hutan pada portal SIGAP",officialUrl:"https://sigap.kehutanan.go.id/sigap-peta-interaktif-2026",coverage:"Indonesia",crs:"EPSG:4326 / CRS:84",dataDate:"Portal update Juni 2026; layer id Des 2025",verifiedAt:"24 Agu 2026",featureInfoStatus:"access-review",status:"active",defaultVisible:false},
  {id:"mangrove-sigap",title:"Mangrove · SIGAP",scope:"Kawasan sensitif",serviceType:"WMS",endpoint:"https://sigap.kehutanan.go.id/sigap-forge-geoserver-2026/sigap/wms",layerName:"mangrove_ar_25k_24",publisher:"Kementerian Kehutanan · SIGAP",legalBasis:"Layer mangrove pada portal SIGAP",officialUrl:"https://sigap.kehutanan.go.id/sigap-peta-interaktif-2026",coverage:"Indonesia",crs:"EPSG:4326 / CRS:84",dataDate:"Layer id 2024",verifiedAt:"24 Agu 2026",featureInfoStatus:"access-review",status:"active",defaultVisible:false},
  {id:"kawasan-hutan-konservasi",title:"Kawasan konservasi lain",scope:"Kawasan sensitif",serviceType:"WMS",endpoint:"",layerName:"",publisher:"Walidata kehutanan/lingkungan",legalBasis:"Dataset resmi sesuai metadata walidata",officialUrl:"https://onemap.big.go.id/",coverage:"Perlu konfirmasi",crs:"Perlu konfirmasi",status:"not-configured",defaultVisible:false},
  {id:"gambut-pesisir-sempadan",title:"Gambut, pesisir & sempadan",scope:"Kawasan sensitif",serviceType:"WMS",endpoint:"",layerName:"",publisher:"Walidata sektoral/daerah",legalBasis:"Dataset resmi sesuai metadata walidata",officialUrl:"https://onemap.big.go.id/",coverage:"Perlu konfirmasi",crs:"Perlu konfirmasi",status:"not-configured",defaultVisible:false}
];
window.ENVIRO_OFFICIAL_MAP_LAYERS = OFFICIAL_MAP_LAYERS;
const GIS_SOURCE_PATHWAYS = [
  {id:"big",name:"Ina-Geoportal / BIG",purpose:"Katalog metadata dan simpul jaringan geospasial nasional",url:"https://tanahair.indonesia.go.id/",recipient:"BIG atau walidata pemilik dataset"},
  {id:"esdm",name:"ESDM One Map",purpose:"Service publik WMS, WMTS, dan ArcGIS REST sektor energi/mineral",url:"https://geoportal.esdm.go.id/home/portal",recipient:"Walidata geospasial Kementerian ESDM"},
  {id:"sigap",name:"SIGAP Kehutanan",purpose:"Peta dan IGT kehutanan, termasuk kawasan hutan",url:"https://sigap.kehutanan.go.id/",recipient:"Walidata Kementerian Kehutanan"},
  {id:"kkp",name:"Portal Satu Data KKP",purpose:"Metadata dan data kelautan, pesisir, serta konservasi",url:"https://portaldata.kkp.go.id/",recipient:"Walidata Kementerian Kelautan dan Perikanan"},
  {id:"regional",name:"Walidata/PPID daerah",purpose:"RTRW/RDTR, sempadan, kawasan lindung, dan aturan daerah",url:"https://ppid.big.go.id/",recipient:"Walidata tata ruang atau PPID instansi pemilik data"}
];
const REGULATIONS = [
  {id:"uu32-2009",level:"Nasional",scope:"Payung lingkungan",title:"UU 32 Tahun 2009 jo. UU 6 Tahun 2023",about:"Payung perlindungan dan pengelolaan lingkungan hidup, termasuk perubahan melalui rezim Cipta Kerja.",status:"Berlaku dengan perubahan",verified:true,checked:"21 Agu 2026",location:"Indonesia",province:"",url:"https://peraturan.bpk.go.id/Details/38771/uu-no-32-tahun-2009"},
  {id:"pp28-2025",level:"Nasional",scope:"Perizinan berusaha",title:"PP 28 Tahun 2025",about:"Penyelenggaraan Perizinan Berusaha Berbasis Risiko, termasuk persyaratan dasar, PB, PB UMKU, OSS, pengawasan, dan sanksi; mencabut PP 5 Tahun 2021.",status:"Berlaku",verified:true,checked:"23 Agu 2026",location:"Indonesia",province:"",url:"https://peraturan.go.id/id/pp-no-28-tahun-2025"},
  {id:"pp22-2021",level:"Nasional",scope:"Lingkungan",title:"PP 22 Tahun 2021",about:"Penyelenggaraan perlindungan dan pengelolaan lingkungan hidup; dasar persetujuan lingkungan, Pertek, SLO, mutu air, udara, dan limbah.",status:"Berlaku",verified:true,checked:"21 Agu 2026",location:"Indonesia",province:"",url:"https://peraturan.go.id/id/pp-no-22-tahun-2021"},
  {id:"plhk4-2021",level:"Nasional",scope:"Penapisan",title:"Permen LHK 4 Tahun 2021",about:"Daftar usaha dan/atau kegiatan yang wajib AMDAL, UKL-UPL, atau SPPL.",status:"Berlaku",verified:true,checked:"21 Agu 2026",location:"Indonesia",province:"",url:"https://peraturan.go.id/id/permen-lhk-no-4-tahun-2021"},
  {id:"plhk5-2021",level:"Nasional",scope:"Pertek dan SLO",title:"Permen LHK 5 Tahun 2021",about:"Tata cara penerbitan persetujuan teknis dan surat kelayakan operasional bidang pengendalian pencemaran.",status:"Berlaku",verified:true,checked:"21 Agu 2026",location:"Indonesia",province:"",url:"https://jdih.kemenkoinfra.go.id/id/peraturan-menteri-lingkungan-hidup-dan-kehutanan-no-5-tahun-2021"},
  {id:"plhk6-2021",level:"Nasional",scope:"Limbah B3",title:"Permen LHK 6 Tahun 2021",about:"Tata cara dan persyaratan pengelolaan limbah bahan berbahaya dan beracun.",status:"Berlaku",verified:true,checked:"21 Agu 2026",location:"Indonesia",province:"",url:"https://jdih.kemenkoinfra.go.id/id/peraturan-menteri-lingkungan-hidup-dan-kehutanan-no-6-tahun-2021"},
  {id:"plh22-2025",level:"Nasional",scope:"Kewenangan",title:"Permen LH/BPLH 22 Tahun 2025",about:"Kewenangan penerbitan Persetujuan Lingkungan antara pemerintah pusat, provinsi, dan kabupaten/kota.",status:"Berlaku",verified:true,checked:"23 Agu 2026",location:"Indonesia",province:"",url:"https://peraturan.go.id/id/permenklhbph-no-22-tahun-2025"},
  {id:"plh6-2026",level:"Nasional",scope:"Pengawasan dan sanksi",title:"Permen LH/BPLH 6 Tahun 2026",about:"Pengawasan dan sanksi administratif bidang lingkungan hidup untuk pengendalian dan pemenuhan kewajiban setelah persetujuan terbit.",status:"Berlaku",verified:true,checked:"23 Agu 2026",location:"Indonesia",province:"",url:"https://peraturan.go.id/id/permenklhbph-no-6-tahun-2026"},
  {id:"plh11-2025",level:"Nasional",scope:"Air limbah domestik",title:"Permen LH/BPLH 11 Tahun 2025",about:"Baku mutu air limbah dan standar teknologi pengolahan air limbah domestik.",status:"Berlaku",verified:true,checked:"23 Agu 2026",location:"Indonesia",province:"",url:"https://peraturan.go.id/id/permenklhbph-no-11-tahun-2025"},
  {id:"plh19-2010",level:"Sektoral",scope:"Migas",title:"Permen LH 19 Tahun 2010",about:"Baku mutu air limbah bagi usaha dan/atau kegiatan minyak dan gas serta panas bumi.",status:"Perlu konfirmasi penerapan",verified:true,checked:"21 Agu 2026",location:"Indonesia",province:"",url:"https://peraturan.go.id/id/permenlh-no-19-tahun-2010"},
  {id:"plhk11-2021",level:"Sektoral",scope:"Emisi",title:"Permen LHK 11 Tahun 2021",about:"Baku mutu emisi mesin dengan pembakaran dalam.",status:"Berlaku",verified:true,checked:"21 Agu 2026",location:"Indonesia",province:"",url:"https://peraturan.bpk.go.id/Details/235328/permenlhk-no-11-tahun-2021"},
  {id:"plhk19-2021",level:"Nasional",scope:"Limbah non-B3",title:"Permen LHK 19 Tahun 2021",about:"Tata cara pengelolaan limbah nonbahan berbahaya dan beracun.",status:"Berlaku",verified:true,checked:"21 Agu 2026",location:"Indonesia",province:"",url:"https://peraturan.go.id/id/permen-lhk-no-19-tahun-2021"},
  {id:"kaltim1-2014",level:"Provinsi",scope:"Lingkungan",title:"Perda Kalimantan Timur 1 Tahun 2014",about:"Perlindungan dan pengelolaan lingkungan hidup di Provinsi Kalimantan Timur.",status:"Berlaku",verified:true,checked:"21 Agu 2026",location:"Kalimantan Timur",province:"Kalimantan Timur",url:"https://peraturan.bpk.go.id/Details/21121/perda-prov-kalimantan-timur-no-1-tahun-2014"},
  {id:"kaltim2-2020",level:"Provinsi",scope:"RPPLH",title:"Perda Kalimantan Timur 2 Tahun 2020",about:"Rencana Perlindungan dan Pengelolaan Lingkungan Hidup Provinsi Kalimantan Timur.",status:"Berlaku",verified:true,checked:"21 Agu 2026",location:"Kalimantan Timur",province:"Kalimantan Timur",url:"https://peraturan.bpk.go.id/Details/176244/perda-prov-kalimantan-timur-no-2-tahun-2020"},
  {id:"bpn24-2016",level:"Kota",scope:"Air limbah domestik",title:"Perwali Balikpapan 24 Tahun 2016",about:"Pengelolaan air limbah domestik; termasuk kewajiban pengelolaan bagi usaha dan grease trap untuk kegiatan tertentu.",status:"Periksa status saat pengajuan",verified:true,checked:"21 Agu 2026",location:"Kota Balikpapan",province:"Kalimantan Timur",url:"https://jdih.balikpapan.go.id/dokumen/download/181"},
  {id:"bpn3-2025",level:"Kota",scope:"B3 dan Limbah B3",title:"Perda Balikpapan 3 Tahun 2025",about:"Kedaruratan penanggulangan B3 dan limbah B3, program darurat, pelaporan, dan latihan.",status:"Berlaku",verified:true,checked:"21 Agu 2026",location:"Kota Balikpapan",province:"Kalimantan Timur",url:"https://jdih.balikpapan.go.id/dokumen/895/detail"},
  {id:"kukar5-2014",level:"Kabupaten",scope:"Lingkungan",title:"Perda Kutai Kartanegara 5 Tahun 2014 jo. Perda 8 Tahun 2024",about:"Perlindungan dan pengelolaan lingkungan hidup Kabupaten Kutai Kartanegara beserta perubahannya.",status:"Berlaku dengan perubahan",verified:true,checked:"21 Agu 2026",location:"Kabupaten Kutai Kartanegara",province:"Kalimantan Timur",url:"https://jdih.kukarkab.go.id/produk-hukum/peraturan/perubahan-atas-peraturan-daerah-kutai-kartanegara-nomor-5-tahun-2014-tentang-perlindungan-dan-pengelolaan-lingkungan-hidup"},
  {id:"kukar18-2024",level:"Kabupaten",scope:"Air limbah domestik",title:"Perda Kutai Kartanegara 18 Tahun 2024",about:"Pengelolaan dan penyelenggaraan sistem air limbah domestik di Kabupaten Kutai Kartanegara.",status:"Berlaku",verified:true,checked:"21 Agu 2026",location:"Kabupaten Kutai Kartanegara",province:"Kalimantan Timur",url:"https://jdih.kukarkab.go.id/produk-hukum/peraturan/peraturan-daerah-kabupaten-kutai-kartanegara-nomor-18-tahun-2024-tentang-pengelolaan"}
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
  social:["noise","traffic","flora","fauna","social","ghg","land-clearing","erosion","sedimentation","hydrology","landscape","light","heat","human-wildlife"]
};
const QUESTIONNAIRE_PROFILES = {
  coconut:{name:"Pertanian kelapa",capacityLabel:"Luas areal yang dikelola",units:["ha","pohon produktif","ton kelapa/tahun"],placeholder:"Contoh: 250",activities:["Penyiapan/pembukaan lahan","Pembibitan kelapa","Penanaman & penyulaman","Pemupukan","Pengendalian hama/pestisida","Pemanenan","Pascapanen di kebun","Jalan, drainase & workshop"],questions:[{id:"landStatus",label:"Status lahan",type:"select",options:["APL","Kawasan hutan/pelepasan","Belum diketahui"]},{id:"chemicalUse",label:"Pupuk/pestisida kimia",type:"select",options:["Digunakan dan disimpan","Digunakan tanpa penyimpanan","Tidak digunakan"]},{id:"workshop",label:"Workshop/genset di lokasi",type:"select",options:["Ada","Tidak ada"]}],impacts:["domestic","runoff","usedoil","chemical","battery","storage","spill","packaging","organic","domestic-solid","groundwater","surface","municipal",...PROFILE_COMMON.location,...PROFILE_COMMON.social],defaults:["runoff","packaging","organic","flora","fauna","land-clearing"],waste:["b104d","b105d","b107d","b110d","a102d","pesticide-verify"]},
  oilpalm:{name:"Pertanian kelapa sawit",capacityLabel:"Luas kebun inti + plasma",units:["ha","ton TBS/tahun","pohon produktif"],placeholder:"Contoh: 5.000",activities:["Penyiapan/pembukaan lahan","Pembibitan kelapa sawit","Penanaman & penyulaman","Pemupukan","Pengendalian hama/pestisida","Pemanenan TBS","Pascapanen di kebun","Jalan, drainase & workshop"],questions:[{id:"landStatus",label:"Status lahan",type:"select",options:["APL","Kawasan hutan/pelepasan","Belum diketahui"]},{id:"peatUse",label:"Berada pada lahan gambut",type:"select",options:["Ya","Tidak","Belum diketahui"]},{id:"chemicalUse",label:"Pupuk/pestisida kimia",type:"select",options:["Digunakan dan disimpan","Digunakan tanpa penyimpanan","Tidak digunakan"]}],impacts:["domestic","runoff","usedoil","chemical","battery","storage","spill","packaging","organic","domestic-solid","groundwater","surface","municipal",...PROFILE_COMMON.location,...PROFILE_COMMON.social],defaults:["runoff","packaging","organic","flora","fauna","land-clearing"],waste:["b104d","b105d","b107d","b110d","a102d","pesticide-verify"]},
  plantation:{name:"Pertanian/perkebunan",capacityLabel:"Luas areal kegiatan",units:["ha","ton produk/tahun","batang/pohon"],placeholder:"Contoh: 1.200",activities:["Penyiapan/pembukaan lahan","Pembibitan","Penanaman","Pemupukan","Pengendalian hama/pestisida","Irigasi","Pemanenan","Pascapanen di kebun"],questions:[{id:"landStatus",label:"Status lahan",type:"select",options:["APL","Kawasan hutan/pelepasan","Belum diketahui"]},{id:"chemicalUse",label:"Pupuk/pestisida kimia",type:"select",options:["Digunakan dan disimpan","Digunakan tanpa penyimpanan","Tidak digunakan"]},{id:"irrigation",label:"Sumber irigasi",type:"select",options:["Tidak ada","Air permukaan","Air tanah","Pemasok/PDAM"]}],impacts:["domestic","runoff","usedoil","chemical","battery","storage","spill","packaging","organic","domestic-solid","groundwater","surface","municipal",...PROFILE_COMMON.location,...PROFILE_COMMON.social],defaults:["runoff","organic","flora","fauna"],waste:["b104d","b105d","b107d","b110d","a102d","pesticide-verify"]},
  migas:{name:"Pertambangan minyak dan gas",capacityLabel:"Kapasitas produksi desain",units:["BOPD","MMSCFD","BOEPD","sumur"],placeholder:"Contoh: 45.000",activities:["Survei/seismik","Eksplorasi/pengeboran","Konstruksi fasilitas","Produksi minyak/gas","Separasi & treatment","Pipa & gathering","Terminal/penyimpanan","Penutupan/pascaoperasi"],questions:[{id:"fieldType",label:"Tipe lapangan",type:"select",options:["Onshore","Offshore","Onshore dan offshore"]},{id:"wellCount",label:"Jumlah sumur",type:"number",placeholder:"Contoh: 24"},{id:"injection",label:"Injeksi produced water",type:"select",options:["Ya","Tidak","Belum ditentukan"]}],impacts:["domestic","process","produced","oily","cooling","blowdown","hydrotest","runoff","laboratory","boiler","genset","turbine","flare","vent","voc","fugitive","dust","usedoil","sludge","chemical","catalyst","battery","soil","storage","spill","residue","scrap","packaging","domestic-solid","groundwater","surface","seawater","municipal","reuse",...PROFILE_COMMON.location,...PROFILE_COMMON.social,"odor","vibration","dredging"],defaults:["produced","oily","flare","fugitive","usedoil","sludge","storage","spill","flora","fauna","ghg"],waste:["b104d","b105d","b107d","b109d","b110d","a102d","sector-verify"]},
  mining:{name:"Pertambangan dan penggalian",capacityLabel:"Kapasitas produksi/penambangan",units:["ton/tahun","juta ton/tahun","BCM/tahun","ha"],placeholder:"Contoh: 2.500.000",activities:["Eksplorasi","Land clearing","Pengupasan tanah pucuk","Penggalian/penambangan","Pengangkutan","Crushing/screening","Stockpile","Reklamasi & pascatambang"],questions:[{id:"mineMethod",label:"Metode tambang",type:"select",options:["Terbuka","Bawah tanah","Quarry","Belum ditentukan"]},{id:"processing",label:"Pengolahan/pemurnian",type:"select",options:["Ada di tapak","Tidak ada"]},{id:"dewatering",label:"Mine dewatering",type:"select",options:["Ada","Tidak ada"]}],impacts:["domestic","process","runoff","laboratory","genset","kiln","dust","fugitive","usedoil","sludge","chemical","battery","soil","storage","spill","residue","ash","scrap","packaging","groundwater","surface",...PROFILE_COMMON.location,...PROFILE_COMMON.social,"noise","vibration"],defaults:["runoff","dust","usedoil","storage","noise","flora","fauna","land-clearing"],waste:["b104d","b105d","b107d","b109d","b110d","a102d","sector-verify"]},
  manufacturing:{name:"Industri pengolahan",capacityLabel:"Kapasitas produk utama",units:["ton/tahun","ton/hari","unit/tahun","m³ produk/hari"],placeholder:"Contoh: 100.000",activities:["Penerimaan bahan baku","Proses basah","Proses termal","Pencampuran/reaksi","Finishing/coating","Pengemasan","Utilitas","IPAL & pengelolaan limbah"],questions:[{id:"wetProcess",label:"Proses menggunakan air",type:"select",options:["Ya","Tidak"]},{id:"thermalProcess",label:"Boiler/furnace/kiln",type:"select",options:["Ada","Tidak ada"]},{id:"chemicalUse",label:"B3/bahan kimia proses",type:"select",options:["Digunakan dan disimpan","Digunakan tanpa penyimpanan","Tidak digunakan"]}],impacts:["domestic","process","oily","cooling","blowdown","runoff","laboratory","boiler","genset","kiln","incinerator","vent","voc","fugitive","dust","usedoil","sludge","chemical","catalyst","battery","storage","spill","residue","ash","scrap","packaging","organic","domestic-solid","groundwater","surface","municipal","reuse",...PROFILE_COMMON.location,...PROFILE_COMMON.social,"odor","vibration"],defaults:["process","boiler","usedoil","chemical","packaging","storage"],waste:["b104d","b105d","b107d","b109d","b110d","a102d","sector-verify"]},
  energy:{name:"Energi dan pembangkitan",capacityLabel:"Kapasitas terpasang",units:["MW","MWe","MWp","MWh/tahun"],placeholder:"Contoh: 100",activities:["Pembangkit utama","Boiler/turbin","Genset darurat","Penyimpanan bahan bakar","Cooling system","Pengolahan air","Transmisi/distribusi","Abu/residu"],questions:[{id:"fuel",label:"Sumber energi/bahan bakar",type:"select",options:["Batubara","Gas","Minyak/BBM","Biomassa","Surya/angin/hidro"]},{id:"coolingSystem",label:"Sistem pendingin",type:"select",options:["Once-through","Cooling tower","Air cooled","Tidak ada"]},{id:"grid",label:"Terhubung jaringan",type:"select",options:["On-grid","Off-grid"]}],impacts:["domestic","process","oily","cooling","blowdown","runoff","boiler","genset","turbine","vent","fugitive","dust","usedoil","sludge","chemical","battery","storage","spill","residue","ash","scrap","groundwater","surface","seawater","municipal",...PROFILE_COMMON.location,...PROFILE_COMMON.social,"noise","vibration"],defaults:["cooling","blowdown","turbine","usedoil","ghg"],waste:["b104d","b105d","b107d","b109d","b110d","a102d","sector-verify"]},
  water:{name:"Air, air limbah dan persampahan",capacityLabel:"Kapasitas pengolahan desain",units:["m³/hari","liter/detik","ton/hari","jiwa terlayani"],placeholder:"Contoh: 5.000",activities:["Intake/pengumpulan","Pra-pengolahan","Pengolahan utama","Pengolahan lumpur","Disinfeksi","Jaringan/pemompaan","Penyimpanan residu","Pembuangan/pemanfaatan"],questions:[{id:"facilityType",label:"Jenis fasilitas",type:"select",options:["SPAM/air minum","IPAL/IPLT","Pengelolaan sampah","Daur ulang/pemulihan"]},{id:"sludge",label:"Menghasilkan lumpur",type:"select",options:["Ya","Tidak"]},{id:"discharge",label:"Tujuan keluaran",type:"select",options:["Badan air","Tanah/pemanfaatan","Pihak ketiga","Belum ditentukan"]}],impacts:["domestic","process","leachate","laboratory","genset","odor","usedoil","sludge","chemical","battery","storage","spill","residue","packaging","organic","domestic-solid","sewage-sludge","groundwater","surface","municipal","reuse",...PROFILE_COMMON.location,...PROFILE_COMMON.social],defaults:["process","sludge","odor","storage"],waste:["b104d","b105d","b107d","b110d","a102d","sector-verify"]},
  construction:{name:"Konstruksi",capacityLabel:"Skala fisik utama",units:["ha tapak","m² luas bangunan","km","unit bangunan"],placeholder:"Contoh: 12",activities:["Pembersihan lahan","Pekerjaan tanah","Dewatering","Pondasi & struktur","Batching/asphalt plant","Basecamp","Mobilisasi material","Demobilisasi"],questions:[{id:"duration",label:"Durasi konstruksi",type:"select",options:["< 1 tahun","1–3 tahun","> 3 tahun"]},{id:"workers",label:"Pekerja puncak",type:"number",placeholder:"Contoh: 250"},{id:"batching",label:"Batching/asphalt plant",type:"select",options:["Ada","Tidak ada"]}],impacts:["domestic","oily","runoff","genset","dust","usedoil","chemical","battery","storage","spill","scrap","packaging","domestic-solid","construction-waste","groundwater","surface",...PROFILE_COMMON.location,...PROFILE_COMMON.social,"noise","vibration"],defaults:["domestic","runoff","dust","noise","traffic","construction-waste"],waste:["b104d","b105d","b107d","b110d","a102d"]},
  logistics:{name:"Transportasi dan logistik",capacityLabel:"Kapasitas layanan/throughput",units:["ton/tahun","TEU/tahun","kendaraan/hari","penumpang/hari"],placeholder:"Contoh: 250.000",activities:["Gudang/penyimpanan","Bongkar muat","Terminal kendaraan","Pelabuhan/jetty","Cold storage","Bengkel & pencucian","Pengisian bahan bakar","Fasilitas penunjang"],questions:[{id:"cargo",label:"Jenis muatan utama",type:"select",options:["Barang umum","B3/kimia","BBM/migas","Curah","Penumpang"]},{id:"workshop",label:"Bengkel/pencucian",type:"select",options:["Ada","Tidak ada"]},{id:"marine",label:"Fasilitas laut/jetty",type:"select",options:["Ada","Tidak ada"]}],impacts:["domestic","oily","runoff","genset","voc","fugitive","dust","usedoil","chemical","battery","storage","spill","scrap","packaging","domestic-solid","groundwater","surface","seawater",...PROFILE_COMMON.location,...PROFILE_COMMON.social,"noise","dredging"],defaults:["domestic","traffic","usedoil","spill"],waste:["b104d","b105d","b107d","b110d","a102d","sector-verify"]},
  forestry:{name:"Kehutanan",capacityLabel:"Luas areal/produksi hasil hutan",units:["ha","m³ kayu/tahun","ton hasil hutan/tahun"],placeholder:"Contoh: 10.000",activities:["Inventarisasi tegakan","Pembukaan akses","Persemaian/penanaman","Pemeliharaan","Pemanenan","Pengangkutan hasil","Basecamp/workshop","Rehabilitasi"],questions:[{id:"forestFunction",label:"Fungsi/status kawasan",type:"select",options:["Hutan produksi","Hutan lindung/konservasi","APL","Belum diketahui"]},{id:"harvest",label:"Pemanenan hasil hutan",type:"select",options:["Kayu","Non-kayu","Tidak ada"]},{id:"workshop",label:"Workshop/genset di tapak",type:"select",options:["Ada","Tidak ada"]}],impacts:["domestic","runoff","genset","dust","usedoil","chemical","battery","storage","spill","organic","domestic-solid","surface",...PROFILE_COMMON.location,...PROFILE_COMMON.social,"noise"],defaults:["runoff","forest","flora","fauna","land-clearing"],waste:["b104d","b105d","b107d","b110d","a102d"]},
  fisheries:{name:"Perikanan dan budidaya",capacityLabel:"Kapasitas produksi/budidaya",units:["ton/tahun","ha tambak","unit keramba","kapal"],placeholder:"Contoh: 500",activities:["Persiapan kolam/tambak","Pembenihan","Pembesaran","Pakan & obat","Pergantian/sirkulasi air","Pemanenan","Cold storage","Dermaga/kapal"],questions:[{id:"fisheryType",label:"Jenis kegiatan",type:"select",options:["Budidaya air tawar","Tambak payau","Budidaya laut","Penangkapan"]},{id:"feed",label:"Pakan/obat/kimia",type:"select",options:["Digunakan dan disimpan","Digunakan tanpa penyimpanan","Tidak digunakan"]},{id:"discharge",label:"Air buangan budidaya",type:"select",options:["Ke badan air","Diresirkulasi","Tidak ada"]}],impacts:["domestic","process","runoff","genset","usedoil","chemical","battery","storage","spill","organic","packaging","domestic-solid","surface","seawater",...PROFILE_COMMON.location,...PROFILE_COMMON.social,"odor"],defaults:["process","organic","surface","flora","fauna"],waste:["b104d","b105d","b107d","b110d","a102d","sector-verify"]},
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
  b3421:{code:"Perlu verifikasi",name:"Sludge/residu proses minyak nabati atau hewani",trigger:"IPAL, klarifikasi, pemisahan minyak, atau proses pengolahan minyak; cocokkan kode dengan Lampiran IX dan karakteristik aktual",status:"Perlu verifikasi"},
  b413:{code:"Perlu verifikasi",name:"Spent bleaching earth / tanah pemucat bekas",trigger:"Proses bleaching/pemucatan minyak nabati atau hewani; cocokkan kode dengan Lampiran IX dan karakteristik aktual",status:"Perlu verifikasi"},
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

const KBLI_ACTIVITY_RULES = [
  {test:c=>["10431","10432"].includes(c),label:"Mapping spesifik industri CPO/CPKO",activities:["Penerimaan TBS/biji inti","Sterilisasi atau perebusan","Pengepresan/ekstraksi minyak","Klarifikasi & pemisahan minyak","Pengolahan limbah cair pabrik","Penyimpanan dan pemuatan produk"],impacts:["process","oily","runoff","laboratory","boiler","genset","voc","usedoil","sludge","chemical","storage","spill","residue","scrap","packaging","organic","domestic-solid","groundwater","surface","municipal","reuse","odor","heat","flora","fauna","social","ghg"],defaults:["process","oily","sludge","usedoil","storage","spill","flora","fauna"],waste:["b104d","b105d","b109d","b110d","b3421","b413","sector-verify"],note:"KBLI ini mengacu pada pengolahan daging buah atau inti kelapa sawit menjadi minyak mentah; kegiatan kebun dan refinery harus dicatat sebagai KBLI terpisah."},
  {test:c=>["10433","10435","10436"].includes(c),label:"Mapping spesifik fraksinasi minyak sawit",activities:["Penerimaan minyak mentah/murni","Fraksinasi","Pemisahan stearin dan olein","Pemanasan dan utilitas","Penyimpanan produk","Pengelolaan limbah proses"],impacts:["process","oily","cooling","boiler","genset","voc","usedoil","sludge","chemical","storage","spill","residue","packaging","domestic-solid","groundwater","surface","municipal","reuse","odor","heat","flora","fauna","social","ghg"],defaults:["process","oily","cooling","boiler","usedoil","chemical","storage","spill"],waste:["b104d","b105d","b109d","b110d","b3421","b413","sector-verify"],note:"Fraksinasi menambah kebutuhan data temperatur, media pemisahan, produk samping, energi, emisi, dan limbah proses."},
  {test:c=>["10434","10437"].includes(c),label:"Mapping spesifik refinery/minyak goreng sawit",activities:["Penerimaan minyak mentah","Netralisasi dan pemurnian","Pemucatan/bleaching","Deodorisasi","Pengisian dan pemuatan produk","Pengelolaan limbah proses"],impacts:["process","oily","cooling","boiler","genset","voc","usedoil","sludge","chemical","catalyst","storage","spill","residue","packaging","domestic-solid","groundwater","surface","municipal","reuse","odor","heat","flora","fauna","social","ghg"],defaults:["process","oily","boiler","chemical","sludge","usedoil","storage","spill"],waste:["b104d","b105d","b109d","b110d","b3421","b413","sector-verify"],note:"Pemurnian, bleaching, dan deodorisasi perlu dibedakan dari ekstraksi CPO/CPKO karena bahan pembantu, energi, emisi, dan residunya berbeda."},
  {test:c=>c.startsWith("104")&&!c.startsWith("1043"),label:"Mapping spesifik industri minyak nabati lain",activities:["Penerimaan bahan baku minyak","Ekstraksi atau pressing","Pemurnian/pencampuran","Pemanasan dan utilitas","Penyimpanan produk","IPAL & pengelolaan limbah"],impacts:["process","oily","cooling","boiler","genset","voc","usedoil","sludge","chemical","storage","spill","residue","packaging","organic","domestic-solid","groundwater","surface","municipal","reuse","odor","heat","flora","fauna","social","ghg"],defaults:["process","oily","boiler","usedoil","sludge","chemical","storage","spill"],waste:["b104d","b105d","b109d","b110d","b3421","b413","sector-verify"],note:"Uraian kegiatan dari OSS tetap harus dibaca; aturan ini hanya mempersempit proses yang biasanya relevan pada rumpun minyak nabati."},
  {test:c=>c.startsWith("0126"),label:"Mapping spesifik perkebunan kelapa sawit",activities:["Pembukaan/penyiapan lahan","Pembibitan dan penanaman","Pemeliharaan dan pemupukan","Pengendalian hama/pestisida","Pemanenan TBS","Jalan, drainase & workshop"],impacts:["runoff","usedoil","chemical","battery","storage","spill","packaging","organic","domestic-solid","groundwater","surface","municipal","forest","conservation","peat","karst","coastal","river","watershed","disaster","industrial-estate","noise","traffic","flora","fauna","social","ghg","land-clearing","erosion","sedimentation","hydrology"],defaults:["runoff","packaging","organic","flora","fauna","land-clearing"],waste:["b104d","b105d","b107d","b110d","a102d","pesticide-verify"],note:"KBLI perkebunan hanya mencakup rangkaian kegiatan kebun; pabrik pengolahan CPO/CPKO harus dicatat dengan KBLI industri yang sesuai."},
  {test:(c,t)=>/kelapa sawit|minyak sawit|crude palm|cpo|cpko|minyak goreng|minyak nabati|pemucatan|bleaching/.test(t),label:"Mapping berbasis uraian pengolahan minyak",activities:["Penerimaan bahan baku","Ekstraksi, pressing, atau pemurnian","Pemanasan dan utilitas","Pemisahan atau bleaching","Penyimpanan dan pemuatan produk","IPAL & pengelolaan limbah"],impacts:["process","oily","cooling","boiler","genset","voc","usedoil","sludge","chemical","storage","spill","residue","packaging","organic","domestic-solid","groundwater","surface","municipal","reuse","odor","heat","flora","fauna","social","ghg"],defaults:["process","oily","boiler","usedoil","sludge","chemical","storage","spill"],waste:["b104d","b105d","b109d","b110d","sector-verify"],note:"Uraian KBLI menyebut kegiatan pengolahan minyak; sesuaikan lagi dengan apakah prosesnya ekstraksi, fraksinasi, refinery, bleaching, atau pengisian."},
  {test:(c,t)=>/makanan|minuman|pangan|penggilingan|tepung|gula|kakao|kopi|roti|produk susu|pengalengan/.test(t),label:"Mapping berbasis uraian industri pangan",activities:["Penerimaan dan penyimpanan bahan","Pencucian/persiapan bahan","Proses produksi utama","Pemanasan/pendinginan","Pengemasan","IPAL, produk samping, dan sampah organik"],impacts:["domestic","process","oily","cooling","boiler","genset","runoff","laboratory","usedoil","chemical","storage","spill","residue","packaging","organic","domestic-solid","groundwater","surface","municipal","reuse","odor","noise","traffic","flora","fauna","social","ghg"],defaults:["process","organic","packaging","usedoil","storage","odor"],waste:["b104d","b105d","b107d","b110d","sector-verify"],note:"Industri pangan biasanya perlu membedakan air proses, sanitasi, bahan pembersih, sampah organik, produk samping, energi, dan kemasan."},
  {test:(c,t)=>/tekstil|pakaian|pencelupan|printing|penyamakan|kulit|karet|plastik|polimer|cat|pelapis|kimia/.test(t),label:"Mapping berbasis uraian manufaktur bahan/produk",activities:["Penerimaan bahan dan penyimpanan","Pencampuran/reaksi atau persiapan","Proses pembentukan/pencelupan/finishing","Boiler, genset, atau utilitas","Pengemasan dan gudang","IPAL dan pengelolaan residu"],impacts:["process","oily","cooling","boiler","genset","kiln","voc","fugitive","dust","usedoil","sludge","chemical","catalyst","storage","spill","residue","scrap","packaging","domestic-solid","groundwater","surface","municipal","reuse","odor","noise","vibration","flora","fauna","social","ghg"],defaults:["process","chemical","boiler","voc","usedoil","sludge","storage","spill"],waste:["b104d","b105d","b107d","b109d","b110d","a102d","sector-verify"],note:"Bahan dan teknologi manufaktur menentukan sumber emisi, bahan kimia, sludge, residu, dan kode LB3; jangan menganggap semua proses memakai daftar yang sama."},
  {test:(c,t)=>/besi|baja|logam|aluminium|nikel|peleburan|pengecoran|galvanis|smelter|semen|kapur|keramik|kaca/.test(t),label:"Mapping berbasis uraian industri mineral/logam",activities:["Penerimaan dan penyiapan bahan","Peleburan/pembakaran atau proses mineral","Pengecoran/pembentukan/finishing","Pengendalian debu dan emisi","Penyimpanan produk/residu","Utilitas dan pengelolaan limbah"],impacts:["process","boiler","kiln","genset","dust","fugitive","usedoil","sludge","chemical","battery","soil","storage","spill","residue","ash","scrap","packaging","domestic-solid","groundwater","surface","noise","vibration","traffic","flora","fauna","social","ghg","land-clearing","erosion","sedimentation"],defaults:["process","dust","residue","ash","usedoil","storage","noise","ghg"],waste:["b104d","b105d","b107d","b109d","b110d","a102d","sector-verify"],note:"Komoditas, bahan bakar, suhu/proses, alat kontrol emisi, dan jenis residu harus dikonfirmasi karena memengaruhi sumber dampak dan kandidat LB3."},
  {test:(c,t)=>/kayu|furnitur|mebel|pulp|kertas|percetakan|kemasan/.test(t),label:"Mapping berbasis uraian kayu/kertas/percetakan",activities:["Penerimaan dan pemotongan bahan","Pengeringan atau pembentukan","Perekat/tinta dan finishing","Boiler/genset/utilitas","Pengemasan","Serbuk, sludge, dan pengelolaan residu"],impacts:["process","boiler","genset","dust","voc","usedoil","chemical","storage","spill","residue","scrap","packaging","organic","domestic-solid","groundwater","surface","noise","traffic","flora","fauna","social","ghg"],defaults:["process","dust","voc","usedoil","chemical","residue","packaging"],waste:["b104d","b105d","b107d","b110d","sector-verify"],note:"Pisahkan serbuk/serat/residu non-B3 dari bahan kimia, tinta, perekat, oli, dan filter yang mungkin memerlukan penelusuran LB3."},
  {test:(c,t)=>/konstruksi|bangunan|gedung|jalan|jembatan|infrastruktur|perumahan|real estat|kawasan/.test(t),label:"Mapping berbasis uraian konstruksi/infrastruktur",activities:["Pembersihan dan pematangan lahan","Pekerjaan tanah dan pondasi","Struktur/bangunan atau pekerjaan jalan","Batching/asphalt plant bila ada","Mobilisasi, basecamp, dan utilitas","Demobilisasi dan pemulihan tapak"],impacts:["domestic","runoff","genset","dust","usedoil","chemical","battery","storage","spill","scrap","packaging","domestic-solid","construction-waste","groundwater","surface","noise","vibration","traffic","flora","fauna","social","land-clearing","erosion","sedimentation","hydrology","landscape"],defaults:["domestic","runoff","dust","noise","traffic","construction-waste"],waste:["b104d","b105d","b107d","b110d","a102d"],note:"Bangunan dan pekerjaan fisik memicu kebutuhan data lahan, air limpasan, material, alat berat, konstruksi, lalu lintas, dan fasilitas penunjang."},
  {test:(c,t)=>/air minum|air bersih|air limbah|instalasi pengolahan|persampahan|daur ulang|pengelolaan limbah/.test(t),label:"Mapping berbasis uraian air/persampahan",activities:["Intake/pengumpulan","Pra-pengolahan dan pengolahan utama","Pengolahan lumpur/residu","Disinfeksi atau pemulihan","Jaringan/pemompaan dan penyimpanan","Pembuangan/pemanfaatan keluaran"],impacts:["domestic","process","leachate","laboratory","genset","odor","usedoil","sludge","chemical","battery","storage","spill","residue","packaging","organic","domestic-solid","sewage-sludge","groundwater","surface","municipal","reuse","noise","traffic","flora","fauna","social"],defaults:["process","sludge","odor","storage","surface"],waste:["b104d","b105d","b107d","b110d","sector-verify"],note:"Jenis fasilitas, mutu influen/efluen, tujuan keluaran, lumpur, lindi, dan pihak penerima menentukan paket teknis yang berbeda."},
  {test:(c,t)=>/gudang|pergudangan|logistik|angkutan|terminal|pelabuhan|pelayanan bongkar|penyimpanan/.test(t),label:"Mapping berbasis uraian logistik/terminal",activities:["Penerimaan dan penyimpanan muatan","Bongkar muat dan pemindahan","Terminal/pelabuhan/jetty bila ada","Bengkel, pencucian, dan utilitas","Pengisian bahan bakar bila ada","Pengelolaan kemasan, tumpahan, dan sampah"],impacts:["domestic","oily","runoff","genset","voc","fugitive","dust","usedoil","chemical","battery","storage","spill","scrap","packaging","domestic-solid","groundwater","surface","seawater","noise","traffic","flora","fauna","social","dredging"],defaults:["domestic","traffic","usedoil","spill","storage"],waste:["b104d","b105d","b107d","b110d","a102d","sector-verify"],note:"Jenis muatan dan keberadaan ruang laut, bengkel, pencucian, BBM, atau bahan B3 menentukan proses yang perlu dicentang."},
  {test:(c,t)=>/rumah sakit|klinik|laboratorium kesehatan|kesehatan/.test(t),label:"Mapping berbasis uraian layanan kesehatan",activities:["Pelayanan utama","Laboratorium dan/atau radiologi","Farmasi dan penyimpanan bahan","Laundry dan dapur","Sterilisasi/autoklaf atau insinerasi","IPAL & limbah medis"],impacts:["domestic","process","laboratory","boiler","genset","incinerator","usedoil","sludge","chemical","medical","battery","storage","spill","packaging","organic","domestic-solid","sewage-sludge","groundwater","municipal","noise","odor","flora","fauna","social"],defaults:["process","laboratory","medical","chemical","storage"],waste:["b104d","b105d","b107d","b110d","a102d","medical-verify"],note:"Kode spesifik tetap harus dicocokkan dengan uraian OSS; fasilitas kesehatan dan laboratorium memiliki jalur limbah medis/kimia yang berbeda dari jasa umum."},
  {test:(c,t)=>/tambang|pertambangan|penggalian|batubara|mineral|nikel|emas|batu kapur/.test(t),label:"Mapping berbasis uraian kegiatan ekstraktif",activities:["Eksplorasi dan pembukaan akses","Land clearing/pengupasan tanah","Penggalian atau penambangan","Pengangkutan dan stockpile","Crushing/screening atau pengolahan","Reklamasi dan pascatambang"],impacts:["domestic","process","runoff","laboratory","genset","kiln","dust","fugitive","usedoil","sludge","chemical","battery","soil","storage","spill","residue","ash","scrap","packaging","groundwater","surface","forest","conservation","peat","karst","river","watershed","disaster","noise","vibration","traffic","flora","fauna","social","ghg","land-clearing","erosion","sedimentation","hydrology","landscape"],defaults:["runoff","dust","usedoil","storage","noise","flora","fauna","land-clearing"],waste:["b104d","b105d","b107d","b109d","b110d","a102d","sector-verify"],note:"Dampak tambang sangat bergantung pada komoditas, metode, pengolahan/pemurnian, dewatering, dan lokasi; jawaban profil tetap wajib diisi."},
  {test:(c,t)=>/pembangkit|listrik|energi|uap|gas alam|bahan bakar/.test(t),label:"Mapping berbasis uraian energi/utilitas",activities:["Pembangkit utama","Boiler/turbin/genset","Penyimpanan bahan bakar","Sistem pendingin","Pengolahan air","Abu/residu atau hasil samping","Transmisi/distribusi"],impacts:["domestic","process","oily","cooling","blowdown","runoff","boiler","genset","turbine","vent","fugitive","dust","usedoil","sludge","chemical","battery","storage","spill","residue","ash","scrap","groundwater","surface","seawater","noise","vibration","flora","fauna","social","ghg"],defaults:["cooling","blowdown","turbine","usedoil","ghg"],waste:["b104d","b105d","b107d","b109d","b110d","a102d","sector-verify"],note:"Sumber energi, teknologi pembakaran, sistem pendingin, dan koneksi jaringan harus dibaca dari uraian kegiatan, bukan diasumsikan dari sektor saja."},
  {test:(c,t)=>/pertanian|tanaman|padi|jagung|sayuran|buah|perkebunan|pembibitan|pemanenan/.test(t),label:"Mapping berbasis uraian pertanian/tanaman",activities:["Penyiapan lahan dan pembibitan","Penanaman dan pemeliharaan","Pupuk/pestisida bila digunakan","Irigasi dan drainase","Pemanenan/pascapanen","Jalan, gudang, dan workshop"],impacts:["runoff","usedoil","chemical","battery","storage","spill","packaging","organic","domestic-solid","groundwater","surface","municipal","forest","conservation","peat","karst","river","watershed","disaster","noise","traffic","flora","fauna","social","ghg","land-clearing","erosion","sedimentation","hydrology"],defaults:["runoff","organic","flora","fauna"],waste:["b104d","b105d","b107d","b110d","a102d","pesticide-verify"],note:"Sumber dampak pertanian bergantung pada luas, pembukaan lahan, input kimia, irigasi, pascapanen, dan status kawasan."},
  {test:(c,t)=>/peternakan|ternak|unggas|sapi|kerbau|kambing|domba|babi|kotoran|ruminansia/.test(t),label:"Mapping berbasis uraian peternakan",activities:["Kandang dan pemeliharaan ternak","Pakan dan air minum","Obat/vaksin dan sanitasi","Pembersihan kandang","Pengolahan kotoran","Pemerahan/pemotongan bila ada"],impacts:["domestic","process","runoff","genset","odor","usedoil","chemical","storage","spill","organic","packaging","domestic-solid","groundwater","surface","noise","traffic","flora","fauna","social","ghg"],defaults:["process","organic","odor","ghg"],waste:["b104d","b105d","b107d","b110d","medical-verify"],note:"Jumlah ternak, sistem kandang, pengelolaan kotoran, pemotongan, obat, dan air buangan menentukan sumber dampak yang perlu dipilih."},
  {test:(c,t)=>/perikanan|budidaya|tambak|keramba|ikan|udang|rumput laut|penangkapan/.test(t),label:"Mapping berbasis uraian perikanan/budidaya",activities:["Persiapan kolam/tambak/keramba","Pembenihan dan pembesaran","Pakan, obat, atau bahan kimia","Sirkulasi dan pembuangan air","Pemanenan dan pascapanen","Cold storage, dermaga, atau kapal bila ada"],impacts:["domestic","process","runoff","genset","usedoil","chemical","battery","storage","spill","organic","packaging","domestic-solid","surface","seawater","noise","traffic","flora","fauna","social","ghg","dredging"],defaults:["process","organic","surface","flora","fauna"],waste:["b104d","b105d","b107d","b110d","a102d","sector-verify"],note:"Jenis media air, kepadatan, pakan/obat, pergantian air, lokasi pesisir, dan fasilitas kapal perlu dibedakan."},
  {test:(c,t)=>/kehutanan|hutan|kayu|hasil hutan|penebangan|persemaian/.test(t),label:"Mapping berbasis uraian kehutanan",activities:["Inventarisasi dan akses","Persemaian/penanaman","Pemeliharaan","Pemanenan hasil hutan","Pengangkutan dan basecamp","Rehabilitasi atau pemulihan"],impacts:["domestic","runoff","genset","dust","usedoil","chemical","battery","storage","spill","organic","domestic-solid","surface","forest","conservation","peat","karst","river","watershed","disaster","noise","traffic","flora","fauna","social","ghg","land-clearing","erosion","sedimentation","hydrology"],defaults:["runoff","forest","flora","fauna","land-clearing"],waste:["b104d","b105d","b107d","b110d","a102d"],note:"Fungsi/status hutan, pembukaan akses, teknik pemanenan, serta rehabilitasi harus dicatat bersama batas tapak."},
  {test:(c,t)=>/perdagangan|eceran|grosir|pasar|toko|penjualan|ritel/.test(t),label:"Mapping berbasis uraian perdagangan",activities:["Penerimaan dan penyimpanan barang","Penjualan/bongkar muat","Gudang dan kemasan","Bengkel/utilitas bila ada","Penanganan bahan B3 bila ada","Pengelolaan sampah dan mobilitas"],impacts:["domestic","runoff","genset","usedoil","chemical","battery","storage","spill","packaging","domestic-solid","groundwater","surface","municipal","noise","traffic","odor","flora","fauna","social"],defaults:["domestic","packaging","traffic"],waste:["b104d","b105d","b107d","a102d","sector-verify"],note:"Jenis barang, gudang, bahan B3/BBM, kendaraan, dan fasilitas pencucian menentukan apakah baseline perdagangan perlu diperluas."},
  {test:(c,t)=>/telekomunikasi|perangkat lunak|software|komputer|internet|data|pemrograman|teknologi informasi/.test(t),label:"Mapping berbasis uraian digital/telekomunikasi",activities:["Ruang kerja atau ruang server","Daya, UPS, dan baterai","Pendinginan dan utilitas","Menara/jaringan bila ada","Penyimpanan BBM/genset bila ada","Pengelolaan e-waste"],impacts:["domestic","cooling","blowdown","genset","usedoil","chemical","battery","storage","spill","scrap","packaging","domestic-solid","groundwater","municipal","reuse","noise","ghg"],defaults:["cooling","genset","battery","usedoil"],waste:["b104d","b105d","b107d","a102d"],note:"Fasilitas fisik, daya cadangan, pendinginan, menara, dan e-waste perlu dipisahkan dari kegiatan digital yang hanya berbasis kantor."},
  {test:(c,t)=>/pendidikan|sekolah|universitas|pelatihan|kursus|akademi/.test(t),label:"Mapping berbasis uraian pendidikan/pelatihan",activities:["Kegiatan belajar dan administrasi","Gedung dan utilitas","Kantin/dapur bila ada","Laboratorium/workshop bila ada","Transportasi dan parkir","Sampah dan air limbah domestik"],impacts:["domestic","runoff","genset","usedoil","chemical","battery","storage","packaging","organic","domestic-solid","groundwater","surface","municipal","noise","traffic","flora","fauna","social"],defaults:["domestic","domestic-solid","traffic"],waste:["b104d","b105d","b107d","a102d"],note:"Kampus, sekolah, laboratorium, asrama, dan fasilitas praktik dapat memiliki sumber dampak yang berbeda."},
  {test:(c,t)=>/keuangan|bank|kredit|asuransi|dana|bursa|investasi|pegadaian/.test(t),label:"Mapping berbasis uraian keuangan",activities:["Operasional kantor","Ruang layanan dan arsip","Daya cadangan/utilitas","Pusat data bila ada","Mobilitas dan parkir","Pengelolaan sampah serta e-waste"],impacts:["domestic","genset","usedoil","battery","storage","packaging","domestic-solid","groundwater","municipal","noise","traffic","social","ghg"],defaults:["domestic","domestic-solid","traffic"],waste:["b104d","b105d","a102d","b107d"],note:"Kegiatan keuangan umumnya bersifat kantor; perluas hanya bila ada pusat data, genset, gudang, atau fasilitas fisik lain."},
  {test:(c,t)=>/hotel|akomodasi|restoran|kafe|pariwisata|wisata|taman hiburan|rekreasi/.test(t),label:"Mapping berbasis uraian akomodasi/pariwisata",activities:["Akomodasi atau layanan pengunjung","Dapur/restoran","Laundry dan utilitas","Kolam/spa atau fasilitas air","Genset/boiler/cold storage bila ada","IPAL dan sampah operasional"],impacts:["domestic","process","oily","genset","boiler","odor","usedoil","chemical","battery","storage","spill","packaging","organic","domestic-solid","sewage-sludge","municipal","groundwater","surface","noise","traffic","flora","fauna","social","ghg"],defaults:["domestic","organic","domestic-solid","odor"],waste:["b104d","b105d","a102d","medical-verify"],note:"Kapasitas pengunjung, dapur, laundry, kolam, genset, dan lokasi sensitif memengaruhi paket air limbah serta sampah."},
  {test:(c,t)=>/pemerintah|administrasi|organisasi|sosial|kesejahteraan|keagamaan|lembaga/.test(t),label:"Mapping berbasis uraian pemerintahan/sosial",activities:["Layanan utama dan administrasi","Gedung serta utilitas","Pelayanan publik/pengunjung","Kantin atau fasilitas penunjang bila ada","Mobilitas dan parkir","Sampah dan air limbah domestik"],impacts:["domestic","genset","usedoil","battery","packaging","domestic-solid","groundwater","municipal","noise","traffic","flora","fauna","social"],defaults:["domestic","domestic-solid","traffic"],waste:["b104d","b105d","a102d"],note:"Jenis layanan, jumlah pengguna, gedung, fasilitas kesehatan/laboratorium, dan kegiatan lapangan menentukan perluasan sumber dampak."},
  {test:(c,t)=>/konsultan|hukum|akuntansi|arsitektur|periklanan|penelitian|laboratorium|reparasi|bengkel|perawatan|pemeliharaan/.test(t),label:"Mapping berbasis uraian jasa/profesional",activities:["Operasional layanan","Ruang kerja dan fasilitas","Workshop/laboratorium bila ada","Genset dan utilitas","Pemakaian bahan kimia bila ada","Sampah, e-waste, dan mobilitas"],impacts:["domestic","process","laboratory","genset","usedoil","chemical","battery","storage","spill","packaging","domestic-solid","groundwater","municipal","noise","traffic","flora","fauna","social"],defaults:["domestic","domestic-solid","traffic"],waste:["b104d","b105d","a102d","sector-verify"],note:"Jasa kantor tidak disamakan dengan workshop/laboratorium; pilih fasilitas tambahan hanya bila benar-benar ada."},
  {test:(c,t)=>/kesenian|olahraga|hiburan|film|televisi|musik|jurnalis|media/.test(t),label:"Mapping berbasis uraian seni/media/olahraga",activities:["Kegiatan utama dan produksi acara","Gedung/studio/lapangan","Peralatan, pencahayaan, dan suara","Genset/utilitas bila ada","Mobilitas pengunjung","Sampah dan air limbah domestik"],impacts:["domestic","genset","usedoil","battery","packaging","domestic-solid","noise","traffic","light","social","flora","fauna"],defaults:["domestic","domestic-solid","noise","traffic"],waste:["b104d","b105d","a102d"],note:"Skala penonton, gedung, pencahayaan, suara, dan fasilitas sementara perlu disesuaikan dengan kegiatan acara yang sebenarnya."},
  {test:(c,t)=>/industri|pengolahan|produksi|pembuatan|manufaktur/.test(t),label:"Mapping fallback berbasis uraian industri",activities:["Penerimaan bahan dan penyimpanan","Proses pembentukan/pengolahan","Finishing atau pengemasan bila ada","Utilitas dan sumber emisi bila ada","IPAL dan pengelolaan residu","Gudang, mobilitas, dan keadaan darurat"],impacts:["domestic","process","runoff","genset","boiler","dust","voc","usedoil","chemical","storage","spill","residue","scrap","packaging","domestic-solid","groundwater","surface","municipal","noise","traffic","flora","fauna","social","ghg"],defaults:["process","usedoil","packaging","storage"],waste:["b104d","b105d","b107d","b110d","sector-verify"],note:"Uraian ini teridentifikasi sebagai industri, tetapi belum memiliki override komoditas. Tambahkan proses nyata dan bahan yang digunakan untuk mempersempit hasil."},
  {test:(c,t)=>/transportasi|penerbangan|antariksa|perjalanan|penumpang/.test(t),label:"Mapping fallback berbasis uraian transportasi",activities:["Operasional layanan transportasi","Terminal/gudang/pangkalan bila ada","Bongkar muat atau pergerakan kendaraan","Bengkel dan pencucian bila ada","Pengisian bahan bakar bila ada","Pengelolaan tumpahan, sampah, dan mobilitas"],impacts:["domestic","oily","runoff","genset","voc","dust","usedoil","chemical","battery","storage","spill","packaging","domestic-solid","groundwater","surface","noise","traffic","flora","fauna","social"],defaults:["domestic","traffic","usedoil"],waste:["b104d","b105d","a102d","sector-verify"],note:"Jenis moda, terminal, muatan, bahan bakar, bengkel, dan lokasi menentukan perluasan dampak transportasi."},
  {test:(c,t)=>/penyewaan|sewa|agen|pengurusan|penyelenggaraan|penitipan|pengelolaan/.test(t),label:"Mapping fallback berbasis uraian jasa pendukung",activities:["Operasional layanan","Ruang kerja/gudang/fasilitas","Peralatan dan utilitas","Bengkel/laboratorium bila ada","Pengelolaan bahan atau dokumen bila ada","Sampah, e-waste, dan mobilitas"],impacts:["domestic","genset","usedoil","chemical","battery","storage","spill","packaging","domestic-solid","groundwater","municipal","noise","traffic","flora","fauna","social"],defaults:["domestic","domestic-solid","traffic"],waste:["b104d","b105d","a102d","sector-verify"],note:"Jasa pendukung memakai baseline ringan; tambahkan fasilitas fisik, bahan, gudang, atau proses khusus yang benar-benar ada."}
];
function kbliActivityProfile(item){
  const code=String(item?.code||""),catalogItem=window.ENVIRO_KBLI_2025?.[code]||{},title=item?.title||catalogItem.title||"",description=item?.description||catalogItem.description||"",base=profileForCode(code),text=`${title} ${description}`.toLowerCase(),rule=KBLI_ACTIVITY_RULES.find(x=>x.test(code,text));
  if(!rule)return {...base,name:title||base.name,mappingLabel:"Fallback kelompok KBLI 2 digit",mappingLevel:"fallback",mappingNote:"Kode ini belum memiliki override 5-digit di katalog aplikasi. Daftar di bawah adalah baseline sektor; cocokkan dengan uraian KBLI 2025 dan proses nyata."};
  return {...base,name:title||base.name,activities:rule.activities,impacts:[...new Set([...rule.impacts,...PROFILE_COMMON.location,...PROFILE_COMMON.social])],defaults:rule.defaults,waste:rule.waste,mappingLabel:rule.label,mappingLevel:"specific",mappingNote:rule.note};
}

const IMPACT_GROUPS = [
  {key:"wastewater",name:"Air limbah",icon:"≈",desc:"Semua aliran keluar dan potensi buangan",items:[["domestic","Domestik/sanitasi"],["process","Proses produksi"],["produced","Produced water"],["oily","Oily water/drainase berminyak"],["cooling","Cooling water"],["blowdown","Boiler/cooling blowdown"],["hydrotest","Hydrotest water"],["runoff","Limpasan area kegiatan"],["leachate","Lindi"],["laboratory","Laboratorium"]]},
  {key:"emission",name:"Emisi udara",icon:"↑",desc:"Sumber tetap, bergerak, dan fugitif",items:[["boiler","Boiler/heater"],["genset","Genset/mesin pembakaran dalam"],["turbine","Turbin/kompresor"],["flare","Flare"],["kiln","Kiln/furnace/smelter"],["incinerator","Insinerator"],["vent","Process vent"],["voc","Tangki/VOC"],["fugitive","Emisi fugitif"],["dust","Debu jalan/stockpile"]]},
  {key:"b3",name:"B3 & limbah B3",icon:"!",desc:"Bahan, timbulan, penyimpanan, dan kondisi darurat",items:[["usedoil","Pelumas/oli bekas"],["sludge","Sludge/residu terkontaminasi"],["chemical","Bahan kimia & kemasan"],["catalyst","Katalis/filter bekas"],["medical","Limbah medis"],["battery","Baterai & e-waste"],["soil","Tanah terkontaminasi"],["storage","TPS limbah B3"],["spill","Tumpahan/kedaruratan B3"]]},
  {key:"solid",name:"Limbah padat non-B3",icon:"▦",desc:"Residu proses dan sampah operasional",items:[["residue","Residu proses"],["ash","Abu/slag (cek status)"],["scrap","Scrap/logam"],["packaging","Kemasan non-B3"],["organic","Sampah organik"],["domestic-solid","Sampah domestik"],["sewage-sludge","Lumpur domestik"],["construction-waste","Sisa konstruksi"]]},
  {key:"water",name:"Penggunaan air",icon:"◇",desc:"Sumber, debit, neraca, dan kewenangan",items:[["groundwater","Air tanah"],["surface","Air permukaan"],["seawater","Air laut"],["municipal","PDAM/pemasok"],["rainwater","Panen air hujan"],["reuse","Reuse/recycle"]]},
  {key:"location",name:"Sensitivitas lokasi",icon:"△",desc:"Batas ekologis dan ruang yang perlu dioverlay",items:[["forest","Kawasan hutan"],["conservation","Kawasan konservasi"],["peat","Gambut"],["karst","Karst"],["coastal","Pesisir/ruang laut"],["river","Sempadan sungai/danau"],["watershed","DAS kritis"],["disaster","Rawan bencana"],["industrial-estate","Kawasan industri"]]},
  {key:"other",name:"Dampak lain",icon:"◎",desc:"Fisik, hayati, sosial, dan iklim",items:[["noise","Kebisingan"],["vibration","Getaran"],["odor","Bau"],["traffic","Lalu lintas"],["flora","Flora dan vegetasi"],["fauna","Fauna dan satwa liar"],["social","Masyarakat/sosial"],["ghg","Gas rumah kaca"],["land-clearing","Pembukaan lahan"],["erosion","Erosi"],["sedimentation","Sedimentasi"],["hydrology","Perubahan hidrologi"],["landscape","Lanskap/visual"],["light","Pencahayaan"],["heat","Panas buangan"],["human-wildlife","Interaksi manusia–satwa"],["dredging","Pengerukan/reklamasi"]]}
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
  "Aceh": [
    "Kabupaten Aceh Selatan",
    "Kabupaten Aceh Tenggara",
    "Kabupaten Aceh Timur",
    "Kabupaten Aceh Tengah",
    "Kabupaten Aceh Barat",
    "Kabupaten Aceh Besar",
    "Kabupaten Pidie",
    "Kabupaten Aceh Utara",
    "Kabupaten Simeulue",
    "Kabupaten Aceh Singkil",
    "Kabupaten Bireuen",
    "Kabupaten Aceh Barat Daya",
    "Kabupaten Gayo Lues",
    "Kabupaten Aceh Jaya",
    "Kabupaten Nagan Raya",
    "Kabupaten Aceh Tamiang",
    "Kabupaten Bener Meriah",
    "Kabupaten Pidie Jaya",
    "Kota Banda Aceh",
    "Kota Sabang",
    "Kota Lhokseumawe",
    "Kota Langsa",
    "Kota Subulussalam"
  ],
  "Sumatera Utara": [
    "Kabupaten Tapanuli Tengah",
    "Kabupaten Tapanuli Utara",
    "Kabupaten Tapanuli Selatan",
    "Kabupaten Nias",
    "Kabupaten Langkat",
    "Kabupaten Karo",
    "Kabupaten Deli Serdang",
    "Kabupaten Simalungun",
    "Kabupaten Asahan",
    "Kabupaten Labuhanbatu",
    "Kabupaten Dairi",
    "Kabupaten Toba",
    "Kabupaten Mandailing Natal",
    "Kabupaten Nias Selatan",
    "Kabupaten Pakpak Bharat",
    "Kabupaten Humbang Hasundutan",
    "Kabupaten Samosir",
    "Kabupaten Serdang Bedagai",
    "Kabupaten Batu Bara",
    "Kabupaten Padang Lawas Utara",
    "Kabupaten Padang Lawas",
    "Kabupaten Labuhanbatu Selatan",
    "Kabupaten Labuhanbatu Utara",
    "Kabupaten Nias Utara",
    "Kabupaten Nias Barat",
    "Kota Medan",
    "Kota Pematangsiantar",
    "Kota Sibolga",
    "Kota Tanjungbalai",
    "Kota Binjai",
    "Kota Tebing Tinggi",
    "Kota Padangsidimpuan",
    "Kota Gunungsitoli"
  ],
  "Sumatera Barat": [
    "Kabupaten Pesisir Selatan",
    "Kabupaten Solok",
    "Kabupaten Sijunjung",
    "Kabupaten Tanah Datar",
    "Kabupaten Padang Pariaman",
    "Kabupaten Agam",
    "Kabupaten Lima Puluh Kota",
    "Kabupaten Pasaman",
    "Kabupaten Kepulauan Mentawai",
    "Kabupaten Dharmasraya",
    "Kabupaten Solok Selatan",
    "Kabupaten Pasaman Barat",
    "Kota Padang",
    "Kota Solok",
    "Kota Sawahlunto",
    "Kota Padang Panjang",
    "Kota Bukittinggi",
    "Kota Payakumbuh",
    "Kota Pariaman"
  ],
  "Riau": [
    "Kabupaten Kampar",
    "Kabupaten Indragiri Hulu",
    "Kabupaten Bengkalis",
    "Kabupaten Indragiri Hilir",
    "Kabupaten Pelalawan",
    "Kabupaten Rokan Hulu",
    "Kabupaten Rokan Hilir",
    "Kabupaten Siak",
    "Kabupaten Kuantan Singingi",
    "Kabupaten Kepulauan Meranti",
    "Kota Pekanbaru",
    "Kota Dumai"
  ],
  "Jambi": [
    "Kabupaten Kerinci",
    "Kabupaten Merangin",
    "Kabupaten Sarolangun",
    "Kabupaten Batanghari",
    "Kabupaten Muaro Jambi",
    "Kabupaten Tanjung Jabung Barat",
    "Kabupaten Tanjung Jabung Timur",
    "Kabupaten Bungo",
    "Kabupaten Tebo",
    "Kota Jambi",
    "Kota Sungai Penuh"
  ],
  "Sumatera Selatan": [
    "Kabupaten Ogan Komering Ulu",
    "Kabupaten Ogan Komering Ilir",
    "Kabupaten Muara Enim",
    "Kabupaten Lahat",
    "Kabupaten Musi Rawas",
    "Kabupaten Musi Banyuasin",
    "Kabupaten Banyuasin",
    "Kabupaten Ogan Komering Ulu Timur",
    "Kabupaten Ogan Komering Ulu Selatan",
    "Kabupaten Ogan Ilir",
    "Kabupaten Empat Lawang",
    "Kabupaten Penukal Abab Lematang Ilir",
    "Kabupaten Musi Rawas Utara",
    "Kota Palembang",
    "Kota Pagar Alam",
    "Kota Lubuklinggau",
    "Kota Prabumulih"
  ],
  "Bengkulu": [
    "Kabupaten Bengkulu Selatan",
    "Kabupaten Rejang Lebong",
    "Kabupaten Bengkulu Utara",
    "Kabupaten Kaur",
    "Kabupaten Seluma",
    "Kabupaten Mukomuko",
    "Kabupaten Lebong",
    "Kabupaten Kepahiang",
    "Kabupaten Bengkulu Tengah",
    "Kota Bengkulu"
  ],
  "Lampung": [
    "Kabupaten Lampung Selatan",
    "Kabupaten Lampung Tengah",
    "Kabupaten Lampung Utara",
    "Kabupaten Lampung Barat",
    "Kabupaten Tulang Bawang",
    "Kabupaten Tanggamus",
    "Kabupaten Lampung Timur",
    "Kabupaten Way Kanan",
    "Kabupaten Pesawaran",
    "Kabupaten Pringsewu",
    "Kabupaten Mesuji",
    "Kabupaten Tulang Bawang Barat",
    "Kabupaten Pesisir Barat",
    "Kota Bandar Lampung",
    "Kota Metro"
  ],
  "Kepulauan Bangka Belitung": [
    "Kabupaten Bangka",
    "Kabupaten Belitung",
    "Kabupaten Bangka Selatan",
    "Kabupaten Bangka Tengah",
    "Kabupaten Bangka Barat",
    "Kabupaten Belitung Timur",
    "Kota Pangkalpinang"
  ],
  "Kepulauan Riau": [
    "Kabupaten Bintan",
    "Kabupaten Karimun",
    "Kabupaten Natuna",
    "Kabupaten Lingga",
    "Kabupaten Kepulauan Anambas",
    "Kota Batam",
    "Kota Tanjungpinang"
  ],
  "DKI Jakarta": [
    "Kabupaten Administrasi Kepulauan Seribu",
    "Kota Administrasi Jakarta Pusat",
    "Kota Administrasi Jakarta Utara",
    "Kota Administrasi Jakarta Barat",
    "Kota Administrasi Jakarta Selatan",
    "Kota Administrasi Jakarta Timur"
  ],
  "Jawa Barat": [
    "Kabupaten Bogor",
    "Kabupaten Sukabumi",
    "Kabupaten Cianjur",
    "Kabupaten Bandung",
    "Kabupaten Garut",
    "Kabupaten Tasikmalaya",
    "Kabupaten Ciamis",
    "Kabupaten Kuningan",
    "Kabupaten Cirebon",
    "Kabupaten Majalengka",
    "Kabupaten Sumedang",
    "Kabupaten Indramayu",
    "Kabupaten Subang",
    "Kabupaten Purwakarta",
    "Kabupaten Karawang",
    "Kabupaten Bekasi",
    "Kabupaten Bandung Barat",
    "Kabupaten Pangandaran",
    "Kota Bogor",
    "Kota Sukabumi",
    "Kota Bandung",
    "Kota Cirebon",
    "Kota Bekasi",
    "Kota Depok",
    "Kota Cimahi",
    "Kota Tasikmalaya",
    "Kota Banjar"
  ],
  "Jawa Tengah": [
    "Kabupaten Cilacap",
    "Kabupaten Banyumas",
    "Kabupaten Purbalingga",
    "Kabupaten Banjarnegara",
    "Kabupaten Kebumen",
    "Kabupaten Purworejo",
    "Kabupaten Wonosobo",
    "Kabupaten Magelang",
    "Kabupaten Boyolali",
    "Kabupaten Klaten",
    "Kabupaten Sukoharjo",
    "Kabupaten Wonogiri",
    "Kabupaten Karanganyar",
    "Kabupaten Sragen",
    "Kabupaten Grobogan",
    "Kabupaten Blora",
    "Kabupaten Rembang",
    "Kabupaten Pati",
    "Kabupaten Kudus",
    "Kabupaten Jepara",
    "Kabupaten Demak",
    "Kabupaten Semarang",
    "Kabupaten Temanggung",
    "Kabupaten Kendal",
    "Kabupaten Batang",
    "Kabupaten Pekalongan",
    "Kabupaten Pemalang",
    "Kabupaten Tegal",
    "Kabupaten Brebes",
    "Kota Magelang",
    "Kota Surakarta",
    "Kota Salatiga",
    "Kota Semarang",
    "Kota Pekalongan",
    "Kota Tegal"
  ],
  "DI Yogyakarta": [
    "Kabupaten Kulon Progo",
    "Kabupaten Bantul",
    "Kabupaten Gunungkidul",
    "Kabupaten Sleman",
    "Kota Yogyakarta"
  ],
  "Jawa Timur": [
    "Kabupaten Pacitan",
    "Kabupaten Ponorogo",
    "Kabupaten Trenggalek",
    "Kabupaten Tulungagung",
    "Kabupaten Blitar",
    "Kabupaten Kediri",
    "Kabupaten Malang",
    "Kabupaten Lumajang",
    "Kabupaten Jember",
    "Kabupaten Banyuwangi",
    "Kabupaten Bondowoso",
    "Kabupaten Situbondo",
    "Kabupaten Probolinggo",
    "Kabupaten Pasuruan",
    "Kabupaten Sidoarjo",
    "Kabupaten Mojokerto",
    "Kabupaten Jombang",
    "Kabupaten Nganjuk",
    "Kabupaten Madiun",
    "Kabupaten Magetan",
    "Kabupaten Ngawi",
    "Kabupaten Bojonegoro",
    "Kabupaten Tuban",
    "Kabupaten Lamongan",
    "Kabupaten Gresik",
    "Kabupaten Bangkalan",
    "Kabupaten Sampang",
    "Kabupaten Pamekasan",
    "Kabupaten Sumenep",
    "Kota Kediri",
    "Kota Blitar",
    "Kota Malang",
    "Kota Probolinggo",
    "Kota Pasuruan",
    "Kota Mojokerto",
    "Kota Madiun",
    "Kota Surabaya",
    "Kota Batu"
  ],
  "Banten": [
    "Kabupaten Pandeglang",
    "Kabupaten Lebak",
    "Kabupaten Tangerang",
    "Kabupaten Serang",
    "Kota Tangerang",
    "Kota Cilegon",
    "Kota Serang",
    "Kota Tangerang Selatan"
  ],
  "Bali": [
    "Kabupaten Jembrana",
    "Kabupaten Tabanan",
    "Kabupaten Badung",
    "Kabupaten Gianyar",
    "Kabupaten Klungkung",
    "Kabupaten Bangli",
    "Kabupaten Karangasem",
    "Kabupaten Buleleng",
    "Kota Denpasar"
  ],
  "Nusa Tenggara Barat": [
    "Kabupaten Lombok Barat",
    "Kabupaten Lombok Tengah",
    "Kabupaten Lombok Timur",
    "Kabupaten Sumbawa",
    "Kabupaten Dompu",
    "Kabupaten Bima",
    "Kabupaten Sumbawa Barat",
    "Kabupaten Lombok Utara",
    "Kota Mataram",
    "Kota Bima"
  ],
  "Nusa Tenggara Timur": [
    "Kabupaten Kupang",
    "Kabupaten Timor Tengah Selatan",
    "Kabupaten Timor Tengah Utara",
    "Kabupaten Belu",
    "Kabupaten Alor",
    "Kabupaten Flores Timur",
    "Kabupaten Sikka",
    "Kabupaten Ende",
    "Kabupaten Ngada",
    "Kabupaten Manggarai",
    "Kabupaten Sumba Timur",
    "Kabupaten Sumba Barat",
    "Kabupaten Lembata",
    "Kabupaten Rote Ndao",
    "Kabupaten Manggarai Barat",
    "Kabupaten Nagekeo",
    "Kabupaten Sumba Tengah",
    "Kabupaten Sumba Barat Daya",
    "Kabupaten Manggarai Timur",
    "Kabupaten Sabu Raijua",
    "Kabupaten Malaka",
    "Kota Kupang"
  ],
  "Kalimantan Barat": [
    "Kabupaten Sambas",
    "Kabupaten Mempawah",
    "Kabupaten Sanggau",
    "Kabupaten Ketapang",
    "Kabupaten Sintang",
    "Kabupaten Kapuas Hulu",
    "Kabupaten Bengkayang",
    "Kabupaten Landak",
    "Kabupaten Sekadau",
    "Kabupaten Melawi",
    "Kabupaten Kayong Utara",
    "Kabupaten Kubu Raya",
    "Kota Pontianak",
    "Kota Singkawang"
  ],
  "Kalimantan Tengah": [
    "Kabupaten Kotawaringin Barat",
    "Kabupaten Kotawaringin Timur",
    "Kabupaten Kapuas",
    "Kabupaten Barito Selatan",
    "Kabupaten Barito Utara",
    "Kabupaten Katingan",
    "Kabupaten Seruyan",
    "Kabupaten Sukamara",
    "Kabupaten Lamandau",
    "Kabupaten Gunung Mas",
    "Kabupaten Pulang Pisau",
    "Kabupaten Murung Raya",
    "Kabupaten Barito Timur",
    "Kota Palangka Raya"
  ],
  "Kalimantan Selatan": [
    "Kabupaten Tanah Laut",
    "Kabupaten Kotabaru",
    "Kabupaten Banjar",
    "Kabupaten Barito Kuala",
    "Kabupaten Tapin",
    "Kabupaten Hulu Sungai Selatan",
    "Kabupaten Hulu Sungai Tengah",
    "Kabupaten Hulu Sungai Utara",
    "Kabupaten Tabalong",
    "Kabupaten Tanah Bumbu",
    "Kabupaten Balangan",
    "Kota Banjarmasin",
    "Kota Banjarbaru"
  ],
  "Kalimantan Timur": [
    "Kabupaten Paser",
    "Kabupaten Kutai Kartanegara",
    "Kabupaten Berau",
    "Kabupaten Kutai Barat",
    "Kabupaten Kutai Timur",
    "Kabupaten Penajam Paser Utara",
    "Kabupaten Mahakam Ulu",
    "Kota Balikpapan",
    "Kota Samarinda",
    "Kota Bontang"
  ],
  "Kalimantan Utara": [
    "Kabupaten Bulungan",
    "Kabupaten Malinau",
    "Kabupaten Nunukan",
    "Kabupaten Tana Tidung",
    "Kota Tarakan"
  ],
  "Sulawesi Utara": [
    "Kabupaten Bolaang Mongondow",
    "Kabupaten Minahasa",
    "Kabupaten Kepulauan Sangihe",
    "Kabupaten Kepulauan Talaud",
    "Kabupaten Minahasa Selatan",
    "Kabupaten Minahasa Utara",
    "Kabupaten Minahasa Tenggara",
    "Kabupaten Bolaang Mongondow Utara",
    "Kabupaten Kepulauan Siau Tagulandang Biaro",
    "Kabupaten Bolaang Mongondow Timur",
    "Kabupaten Bolaang Mongondow Selatan",
    "Kota Manado",
    "Kota Bitung",
    "Kota Tomohon",
    "Kota Kotamobagu"
  ],
  "Sulawesi Tengah": [
    "Kabupaten Banggai",
    "Kabupaten Poso",
    "Kabupaten Donggala",
    "Kabupaten Tolitoli",
    "Kabupaten Buol",
    "Kabupaten Morowali",
    "Kabupaten Banggai Kepulauan",
    "Kabupaten Parigi Moutong",
    "Kabupaten Tojo Una-Una",
    "Kabupaten Sigi",
    "Kabupaten Banggai Laut",
    "Kabupaten Morowali Utara",
    "Kota Palu"
  ],
  "Sulawesi Selatan": [
    "Kabupaten Kepulauan Selayar",
    "Kabupaten Bulukumba",
    "Kabupaten Bantaeng",
    "Kabupaten Jeneponto",
    "Kabupaten Takalar",
    "Kabupaten Gowa",
    "Kabupaten Sinjai",
    "Kabupaten Bone",
    "Kabupaten Maros",
    "Kabupaten Pangkajene dan Kepulauan",
    "Kabupaten Barru",
    "Kabupaten Soppeng",
    "Kabupaten Wajo",
    "Kabupaten Sidenreng Rappang",
    "Kabupaten Pinrang",
    "Kabupaten Enrekang",
    "Kabupaten Luwu",
    "Kabupaten Tana Toraja",
    "Kabupaten Luwu Utara",
    "Kabupaten Luwu Timur",
    "Kabupaten Toraja Utara",
    "Kota Makassar",
    "Kota Parepare",
    "Kota Palopo"
  ],
  "Sulawesi Tenggara": [
    "Kabupaten Kolaka",
    "Kabupaten Konawe",
    "Kabupaten Muna",
    "Kabupaten Buton",
    "Kabupaten Konawe Selatan",
    "Kabupaten Bombana",
    "Kabupaten Wakatobi",
    "Kabupaten Kolaka Utara",
    "Kabupaten Konawe Utara",
    "Kabupaten Buton Utara",
    "Kabupaten Kolaka Timur",
    "Kabupaten Konawe Kepulauan",
    "Kabupaten Muna Barat",
    "Kabupaten Buton Tengah",
    "Kabupaten Buton Selatan",
    "Kota Kendari",
    "Kota Baubau"
  ],
  "Gorontalo": [
    "Kabupaten Gorontalo",
    "Kabupaten Boalemo",
    "Kabupaten Bone Bolango",
    "Kabupaten Pohuwato",
    "Kabupaten Gorontalo Utara",
    "Kota Gorontalo"
  ],
  "Sulawesi Barat": [
    "Kabupaten Pasangkayu",
    "Kabupaten Mamuju",
    "Kabupaten Mamasa",
    "Kabupaten Polewali Mandar",
    "Kabupaten Majene",
    "Kabupaten Mamuju Tengah"
  ],
  "Maluku": [
    "Kabupaten Maluku Tengah",
    "Kabupaten Maluku Tenggara",
    "Kabupaten Kepulauan Tanimbar",
    "Kabupaten Buru",
    "Kabupaten Seram Bagian Timur",
    "Kabupaten Seram Bagian Barat",
    "Kabupaten Kepulauan Aru",
    "Kabupaten Maluku Barat Daya",
    "Kabupaten Buru Selatan",
    "Kota Ambon",
    "Kota Tual"
  ],
  "Maluku Utara": [
    "Kabupaten Halmahera Barat",
    "Kabupaten Halmahera Tengah",
    "Kabupaten Halmahera Utara",
    "Kabupaten Halmahera Selatan",
    "Kabupaten Kepulauan Sula",
    "Kabupaten Halmahera Timur",
    "Kabupaten Pulau Morotai",
    "Kabupaten Pulau Taliabu",
    "Kota Ternate",
    "Kota Tidore Kepulauan"
  ],
  "Papua Barat": [
    "Kabupaten Manokwari",
    "Kabupaten Fakfak",
    "Kabupaten Teluk Bintuni",
    "Kabupaten Teluk Wondama",
    "Kabupaten Kaimana",
    "Kabupaten Manokwari Selatan",
    "Kabupaten Pegunungan Arfak"
  ],
  "Papua Barat Daya": [
    "Kabupaten Sorong",
    "Kabupaten Sorong Selatan",
    "Kabupaten Raja Ampat",
    "Kabupaten Tambrauw",
    "Kabupaten Maybrat",
    "Kota Sorong"
  ],
  "Papua": [
    "Kabupaten Jayapura",
    "Kabupaten Kepulauan Yapen",
    "Kabupaten Biak Numfor",
    "Kabupaten Sarmi",
    "Kabupaten Keerom",
    "Kabupaten Waropen",
    "Kabupaten Supiori",
    "Kabupaten Mamberamo Raya",
    "Kota Jayapura"
  ],
  "Papua Selatan": [
    "Kabupaten Merauke",
    "Kabupaten Boven Digoel",
    "Kabupaten Mappi",
    "Kabupaten Asmat"
  ],
  "Papua Tengah": [
    "Kabupaten Nabire",
    "Kabupaten Puncak Jaya",
    "Kabupaten Paniai",
    "Kabupaten Mimika",
    "Kabupaten Puncak",
    "Kabupaten Dogiyai",
    "Kabupaten Intan Jaya",
    "Kabupaten Deiyai"
  ],
  "Papua Pegunungan": [
    "Kabupaten Jayawijaya",
    "Kabupaten Pegunungan Bintang",
    "Kabupaten Yahukimo",
    "Kabupaten Tolikara",
    "Kabupaten Mamberamo Tengah",
    "Kabupaten Yalimo",
    "Kabupaten Lanny Jaya",
    "Kabupaten Nduga"
  ]
};

const DEFAULT_DOCUMENTS=[
  {id:"doc-nib",name:"NIB-2026.pdf",category:"Legalitas",status:"Terverifikasi",date:"12 Agu 2026",projectName:"Proyek Migas Kaltim",taskIds:["nib"]},
  {id:"doc-polygon",name:"Polygon-tapak.geojson",category:"Lokasi",status:"Perlu review",date:"14 Agu 2026",projectName:"Proyek Migas Kaltim",taskIds:["spatial","location-overlay"]},
  {id:"doc-water",name:"Neraca-air-v2.xlsx",category:"Air limbah",status:"Draf",date:"18 Agu 2026",projectName:"Proyek Migas Kaltim",taskIds:["ww-map","ww-pertek"]},
  {id:"doc-tps",name:"Layout-TPS-LB3.pdf",category:"Limbah B3",status:"Draf",date:"18 Agu 2026",projectName:"Proyek Migas Kaltim",taskIds:["b3-storage"]},
  {id:"doc-emission",name:"Hasil-uji-emisi.pdf",category:"Emisi",status:"Kadaluarsa 30 hari",date:"02 Agu 2026",projectName:"Proyek Migas Kaltim",taskIds:["air-pertek","air-report"]},
  {id:"doc-rkl",name:"Matriks-RKL-RPL.xlsx",category:"AMDAL",status:"Belum lengkap",date:"19 Agu 2026",projectName:"Proyek Migas Kaltim",taskIds:["screen","other-impact","report"]}
];

const DEFAULT_COMPLIANCE_REVIEW={officialDocumentType:"",officialDocumentStatus:"Belum dikonfirmasi",officialDocumentNumber:"",officialDocumentDate:"",officialDocumentSource:"",authorityStatus:"Belum dikonfirmasi",authorityAgency:"",authorityReference:"",authorityDate:"",reScreenRequired:false,reScreenReason:"",changeLog:[]};
const DEFAULT_STATE = {
  view:"home",step:0,
  kblis:[{code:"06100",title:"Pertambangan Minyak Bumi",description:"Kegiatan pertambangan, pengambilan, dan persiapan minyak bumi.",id:"demo-06100"}],
  projectName:"Proyek Migas Kaltim",projectStatus:"Usaha baru",stage:"Operasi",capacity:"45000",capacityUnit:"BOPD",
  activities:["Eksplorasi/pengeboran","Produksi minyak/gas","Pipa & gathering"],
  impacts:["domestic","process","produced","oily","hydrotest","boiler","genset","turbine","flare","fugitive","usedoil","sludge","chemical","storage","spill","groundwater","surface","noise","traffic","ghg"],
  answers:{fieldType:"Onshore",injection:"Belum ditentukan"},wasteCodes:["b105d","b110d"],showAllImpacts:false,showAllWaste:false,
  legalPurpose:"business",legalOwners:"",legalUmk:"",
  province:"Kalimantan Timur",regency:"Kabupaten Kutai Kartanegara",locationFlags:[],openTask:0,
  taskFilter:"all",taskProgress:{},documentTask:null,documents:DEFAULT_DOCUMENTS.map(x=>({...x,taskIds:[...x.taskIds]})),docProject:"",docSearch:"",regFilter:"Semua",regSearch:"",regMode:"all",regProvince:"Semua daerah",docFilter:"Semua",docStorage:{mode:"browser",rootName:"",rootFolder:"EnviroTrack",connected:false},polygon:null,calendarEvents:[],masterB3Search:"",masterB3Kind:"lb3",masterB3Selected:[],masterLB3Selected:[],mapLayerPreferences:{},mapCatalogOpen:false,mapCatalogScope:"all",mapCatalogStatus:"all",mapCatalogCoverage:"all",complianceReview:{...DEFAULT_COMPLIANCE_REVIEW},obligationRegister:[]
};

const STORAGE_KEY="envirotrack-state-v2";
const LEGACY_STORAGE_KEY="envirotrack-state";
const DOC_DB_NAME="envirotrack-documents-v1";
const DOC_DB_VERSION=1;
let documentDirectoryHandle=null;
let documentDbPromise=null;
function openDocumentDb(){
  if(documentDbPromise)return documentDbPromise;
  documentDbPromise=new Promise((resolve,reject)=>{
    if(!window.indexedDB)return reject(new Error("IndexedDB tidak tersedia"));
    const request=indexedDB.open(DOC_DB_NAME,DOC_DB_VERSION);
    request.onupgradeneeded=()=>{const db=request.result;if(!db.objectStoreNames.contains("handles"))db.createObjectStore("handles");if(!db.objectStoreNames.contains("files"))db.createObjectStore("files");};
    request.onsuccess=()=>resolve(request.result);request.onerror=()=>reject(request.error||new Error("Database lokal gagal dibuka"));
  });
  return documentDbPromise;
}
function documentDbRequest(store,mode,operation){
  return openDocumentDb().then(db=>new Promise((resolve,reject)=>{const tx=db.transaction(store,mode),objectStore=tx.objectStore(store),request=operation(objectStore);request.onsuccess=()=>resolve(request.result);request.onerror=()=>reject(request.error||new Error("Database lokal gagal diproses"));}));
}
function putDocumentRecord(store,key,value){return documentDbRequest(store,"readwrite",s=>s.put(value,key));}
function getDocumentRecord(store,key){return documentDbRequest(store,"readonly",s=>s.get(key));}
function safeFilePart(value,fallback="Dokumen"){return String(value||fallback).normalize("NFKC").replace(/[<>:"/\\|?*\u0000-\u001f]/g,"-").replace(/\.+$/g,"").trim().slice(0,90)||fallback;}
function safeProjectFolder(value){return safeFilePart(value,"Proyek baru");}
function safeRelativePath(value){return String(value||"").split("/").map((part,i)=>safeFilePart(part,i?"Dokumen":"EnviroTrack")).filter(Boolean).join("/");}
function formatBytes(value){const bytes=Number(value||0);if(!bytes)return "Ukuran belum tersedia";if(bytes<1024)return `${bytes} B`;if(bytes<1048576)return `${(bytes/1024).toFixed(1)} KB`;return `${(bytes/1048576).toFixed(1)} MB`;}
function folderRelativePath(projectName,category,name){return ["EnviroTrack",safeProjectFolder(projectName),safeFilePart(category,"Lainnya"),safeFilePart(name,"dokumen")].join("/");}
function storageState(){const meta=state.docStorage||{};if(documentDirectoryHandle)return {mode:"folder",rootName:meta.rootName||documentDirectoryHandle.name,connected:true};return {mode:meta.mode||"browser",rootName:meta.rootName||"",connected:false};}
async function verifyDirectoryPermission(handle,write=false){if(!handle?.queryPermission)return true;const options={mode:write?"readwrite":"read"};if(await handle.queryPermission(options)==="granted")return true;return await handle.requestPermission(options)==="granted";}
async function restoreDocumentDirectory(){try{const handle=await getDocumentRecord("handles","root");if(!handle)return;documentDirectoryHandle=handle;const connected=handle.queryPermission?await handle.queryPermission({mode:"read"})==="granted":false;state.docStorage={...(state.docStorage||{}),mode:"folder",rootName:handle.name,connected};renderView();}catch{documentDirectoryHandle=null;state.docStorage={...(state.docStorage||{}),connected:false};}}
async function syncBrowserFilesToDirectory(showMessage=true){if(!documentDirectoryHandle)return false;const allowed=await verifyDirectoryPermission(documentDirectoryHandle,true);if(!allowed){state.docStorage={...(state.docStorage||{}),connected:false};saveState();return false;}let copied=0;for(const doc of state.documents||[]){if(!doc.fileKey)continue;try{const blob=await getDocumentRecord("files",doc.fileKey);if(!blob)continue;const parts=safeRelativePath(doc.relativePath||folderRelativePath(doc.projectName,doc.category,doc.name)).split("/");let dir=documentDirectoryHandle;for(const part of parts.slice(0,-1))dir=await dir.getDirectoryHandle(part,{create:true});const fileHandle=await dir.getFileHandle(parts.at(-1),{create:true});const writable=await fileHandle.createWritable();await writable.write(blob);await writable.close();doc.relativePath=parts.join("/");doc.storage="folder";copied++;}catch{doc.storage="browser";}}state.docStorage={...(state.docStorage||{}),mode:"folder",rootName:documentDirectoryHandle.name,connected:true};saveState();if(showMessage)showToast(copied?`${copied} dokumen disalin ke folder terpilih.`:"Folder tersambung. Dokumen baru akan disimpan di sana.");return true;}
async function chooseDocumentDirectory(){if(!window.showDirectoryPicker){showToast("Browser ini belum mendukung pemilihan folder. Gunakan mode browser sementara atau Chrome/Edge desktop.");return;}try{const handle=await window.showDirectoryPicker({id:"envirotrack-documents",mode:"readwrite"});if(!(await verifyDirectoryPermission(handle,true))){showToast("Izin tulis ke folder tidak diberikan.");return;}documentDirectoryHandle=handle;await putDocumentRecord("handles","root",handle);state.docStorage={...(state.docStorage||{}),mode:"folder",rootName:handle.name,connected:true};saveState();await syncBrowserFilesToDirectory(false);renderView();showToast(`Folder ${handle.name} tersambung.`);}catch(error){if(error?.name!=="AbortError")showToast("Folder belum tersambung. Coba pilih directory lain.");}}
async function storeUploadedFile(file,projectName,category){const relativePath=folderRelativePath(projectName,category,file.name),parts=relativePath.split("/");if(documentDirectoryHandle&&await verifyDirectoryPermission(documentDirectoryHandle,true)){let dir=documentDirectoryHandle;for(const part of parts.slice(0,-1))dir=await dir.getDirectoryHandle(part,{create:true});let fileName=parts.at(-1),fileHandle=await dir.getFileHandle(fileName,{create:true}),writable=await fileHandle.createWritable();await writable.write(file);await writable.close();return {relativePath:parts.join("/"),storage:"folder",size:file.size,type:file.type||"application/octet-stream"};}const fileKey=`file-${crypto.randomUUID?crypto.randomUUID():`${Date.now()}-${Math.random()}`}`;await putDocumentRecord("files",fileKey,file);return {fileKey,relativePath,storage:"browser",size:file.size,type:file.type||"application/octet-stream"};}
async function readDocumentBlob(doc){try{if(doc.fileKey)return await getDocumentRecord("files",doc.fileKey);if(documentDirectoryHandle&&doc.relativePath&&await verifyDirectoryPermission(documentDirectoryHandle,false)){const parts=safeRelativePath(doc.relativePath).split("/");let dir=documentDirectoryHandle;for(const part of parts.slice(0,-1))dir=await dir.getDirectoryHandle(part);return await (await dir.getFileHandle(parts.at(-1))).getFile();}}catch{}return null;}
function buildStateExport(){const exported=JSON.parse(JSON.stringify(state));exported.docStorage={...(exported.docStorage||{}),connected:false};delete exported.rootHandle;(exported.documents||[]).forEach(doc=>{delete doc.fileKey;doc.storage="manifest";doc.relativePath=safeRelativePath(doc.relativePath||folderRelativePath(doc.projectName,doc.category,doc.name));});return {format:"envirotrack-state",schemaVersion:3,exportedAt:new Date().toISOString(),app:"EnviroTrack",state:exported};}
function downloadFile(blob,name){const url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);}
function exportStateFile(){const payload=JSON.stringify(buildStateExport(),null,2),name=`envirotrack-save-${new Date().toISOString().slice(0,10)}.json`;downloadFile(new Blob([payload],{type:"application/json"}),name);showToast("State workspace berhasil diekspor.");}
function csvCell(value){return `"${String(value??"").replace(/"/g,'""')}"`;}
function exportChecklistFile(){const headers=["Kategori","Tugas","Aturan pemicu","Status dasar","Status workspace","Jatuh tempo relatif","Penanggung jawab","Langkah selesai","Bukti yang dibutuhkan","Dokumen tertaut"],rows=buildTasks().map(task=>{const progress=progressForTask(task.id),steps=guideForTask(task).steps||[],done=Array.isArray(progress.done)?progress.done:[],status=progress.status==="completed"?"Terverifikasi internal":progress.status==="self_declared"?"Dinyatakan oleh pengguna":progress.status==="evidence_submitted"?"Bukti diunggah":progress.status==="evidence_needed"?"Perlu bukti":progress.status==="in_progress"?"Sedang dikerjakan":"Belum dimulai",docs=documentsForTask(task.id).map(doc=>doc.name).join("; ");return [task.cat,task.title,task.rule,task.status,status,task.due,task.owner,`${done.length}/${steps.length}`,task.evidence,docs];}),csv="\uFEFF"+[headers,...rows].map(row=>row.map(csvCell).join(",")).join("\r\n"),name=`envirotrack-checklist-${new Date().toISOString().slice(0,10)}.csv`;downloadFile(new Blob([csv],{type:"text/csv;charset=utf-8"}),name);showToast("Checklist proyek berhasil diekspor ke CSV.");}
async function downloadDocumentFile(id){const doc=(state.documents||[]).find(item=>item.id===id);if(!doc){showToast("Dokumen tidak ditemukan di workspace lokal.");return;}try{const blob=await readDocumentBlob(doc);if(!blob){showToast("File asli belum tersedia di storage lokal; manifest dokumen tetap tersimpan.");return;}downloadFile(blob,safeFilePart(doc.name,"dokumen"));showToast(`Salinan ${doc.name} diunduh.`);}catch{showToast("File dokumen belum dapat dibaca dari storage lokal.");}}
function buildBundleReadme(included,total){return `# EnviroTrack workspace export\n\nBundle ini dibuat ${new Date().toLocaleString("id-ID")} dan berisi state workspace serta ${included} dari ${total} dokumen yang tersedia di storage lokal.\n\n## Windows\n\n1. Ekstrak ZIP ini ke folder biasa.\n2. Jalankan 'restore.bat' atau buka EnviroTrack secara manual.\n3. Pada menu Dokumen, pilih **Impor workspace ZIP** dan pilih ZIP yang sama.\n4. Jika browser meminta izin, pilih folder root yang akan dipakai untuk penyimpanan lokal.\n\n## Mobile atau browser lain\n\nBuka EnviroTrack, pilih **Impor workspace ZIP**, lalu pilih file ZIP ini. Jika pemilihan folder tidak tersedia, file akan masuk ke mode browser sementara. Pilih directory baru jika ingin menyalin dokumen ke folder perangkat.\n\n## Catatan\n\nState menyimpan proyek, progress, checklist, preferensi, dan manifest dokumen. Folder asli tidak ikut memiliki path absolut; path di dalam bundle bersifat relatif. File asli di komputer sumber tidak dihapus. `;}
function buildRestoreBat(){const appUrl=new URL("#dokumen",location.href.split("#")[0]).href.replace(/\\/g,"/");return `@echo off\r\nsetlocal\r\ncd /d "%~dp0"\r\necho EnviroTrack restore bundle\r\necho Ekstrak ZIP ini terlebih dahulu, lalu impor workspace ZIP melalui browser.\r\nstart "" "${appUrl}"\r\nstart "" "%~dp0README.md"\r\n`;}
async function exportWorkspaceZip(){if(!window.JSZip){showToast("Library ZIP belum siap. Muat ulang halaman lalu coba lagi.");return;}const zip=new JSZip(),payload=buildStateExport(),docs=payload.state.documents||[];let included=0;for(const doc of docs){const source=(state.documents||[]).find(item=>item.id===doc.id)||doc;const blob=await readDocumentBlob(source);if(!blob)continue;const path=safeRelativePath(doc.relativePath||folderRelativePath(doc.projectName,doc.category,doc.name));zip.file(path,blob);included++;}zip.file("envirotrack-state.json",JSON.stringify(payload,null,2));zip.file("README.md",buildBundleReadme(included,docs.length));zip.file("restore.bat",buildRestoreBat());const blob=await zip.generateAsync({type:"blob",compression:"DEFLATE",compressionOptions:{level:6}});downloadFile(blob,`envirotrack-workspace-${new Date().toISOString().slice(0,10)}.zip`);showToast(`${included} dokumen dimasukkan ke bundle ZIP.`);}
function importedStateFromPayload(payload){const candidate=payload?.format==="envirotrack-state"?payload.state:payload;return candidate&&typeof candidate==="object"&&!Array.isArray(candidate)?candidate:null;}
async function importStateFile(file){try{const payload=JSON.parse(await file.text()),incoming=importedStateFromPayload(payload);if(!incoming)throw new Error("Format state tidak dikenal");state=normalizeState(incoming);state.view="documents";state.documentTask=null;state.docProject=state.projectName;state.docSearch="";state.docFilter="Semua";state.docStorage={...(state.docStorage||{}),mode:"browser",connected:false};saveState();renderView();showToast("State berhasil dimuat. Pilih folder lagi jika dokumen akan disalin ke directory perangkat.");}catch{showToast("State tidak dapat dimuat. Pastikan file JSON berasal dari EnviroTrack.");}}
async function importWorkspaceZip(file){if(!window.JSZip){showToast("Library ZIP belum siap. Muat ulang halaman lalu coba lagi.");return;}try{const zip=await JSZip.loadAsync(file),stateEntry=zip.file("envirotrack-state.json");if(!stateEntry)throw new Error("State tidak ditemukan");const incoming=importedStateFromPayload(JSON.parse(await stateEntry.async("text")));if(!incoming)throw new Error("Format state tidak dikenal");state=normalizeState(incoming);let restored=0;for(const doc of state.documents||[]){const path=safeRelativePath(doc.relativePath||folderRelativePath(doc.projectName,doc.category,doc.name)),entry=zip.file(path);if(!entry)continue;const blob=await entry.async("blob"),fileKey=`file-${crypto.randomUUID?crypto.randomUUID():`${Date.now()}-${Math.random()}`}`;await putDocumentRecord("files",fileKey,blob);doc.fileKey=fileKey;doc.storage="browser";restored++;}state.view="documents";state.documentTask=null;state.docProject=state.projectName;state.docSearch="";state.docFilter="Semua";state.docStorage={...(state.docStorage||{}),mode:"browser",connected:false};saveState();if(documentDirectoryHandle)await syncBrowserFilesToDirectory(false);renderView();showToast(`Workspace dimuat: ${restored} dokumen tersedia.`);}catch{showToast("Workspace ZIP tidak dapat dimuat. Pastikan bundle berasal dari EnviroTrack.");}}
function normalizeState(saved){
  const merged={...DEFAULT_STATE,...(saved&&typeof saved==="object"?saved:{}),answers:{...DEFAULT_STATE.answers,...((saved&&saved.answers)||{})},docStorage:{...DEFAULT_STATE.docStorage,...((saved&&saved.docStorage)||{})}};
  merged.impacts=Array.isArray(merged.impacts)?merged.impacts:[];if(merged.impacts.includes("biodiversity")){merged.impacts=[...new Set([...merged.impacts.filter(key=>key!=="biodiversity"),"flora","fauna"])]};
  const seenKbli=new Set();
  merged.kblis=(Array.isArray(merged.kblis)?merged.kblis:[]).filter(k=>{const code=String(k?.code||"");if(!/^\d{5}$/.test(code)||seenKbli.has(code))return false;seenKbli.add(code);return true;});
  if(!saved?.capacityUnit){const match=String(saved?.capacity||"").match(/([\d.,]+)\s*(.*)/);if(match){merged.capacity=match[1];merged.capacityUnit=match[2]||profileForCode(saved?.kblis?.[0]?.code).units[0];}}
  if(!Array.isArray(merged.wasteCodes))merged.wasteCodes=[];
  if(!Array.isArray(merged.masterB3Selected))merged.masterB3Selected=[];
  if(!Array.isArray(merged.masterLB3Selected))merged.masterLB3Selected=[];
  if(!["b3","lb3"].includes(merged.masterB3Kind))merged.masterB3Kind="lb3";
  if(typeof merged.masterB3Search!=="string")merged.masterB3Search="";
  if(!merged.taskProgress||typeof merged.taskProgress!=="object"||Array.isArray(merged.taskProgress))merged.taskProgress={};
  if(!Array.isArray(merged.calendarEvents))merged.calendarEvents=[];
  if(merged.polygon&&!Array.isArray(merged.polygon.points))merged.polygon=null;
  if(!Array.isArray(saved?.documents))merged.documents=DEFAULT_DOCUMENTS.map(x=>({...x,taskIds:[...x.taskIds]}));
  if(!Array.isArray(merged.documents))merged.documents=[];
  merged.documents=merged.documents.map(d=>({...d,projectName:d.projectName||saved?.projectName||DEFAULT_STATE.projectName,taskIds:Array.isArray(d.taskIds)?d.taskIds:[]}));
  merged.complianceReview={...DEFAULT_COMPLIANCE_REVIEW,...(saved?.complianceReview&&typeof saved.complianceReview==="object"?saved.complianceReview:{})};
  merged.complianceReview.changeLog=Array.isArray(merged.complianceReview.changeLog)?merged.complianceReview.changeLog:[];
  merged.complianceReview.officialDocumentStatus=merged.complianceReview.officialDocumentStatus||"Belum dikonfirmasi";merged.complianceReview.authorityStatus=merged.complianceReview.authorityStatus||"Belum dikonfirmasi";merged.complianceReview.reScreenRequired=merged.complianceReview.reScreenRequired===true;
  merged.obligationRegister=Array.isArray(saved?.obligationRegister)?saved.obligationRegister:[];
  if(!PROVINCES.includes(merged.province)){merged.province=DEFAULT_STATE.province;merged.regency=DEFAULT_STATE.regency;}
  const provinceRegencies=REGENCIES[merged.province];const knownOtherRegency=Object.entries(REGENCIES).some(([province,items])=>province!==merged.province&&items.includes(merged.regency));
  if(provinceRegencies&&!provinceRegencies.includes(merged.regency))merged.regency=provinceRegencies[0];if(!provinceRegencies&&knownOtherRegency)merged.regency="";
  if(!["all","project"].includes(merged.regMode))merged.regMode="all";if(!["Semua","Nasional","Sektoral","Daerah"].includes(merged.regFilter))merged.regFilter="Semua";if(merged.regProvince!=="Semua daerah"&&!REGULATIONS.some(r=>r.province===merged.regProvince))merged.regProvince="Semua daerah";
  if(!["all","Tata ruang","Kawasan sensitif"].includes(merged.mapCatalogScope))merged.mapCatalogScope="all";if(!["all","ready","pending"].includes(merged.mapCatalogStatus))merged.mapCatalogStatus="all";if(!["all","IKN","Indonesia","Kalimantan Timur","WP 5 IKN Timur 2","Perlu konfirmasi"].includes(merged.mapCatalogCoverage))merged.mapCatalogCoverage="all";
  return merged;
}
function readStoredState(){
  try{
    const current=localStorage.getItem(STORAGE_KEY),legacy=localStorage.getItem(LEGACY_STORAGE_KEY),raw=current||legacy;
    if(!raw)return {};
    const parsed=JSON.parse(raw);
    if(!current&&legacy)localStorage.setItem(STORAGE_KEY,legacy);
    if(legacy)localStorage.removeItem(LEGACY_STORAGE_KEY);
    return parsed&&typeof parsed==="object"&&!Array.isArray(parsed)?parsed:{};
  }catch{return {};}
}
let state = loadState();
let lastRenderedView=null;
function createNewProjectState(){
  return {...DEFAULT_STATE,view:"screening",step:0,kblis:[],projectName:"Proyek baru",projectStatus:"Usaha baru",stage:"Pra-konstruksi",capacity:"",capacityUnit:"",activities:[],impacts:[],answers:{},wasteCodes:[],showAllImpacts:false,showAllWaste:false,legalPurpose:"business",legalOwners:"",legalUmk:"",locationFlags:[],openTask:0,taskFilter:"all",taskProgress:{},documentTask:null,documents:DEFAULT_DOCUMENTS.map(x=>({...x,taskIds:[...x.taskIds]})),docProject:"",docSearch:"",regFilter:"Semua",regSearch:"",regMode:"all",regProvince:"Semua daerah",docFilter:"Semua",docStorage:{mode:"browser",rootName:"",rootFolder:"EnviroTrack",connected:false},masterB3Search:"",masterB3Kind:"lb3",masterB3Selected:[],masterLB3Selected:[],mapLayerPreferences:{},mapCatalogOpen:false,mapCatalogScope:"all",mapCatalogStatus:"all",mapCatalogCoverage:"all",complianceReview:{...DEFAULT_COMPLIANCE_REVIEW},obligationRegister:[]};
}
let entryGateTrigger=null;
let entryCloseTimer=null;
let siteMap=null;
function storedWorkspace(){const saved=readStoredState();return saved&&typeof saved==="object"&&Object.keys(saved).length?saved:null;}
function openEntryGate(trigger){const gate=document.getElementById("entry-gate");if(!gate)return;clearTimeout(entryCloseTimer);entryGateTrigger=trigger||document.activeElement;const saved=storedWorkspace(),resume=document.getElementById("entry-resume"),note=document.getElementById("entry-resume-note");if(resume){resume.hidden=!saved;if(saved)note.textContent=`${saved.projectName||"Workspace terakhir"} · langkah ${Math.min(5,Number(saved.step||0)+1)} dari 5`;}gate.hidden=false;gate.classList.remove("is-closing");gate.classList.remove("is-open");gate.setAttribute("aria-hidden","false");document.body.classList.add("entry-gate-open");requestAnimationFrame(()=>{gate.classList.add("is-open");gate.querySelector(".entry-option:not([hidden]),.entry-close")?.focus();});}
function closeEntryGate(restoreFocus=true){const gate=document.getElementById("entry-gate");if(!gate||gate.hidden)return;clearTimeout(entryCloseTimer);gate.classList.remove("is-open");gate.classList.add("is-closing");const finish=()=>{gate.hidden=true;gate.classList.remove("is-closing");gate.setAttribute("aria-hidden","true");document.body.classList.remove("entry-gate-open");if(restoreFocus&&entryGateTrigger?.focus)entryGateTrigger.focus();entryGateTrigger=null;};if(window.matchMedia?.("(prefers-reduced-motion: reduce)").matches)finish();else entryCloseTimer=setTimeout(finish,240);}
function startNewFromEntry(){closeEntryGate(false);state=createNewProjectState();renderView();}
function resumeFromEntry(){const saved=storedWorkspace();if(!saved){showToast("Belum ada workspace lokal untuk dilanjutkan.");return;}closeEntryGate(false);state=normalizeState(saved);renderView();}
function emptyWorkspaceFromEntry(){closeEntryGate(false);state=createNewProjectState();state.view="home";state.projectName="Belum ada proyek";state.documents=[];renderView();}
function setPublicMode(isPublic){document.body.classList.toggle("public-mode",isPublic);document.getElementById("public-landing")?.setAttribute("aria-hidden",String(!isPublic));document.getElementById("main-content")?.setAttribute("aria-hidden",String(isPublic));if(!isPublic)closeEntryGate(false);}
let searchTimer = null;
let toastTimer = null;

function loadState(){try{return normalizeState(readStoredState());}catch{return normalizeState({});}}
function saveState(silent=true){
  try{localStorage.setItem(STORAGE_KEY,JSON.stringify({...state,_schemaVersion:3}));}catch{showToast("Draf tidak dapat disimpan di perangkat ini.");}
  const el=document.getElementById("autosave"); if(el)el.textContent="Tersimpan di perangkat";
  if(!silent)showToast("Draf tersimpan di perangkat ini.");
}
function markNeedsRescreen(reason){
  const review={...DEFAULT_COMPLIANCE_REVIEW,...(state.complianceReview||{})},text=String(reason||"Perubahan proyek");
  const reasons=[...new Set(String(review.reScreenReason||"").split(" · ").filter(Boolean).concat(text))].slice(-5);
  state.complianceReview={...review,reScreenRequired:true,reScreenReason:reasons.join(" · "),changeLog:[...(Array.isArray(review.changeLog)?review.changeLog:[]),{date:new Intl.DateTimeFormat("id-ID",{day:"2-digit",month:"short",year:"numeric"}).format(new Date()),reason:text}]};
}
function esc(value){return String(value??"").replace(/[&<>'"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c]));}
function showToast(message){const el=document.getElementById("toast");el.textContent=message;el.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove("show"),2600);}
function selectedKbli(){return state.kblis[0]||null;}
function selectedProfiles(){return state.kblis.map(k=>profileForCode(k.code));}
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
function isMigas(){return selectedProfiles().includes(QUESTIONNAIRE_PROFILES.migas);}
function sectorWasteKeys(){
  const keys=[];
  state.kblis.forEach(({code:c})=>{
    const profile=profileForCode(c);
    if(profile===QUESTIONNAIRE_PROFILES.migas)keys.push("a3301","a3302","b3301","b3302");
    if(profile===QUESTIONNAIRE_PROFILES.health)keys.push("a3371","a3372","a3373","a3374","a3375","b3371","b3372");
    if(c.startsWith("1042")||c.startsWith("1043"))keys.push("b3421",...(c==="10423"||["10434","10435","10436","10437"].includes(c)?["b413"]:[]));
  });
  return [...new Set(keys)];
}
function impactCount(group){return group.items.filter(([key])=>state.impacts.includes(key)).length;}
function hasGroup(key){const g=IMPACT_GROUPS.find(x=>x.key===key);return g&&g.items.some(([id])=>state.impacts.includes(id));}
function officialLink(url,label,className="inline-link"){return `<a class="${className}" href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`;}
function getPtsp(){
  if(state.regency==="Kota Balikpapan")return {name:"SPONTAN Balikpapan",url:LINKS.ptspBalikpapan};
  if(state.regency==="Kabupaten Kutai Kartanegara")return {name:"DPMPTSP Kukar",url:LINKS.ptspKukar};
  if(state.province==="Kalimantan Timur")return {name:"E-PTSP Kaltim",url:LINKS.ptspKaltim};
  return {name:"OSS / PTSP sesuai kewenangan",url:LINKS.oss};
}

function buildTasks(){
  const ptsp=getPtsp();
  const polygonCheck=polygonQuality(state.polygon);
  const wasteSummary=state.wasteCodes.map(k=>WASTE_CATALOG[k]).filter(Boolean).map(w=>w.code==="Verifikasi"?w.name:`${w.code} ${w.name}`).join("; ")||"Belum ada kandidat kode dipilih";
  const tasks=[],review=state.complianceReview||{},needsMarine=state.impacts.some(key=>["coastal","seawater","dredging"].includes(key))||String(state.answers?.fieldType||"").includes("Offshore")||state.activities.some(item=>/jetty|laut|marin|pengerukan|tambak/i.test(item)),needsBuilding=state.activities.some(item=>/konstruksi|fasilitas|gudang|workshop|IPAL|terminal|basecamp|jalan|drainase|pembangkit|pabrik|bangunan|penunjang/i.test(item))||state.impacts.some(key=>["land-clearing","construction-waste"].includes(key));
  if(state.projectStatus==="Usaha baru")tasks.push(
    {id:"entity",title:"Tentukan bentuk usaha dan selesaikan legalitas AHU",cat:"Pendirian perusahaan",status:"ready",due:"Sebelum OSS",rule:"Ketentuan badan usaha",owner:"Founder / Legal",reason:"OSS menarik dan memvalidasi data badan usaha dari sistem AHU. Bentuk usaha, akta, pengurus, modal, alamat, dan pemilik manfaat harus benar sebelum bidang usaha diajukan.",evidence:"Keputusan bentuk usaha, nama, akta/dokumen pendirian, SK pengesahan atau bukti pendaftaran, data pemilik manfaat.",system:["AHU Online",LINKS.ahu],ruleUrl:LINKS.ahu},
    {id:"tax",title:"Validasi NPWP badan dan akses Coretax",cat:"Pendirian perusahaan",status:"blocked",due:"Sebelum OSS",rule:"Administrasi perpajakan",owner:"Finance / Tax",reason:"Data pajak badan perlu cocok dengan legalitas dan dapat digunakan dalam administrasi perusahaan serta pertukaran data dengan sistem perizinan.",evidence:"NPWP badan, profil wajib pajak, identitas pengurus, bukti akses Coretax.",system:["Coretax DJP",LINKS.coretax],ruleUrl:"https://pajak.go.id/panduan-layanan-pajak/konten/registrasi/pendaftaran-wajib-pajak/pendaftaran-wajib-pajak-badan"}
  );
  tasks.push(
    {id:"nib",title:"Validasi seluruh KBLI, tingkat risiko, dan NIB",cat:"Legalitas",status:"ready",due:"Hari 1",rule:"PP 28/2025",owner:"Legal",reason:"KBLI utama dan pendukung beserta ruang lingkupnya menentukan perizinan dasar serta kewajiban berikutnya.",evidence:"Daftar KBLI utama dan pendukung, uraian kegiatan, skala tiap bidang usaha, NIB/draf OSS.",system:["OSS",LINKS.oss],ruleUrl:REGULATIONS.find(r=>r.id==="pp28-2025").url},
    {id:"spatial",title:"Unggah polygon dan cek kesesuaian ruang",cat:"Prasyarat",status:state.polygon&&polygonCheck.valid?"ready":"blocked",due:"Hari 2",rule:"Tata ruang pusat/daerah",owner:"GIS",reason:state.polygon&&polygonCheck.valid?"Polygon valid secara geometri dan siap ditinjau terhadap sumber tata ruang/kawasan resmi; hasil irisan tetap perlu feature query atau konfirmasi instansi.":"Koordinat menentukan kewenangan, sensitivitas, dan kesesuaian pemanfaatan ruang.",evidence:"Polygon GeoJSON/KML, hasil pemeriksaan geometri, luas tapak, dokumen kesesuaian ruang, dan bukti overlay resmi.",system:[state.province==="Kalimantan Timur"?"WebGIS Kaltim":ptsp.name,state.province==="Kalimantan Timur"?LINKS.gisKaltim:ptsp.url],ruleUrl:LINKS.jdihn},
    {id:"screen",title:"Konfirmasi AMDAL / UKL-UPL / SPPL",cat:"Persetujuan lingkungan",status:"ready",due:"Hari 3",rule:"Permen LHK 4/2021",owner:"Environment",reason:"Jenis, skala, dan lokasi kegiatan harus dicocokkan dengan daftar wajib dokumen lingkungan.",evidence:"NIB, KBLI, kapasitas, uraian proses, polygon, hasil penapisan.",system:["AMDALNet",LINKS.amdalnet],ruleUrl:"https://peraturan.go.id/id/permen-lhk-no-4-tahun-2021"},
    {id:"local",title:`Konfirmasi layanan dan kewenangan ${state.regency}`,cat:"Daerah",status:"ready",due:"Hari 3",rule:"PTSP & JDIH daerah",owner:"Legal",reason:"DPMPTSP menjadi titik layanan/fasilitasi daerah dan dapat terlibat dalam verifikasi atau pemrosesan bersama OPD teknis sesuai kewenangan.",evidence:"Alamat/polygon, identitas pelaku usaha, ID proyek OSS, daftar izin dan persyaratan dasar terkait.",system:[ptsp.name,ptsp.url],ruleUrl:LINKS.jdihn}
  );
  if(needsMarine)tasks.push({id:"kkprl",title:"Konfirmasi KKPRL dan pemanfaatan ruang laut",cat:"Persyaratan dasar",status:"ready",due:"Sebelum pengajuan",rule:"PP 28/2025 · OSS",owner:"Legal / GIS",reason:"Kegiatan yang menggunakan ruang laut atau fasilitas pesisir perlu memeriksa jalur KKPRL secara terpisah dari KKPR darat.",evidence:"Polygon ruang laut, jenis pemanfaatan, luas/durasi, nomor pengajuan atau keputusan, dan konfirmasi instansi.",system:["OSS Persyaratan Dasar", "https://oss.go.id/id/persyaratan-dasar?tab=&path=persetujuan-laut"],ruleUrl:"https://oss.go.id/id/persyaratan-dasar?tab=&path=persetujuan-laut"});
  if(needsBuilding)tasks.push({id:"pbg-slf",title:"Konfirmasi PBG/SLF untuk bangunan dan fasilitas",cat:"Persyaratan dasar",status:"ready",due:"Sebelum konstruksi/operasi",rule:"PP 28/2025 · PBG/SLF",owner:"Engineering / Legal",reason:"Bangunan dan fasilitas penunjang dapat memiliki persyaratan dasar tersendiri selain Persetujuan Lingkungan.",evidence:"Daftar bangunan, dokumen teknis, PBG, as-built, dan SLF bila dipersyaratkan.",system:["OSS Persyaratan Dasar", "https://oss.go.id/id/persyaratan-dasar?tab=&path=persetujuan-bangunan"],ruleUrl:"https://oss.go.id/id/persyaratan-dasar?tab=&path=persetujuan-bangunan"});
  if(["AMDAL","UKL-UPL"].includes(review.officialDocumentType)){tasks.push({id:"amdalnet-public",title:"Catat pengumuman dan tanggapan publik AMDALNet",cat:"Persetujuan lingkungan",status:"ready",due:"Sesuai periode resmi",rule:"AMDALNet · Permen LHK 18/2021",owner:"Environment",reason:"Tahap publikasi dan tanggapan dicatat bila jalur resmi proyek memintanya.",evidence:"Bukti pengumuman, periode tanggapan, konsultasi, tanggapan, jawaban, dan berita acara.",system:["AMDALNet",LINKS.amdalnet],ruleUrl:"https://peraturan.go.id/id/permen-lhk-no-18-tahun-2021"});tasks.push({id:"amdalnet-review",title:"Lacak pemeriksaan dan keluaran AMDALNet",cat:"Persetujuan lingkungan",status:"ready",due:"Sesuai status pengajuan",rule:"AMDALNet · PP 22/2021",owner:"Environment",reason:"Nomor tiket, pemeriksaan administrasi, perbaikan, dan keluaran resmi harus dapat ditelusuri.",evidence:"Nomor tiket, versi dokumen, surat perbaikan, status, tanggal, dan Persetujuan Lingkungan bila terbit.",system:["AMDALNet",LINKS.amdalnet],ruleUrl:"https://peraturan.go.id/id/pp-no-22-tahun-2021"});}
  if(hasGroup("wastewater"))tasks.push(
    {id:"ww-map",title:"Inventarisasi dan neraca seluruh aliran air limbah",cat:"Air limbah",status:"ready",due:"Hari 4",rule:"PP 22/2021",owner:"Process",reason:"Setiap aliran perlu sumber, debit, mutu, pengolahan, titik penaatan, dan tujuan pembuangan/pemanfaatan.",evidence:"Water balance, PFD, debit desain, hasil uji, layout IPAL.",system:["AMDALNet",LINKS.amdalnet],ruleUrl:"https://peraturan.go.id/id/pp-no-22-tahun-2021"},
    {id:"ww-pertek",title:"Susun kajian/standar teknis air limbah",cat:"Air limbah",status:"blocked",due:"Hari 12",rule:"Permen LHK 5/2021",owner:"Environment",reason:"Pembuangan atau pemanfaatan air limbah dapat membutuhkan Persetujuan Teknis sesuai jalur yang berlaku.",evidence:"Kajian teknis/standar teknis, desain IPAL, titik penaatan, baku mutu.",system:["AMDALNet",LINKS.amdalnet],ruleUrl:"https://peraturan.go.id/id/permen-lhk-no-5-tahun-2021"},
    {id:"ww-slo",title:"Commissioning, verifikasi, dan SLO air limbah",cat:"Pra-operasi",status:"later",due:"Pra-operasi",rule:"Permen LHK 5/2021",owner:"Operations",reason:"Fasilitas harus sesuai persetujuan teknis sebelum operasi penuh pada jalur yang mensyaratkannya.",evidence:"As-built drawing, SOP, commissioning, hasil uji, bukti kompetensi.",system:["AMDALNet / instansi berwenang",LINKS.amdalnet],ruleUrl:"https://peraturan.go.id/id/permen-lhk-no-5-tahun-2021"}
  );
  if(isMigas()&&hasGroup("wastewater"))tasks.push({id:"migas-water",title:"Pisahkan produced water, oily water, hydrotest, dan domestik",cat:"Migas",status:"ready",due:"Hari 5",rule:"Permen LH 19/2010",owner:"Process",reason:"Aliran migas memiliki karakter, parameter, dan jalur pengelolaan yang tidak boleh digabung secara generik.",evidence:"Daftar sumber, debit, karakteristik, flow diagram, titik buang/injeksi.",system:["AMDALNet",LINKS.amdalnet],ruleUrl:"https://peraturan.go.id/id/permenlh-no-19-tahun-2010"});
  if(hasGroup("emission"))tasks.push(
    {id:"air-source",title:"Daftarkan seluruh sumber emisi dan titik pemantauan",cat:"Emisi",status:"ready",due:"Hari 4",rule:"PP 22/2021",owner:"Process",reason:"Boiler, genset, turbin, flare, vent, debu, VOC, dan sumber fugitif memiliki karakter berbeda.",evidence:"Daftar sumber, bahan bakar, kapasitas, jam operasi, koordinat cerobong.",system:["AMDALNet / PTSP",LINKS.amdalnet],ruleUrl:"https://peraturan.go.id/id/pp-no-22-tahun-2021"},
    {id:"air-pertek",title:"Tetapkan baku mutu, parameter, frekuensi, dan kebutuhan Pertek",cat:"Emisi",status:"blocked",due:"Hari 10",rule:"Permen LHK 5/2021",owner:"Environment",reason:"Kewajiban mengikuti jenis sumber dan regulasi emisi sektoral yang relevan.",evidence:"Kajian dispersi/teknis bila wajib, data desain, bahan bakar, baku mutu.",system:["AMDALNet",LINKS.amdalnet],ruleUrl:"https://peraturan.go.id/id/permen-lhk-no-5-tahun-2021"},
    {id:"air-report",title:"Siapkan pemantauan dan pelaporan emisi",cat:"Operasi",status:"later",due:"Berkala",rule:"Baku mutu sumber",owner:"Operations",reason:"Pelaporan berkala dan pengujian harus terjadwal sesuai sumber yang aktif.",evidence:"Jadwal sampling, hasil laboratorium, log operasi, laporan elektronik.",system:["SIMPEL",LINKS.simpel],ruleUrl:"https://peraturan.bpk.go.id/Details/235328/permenlhk-no-11-tahun-2021"}
  );
  if(hasGroup("b3"))tasks.push(
    {id:"b3-inventory",title:"Klasifikasi B3, kode limbah, timbulan, dan pengelolaannya",cat:"B3 & limbah B3",status:"ready",due:"Hari 5",rule:"PP 22/2021 · Permen LHK 6/2021",owner:"Environment",reason:`Kandidat saat ini: ${wasteSummary}. Setiap kode harus dikonfirmasi terhadap sumber, bahan, kondisi, dan karakteristik aktual.`,evidence:"SDS, foto/sumber limbah, neraca timbulan, kandidat kode, karakteristik, masa simpan, kontrak pengelola, dan manifest.",system:["AMDALNet / PTSP",LINKS.amdalnet],ruleUrl:"https://peraturan.bpk.go.id/Details/161852/pp-no-22-tahun-2021"},
    {id:"b3-storage",title:"Siapkan rincian teknis penyimpanan limbah B3",cat:"B3 & limbah B3",status:"blocked",due:"Hari 14",rule:"Permen LHK 6/2021",owner:"Engineering",reason:"Penyimpanan memerlukan desain, kompatibilitas, kapasitas, simbol/label, tanggap darurat, dan pencatatan. Rincian teknis diselaraskan dengan dokumen/persetujuan lingkungan sesuai kewenangan.",evidence:"Layout dan desain TPS, SOP, logbook, peralatan darurat, foto fasilitas.",system:["AMDALNet / PTSP",LINKS.amdalnet],ruleUrl:"https://peraturan.bpk.go.id/Details/211000/permen-lhk-no-6-tahun-2021/"}
  );
  if(state.impacts.includes("spill"))tasks.push({id:"emergency",title:"Susun program kedaruratan B3 dan limbah B3",cat:"Kedaruratan",status:"ready",due:"Hari 15",rule:state.regency==="Kota Balikpapan"?"Perda Balikpapan 3/2025":"PP 22/2021",owner:"HSE",reason:"Kegiatan dengan produksi, penyimpanan, penggunaan, atau bongkar muat B3 memerlukan kesiapsiagaan yang teruji.",evidence:"Peta risiko, organisasi tanggap darurat, peralatan, prosedur, jadwal latihan.",system:[ptsp.name,ptsp.url],ruleUrl:state.regency==="Kota Balikpapan"?"https://jdih.balikpapan.go.id/dokumen/download/895":"https://peraturan.go.id/id/pp-no-22-tahun-2021"});
  if(hasGroup("solid"))tasks.push({id:"nonb3",title:"Susun neraca dan rencana pengelolaan limbah non-B3",cat:"Limbah non-B3",status:"ready",due:"Hari 7",rule:"Permen LHK 19/2021",owner:"Environment",reason:"Residu perlu ditetapkan status, sumber, volume, penyimpanan, pemanfaatan, dan tujuan akhirnya.",evidence:"Daftar limbah, hasil uji/status, neraca, mitra dan bukti penyerahan.",system:["AMDALNet / PTSP",LINKS.amdalnet],ruleUrl:"https://peraturan.go.id/id/permen-lhk-no-19-tahun-2021"});
  if(hasGroup("water"))tasks.push({id:"water-use",title:"Konfirmasi sumber, debit, neraca, dan perizinan penggunaan air",cat:"Sumber daya air",status:"ready",due:"Hari 6",rule:"Aturan sumber daya air",owner:"Project",reason:"Air tanah, air permukaan, air laut, dan pemasok memiliki kewenangan serta dokumen berbeda.",evidence:"Neraca air, koordinat intake/sumur, debit, persetujuan pemasok/izin.",system:[ptsp.name,ptsp.url],ruleUrl:LINKS.jdihn});
  if(state.polygon||state.locationFlags.length||hasGroup("location"))tasks.push({id:"location-overlay",title:"Verifikasi overlay dan sensitivitas lokasi",cat:"Lokasi",status:state.polygon&&polygonCheck.valid?"ready":"blocked",due:"Hari 5",rule:"Tata ruang & kawasan",owner:"GIS",reason:"Batas administrasi membantu memeriksa konteks provinsi/kabupaten dan kemungkinan lintas wilayah; hutan, konservasi, gambut, karst, pesisir, sempadan, dan kawasan bencana juga dapat mengubah jalur persetujuan. Overlay yang tampil belum membuktikan irisan.",evidence:"Polygon, hasil overlay dan batas administrasi, tanggal serta sumber layer, query/feature evidence bila tersedia, dan konfirmasi PTSP/OPD atau pengelola kawasan.",system:[state.province==="Kalimantan Timur"?"WebGIS Kaltim":ptsp.name,state.province==="Kalimantan Timur"?LINKS.gisKaltim:ptsp.url],ruleUrl:LINKS.jdihn});
  if(hasGroup("other"))tasks.push({id:"other-impact",title:"Tetapkan baseline dan rencana pengelolaan dampak fisik, hayati, dan sosial",cat:"AMDAL/UKL-UPL",status:"ready",due:"Hari 8",rule:"PP 22/2021",owner:"Environment",reason:"Kebisingan, getaran, bau, lalu lintas, biodiversitas, sosial, GHG, dan pembukaan lahan perlu dikaji sesuai relevansi.",evidence:"Baseline, metode prakiraan, matriks dampak, RKL-RPL atau UKL-UPL.",system:["AMDALNet",LINKS.amdalnet],ruleUrl:"https://peraturan.go.id/id/pp-no-22-tahun-2021"});
  tasks.push({id:"report",title:"Aktifkan kalender pemantauan dan pelaporan berkala",cat:"Operasi",status:"later",due:"Setelah terbit",rule:"Persetujuan proyek",owner:"Compliance",reason:"Frekuensi aktual mengikuti persetujuan lingkungan, Pertek, SLO, dan aturan sektoral/daerah yang terbit.",evidence:"Matriks komitmen, nomor persetujuan, periode laporan, PIC, bukti kirim.",system:["SIMPEL",LINKS.simpel],ruleUrl:"https://peraturan.go.id/id/pp-no-22-tahun-2021"});
  return tasks;
}

const labels=["Profil","Dampak","Lokasi","Hasil","Tracker"];
function heading(n,title,desc,actions=""){return `<div class="heading"><div><p class="step-context">Langkah ${n} dari 5</p><h2>${title}</h2><p>${desc}</p></div>${actions?`<div class="heading-actions">${actions}</div>`:""}</div>`;}
function renderSteps(){document.getElementById("steps").innerHTML=labels.map((x,i)=>`<button type="button" class="step ${i===state.step?"active":""} ${i<state.step?"done":""}" data-step="${i}" aria-label="Langkah ${i+1}: ${x}"><span>${i<state.step?"S":i+1}</span><small>${x}</small></button>`).join("");}
function renderQuestion(q){
  const value=state.answers?.[q.id]??"";
  if(q.type==="select")return `<label class="form-field">${esc(q.label)}<select data-answer="${q.id}"><option value="">Pilih jawaban</option>${q.options.map(x=>`<option ${value===x?"selected":""}>${esc(x)}</option>`).join("")}</select></label>`;
  return `<label class="form-field">${esc(q.label)}<input data-answer="${q.id}" type="${q.type||"text"}" value="${esc(value)}" placeholder="${esc(q.placeholder||"")}"></label>`;
}

function renderProfile(){
  const k=selectedKbli(),profile=activeProfile(),specific=kbliActivityProfile(k);
  const selectedCard=state.kblis.length
    ? `<div class="kbli-list">${state.kblis.map((item,index)=>`<div class="selected-kbli ${index?"supporting":"primary-kbli"}"><span class="kbli-code">${esc(item.code)}</span><div class="kbli-copy"><span class="kbli-role">${index?"Pendukung":"Utama"}</span><b>${esc(item.title)}</b><small>${esc(item.description || window.ENVIRO_KBLI_2025?.[String(item.code)]?.description || "Uraian mengikuti KBLI 2025.")}</small></div><div class="kbli-actions">${index?`<button type="button" class="soft compact" data-action="make-primary" data-code="${esc(item.code)}">Jadikan utama</button>`:""}<button type="button" class="icon-button" data-action="remove-kbli" data-code="${esc(item.code)}" aria-label="Hapus KBLI ${esc(item.code)}">×</button></div></div>`).join("")}</div>`
    : `<div class="empty-note"><b>Belum ada KBLI terpilih</b><p>Cari dan pilih satu hasil untuk membuka penapisan yang sesuai.</p></div>`;
  return heading(1,"Mulai dari KBLI dan jenis kegiatan","KBLI menjadi pintu masuk untuk memilih profil proses. Setelah itu aktivitas nyata mempersempit sumber dampak, kandidat B3/LB3, dan dokumen yang perlu disiapkan.")+
  `<div class="label"><b>${k?"Tambah KBLI pendukung":"Pilih KBLI utama"}</b><small>Kode final 5 digit · KBLI 2025</small></div>
  <div class="search-wrap"><span class="search-icon">⌕</span><input id="kbli-search" class="searchbox" autocomplete="off" placeholder="Cari kode atau kegiatan, mis. 06100 / minyak / rumah sakit" aria-label="Cari KBLI 2025"><span id="kbli-spinner" class="spinner hide"></span><div id="kbli-suggestions" class="suggestions hide"></div></div>
  <div class="official-line"><span>Hierarki 2–4 digit disembunyikan; hanya KBLI final yang dapat dipilih.</span>${officialLink(LINKS.kbli,"Pencarian lengkap OSS")}</div>
  ${selectedCard}
  ${k?`<div class="kbli-correlation"><div><b>Bagaimana KBLI dipakai di sini?</b><p><strong>KBLI ${esc(k.code)}</strong> memberi konteks jenis usaha. Pilih hanya proses yang benar-benar dilakukan; pilihan itu lalu memicu sumber dampak dan paket dokumen. ${esc(specific.mappingNote||"")}</p></div><span class="mapping-badge ${specific.mappingLevel}">${esc(specific.mappingLabel||"Baseline sektor")}</span></div>`:""}
  ${state.kblis.length>1?`<div class="smart"><span>i</span><div><b>${state.kblis.length} KBLI dianalisis bersama</b><p>Kegiatan utama mengendalikan satuan kapasitas dan kuisioner profil. KBLI pendukung menambahkan kandidat sumber dampak, limbah, regulasi, dan tugas; risiko serta skala tiap bidang usaha tetap divalidasi di OSS.</p></div></div>`:""}
  <details><summary class="helper">API OSS tidak dapat diakses? Masukkan KBLI final secara manual</summary><div class="form-row"><label class="form-field">Kode KBLI 5 digit<input id="manual-code" maxlength="5" inputmode="numeric" placeholder="Contoh: 06100"></label><label class="form-field">Judul kegiatan<input id="manual-title" placeholder="Nama kegiatan"></label></div><button type="button" class="soft" data-action="manual-kbli" style="margin-top:8px">${k?"Tambahkan KBLI":"Gunakan sebagai KBLI utama"}</button></details>
  <div class="label"><b>Proses yang relevan · ${esc(k?specific.name:profile.name)}</b><small>${specific.mappingLevel==="specific"?"Disesuaikan dari kode/uraian KBLI":"Baseline kelompok; cocokkan dengan uraian KBLI dan proses nyata"}</small></div><div class="activity-grid">${specific.activities.map(x=>`<button type="button" class="activity ${state.activities.includes(x)?"on":""}" data-activity="${esc(x)}"><b>${esc(x)}</b><small>${state.activities.includes(x)?"Dipilih":"Klik untuk memilih"}</small></button>`).join("")}</div>
  ${profile===QUESTIONNAIRE_PROFILES.coconut?`<div class="smart"><span>i</span><div><b>Batas KBLI 01261</b><p>Pengolahan kopra, minyak kelapa, atau produk makanan kelapa bukan bagian kegiatan kebun. Jika ada, tambahkan KBLI 10421, 10422/10423, atau 10793 dan tapis sebagai proses industri terpisah.</p></div></div>`:profile===QUESTIONNAIRE_PROFILES.oilpalm?`<div class="smart"><span>i</span><div><b>Kebun dan pabrik dipisahkan</b><p>KBLI 01262 mencakup pertanian kelapa sawit. Pabrik CPO/CPKO memerlukan KBLI industri terkait, misalnya 10431/10432, dengan satuan dan sumber dampak berbeda.</p></div></div>`:""}
  <div class="form-row"><label class="form-field">Nama proyek<input data-field="projectName" value="${esc(state.projectName)}" placeholder="Nama internal proyek"></label><label class="form-field">Status usaha<select data-field="projectStatus">${["Usaha baru","Pengembangan kapasitas","Perubahan proses/teknologi","Relokasi","Sudah beroperasi"].map(x=>`<option ${state.projectStatus===x?"selected":""}>${x}</option>`).join("")}</select></label></div>
  <div class="form-row"><label class="form-field">Tahap kegiatan<select data-field="stage">${["Survei","Eksplorasi","Konstruksi","Operasi","Ekspansi","Penutupan/pascaoperasi"].map(x=>`<option ${state.stage===x?"selected":""}>${x}</option>`).join("")}</select></label><label class="form-field">${esc(profile.capacityLabel)}<span class="capacity-field"><input data-field="capacity" type="number" min="0" value="${esc(state.capacity)}" placeholder="${esc(profile.placeholder)}"><select data-field="capacityUnit" aria-label="Satuan kapasitas">${profile.units.map(x=>`<option ${state.capacityUnit===x?"selected":""}>${esc(x)}</option>`).join("")}</select></span></label></div>
  <div class="label"><b>Pertanyaan penentu · ${esc(profile.name)}</b><small>Jawaban memicu pertanyaan berikutnya</small></div><div class="form-row dynamic-questions">${profile.questions.map(renderQuestion).join("")}</div>`;
}

function masterCatalog(){return window.ENVIRO_B3_LB3_MASTER||{meta:{b3Count:0,lb3Count:0,snapshot:"belum tersedia",qualityNote:"Aset master belum termuat."},b3:[],lb3:[]};}
function selectedMasterB3Rows(){const ids=new Set((state.masterB3Selected||[]).map(String));return masterCatalog().b3.filter(row=>ids.has(String(row.no)));}
function selectedMasterLB3Rows(){const ids=new Set((state.masterLB3Selected||[]).map(String));return masterCatalog().lb3.filter(row=>ids.has(String(row.code)));}
function masterCandidateCount(){return (state.masterB3Selected?.length||0)+(state.masterLB3Selected?.length||0);}
function masterLb3ImpactKeys(code){const row=masterCatalog().lb3.find(item=>String(item.code)===String(code));const text=`${row?.code||""} ${row?.name||""}`.toLowerCase(),keys=["chemical","storage"];if(/sludge|lumpur|minyak|lemak|pelumas|oli|residu/.test(text))keys.push("sludge");if(/kemasan|kain|filter|elektronik|baterai|aki/.test(text))keys.push("packaging");if(/air|cair|leachate/.test(text))keys.push("process");return keys;}
function renderB3MasterPanel(){
  const catalog=masterCatalog(),kind=state.masterB3Kind||"lb3",query=String(state.masterB3Search||"").trim().toLowerCase(),rows=kind==="b3"?catalog.b3:catalog.lb3;
  const matches=rows.filter(row=>{const hay=kind==="b3"?[row.cas,row.name,row.synonyms,row.formula,row.usage].join(" "):[row.code,row.name,row.sourceGroup,row.table,row.hazard].join(" ");return !query||hay.toLowerCase().includes(query);}).slice(0,8);
  const results=matches.length?matches.map(row=>kind==="b3"?`<label class="master-row ${state.masterB3Selected.includes(String(row.no))?"selected":""}"><input type="checkbox" data-master-b3-id="${esc(row.no)}" ${state.masterB3Selected.includes(String(row.no))?"checked":""}><span class="master-code">${esc(row.cas||`B3-${row.no}`)}</span><span><b>${esc(row.name)}</b><small>${esc([row.usage,row.formula,row.table].filter(Boolean).join(" · "))}</small></span><em>${esc(row.usage||"Status perlu dibaca")}</em></label>`:`<label class="master-row ${state.masterLB3Selected.includes(String(row.code))?"selected":""}"><input type="checkbox" data-master-lb3-code="${esc(row.code)}" ${state.masterLB3Selected.includes(String(row.code))?"checked":""}><span class="master-code">${esc(row.code||`LB3-${row.no}`)}</span><span><b>${esc(row.name)}</b><small>${esc([row.table,row.sourceGroup,row.hazard?`Bahaya ${row.hazard}`:""].filter(Boolean).join(" · "))}</small></span><em>${row.verifyNote?"Perlu verifikasi":"Kandidat"}</em></label>`).join(""):"<div class=\"empty-note\"><b>Tidak ada hasil di master lokal</b><p>Gunakan nama bahan, CAS, kode LB3, atau kata dari uraian limbah.</p></div>";
  return `<details class="master-waste-panel" ${state.masterB3Search||state.masterB3Selected.length||state.masterLB3Selected.length?"open":""}><summary><div><b>Telusuri master B3/LB3 pengguna</b><small>${catalog.meta.b3Count||0} B3 · ${catalog.meta.lb3Count||0} LB3 · pilih sebagai kandidat, bukan penetapan final</small></div><span class="count">${masterCandidateCount()} dipilih</span></summary><div class="master-waste-body"><div class="master-waste-intro"><b>Bedanya B3 dan LB3</b><p><strong>B3</strong> adalah bahan yang digunakan atau disimpan. <strong>LB3</strong> adalah limbah yang sudah timbul dan harus dicocokkan dengan sumber, proses, karakteristik, serta kondisinya. Pilihan di sini menambah kandidat untuk penapisan dan task, bukan menetapkan kode secara otomatis.</p></div><div class="master-waste-controls"><label class="form-field"><span>Yang dicari</span><input data-master-search value="${esc(state.masterB3Search)}" placeholder="Contoh: solar, pelumas, sludge, B342-1, CAS"></label><label class="form-field"><span>Jenis master</span><select data-master-kind><option value="lb3" ${kind==="lb3"?"selected":""}>LB3 — kode limbah</option><option value="b3" ${kind==="b3"?"selected":""}>B3 — bahan</option></select></label></div><div class="master-results-head"><span>${query?`${matches.length} hasil pertama untuk “${esc(state.masterB3Search)}”`:`Tampilkan 8 hasil pertama; gunakan pencarian untuk mempersempit`}</span><span>${state.masterB3Selected.length} B3 · ${state.masterLB3Selected.length} LB3 dipilih</span></div><div class="master-results">${results}</div><div class="master-waste-foot"><span>Snapshot ${esc(catalog.meta.snapshot||"pengguna")} · basis B3 PP 74/2001 · basis LB3 Lampiran IX PP 22/2021.</span><span>${esc(catalog.meta.qualityNote||"Sebagian entri tetap perlu diverifikasi terhadap sumber primer.")}</span><span>${officialLink(catalog.meta.primaryB3||"https://peraturan.bpk.go.id/Home/Details/53080/pp","Sumber B3")}${officialLink(catalog.meta.primaryLb3||"https://peraturan.bpk.go.id/Details/161852/pp-no-22tahun-2021","Sumber LB3")}</span></div></div></details>`;
}
function renderImpacts(){
  const profile=activeProfile(),profiles=state.kblis.length?state.kblis.map(kbliActivityProfile):[kbliActivityProfile(null)],allowed=new Set(profiles.flatMap(p=>p.impacts));
  const groups=IMPACT_GROUPS.map(g=>({...g,items:state.showAllImpacts?g.items:g.items.filter(([key])=>allowed.has(key))})).filter(g=>g.items.length);
  const relatedWasteKeys=[...new Set([...profiles.flatMap(p=>p.waste),...sectorWasteKeys()])],wasteKeys=state.showAllWaste?Object.keys(WASTE_CATALOG):relatedWasteKeys,waste=wasteKeys.map(key=>[key,WASTE_CATALOG[key]]).filter(([,x])=>x);
  const profileNames=[...new Set(profiles.map(p=>p.name))].join(", ")||profile.name;
  return heading(2,"Petakan sumber dampak yang relevan",`Daftar ini disaring dari KBLI dan uraian kegiatan: ${profileNames}. Pilih hanya sumber yang benar-benar dihasilkan oleh prosesmu; kondisi tapak dipilih terpisah pada langkah Lokasi.`, `<button type="button" class="ghost" data-action="toggle-all-impacts">${state.showAllImpacts?"Tampilkan yang relevan":"Lihat semua sumber"}</button>`)+
  `<div class="source-location-legend"><div><b>Sumber dampak</b><p>Yang keluar atau berubah karena proses: air limbah, emisi, B3/LB3, limbah padat, penggunaan air, kebisingan, flora-fauna, dan sosial.</p></div><div><b>Sensitivitas lokasi</b><p>Kondisi atau status tapak: hutan, konservasi, gambut, karst, pesisir, sempadan, DAS, bencana, dan kawasan industri. Buka langkah Lokasi untuk mengisi buktinya.</p></div></div><div class="impact-groups">${groups.map((g,i)=>`<details class="impact-group" ${impactCount(g)||i<2?"open":""}><summary><span class="impact-icon">${g.icon}</span><div><b>${g.name}</b><small>${g.desc}</small></div><span class="count">${impactCount(g)} dipilih</span></summary><div class="subimpact-list">${g.items.map(([key,label])=>`<label class="subimpact"><input type="checkbox" data-impact="${key}" ${state.impacts.includes(key)?"checked":""}> ${label}</label>`).join("")}</div></details>`).join("")}</div>
  ${profiles.some(p=>p.mappingLevel==="specific")?`<div class="smart"><span>KBLI</span><div><b>Aktivitas sudah dipersempit berdasarkan kode/uraian</b><p>${esc(profiles.filter(p=>p.mappingLevel==="specific").map(p=>p.mappingNote).join(" "))}</p></div></div>`:`<div class="smart"><span>KBLI</span><div><b>Baseline kelompok digunakan</b><p>Kode ini belum memiliki override 5-digit di katalog aplikasi. Hapus pilihan yang tidak ada dan tambahkan proses nyata yang belum muncul.</p></div></div>`}
  ${isMigas()?`<div class="smart"><span>✦</span><div><b>Paket khusus migas aktif</b><p>Produced water, oily drainage, hydrotest, flare, turbin/kompresor, fugitif, LB3, dan potensi tumpahan dipisahkan agar regulasi teknis tidak terlewat.</p></div></div>`:""}
  <details class="waste-panel" ${hasGroup("b3")?"open":""}><summary><div><b>Identifikasi kandidat B3 dan limbah B3 bawaan</b><small>B3 adalah bahan yang digunakan/disimpan; kode berlaku untuk limbah B3 setelah menjadi limbah.</small></div><span class="count">${state.wasteCodes.length} kandidat</span></summary><div class="waste-list">${waste.map(([key,w])=>`<label class="waste-row ${state.wasteCodes.includes(key)?"selected":""}"><input type="checkbox" data-waste="${key}" ${state.wasteCodes.includes(key)?"checked":""}><span class="waste-code ${w.code==="Verifikasi"?"needs-data":""}">${w.code}</span><span><b>${esc(w.name)}</b><small>${esc(w.trigger)}</small></span><em>${w.status}</em></label>`).join("")}</div><div class="waste-foot"><span>Kandidat mengacu Lampiran IX PP 22/2021; kode final harus cocok dengan sumber, bahan, karakteristik, dan kondisi aktual.</span>${officialLink("https://peraturan.bpk.go.id/Details/161852/pp-no-22tahun-2021","Buka PP 22/2021")}</div><button type="button" class="soft compact" data-action="toggle-all-waste">${state.showAllWaste?"Tampilkan yang relevan":"Lihat semua kandidat"}</button></details>
  ${renderB3MasterPanel()}${renderValidationPanel()}
  <div class="label"><b>Proses terpilih · ${esc(profiles[0]?.name||profile.name)}</b><small>${state.activities.length} proses</small></div><div class="chips">${state.activities.map(x=>`<span class="chip on">${esc(x)}</span>`).join("")||"<span class='helper'>Kembali ke Profil untuk memilih jenis kegiatan.</span>"}</div>`;
}

function polygonPointsFromGeometry(geometry){
  if(!geometry||!geometry.type)return [];
  const raw=geometry.type==="Polygon"?geometry.coordinates?.[0]:geometry.type==="MultiPolygon"?geometry.coordinates?.[0]?.[0]:[];
  return (raw||[]).map(pair=>[Number(pair?.[0]),Number(pair?.[1])]).filter(pair=>pair.every(Number.isFinite));
}
function polygonBounds(points){const xs=points.map(p=>p[0]),ys=points.map(p=>p[1]);return {minX:Math.min(...xs),minY:Math.min(...ys),maxX:Math.max(...xs),maxY:Math.max(...ys)};}
function polygonAreaM2(points){if(points.length<3)return 0;const lat0=points.reduce((sum,p)=>sum+p[1],0)/points.length,rad=Math.PI/180,metersLat=110540,metersLng=111320*Math.cos(lat0*rad);let area=0;for(let i=0;i<points.length;i++){const [lngA,latA]=points[i],[lngB,latB]=points[(i+1)%points.length];area+=(lngA*metersLng)*(latB*metersLat)-(lngB*metersLng)*(latA*metersLat);}return Math.abs(area)/2;}
function orientation(a,b,c){return (b[0]-a[0])*(c[1]-a[1])-(b[1]-a[1])*(c[0]-a[0]);}
function segmentsIntersect(a,b,c,d){const eps=1e-10,d1=orientation(a,b,c),d2=orientation(a,b,d),d3=orientation(c,d,a),d4=orientation(c,d,b);return ((d1>eps&&d2<-eps)||(d1<-eps&&d2>eps))&&((d3>eps&&d4<-eps)||(d3<-eps&&d4>eps));}
function polygonQuality(polygon){const raw=Array.isArray(polygon?.points)?polygon.points.filter(p=>Array.isArray(p)&&p.length>=2):[],closed=raw.length>2&&raw[0][0]===raw[raw.length-1][0]&&raw[0][1]===raw[raw.length-1][1],points=closed?raw.slice(0,-1):raw,problems=[],warnings=[];if(points.length<3)problems.push("Polygon minimal memiliki tiga titik unik.");if(points.some(([lng,lat])=>!Number.isFinite(lng)||!Number.isFinite(lat)||lng<-180||lng>180||lat<-90||lat>90))problems.push("Ada koordinat di luar rentang longitude/latitude.");if(points.length>=3&&polygonAreaM2(points)<=0)problems.push("Luas polygon tidak valid atau bernilai nol.");if(!closed&&points.length>=3)warnings.push("Ring tidak tertutup eksplisit; pemeriksaan menggunakan penutupan otomatis.");for(let i=0;i<points.length;i++){const a=points[i],b=points[(i+1)%points.length];for(let j=i+1;j<points.length;j++){if(j===i||j===(i+1)%points.length||(i===0&&j===points.length-1))continue;const c=points[j],d=points[(j+1)%points.length];if(segmentsIntersect(a,b,c,d)){problems.push("Segmen polygon berpotongan sendiri.");i=points.length;break;}}}return {points,closed,problems:[...new Set(problems)],warnings:[...new Set(warnings)],areaM2:polygonAreaM2(points),valid:problems.length===0};}
function formatAreaM2(area){return area>=1000000?`${(area/1000000).toLocaleString("id-ID",{maximumFractionDigits:2})} km²`:`${Math.round(area).toLocaleString("id-ID")} m²`;}
function featureInfoUrl(layer,polygon){const q=polygonQuality(polygon);if(!layer?.endpoint||!layer.layerName||!q.valid)return "";const b=polygonBounds(q.points),params=new URLSearchParams([["service","WMS"],["version","1.3.0"],["request","GetFeatureInfo"],["layers",layer.layerName],["query_layers",layer.layerName],["styles",""],["crs","CRS:84"],["bbox",[b.minX,b.minY,b.maxX,b.maxY].join(",")],["width","101"],["height","101"],["i","50"],["j","50"],["info_format","application/json"],["feature_count","20"]]);return `${layer.endpoint}${layer.endpoint.includes("?")?"&":"?"}${params.toString()}`;}
function locationAssessmentMarkup(){const q=polygonQuality(state.polygon),ready=window.ENVIRO_OFFICIAL_MAP_LAYERS.filter(layer=>layer.endpoint&&layer.layerName),overlayReady=ready.filter(layer=>layer.scope!=="Administrasi"),queryable=overlayReady.filter(layer=>layer.featureInfoStatus==="public-probe-ok"),accessReview=overlayReady.filter(layer=>layer.featureInfoStatus==="access-review"),adminLayer=window.ENVIRO_OFFICIAL_MAP_LAYERS.find(layer=>layer.id==="admin-kabkota-big"),adminVisible=Boolean(mapLayerPreference("admin-kabkota-big").visible),pending=window.ENVIRO_OFFICIAL_MAP_LAYERS.filter(layer=>!(layer.endpoint&&layer.layerName)),flags={estate:"Kawasan industri", "forest-cross":"Kawasan hutan", "marine-cross":"Ruang laut/pesisir", "cross-admin":"Lintas administrasi", protected:"Kawasan lindung/konservasi", "river-buffer":"Sempadan sungai/danau"},selectedFlags=(state.locationFlags||[]).map(key=>flags[key]).filter(Boolean),queryMarkup=state.polygon&&q.valid?`<div class="location-query"><div><b>Pemeriksaan info titik (manual)</b><p>Link di bawah membuka GetFeatureInfo dari service resmi. Yang dikirim adalah titik tengah bbox dan bbox polygon, bukan polygon lengkap. Cocokkan hasilnya dengan kuisioner lokasi dan konfirmasi instansi. ${accessReview.length?`${accessReview.length} service masih memerlukan pemeriksaan akses; gunakan portal resminya untuk verifikasi.`:""} GetFeatureInfo hanya membantu pemeriksaan titik; hasil ini bukan perhitungan irisan.</p></div><div class="location-query-list">${queryable.map(layer=>`<a class="location-query-link" data-feature-info="${esc(layer.id)}" href="${esc(featureInfoUrl(layer,state.polygon))}" target="_blank" rel="noopener noreferrer">${esc(layer.title)} · Buka info titik ↗</a>`).join("")}</div></div>`:`<div class="location-query is-disabled"><b>Pemeriksaan info titik belum tersedia</b><p>Unggah polygon yang valid untuk membuat link query manual. Layer pending tidak dibuatkan query.</p></div>`,rows=[{label:"Kualitas polygon",status:!state.polygon?"Belum diunggah":q.valid?"Siap diperiksa":"Perlu diperbaiki",tone:!state.polygon?"todo":q.valid?"review":"todo",note:!state.polygon?"Unggah GeoJSON/KML untuk memulai pemeriksaan geometri.":`${q.points.length} titik unik · ${formatAreaM2(q.areaM2)}${q.warnings.length?` · ${q.warnings.join(" ")}`:""}${q.problems.length?` ${q.problems.join(" ")}`:""}`},{label:"Overlay confirmed",status:!state.polygon?"Menunggu polygon":"Belum dapat dinilai",tone:!state.polygon?"todo":"review",note:`${overlayReady.length} service overlay resmi tersedia. ${adminLayer?"Layer batas administrasi BIG tersedia sebagai konteks wilayah; ":""}WMS visual belum menghitung irisan polygon; GetFeatureInfo hanya memberi informasi di titik referensi dan hasil spasial penuh tetap perlu feature query vektor atau konfirmasi instansi.`},{label:"Tema pending",status:`${pending.length} pending`,tone:"pending",note:"Layer tanpa endpoint resmi tidak dikirim request dan tidak memicu kewajiban otomatis."},{label:"Kewenangan administratif",status:state.province&&state.regency?"Indikatif":"Perlu dilengkapi",tone:state.province&&state.regency?"review":"todo",note:state.province&&state.regency?`${state.regency}, ${state.province}. ${adminVisible?"Batas administrasi BIG sedang tampil sebagai konteks visual; ":"Aktifkan layer batas administrasi BIG untuk pemeriksaan visual; "}konfirmasi jalur PTSP/OPD pada sumber daerah sebelum pengajuan.`:"Pilih provinsi dan kabupaten/kota untuk membentuk konteks kewenangan."},{label:"Flag lokasi manual",status:selectedFlags.length?`${selectedFlags.length} dipilih`:"Belum ada",tone:selectedFlags.length?"review":"todo",note:selectedFlags.length?selectedFlags.join(", "):"Centang flag hanya jika sudah memiliki dasar dokumen atau hasil pemeriksaan lapangan."}];return `<section class="location-assessment" aria-labelledby="location-assessment-title"><div class="location-assessment-head"><div><small class="kicker">HASIL PENILAIAN TAPAK</small><h3 id="location-assessment-title">Status data dan pemicu kerja</h3><p>Panel ini membantu menentukan langkah verifikasi. Ia tidak menyimpulkan kesesuaian ruang atau kewajiban legal dari tampilan WMS.</p></div><span class="assessment-count">${rows.filter(row=>row.tone!=="review").length} perlu review</span></div><div class="location-assessment-list">${rows.map(row=>`<div class="location-assessment-row"><span class="assessment-dot ${row.tone}"></span><div><b>${esc(row.label)}</b><strong class="assessment-status ${row.tone}">${esc(row.status)}</strong><p>${esc(row.note)}</p></div></div>`).join("")}</div>${queryMarkup}</section>`;}
async function parsePolygonFile(file){
  if(file.size>10*1024*1024)throw new Error("Ukuran polygon terlalu besar");
  const text=await file.text(),name=file.name.toLowerCase();let format="GeoJSON",points=[];
  if(name.endsWith(".kml")){format="KML";const match=text.match(/<coordinates[^>]*>([\s\S]*?)<\/coordinates>/i);if(match)points=match[1].trim().split(/\s+/).map(token=>token.split(",")).map(pair=>[Number(pair[0]),Number(pair[1])]).filter(pair=>pair.every(Number.isFinite));}
  else{const payload=JSON.parse(text),feature=payload.type==="FeatureCollection"?payload.features?.find(item=>item.geometry):payload.type==="Feature"?payload:payload;points=polygonPointsFromGeometry(feature?.geometry||feature);}
  if(points.length<3)throw new Error("Polygon minimal memiliki tiga titik koordinat");
  return {name:file.name,format,points,bounds:polygonBounds(points),updatedAt:new Date().toISOString()};
}
async function importPolygonFile(file){try{state.polygon=await parsePolygonFile(file);markNeedsRescreen("Polygon tapak berubah");saveState();renderView();showToast(`${state.polygon.format} tersimpan: ${state.polygon.points.length} titik polygon.`);}catch(error){showToast(error?.message||"Polygon tidak dapat dibaca. Gunakan GeoJSON Polygon atau KML yang valid.");}}
function mapLayerPreference(id){return state.mapLayerPreferences?.[id]||{};}
function mapCatalogMatches(layer){const scope=state.mapCatalogScope||"all",status=state.mapCatalogStatus||"all",coverage=state.mapCatalogCoverage||"all",ready=Boolean(layer.endpoint&&layer.layerName);return (scope==="all"||layer.scope===scope)&&(status==="all"||(status==="ready"&&ready)||(status==="pending"&&!ready))&&(coverage==="all"||layer.coverage===coverage);}
function administrationMapUrl(map,definition){const bounds=map.getBounds(),size=map.getSize(),width=Math.max(512,Math.min(2048,Math.round(size.x||1024))),height=Math.max(512,Math.min(2048,Math.round(size.y||768))),params=new URLSearchParams({f:"image",format:"png32",transparent:"true",layers:`show:${definition.layerName}`,bbox:[bounds.getWest(),bounds.getSouth(),bounds.getEast(),bounds.getNorth()].join(","),bboxSR:"4326",imageSR:"4326",size:`${width},${height}`});return `${definition.endpoint}/export?${params.toString()}`;}
function gisRequestTemplate(sourceId){const source=GIS_SOURCE_PATHWAYS.find(item=>item.id===sourceId)||GIS_SOURCE_PATHWAYS[0];return `Subjek: Permohonan metadata dan URL layanan GIS publik\\n\\nYth. ${source.recipient},\\n\\nSaya sedang memeriksa dataset geospasial ${source.purpose.toLowerCase()} untuk alat bantu local-first EnviroTrack pada wilayah [AOI]. Mohon diinformasikan jika tersedia: URL WMS/WMTS/ArcGIS REST publik, nama layer, CRS dan versi service, cakupan/skala, tanggal pembaruan, dasar penetapan, lisensi/atribusi, rate limit, aturan cache, serta izin penggunaan oleh aplikasi pihak ketiga.\\n\\nSaya tidak meminta credential rahasia. Jika service tidak boleh diakses langsung, mohon diberikan tautan metadata atau prosedur permintaan data resmi. Data hanya akan ditampilkan sebagai overlay indikatif dengan atribusi dan disclaimer, bukan sebagai keputusan kesesuaian ruang.\\n\\nHormat saya,\\n[Nama dan kontak]`;}
async function copyGisRequest(sourceId){const text=gisRequestTemplate(sourceId);try{await navigator.clipboard.writeText(text);showToast("Template permintaan endpoint disalin ke clipboard.");}catch(error){const area=document.createElement("textarea");area.value=text;area.setAttribute("readonly","");area.style.position="fixed";area.style.opacity="0";document.body.appendChild(area);area.select();try{document.execCommand("copy");showToast("Template permintaan endpoint disalin.");}catch(copyError){showToast("Clipboard tidak tersedia. Buka ringkasan sumber untuk menyalin template manual.");}area.remove();}}
function officialLayerCatalogMarkup(){
  const open=state.mapCatalogOpen===true,readyLayers=window.ENVIRO_OFFICIAL_MAP_LAYERS.filter(layer=>layer.endpoint&&layer.layerName),filteredLayers=window.ENVIRO_OFFICIAL_MAP_LAYERS.filter(mapCatalogMatches),readyCount=readyLayers.length,allReadyVisible=readyLayers.length>0&&readyLayers.every(layer=>mapLayerPreference(layer.id).visible===true);
  return `<section class="official-layer-catalog ${open?"is-open":"is-closed"}"><div class="official-layer-head"><div><span class="kicker">KATALOG LAYER RESMI</span><h3>Overlay tata ruang, kawasan sensitif & administrasi</h3><p>Layer hanya aktif setelah endpoint layanan, nama layer, sumber, dan metadata dikonfirmasi dari walidata resmi.</p></div><div class="official-layer-head-actions"><span class="catalog-status">${readyCount}/${window.ENVIRO_OFFICIAL_MAP_LAYERS.length} siap</span><button type="button" class="catalog-preset" data-action="enable-verified-layers" ${allReadyVisible?"aria-pressed=\"true\"":"aria-pressed=\"false\""}>${allReadyVisible?"Semua terverifikasi aktif":"Aktifkan semua terverifikasi"}</button><button type="button" class="catalog-toggle" data-action="toggle-map-catalog" aria-expanded="${open}" aria-controls="official-layer-panel">${open?"Sembunyikan katalog":"Tampilkan katalog"}</button></div></div><div class="official-layer-panel" id="official-layer-panel" ${open?"":"hidden"}><div class="official-layer-filters"><label>Kategori<select data-map-filter="mapCatalogScope" aria-label="Filter kategori layer"><option value="all" ${state.mapCatalogScope==="all"?"selected":""}>Semua kategori</option><option value="Tata ruang" ${state.mapCatalogScope==="Tata ruang"?"selected":""}>Tata ruang</option><option value="Kawasan sensitif" ${state.mapCatalogScope==="Kawasan sensitif"?"selected":""}>Kawasan sensitif</option><option value="Administrasi" ${state.mapCatalogScope==="Administrasi"?"selected":""}>Administrasi</option></select></label><label>Status<select data-map-filter="mapCatalogStatus" aria-label="Filter status layer"><option value="all" ${state.mapCatalogStatus==="all"?"selected":""}>Semua status</option><option value="ready" ${state.mapCatalogStatus==="ready"?"selected":""}>Confirmed</option><option value="pending" ${state.mapCatalogStatus==="pending"?"selected":""}>Pending</option></select></label><label>Cakupan<select data-map-filter="mapCatalogCoverage" aria-label="Filter cakupan layer"><option value="all" ${state.mapCatalogCoverage==="all"?"selected":""}>Semua cakupan</option><option value="IKN" ${state.mapCatalogCoverage==="IKN"?"selected":""}>IKN</option><option value="WP 5 IKN Timur 2" ${state.mapCatalogCoverage==="WP 5 IKN Timur 2"?"selected":""}>WP 5 IKN Timur 2</option><option value="Indonesia" ${state.mapCatalogCoverage==="Indonesia"?"selected":""}>Indonesia</option><option value="Kalimantan Timur" ${state.mapCatalogCoverage==="Kalimantan Timur"?"selected":""}>Kalimantan Timur</option><option value="Perlu konfirmasi" ${state.mapCatalogCoverage==="Perlu konfirmasi"?"selected":""}>Perlu konfirmasi</option></select></label><span class="catalog-filter-count">${filteredLayers.length} layer ditampilkan</span></div>${filteredLayers.length?"":"<div class=\"empty-note catalog-empty\"><b>Tidak ada layer yang cocok</b><p>Ubah kategori, status, atau cakupan untuk melihat layer lain.</p></div>"}<div class="official-layer-list">${filteredLayers.map(layer=>{const ready=Boolean(layer.endpoint&&layer.layerName),pref=mapLayerPreference(layer.id),opacity=Math.round(Number(pref.opacity??.55)*100);return `<article class="official-layer-row ${ready?"is-ready":"is-pending"}"><div class="official-layer-copy"><b>${esc(layer.title)}</b><small>${esc(layer.scope)} · ${esc(layer.serviceType)} · ${esc(layer.publisher)}</small><span>${ready?`${esc(layer.serviceType)} aktif · ${esc([layer.coverage,layer.crs,layer.dataDate,layer.verifiedAt?`Dicek ${layer.verifiedAt}`:""].filter(Boolean).join(" · "))}`:`Belum dikonfigurasi — tidak ada request WMS yang dikirim.`}</span><a href="${esc(layer.officialUrl)}" target="_blank" rel="noopener noreferrer">Buka portal sumber ↗</a></div><div class="official-layer-controls">${ready?`<label class="layer-toggle"><input type="checkbox" data-wms-toggle="${esc(layer.id)}" ${pref.visible??layer.defaultVisible?"checked":""}> tampil</label><label class="layer-opacity">opacity <output data-wms-value="${esc(layer.id)}">${opacity}%</output><input type="range" min="10" max="90" step="5" value="${opacity}" data-wms-opacity="${esc(layer.id)}"></label>`:`<span class="layer-status-pending">ENDPOINT BELUM DIKONFIRMASI</span>`}</div></article>`;}).join("")}</div><section class="official-source-pathways" aria-labelledby="official-source-title"><div class="official-source-head"><div><small class="kicker">JALUR VERIFIKASI RESMI</small><h4 id="official-source-title">Belum ada endpoint? Mulai dari pemilik data.</h4><p>Gunakan portal resmi untuk mencari metadata atau salin template permintaan kepada walidata/PPID. Tindakan ini tidak mengirim data dan tidak mengaktifkan layer pending.</p></div><span class="source-count">${GIS_SOURCE_PATHWAYS.length} jalur</span></div><div class="official-source-grid">${GIS_SOURCE_PATHWAYS.map(source=>`<article class="official-source-card"><div><b>${esc(source.name)}</b><small>${esc(source.purpose)}</small></div><a href="${esc(source.url)}" target="_blank" rel="noopener noreferrer">Buka sumber ↗</a><button type="button" class="soft compact" data-action="copy-gis-request" data-source="${esc(source.id)}">Salin template permintaan</button></article>`).join("")}</div></section><p class="official-layer-note">Jangan memasukkan endpoint hasil scraping atau endpoint tanpa izin. Setiap layer harus memiliki dasar hukum, CRS, tanggal data, penerbit, lisensi, dan tanggal terakhir dicek.</p></div></section>`;
}
function initSiteMap(){
  const mapElement=document.getElementById("site-map");if(!mapElement)return;
  if(siteMap){siteMap.remove();siteMap=null;}
  if(!window.L){const status=document.getElementById("site-map-status");if(status)status.textContent="Peta belum termuat. Polygon tetap tersimpan lokal dan dapat diekspor.";return;}
  const points=(state.polygon?.points||[]).map(([lng,lat])=>[lat,lng]).filter(pair=>pair.every(Number.isFinite));
  siteMap=window.L.map(mapElement,{zoomControl:true,scrollWheelZoom:true});
  const base=window.L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors'}).addTo(siteMap);
  const overlays={};
  if(points.length>=3){const layer=window.L.polygon(points,{color:"#236b53",weight:3,fillColor:"#71ad8f",fillOpacity:.32});layer.addTo(siteMap);layer.bindPopup("Polygon tapak tersimpan lokal. Overlay resmi tetap perlu dikonfirmasi dengan sumber tata ruang yang berlaku.");overlays["Polygon tapak"]=layer;siteMap.fitBounds(layer.getBounds(),{padding:[24,24]});}
  else siteMap.setView([-0.5,117],6);
  siteMap._enviroOfficialLayers={};
  window.ENVIRO_OFFICIAL_MAP_LAYERS.filter(layer=>layer.endpoint&&layer.layerName).forEach(definition=>{
    const pref=mapLayerPreference(definition.id),opacity=Number(pref.opacity??.55),adminLayer=definition.serviceType==="ArcGIS REST MapServer",bounds=siteMap.getBounds(),layer=adminLayer?window.L.imageOverlay(administrationMapUrl(siteMap,definition),[[bounds.getSouth(),bounds.getWest()],[bounds.getNorth(),bounds.getEast()]],{opacity,attribution:definition.publisher}):window.L.tileLayer.wms(definition.endpoint,{layers:definition.layerName,format:"image/png",transparent:true,version:"1.3.0",opacity,attribution:esc(definition.publisher)});
    siteMap._enviroOfficialLayers[definition.id]=layer;overlays[definition.title]=layer;
    if(adminLayer){const refresh=()=>{const next=siteMap.getBounds();layer.setUrl(administrationMapUrl(siteMap,definition));layer.setBounds([[next.getSouth(),next.getWest()],[next.getNorth(),next.getEast()]]);};siteMap.on("moveend zoomend",refresh);layer.on("error",()=>showToast(`${definition.title}: export peta tidak dapat dimuat. Periksa status layanan resmi.`));}else layer.on("tileerror",()=>showToast(`${definition.title}: tile tidak dapat dimuat. Periksa endpoint atau status layanan resmi.`));
    if(pref.visible??definition.defaultVisible)layer.addTo(siteMap);
  });
  window.L.control.layers({"OpenStreetMap":base},overlays,{collapsed:false,position:"topright"}).addTo(siteMap);
  document.getElementById("site-map-status")?.remove();
  setTimeout(()=>siteMap?.invalidateSize(),80);
}
function renderLocation(){
  const regs=REGENCIES[state.province]||[];
  const regencyField=`<select data-field="regency" ${regs.length?"":"disabled"}>${regs.length?regs.map(x=>`<option ${state.regency===x?"selected":""}>${x}</option>`).join(""):'<option>Data wilayah tidak tersedia</option>'}</select>`;
  const polygon=state.polygon,polygonLabel=polygon?`${esc(polygon.name)} · ${polygon.points.length} titik` : "Polygon belum diunggah",polygonNote=polygon?`${polygon.format} tersimpan lokal · diperbarui ${new Intl.DateTimeFormat("id-ID",{day:"2-digit",month:"short",year:"numeric"}).format(new Date(polygon.updatedAt))}`:"GeoJSON Polygon atau KML · diproses di browser tanpa backend";
  return heading(3,"Tentukan tapak dan kewenangan","Lokasi memicu overlay tata ruang, kawasan sensitif, pembagian kewenangan, serta regulasi provinsi dan kabupaten/kota")+
  `<input class="hide" id="polygon-file-input" type="file" accept=".geojson,.json,.kml,application/geo+json,application/json,text/xml"><div class="site-map-card"><div class="site-map-head"><div><span class="kicker">PETA TAPAK & LAYER</span><b>${polygonLabel}</b><small>${polygonNote}</small></div><span class="map-source-badge">OSM</span></div><div class="site-map" id="site-map"><div class="site-map-status" id="site-map-status">Memuat peta dasar OpenStreetMap…</div></div><div class="site-map-foot"><span>Layer dasar: OpenStreetMap · layer polygon: ${polygon?"aktif":"belum tersedia"}</span><a href="https://www.openstreetmap.org/fixthemap" target="_blank" rel="noopener noreferrer">Laporkan masalah peta</a></div></div><div class="mapbox mapbox-summary"><b>${polygonLabel}</b><small>${polygonNote}</small><div class="map-actions"><button type="button" class="primary" data-action="upload-polygon">${polygon?"Ganti polygon":"Unggah polygon"}</button>${polygon?'<button type="button" class="soft" data-action="remove-polygon">Hapus</button>':""}</div></div>
  ${locationAssessmentMarkup()}${officialLayerCatalogMarkup()}<section class="location-recommendation"><div><span class="kicker">REKOMENDASI POLYGON</span><h3>Jadikan polygon sebagai sumber lokasi utama.</h3><p>Gunakan peta untuk memeriksa bentuk dan posisi tapak, lalu validasi sistem koordinat, luas, status lahan, serta overlay RTR/RDTR, hutan, konservasi, gambut, karst, pesisir, sempadan, dan batas administrasi dari sumber resmi. Peta OSM di sini adalah basemap, bukan bukti kesesuaian ruang.</p></div><div class="recommendation-tags"><span>EPSG:4326</span><span>Validasi luas</span><span>Overlay resmi</span></div></section>
  <div class="form-row"><label class="form-field">Provinsi<select data-field="province">${PROVINCES.map(x=>`<option ${state.province===x?"selected":""}>${x}</option>`).join("")}</select><small>38 provinsi Indonesia tersedia</small></label><label class="form-field">Kabupaten / kota${regencyField}<small>${regs.length?`${regs.length} wilayah tersedia di provinsi ini`:"Periksa data provinsi"}</small></label></div>
  <div class="checks">${[["estate","Berada di kawasan industri"],["forest-cross","Beririsan kawasan hutan"],["marine-cross","Memakai ruang laut/pesisir"],["cross-admin","Lintas kabupaten/provinsi"],["protected","Dekat kawasan lindung/konservasi"],["river-buffer","Berada dekat sempadan sungai/danau"]].map(([key,label])=>`<label><input type="checkbox" data-location="${key}" ${state.locationFlags.includes(key)?"checked":""}> ${label}</label>`).join("")}</div>
  <div class="smart"><span>i</span><div><b>Lapisan daerah</b><p>${state.province==="Kalimantan Timur"?"Pilot regulasi daerah tersedia untuk Provinsi Kalimantan Timur, Kota Balikpapan, dan Kabupaten Kutai Kartanegara.":"Regulasi lokal daerah ini belum dipetakan di prototipe. Tracker akan menambahkan tugas verifikasi JDIH dan PTSP setempat."} Daftar 514 kabupaten/kota mengikuti Kepmendagri 300.2.2-2430 Tahun 2025.</p>${officialLink(LINKS.wilayahRef,"Buka sumber wilayah")}</div></div>`;
}

function environmentalValidation(){
  const hasKbli=!!selectedKbli(),hasCapacity=!!state.capacity&&!!state.capacityUnit,hasLocation=!!state.province&&!!state.regency,hasImpacts=state.impacts.length>0,hasFlora=state.impacts.includes("flora"),hasFauna=state.impacts.includes("fauna"),hasB3=hasGroup("b3"),masterCandidates=(state.masterB3Selected?.length||0)+(state.masterLB3Selected?.length||0),hasB3Candidates=state.wasteCodes.length>0||masterCandidates>0,hasPollution=hasGroup("wastewater")||hasGroup("emission")||hasB3;
  return [
    {id:"screening",label:"Data untuk memilih jalur dokumen",tone:hasKbli&&hasCapacity&&hasLocation?"review":"todo",status:hasKbli&&hasCapacity&&hasLocation?"Data inti sudah ada":"Lengkapi dulu",note:hasKbli&&hasCapacity&&hasLocation?"KBLI, kapasitas, lokasi, dan proses sudah cukup untuk membuat kesimpulan acuan. Berikutnya cocokkan dengan daftar resmi.":"Isi KBLI, kapasitas, provinsi, dan kabupaten/kota agar rekomendasi tidak terlalu kasar.",source:"plhk4-2021"},
    {id:"impact",label:"Dampak dan rona awal",tone:hasImpacts&&hasFlora&&hasFauna?"review":"todo",status:hasImpacts&&hasFlora&&hasFauna?"Siap dilengkapi":"Pilih dan pisahkan",note:hasFlora&&hasFauna?"Flora dan fauna sudah dipisahkan; lengkapi sumber, penerima, rona awal, metode, indikator, dan rencana pemantauan.":"Pilih dampak yang benar-benar berasal dari proses, lalu periksa flora dan fauna secara terpisah bila relevan.",source:"pp22-2021"},
    {id:"b3",label:"Kandidat B3 dan kode LB3",tone:!hasB3?"na":hasB3Candidates?"review":"todo",status:!hasB3?"Belum terpicu":hasB3Candidates?"Sudah ada kandidat":"Cari di master",note:!hasB3?"Belum ada sumber B3/LB3 yang dipilih.":"Kandidat berasal dari proses atau master lokal. Cocokkan dengan bahan, sumber limbah, karakteristik, jumlah, kemasan, dan kondisi aktual sebelum menetapkan kode.",source:"plhk6-2021"},
    {id:"technical",label:"Pertek / SLO sebagai pekerjaan lanjutan",tone:hasPollution?"review":"na",status:hasPollution?"Perlu diperiksa":"Belum terpicu",note:hasPollution?"Ini bukan hasil Pertek/SLO. Ini pengingat untuk memeriksa kebutuhan teknis berdasarkan jenis pencemar, jalur pengelolaan, dan ketentuan yang berlaku.":"Akan muncul bila pilihan memicu air limbah, emisi, atau limbah B3.",source:"plhk5-2021"},
    {id:"authority",label:"Kewenangan dan jalur OSS",tone:"review",status:"Konfirmasi di OSS/instansi",note:"Panel ini mengingatkan pekerjaan verifikasi kewenangan; bukan penentuan otomatis siapa penerbitnya.",source:"pp28-2025"}
  ];
}
function renderComplianceRegister(){const r={...DEFAULT_COMPLIANCE_REVIEW,...(state.complianceReview||{})},last=r.changeLog?.at(-1);return `<section class="compliance-register"><div class="validation-head"><div><small>REGISTER VERIFIKASI PROYEK</small><h3>Catat hasil resmi tanpa mengubahnya menjadi keputusan otomatis</h3><p>Isi hanya setelah ada hasil dari OSS/AMDALNet/instansi. Kolom ini tersimpan lokal dan dapat diekspor melalui state/ZIP.</p></div><span class="validation-mark">LOG</span></div>${r.reScreenRequired?`<div class="review-alert"><b>Perlu re-screening</b><p>${esc(r.reScreenReason||"Ada perubahan data proyek.")} Periksa kembali KBLI, kapasitas, proses, lokasi, dampak, kewenangan, dan dokumen.</p><button type="button" class="soft compact" data-action="clear-rescreen">Tandai sudah ditinjau</button></div>`:""}<div class="compliance-register-grid"><label class="form-field"><span>Hasil penapisan resmi</span><select data-compliance-field="officialDocumentType">${["","Belum ditentukan","AMDAL","UKL-UPL","SPPL","Lainnya / perlu klarifikasi"].map(v=>`<option value="${esc(v)}" ${r.officialDocumentType===v?"selected":""}>${esc(v||"Pilih hasil resmi")}</option>`).join("")}</select></label><label class="form-field"><span>Status hasil</span><select data-compliance-field="officialDocumentStatus">${["Belum dikonfirmasi","Draf","Diajukan","Perlu perbaikan","Terbit / berlaku","Ditolak / dihentikan"].map(v=>`<option value="${esc(v)}" ${r.officialDocumentStatus===v?"selected":""}>${esc(v)}</option>`).join("")}</select></label><label class="form-field"><span>Nomor atau ID pengajuan</span><input data-compliance-field="officialDocumentNumber" value="${esc(r.officialDocumentNumber)}" placeholder="Opsional sampai tersedia"></label><label class="form-field"><span>Tanggal hasil</span><input type="date" data-compliance-field="officialDocumentDate" value="${esc(r.officialDocumentDate)}"></label><label class="form-field full"><span>Sumber/tautan hasil resmi</span><input data-compliance-field="officialDocumentSource" value="${esc(r.officialDocumentSource)}" placeholder="URL, nomor surat, atau nama kanal resmi"></label><label class="form-field"><span>Status kewenangan</span><select data-compliance-field="authorityStatus">${["Belum dikonfirmasi","Indikatif","Terkonfirmasi"].map(v=>`<option value="${esc(v)}" ${r.authorityStatus===v?"selected":""}>${esc(v)}</option>`).join("")}</select></label><label class="form-field"><span>Instansi/OPD yang dikonfirmasi</span><input data-compliance-field="authorityAgency" value="${esc(r.authorityAgency)}" placeholder="Contoh: DLH / PTSP / OPD teknis"></label><label class="form-field"><span>Nomor tiket/surat kewenangan</span><input data-compliance-field="authorityReference" value="${esc(r.authorityReference)}" placeholder="Opsional sampai tersedia"></label><label class="form-field"><span>Tanggal konfirmasi</span><input type="date" data-compliance-field="authorityDate" value="${esc(r.authorityDate)}"></label></div>${last?`<small class="change-note">Perubahan terakhir: ${esc(last.date)} · ${esc(last.reason)}</small>`:""}<p class="register-note">Status “Terkonfirmasi” berarti bukti sudah ditinjau di workspace, bukan jaminan bahwa keputusan instansi dapat digantikan oleh aplikasi.</p></section>`;}
function renderValidationPanel(compact=false){const rows=environmentalValidation();return `<section class="validation-panel ${compact?"compact":""}"><div class="validation-head"><div><small>VALIDASI REGULASI & DATA</small><h3>${compact?"Checklist sebelum memakai kesimpulan":"Checklist kesiapan hasil penapisan"}</h3><p>Gunanya memeriksa apakah data dan sumber sudah cukup untuk memakai kesimpulan acuan. Ini bukan hasil AMDAL/UKL-UPL dan bukan pengganti pemeriksaan instansi.</p></div><span class="validation-mark">CHECK</span></div><div class="validation-list">${rows.map(row=>{const rule=REGULATIONS.find(r=>r.id===row.source);return `<div class="validation-row"><span class="validation-dot ${row.tone}"></span><div><b>${esc(row.label)}</b><strong class="validation-status ${row.tone}">${esc(row.status)}</strong><p>${esc(row.note)}</p>${rule?officialLink(rule.url,`Sumber: ${rule.title}`,"inline-link"):""}</div></div>`}).join("")}</div><div class="validation-foot">Rujukan kerja diperiksa ${esc("23 Agu 2026")}; cek kembali versi resmi dan aturan sektoral/daerah sebelum pengajuan.</div></section>`;}
function relevantRules(){
  const ids=["uu32-2009","pp28-2025","pp22-2021","plhk4-2021","plh22-2025","plh6-2026"];
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
function indicativeDocumentRecommendation(){
  const r={...DEFAULT_COMPLIANCE_REVIEW,...(state.complianceReview||{})},k=selectedKbli(),activityText=(state.activities||[]).join(" ").toLowerCase(),answerText=Object.values(state.answers||{}).join(" ").toLowerCase();
  const coreInputs=[!!k,!!state.capacity&&!!state.capacityUnit,!!state.province&&!!state.regency,state.impacts.length>0].filter(Boolean).length;
  const official=r.officialDocumentType&&r.officialDocumentType!=="Belum ditentukan"&&r.officialDocumentType!=="Lainnya / perlu klarifikasi";
  const marine=/(coastal|seawater|dredging)/.test(state.impacts.join(" "))||/offshore|laut|pesisir|jetty|pelabuhan|tambak|reklamasi/.test(`${activityText} ${answerText}`);
  const building=/(konstruksi|bangunan|fasilitas|gudang|workshop|jalan|drainase|terminal|pelabuhan|jetty|boiler|turbin|utilitas|ipal)/.test(activityText)||state.impacts.includes("construction-waste");
  const complex=state.kblis.length>1||state.activities.length>=4||state.impacts.length>=8||marine||state.locationFlags.length>0;
  const signals=[];
  if(hasGroup("wastewater"))signals.push("air limbah");
  if(hasGroup("emission"))signals.push("emisi udara");
  if(hasGroup("b3"))signals.push("B3/limbah B3");
  if(hasGroup("solid"))signals.push("limbah padat");
  if(hasGroup("location")||marine)signals.push("sensitivitas lokasi/ruang laut");
  if(hasGroup("other"))signals.push("dampak fisik, hayati, sosial, atau iklim");
  let primary,confidence,explanation;
  if(official){primary=`${r.officialDocumentType} · ${r.officialDocumentStatus}`;confidence="hasil resmi tercatat";explanation=`Register mencatat ${r.officialDocumentType} sebagai hasil yang kamu masukkan dari kanal resmi. Gunakan hasil ini sebagai acuan kerja utama dan cocokkan nomor, tanggal, sumber, serta kewenangannya.`;}
  else if(complex){primary="AMDAL perlu diprioritaskan sebagai skenario penapisan";confidence=coreInputs>=3?"sedang":"rendah";explanation="Kegiatan memiliki kombinasi skala, proses, dampak, atau sensitivitas lokasi yang kompleks. Siapkan bahan penapisan AMDAL terlebih dahulu; hasil resmi dapat mengarahkan ke UKL-UPL atau SPPL bila kriteria formal tidak terpenuhi.";}
  else if(signals.length){primary="UKL-UPL menjadi acuan kerja utama";confidence=coreInputs>=3?"sedang":"rendah";explanation="Profil memicu sumber dampak yang memerlukan pengelolaan dan pemantauan terstruktur. Susun paket UKL-UPL sebagai baseline kerja sambil menguji skala, proses, lokasi, dan aturan sektoral di OSS/AMDALNet.";}
  else{primary="SPPL dapat menjadi kandidat awal";confidence="rendah";explanation="Belum ada sinyal dampak besar yang terpilih. Gunakan SPPL sebagai kandidat awal untuk persiapan data, tetapi tetap uji kegiatan dan skala pada penapisan resmi.";}
  if(coreInputs<4&&!official)explanation+=` Data inti yang tersedia ${coreInputs}/4, sehingga rekomendasi ini sengaja diposisikan sebagai acuan awal dan bukan hasil final.`;
  const documents=["Ringkasan kegiatan, seluruh KBLI, kapasitas, proses, dan tahap proyek","Polygon/titik lokasi, status lahan, provinsi–kabupaten/kota, serta hasil cek tapak"];
  if(primary.startsWith("AMDAL"))documents.push("Bahan awal AMDAL: rona awal, sumber–penerima dampak, alternatif, dan kerangka RKL-RPL");else documents.push(`${primary.startsWith("UKL-UPL")?"Formulir UKL-UPL":"Draft SPPL"}, matriks pengelolaan–pemantauan, dan dasar pemilihan jalur`);
  if(hasGroup("wastewater"))documents.push("Neraca air, inventaris aliran, desain IPAL, dan kandidat Pertek/SLO");
  if(hasGroup("emission"))documents.push("Daftar sumber emisi, bahan bakar, parameter, alat kontrol, dan rencana monitoring");
  if(hasGroup("b3"))documents.push("Inventaris B3/LB3, SDS, kode kandidat, neraca timbulan, dan rancangan penyimpanan");
  if(marine)documents.push("Data pemanfaatan ruang laut/pesisir untuk pemeriksaan KKPRL");
  if(building)documents.push("Daftar bangunan/fasilitas dan data teknis untuk jalur PBG/SLF bila terpicu");
  const regulationBasis=primary.startsWith("AMDAL")?"Permen LHK 4/2021 sebagai acuan daftar kegiatan AMDAL/UKL-UPL/SPPL, ditambah PP 22/2021 dan aturan sektoral yang relevan.":primary.startsWith("UKL-UPL")?"Permen LHK 4/2021 sebagai acuan daftar kegiatan, ditambah PP 22/2021 untuk pengelolaan dan pemantauan lingkungan.":"Permen LHK 4/2021 dan hasil penapisan resmi sebagai acuan jalur SPPL; PP 22/2021 tetap menjadi kerangka perlindungan lingkungan.";
  const basis=`${regulationBasis} ${signals.length?`Pemicu proyek yang terbaca: ${signals.join(", ")}.`:`Data pemicu lingkungan masih terbatas; gunakan ini sebagai baseline awal.`}`;
  return {primary,confidence,explanation,documents,basis,next:"Siapkan paket di atas, bawa ke OSS/AMDALNet atau PTSP/OPD yang sesuai, lalu masukkan jenis, status, nomor, tanggal, sumber, dan kewenangan hasil resminya ke register."};
}
function docRecommendation(){return indicativeDocumentRecommendation().primary;}
function renderRecommendationPanel(rec){return `<section class="screening-conclusion" aria-labelledby="screening-conclusion-title"><div class="conclusion-head"><div><small class="kicker">KESIMPULAN ACUAN</small><h3 id="screening-conclusion-title">Dokumen acuan yang disarankan</h3></div><span class="conclusion-confidence">${esc(rec.confidence)}</span></div><div class="conclusion-grid"><div class="conclusion-main"><small>DOKUMEN YANG DIACU</small><b>${esc(rec.primary)}</b><p>Ini adalah arah kerja EnviroTrack berdasarkan data proyek saat ini.</p></div><div><small>KENAPA</small><p>${esc(rec.explanation)}</p></div><div><small>SIAPKAN SEKARANG</small><ul>${rec.documents.map(item=>`<li>${esc(item)}</li>`).join("")}</ul></div><div><small>ACUAN REGULASI & PEMICU</small><p>${esc(rec.basis)}</p></div><div><small>SESUDAH ITU</small><p>${esc(rec.next)}</p></div></div><p class="conclusion-note">Ini kesimpulan acuan dari input pengguna, bukan penerbitan atau penetapan legal. Jika hasil resmi sudah tersedia, masukkan hasil tersebut ke register agar menggantikan asumsi indikatif.</p></section>`;}
function renderResult(){
  const k=selectedKbli(),t=buildTasks(),rules=relevantRules(),rec=indicativeDocumentRecommendation(),coreInputs=[!!k,!!state.capacity&&!!state.capacityUnit,!!state.province&&!!state.regency,state.impacts.length>0].filter(Boolean).length;
  return `<div class="result-head"><span class="ok">OK</span><div><label>HASIL PENAPISAN INDIKATIF</label><h2>${esc(k?.code||"KBLI belum dipilih")} · ${esc(k?.title||"")}</h2><p>${state.kblis.length>1?`${state.kblis.length} KBLI digabung · `:""}${esc(state.projectStatus)} · ${esc(state.stage)} · ${state.capacity?`${esc(state.capacity)} ${esc(state.capacityUnit)}`:"kapasitas belum diisi"} di ${esc(state.regency)}, ${esc(state.province)}</p></div><div class="confidence"><b>${coreInputs}/4</b><small>input inti tersedia</small></div></div>
  <div class="stats"><div class="stat"><small>Jalur dokumen</small><b>${esc(rec.primary)}</b><span>Bukan penetapan · ${esc(rec.confidence)} · acuan dari data yang diisi</span></div><div class="stat"><small>Platform utama</small><b>OSS + AMDALNet</b><span>PTSP mengikuti kewenangan</span></div><div class="stat"><small>Kewajiban terpicu</small><b>${t.length} tugas</b><span>${state.impacts.length} sumber dampak</span></div></div>
  ${renderRecommendationPanel(rec)}
  <div class="alert"><span>!</span><div><b>Hasil indikatif, bukan keputusan instansi</b><p>Gunakan kesimpulan ini sebagai acuan persiapan; cocokkan ambang skala, sektor, sensitivitas polygon, dan kewenangan melalui kanal resmi.</p></div><button type="button" class="soft" data-step="2">Lengkapi lokasi</button></div>
  ${state.complianceReview?.reScreenRequired?`<div class="alert"><span>!</span><div><b>Perlu re-screening setelah perubahan</b><p>${esc(state.complianceReview.reScreenReason||"Data proyek berubah.")} Tinjau ulang hasil sebelum mengandalkan checklist.</p></div><button type="button" class="soft" data-action="clear-rescreen">Tandai ditinjau</button></div>`:""}
  ${renderValidationPanel(true)}${renderComplianceRegister()}
  <h3 class="rules-title">Regulasi yang terpicu · ${rules.length}</h3><div class="rules">${rules.map(r=>`<div class="rule"><span class="badge ${r.level==="Nasional"?"general":r.level==="Sektoral"?"sectoral":"local"}">${r.level.toUpperCase()}</span><p><b>${esc(r.title)}</b><small>${esc(r.about)}</small></p>${officialLink(r.url,"Sumber")}</div>`).join("")}</div>`;
}

const TASK_GUIDES={
  kkprl:{portalWhen:"Buka jalur KKPRL di OSS hanya bila kegiatan memakai ruang laut/pesisir atau fasilitas yang berada di ruang laut.",steps:["Pastikan koordinat/polygon mencakup seluruh fasilitas laut, garis pantai, jetty, kabel, pipa, atau area budidaya.","Catat jenis pemanfaatan ruang laut, jangka waktu, luas, dan hubungan dengan kegiatan darat.","Periksa KKPRL pada OSS serta minta konfirmasi instansi/OPD kelautan yang berwenang.","Simpan nomor pengajuan, peta, persyaratan, dan keputusan/permintaan perbaikan.","Hubungkan syarat KKPRL dengan Persetujuan Lingkungan, desain, monitoring, dan kalender." ]},
  "pbg-slf":{portalWhen:"Gunakan jalur PBG/SLF bila proyek membangun atau mengoperasikan gedung/fasilitas yang memerlukan persetujuan bangunan.",steps:["Inventarisasi gedung, fasilitas proses, tangki, utilitas, dan bangunan penunjang.","Tentukan dokumen teknis, status tanah, kesesuaian ruang, dan klasifikasi bangunan.","Ajukan atau konfirmasi PBG melalui kanal resmi pemerintah daerah/SIMBG sesuai jalur yang berlaku.","Setelah konstruksi, siapkan pemeriksaan dan SLF bila dipersyaratkan sebelum pemanfaatan.","Simpan nomor, gambar as-built, PBG/SLF, syarat keselamatan, dan masa berlaku di register." ]},
  "amdalnet-public":{portalWhen:"Muncul setelah hasil resmi menyatakan jalur AMDAL atau ketika AMDALNet meminta tahapan publikasi/tanggapan.",steps:["Catat jenis dokumen, tahap pengajuan, pemrakarsa, lokasi, dan nomor registrasi.","Periksa pengumuman resmi dan periode pemberian tanggapan yang ditampilkan pada AMDALNet.","Simpan bukti pengumuman, tanggapan, konsultasi, berita acara, dan jawaban pemrakarsa.","Catat permintaan perbaikan serta versi dokumen yang dikirim kembali.","Jangan menyatakan proses selesai sebelum keluaran resmi dan status pengajuan tersimpan." ]},
  "amdalnet-review":{portalWhen:"Muncul untuk jalur AMDAL/UKL-UPL ketika pengajuan sudah dibuat dan perlu ditelusuri sampai keluaran resmi.",steps:["Simpan nomor tiket/pengajuan dan tanggal masuk pada AMDALNet.","Catat hasil pemeriksaan administrasi dan setiap permintaan kelengkapan.","Tautkan versi dokumen lingkungan, surat, berita acara, atau hasil uji kelayakan.","Catat tanggal serta status Persetujuan Lingkungan atau keluaran resmi lainnya.","Pindahkan seluruh komitmen final ke kalender kepatuhan dan re-screening proyek." ]},
  entity:{portalWhen:"Ikuti hasil asisten pemilih AHU di atas. Jangan masuk melalui tombol Login atau memilih ikon secara acak sebelum bentuk usaha dan pihak yang mengoperasikan portal sudah jelas.",steps:["Jawab asisten pemilih AHU dan baca hasil layanan yang harus dipilih serta siapa yang mengoperasikannya.","Tetapkan nama, alamat kedudukan, pendiri/pemegang saham atau sekutu, pengurus, modal, dan pemilik manfaat.","Cocokkan maksud-tujuan dalam dokumen pendirian dengan seluruh KBLI yang benar-benar akan dijalankan.","Siapkan data dan dokumen pada daftar prasyarat; serahkan kepada notaris jika hasil menyatakan proses harus melalui notaris.","Periksa keluaran AHU, lalu tautkan akta/dokumen pendirian dan SK/sertifikat pendaftaran sebagai bukti tugas."]},
  tax:{portalWhen:"Buka Coretax setelah dokumen pendirian/legalitas badan tersedia atau ketika data NPWP hasil integrasi perlu diverifikasi.",steps:["Periksa apakah NPWP badan sudah terbentuk dan nama/alamatnya sama dengan dokumen AHU.","Siapkan akta/dokumen pendirian, SK/bukti pendaftaran, dan identitas pengurus.","Daftar atau aktivasi akses Coretax untuk wakil/pengurus badan.","Periksa profil wajib pajak, alamat, kontak, KLU, dan status administrasi.","Simpan NPWP/profil dan bukti akses; catat koreksi yang harus diajukan bila data tidak sesuai."]},
  nib:{portalWhen:"Buka OSS setelah data AHU dan pajak dapat ditarik/diisi, serta daftar KBLI, produk, kapasitas, investasi, dan lokasi sudah siap.",steps:["Daftar/masuk sebagai badan usaha dan tarik data legalitas dari AHU.","Periksa profil badan usaha, pengurus, pemegang saham, NPWP, alamat, dan kontak.","Tambahkan setiap bidang usaha: KBLI final 5 digit, produk/jasa, kapasitas, modal, tenaga kerja, dan lokasi proyek.","Jalankan validasi risiko untuk setiap KBLI/proyek dan baca persyaratan dasar, Sertifikat Standar/izin, serta PB UMKU yang muncul.","Terbitkan dan simpan NIB, lalu catat persyaratan yang masih belum terverifikasi—NIB bukan tanda seluruh izin sudah efektif."]},
  spatial:{portalWhen:"Buka menu lokasi/KKPR di OSS setelah NIB atau ID proyek tersedia dan polygon serta status lahannya sudah siap.",steps:["Siapkan polygon koordinat, luas tapak, alamat, dan bukti penguasaan/status tanah.","Pastikan jenis serta skala kegiatan pada lokasi sama dengan data bidang usaha di OSS.","Ajukan/konfirmasi KKPR atau PKKPR melalui proyek OSS sesuai kondisi RDTR.","Jika masuk penilaian, pantau permintaan data, PNBP, dan verifikasi ATR/BPN–OPD tata ruang–DPMPTSP.","Simpan dokumen kesesuaian ruang dan petakan syarat atau pembatasan lokasi ke desain proyek."]},
  screen:{portalWhen:"Jangan langsung mengunggah dokumen ke AMDALNet. Buka setelah seluruh KBLI, kapasitas, proses, lokasi, dan kewenangan sudah cukup untuk menetapkan jalur dokumen.",steps:["Gabungkan kegiatan utama dan pendukung, bukan hanya KBLI utama.","Catat skala, teknologi, luas, sumber dampak, dan sensitivitas lokasi.","Bandingkan dengan Permen LHK 4/2021 dan aturan sektoral yang relevan.","Tentukan hasil indikatif AMDAL, UKL-UPL, atau SPPL beserta dasar ambangnya.","Konfirmasi hasil dan kewenangan pusat/provinsi/kabupaten-kota sebelum membuat pengajuan."]},
  local:{portalWhen:"Hubungi DPMPTSP setelah mempunyai NIB/ID proyek, alamat atau polygon, dan daftar proses yang perlu dikonfirmasi.",steps:["Buka portal atau kanal layanan DPMPTSP sesuai kabupaten/kota/provinsi proyek.","Sampaikan NIB/ID proyek, KBLI, lokasi, skala, dan ringkasan proses.","Tanyakan siapa OPD pemeriksa, kewenangan penerbit, jalur pengajuan, serta dokumen lokal tambahan.","Catat nama petugas/nomor tiket, jawaban, tenggat, dan tautan formulir resmi.","Masukkan hasil konfirmasi ke tracker serta unggah bukti komunikasi/ketentuan lokal."]},
  "ww-map":{portalWhen:"Kerjakan inventaris internal sebelum membuka sistem pengajuan. Data ini menjadi dasar dokumen lingkungan dan Pertek.",steps:["Daftar setiap sumber air limbah dan pisahkan domestik, proses, drainase, utilitas, serta aliran khusus.","Hitung debit minimum–rata-rata–maksimum dan susun neraca air.","Catat karakteristik/parameter, pengolahan, titik penaatan, dan tujuan buang/pemanfaatan tiap aliran.","Buat PFD dan layout IPAL beserta koordinat titik penaatan.","Unggah neraca, daftar aliran, dan gambar proses sebagai bukti tugas."]},
  "ww-pertek":{portalWhen:"Buka jalur AMDALNet/instansi setelah alternatif pembuangan atau pemanfaatan, desain IPAL, debit, dan baku mutu telah ditetapkan.",steps:["Tentukan jalur pembuangan/pemanfaatan dan regulasi baku mutu yang berlaku.","Pilih kajian teknis atau standar teknis sesuai kriteria yang berlaku.","Lengkapi desain IPAL, neraca, mutu influen/efluen, titik penaatan, dan rencana pemantauan.","Selaraskan isi Pertek dengan AMDAL/UKL-UPL dan desain proyek.","Ajukan, jawab perbaikan, lalu simpan dokumen persetujuan final dan matriks kewajibannya."]},
  "ww-slo":{portalWhen:"Ajukan verifikasi/SLO setelah konstruksi sesuai Pertek selesai dan data commissioning tersedia; bukan saat desain awal.",steps:["Cocokkan as-built IPAL dan titik penaatan dengan Persetujuan Teknis.","Siapkan SOP, personel/kompetensi, log operasi, alat ukur, dan rencana darurat.","Lakukan commissioning serta pengujian mutu/debit melalui laboratorium yang sesuai.","Ajukan verifikasi/SLO pada jalur dan instansi yang disebut dalam persetujuan.","Simpan SLO dan pindahkan seluruh syarat operasi ke kalender kepatuhan."]},
  "migas-water":{portalWhen:"Gunakan hasil pemisahan aliran sebagai lampiran teknis sebelum menetapkan baku mutu dan jalur pengelolaan migas.",steps:["Pisahkan produced water, oily drainage, hydrotest, domestik, dan air utilitas.","Catat sumber, debit, komposisi, bahan kimia, dan variasi operasi tiap aliran.","Tentukan pengolahan dan tujuan: injeksi, pembuangan, pemanfaatan, atau pengangkutan.","Tetapkan titik penaatan dan parameter sektoral untuk setiap jalur.","Hubungkan setiap aliran ke dokumen lingkungan, Pertek, SOP, dan rencana monitoring."]},
  "air-source":{portalWhen:"Inventaris sumber dilakukan sebelum pengajuan Pertek; SIMPEL baru dipakai saat pemantauan/pelaporan operasi.",steps:["Daftar boiler, genset, turbin, flare, heater, incinerator, proses, debu, VOC, vent, dan fugitif.","Catat bahan bakar, kapasitas, jam operasi, koordinat, dimensi cerobong, dan alat kontrol.","Kelompokkan sumber wajib dipantau, sumber darurat, dan sumber yang dikecualikan beserta dasarnya.","Tentukan kandidat parameter dan baku mutu sektoral tiap sumber.","Unggah daftar sumber, datasheet, dan plot plan sebagai bukti."]},
  "air-pertek":{portalWhen:"Buka jalur pengajuan setelah inventaris, data desain, baku mutu, serta kebutuhan kajian dispersi/teknis sudah jelas.",steps:["Tetapkan regulasi dan baku mutu untuk setiap sumber emisi.","Tentukan kebutuhan kajian teknis/standar teknis dan pemodelan dispersi bila diwajibkan.","Susun desain cerobong, alat kontrol, titik sampling, akses, dan rencana pemantauan.","Selaraskan dokumen dengan AMDAL/UKL-UPL serta rencana konstruksi.","Ajukan, tindak lanjuti perbaikan, dan simpan persetujuan beserta seluruh syaratnya."]},
  "air-report":{portalWhen:"Gunakan SIMPEL setelah sumber, baku mutu, titik pantau, frekuensi, dan legalitas perusahaan sudah terbentuk.",steps:["Tarik seluruh kewajiban emisi dari Persetujuan Lingkungan/Pertek dan aturan sektor.","Buat kalender uji, inspeksi, CEMS/manual sampling, dan kalibrasi.","Kumpulkan LHU, log operasi, bahan bakar, jam operasi, dan bukti pemeliharaan.","Input serta validasi periode laporan di SIMPEL sesuai modul yang aktif.","Unduh tanda terima/bukti kirim dan tautkan ke tugas periode tersebut."]},
  "b3-inventory":{portalWhen:"Jangan membuka SPEED untuk memulai. Susun inventaris dan klasifikasi lebih dulu untuk dokumen/rincian teknis lingkungan.",steps:["Daftar bahan B3 yang digunakan/disimpan beserta SDS dan lokasi penyimpanannya.","Daftar setiap limbah dari sumber proses spesifik, bukan hanya dari nama industri.","Cocokkan kode limbah, sumber, karakteristik, kategori bahaya, jumlah, dan kemasan.","Susun neraca timbulan serta rencana simpan, angkut, manfaat/olah, dan manifest.","Unggah tabel inventaris, SDS, foto sumber, dan dasar penetapan kode sebagai bukti."]},
  "b3-storage":{portalWhen:"Siapkan Rincian Teknis TPS LB3 untuk diselaraskan dengan dokumen/persetujuan lingkungan. SPEED/SIRAJA dipakai kemudian untuk pelaporan PLB3.",steps:["Hitung jenis, jumlah maksimum, karakteristik, kemasan, dan masa simpan limbah.","Rancang zonasi kompatibilitas, secondary containment, lantai/atap, ventilasi, drainase, serta akses.","Siapkan simbol-label, SOP penerimaan/penyimpanan, logbook, inspeksi, dan tanggap darurat.","Susun layout, gambar teknis, kapasitas, koordinat, dan Rincian Teknis TPS LB3.","Ajukan melalui jalur persetujuan lingkungan sesuai kewenangan dan simpan dokumen final."]},
  emergency:{portalWhen:"Program disusun dari risiko aktual sebelum operasi; portal hanya menjadi sumber ketentuan/kanal sesuai kewenangan.",steps:["Petakan skenario tumpahan, kebakaran, paparan, kegagalan penyimpanan, dan dampak keluar tapak.","Tetapkan organisasi, komunikasi, peralatan, zona respons, dan koordinasi eksternal.","Buat prosedur respons, pemulihan, investigasi, serta pelaporan kejadian.","Lakukan latihan dan catat temuan serta tindakan perbaikan.","Unggah program, peta risiko, daftar peralatan, dan laporan latihan."]},
  nonb3:{portalWhen:"Susun neraca dan status limbah terlebih dahulu; pelaporan elektronik dilakukan saat operasi sesuai kewajiban.",steps:["Daftar residu/limbah non-B3 per proses dan ukur timbulannya.","Tentukan status, karakteristik, penyimpanan, serta potensi pemanfaatan.","Verifikasi tujuan akhir dan legalitas pihak penerima/pengelola.","Buat neraca masuk–keluar dan prosedur pencatatan bukti serah.","Tautkan rencana ke dokumen lingkungan dan simpan dokumen pendukung."]},
  "water-use":{portalWhen:"Hubungi OSS/PTSP/instansi sumber daya air setelah sumber, debit, koordinat, dan neraca air tersedia.",steps:["Tentukan sumber: PDAM/pemasok, air tanah, air permukaan, air laut, atau kombinasi.","Susun neraca kebutuhan, debit puncak, cadangan, dan efisiensi/penggunaan kembali.","Tetapkan koordinat sumur/intake serta wilayah sungai atau kewenangan terkait.","Konfirmasi izin/persetujuan, data teknis, biaya, dan instansi penerbit.","Simpan izin/perjanjian pemasok serta pindahkan syarat ukur dan pelaporan ke kalender."]},
  "location-overlay":{portalWhen:"Lakukan overlay sebelum desain final dan sebelum meminta konfirmasi instansi kawasan.",steps:["Validasi polygon, sistem koordinat, luas, dan batas proyek.","Overlay RTR/RDTR, hutan, konservasi, gambut, karst, pesisir/laut, sempadan, dan bencana.","Catat setiap irisan, jarak, status, sumber peta, dan tanggal data.","Konfirmasi temuan material kepada instansi/pengelola kawasan yang berwenang.","Unggah peta, tabel temuan, bukti konfirmasi, dan batasan desain."]},
  "other-impact":{portalWhen:"Masukkan hasil kajian ke AMDAL/UKL-UPL setelah sumber dampak, penerima dampak, dan rona awal terpetakan.",steps:["Daftar dampak fisik, hayati, sosial, kesehatan, lalu lintas, kebisingan, bau, dan GHG yang relevan.","Tetapkan lokasi, periode, metode, dan kualitas data rona awal.","Nilai besaran, durasi, sebaran, penerima, serta signifikansi dampak.","Susun tindakan pengelolaan, indikator, lokasi/frekuensi pemantauan, dan PIC.","Masukkan ke matriks RKL-RPL/UKL-UPL dan unggah dataset/bukti pendukung."]},
  report:{portalWhen:"Aktifkan SIMPEL setelah persetujuan dan kewajiban final tersedia; jangan mengisi berdasarkan asumsi prototipe.",steps:["Ekstrak seluruh komitmen dari Persetujuan Lingkungan, Pertek, SLO, izin sektor, dan ketentuan daerah.","Ubah menjadi kalender: parameter, lokasi, frekuensi, batas waktu, PIC, dan format bukti.","Pastikan akun/profil SIMPEL serta modul PPA, PPU, RKL-RPL, dan PLB3 yang relevan aktif.","Lakukan monitoring, validasi data, dan persetujuan internal sebelum submit.","Simpan TTE/bukti kirim, tandai periode selesai, dan jadwalkan periode berikutnya."]}
};
function guideForTask(task){return TASK_GUIDES[task.id]||{portalWhen:"Siapkan bukti dan prasyarat di bawah sebelum membuka portal tujuan.",steps:[`Konfirmasi ruang lingkup tugas: ${task.title}.`,`Kumpulkan bukti yang dibutuhkan: ${task.evidence}.`,"Buka sistem tujuan, ikuti permintaan data, dan catat nomor tiket/pengajuan.","Simpan hasil serta tautkan dokumen final ke tugas ini."]};}
const TASK_PLAYBOOKS={
  kkprl:{prepare:["Polygon seluruh ruang darat-laut dan fasilitas terkait","Jenis pemanfaatan ruang laut, luas, durasi, dan instansi terkait","Data kegiatan yang konsisten dengan OSS dan Persetujuan Lingkungan"],checks:["KKPRL atau status pengajuan tercatat","Peta dan koordinat sesuai dokumen resmi","Syarat, masa berlaku, dan kewajiban monitoring tersimpan"],next:"Selaraskan KKPRL dengan Persetujuan Lingkungan, desain, dan kalender.",warning:"Jangan memakai peta pesisir sebagai pengganti KKPRL atau menganggap lokasi dekat pantai otomatis membutuhkan jalur yang sama."},
  "pbg-slf":{prepare:["Daftar bangunan/fasilitas dan status lahan","Dokumen teknis bangunan serta kesesuaian ruang","Kanal PBG/SLF pemerintah daerah yang berlaku"],checks:["PBG atau status proses tersimpan","As-built dan pemeriksaan tersedia sebelum pemanfaatan","SLF tercatat bila diwajibkan"],next:"Jalankan operasi hanya setelah prasyarat bangunan dan keselamatan terpenuhi.",warning:"Jangan menganggap Persetujuan Lingkungan menggantikan PBG/SLF."},
  "amdalnet-public":{prepare:["Nomor registrasi dan jenis dokumen","Periode pengumuman dan kanal resmi","Bukti tanggapan/konsultasi masyarakat"],checks:["Pengumuman dan periode tanggapan tersimpan","Tanggapan serta jawaban tercatat","Versi dokumen dan berita acara tertaut"],next:"Lanjutkan pemeriksaan administrasi dan perbaikan sesuai AMDALNet.",warning:"Jangan menghapus tanggapan atau menyatakan tidak ada keberatan tanpa bukti periode pengumuman."},
  "amdalnet-review":{prepare:["Nomor tiket AMDALNet","Versi dokumen dan surat perbaikan","Status Persetujuan Lingkungan"],checks:["Status resmi dan tanggalnya tertaut","Perbaikan terdokumentasi","Komitmen final masuk ke kalender"],next:"Ekstrak kewajiban final ke kalender dan awasi perubahan proyek.",warning:"Jangan menganggap dokumen yang diunggah atau nomor tiket sebagai persetujuan yang sudah terbit."},
  entity:{prepare:["Keputusan bentuk usaha dan struktur pendiri/pemilik","Nama, alamat, modal, pengurus, KBLI, serta pemilik manfaat","Identitas pendiri/pengurus dan data kontak"],checks:["Akta/pernyataan pendirian final tersedia","SK pengesahan atau sertifikat pendaftaran dapat diunduh","Nama, alamat, pengurus, modal, KBLI, dan pemilik manfaat sudah diperiksa"],next:"Validasi NPWP/Coretax, lalu gunakan data legalitas untuk mendaftar di OSS.",warning:"Jangan memilih layanan AHU atau Login secara acak. Ikuti hasil asisten bentuk usaha dan gunakan notaris jika jalurnya mewajibkan notaris."},
  tax:{prepare:["Akta/pernyataan pendirian dan SK/sertifikat AHU","NIK, NPWP, email, dan nomor telepon pengurus/wakil","Alamat serta data kegiatan usaha yang konsisten"],checks:["NPWP badan dan identitas wajib pajak sudah tersedia","Akun pengurus/wakil dapat masuk ke Coretax","Nama, alamat, penanggung jawab, dan KLU tidak bertentangan dengan legalitas"],next:"Lanjutkan ke OSS setelah profil badan dan akses administrasi pajak dapat digunakan.",warning:"Jangan menganggap data hasil integrasi otomatis selalu benar; periksa setiap identitas dan alamat sebelum digunakan di OSS."},
  nib:{prepare:["Legalitas AHU dan profil pajak yang benar","Seluruh KBLI final 5 digit, produk/jasa, kapasitas, investasi, dan tenaga kerja","Alamat serta lokasi setiap proyek atau bidang usaha"],checks:["NIB dapat diunduh dan nomor identitasnya terbaca","Setiap KBLI/lokasi mempunyai tingkat risiko dan keluaran perizinan","Persyaratan yang belum efektif atau belum terverifikasi sudah dicatat sebagai tugas"],next:"Kerjakan persyaratan dasar lokasi, lingkungan, bangunan, serta izin/sertifikat sektoral yang muncul.",warning:"NIB bukan bukti bahwa semua kegiatan boleh langsung beroperasi; periksa status Sertifikat Standar, izin, dan PB UMKU per KBLI."},
  spatial:{prepare:["Polygon dan koordinat tapak yang valid","Luas, alamat, status/penguasaan tanah, serta rencana penggunaan lahan","Jenis kegiatan dan skala yang sama dengan data OSS"],checks:["KKPR/PKKPR atau keluaran kesesuaian ruang tersedia","Nomor, tanggal, polygon, luas, dan kegiatan sesuai proyek","Seluruh syarat atau pembatasan lokasi sudah dipindahkan ke desain/tugas"],next:"Gunakan hasil ruang dan overlay lokasi untuk penapisan dokumen lingkungan.",warning:"Jangan menggunakan titik alamat sebagai pengganti polygon untuk proyek yang membutuhkan batas tapak."},
  screen:{prepare:["Daftar seluruh KBLI utama dan pendukung","Kapasitas, teknologi, luas, tahapan kegiatan, serta sumber dampak","Polygon dan informasi sensitivitas lokasi"],checks:["Jalur AMDAL, UKL-UPL, atau SPPL tercatat beserta dasar ambangnya","Kewenangan pusat/provinsi/kabupaten-kota telah dikonfirmasi","Kegiatan pendukung dan dampak kumulatif tidak terlewat"],next:"Susun dokumen sesuai hasil penapisan dan mulai koordinasi dengan instansi pemeriksa.",warning:"Jangan menentukan jalur hanya dari judul KBLI; skala, teknologi, lokasi, dan kegiatan pendukung dapat mengubah hasil."},
  local:{prepare:["NIB/ID proyek, KBLI, skala, dan ringkasan proses","Alamat atau polygon lokasi","Daftar pertanyaan mengenai kewenangan, kanal, dan dokumen lokal"],checks:["Instansi/OPD pemeriksa dan jalur pengajuan sudah jelas","Nomor tiket, nama petugas, tanggal, serta jawaban tersimpan","Ketentuan lokal baru sudah menjadi tugas atau regulasi proyek"],next:"Ikuti kanal dan daftar berkas yang dikonfirmasi oleh PTSP/DLH/OPD.",warning:"Jangan mengandalkan jawaban lisan tanpa mencatat petugas, tanggal, kanal, dan bukti korespondensi."},
  "ww-map":{prepare:["Diagram proses, utilitas, drainase, dan fasilitas domestik","Data konsumsi air serta perkiraan debit per kondisi operasi","Data awal kualitas air limbah dan tujuan pengelolaan"],checks:["Semua aliran memiliki sumber, debit, karakteristik, pengolahan, dan tujuan","Neraca air seimbang dan kondisi minimum/rata-rata/maksimum dicatat","PFD, layout IPAL, koordinat, dan titik penaatan tersedia"],next:"Gunakan inventaris untuk memilih baku mutu serta menyusun kajian/standar teknis Pertek.",warning:"Jangan menggabungkan produced water, domestik, oily drainage, hydrotest, dan drainase bersih tanpa dasar teknis."},
  "ww-pertek":{prepare:["Inventaris aliran dan neraca air final","Alternatif pembuangan/pemanfaatan serta dasar baku mutu","Desain IPAL, mutu influen/efluen, titik penaatan, dan rencana pemantauan"],checks:["Kajian teknis/standar teknis konsisten dengan dokumen lingkungan","Persetujuan Teknis final dan seluruh lampirannya tersedia","Parameter, batas, lokasi, frekuensi, serta kewajiban desain telah diekstrak"],next:"Bangun fasilitas sesuai persetujuan, lakukan commissioning, lalu proses SLO jika diwajibkan.",warning:"Jangan mengubah debit, teknologi, titik buang, atau pemanfaatan setelah persetujuan tanpa menilai kebutuhan perubahan."},
  "ww-slo":{prepare:["Persetujuan Teknis dan gambar as-built","Data commissioning, hasil uji, SOP, personel, alat ukur, serta log operasi","Bukti kesesuaian titik penaatan dan sarana sampling"],checks:["Verifikasi lapangan/administratif selesai","SLO atau keluaran kelayakan operasi tersedia","Syarat operasi dan pemantauan sudah masuk kalender kepatuhan"],next:"Mulai operasi sesuai SLO dan jalankan monitoring serta pelaporan periodik.",warning:"Jangan mengajukan berdasarkan desain saja; kondisi terbangun dan hasil commissioning harus sesuai dengan Pertek."},
  "migas-water":{prepare:["Daftar fasilitas produksi, pengeboran, pipeline, utilitas, dan akomodasi","Data produced water, oily drainage, hydrotest, domestik, serta bahan kimia","Debit dan variasi operasi normal, start-up, shutdown, dan keadaan darurat"],checks:["Setiap aliran migas terpisah dan memiliki jalur pengelolaan","Baku mutu/titik penaatan sektoral dipetakan per aliran","Aliran terhubung ke Pertek, SOP, monitoring, dan dokumen lingkungan"],next:"Masukkan data aliran ke desain pengolahan dan dokumen teknis yang relevan.",warning:"Jangan menerapkan baku mutu domestik pada produced water atau aliran proses migas."},
  "air-source":{prepare:["Plot plan dan daftar seluruh unit pembakaran/proses","Kapasitas, bahan bakar, jam operasi, koordinat, cerobong, dan alat kontrol","Data sumber fugitif, vent, flare, debu, dan sumber darurat"],checks:["Setiap sumber mempunyai identitas serta klasifikasi","Baku mutu dan kandidat parameter dipetakan per sumber","Daftar sumber wajib pantau, darurat, dan pengecualian memiliki dasar"],next:"Gunakan inventaris untuk Pertek emisi, desain cerobong, dan program pemantauan.",warning:"Jangan hanya mencatat cerobong utama; genset, flare, fugitif, dan sumber proses dapat memiliki kewajiban berbeda."},
  "air-pertek":{prepare:["Inventaris sumber emisi final","Dasar baku mutu, parameter, desain cerobong, dan alat kontrol","Kajian teknis/pemodelan serta rencana sampling jika dibutuhkan"],checks:["Pertek final tersedia untuk sumber yang wajib","Desain, parameter, lokasi sampling, dan frekuensi pemantauan terdokumentasi","Semua kewajiban telah diselaraskan dengan dokumen lingkungan"],next:"Bangun dan operasikan sumber sesuai persetujuan, lalu siapkan monitoring dan pelaporan.",warning:"Jangan menyalin satu baku mutu untuk semua sumber; jenis mesin, bahan bakar, kapasitas, dan proses menentukan ketentuannya."},
  "air-report":{prepare:["Pertek/persetujuan dan daftar kewajiban emisi","LHU, log operasi, bahan bakar, jam operasi, kalibrasi, dan pemeliharaan","Akun serta profil modul pelaporan yang aktif"],checks:["Data periode sudah divalidasi internal","Laporan berhasil dikirim dan bukti/TTE tersedia","Temuan melampaui baku mutu memiliki tindak lanjut"],next:"Simpan bukti kirim dan jadwalkan pengujian serta periode laporan berikutnya.",warning:"Jangan memasukkan angka tanpa menelusuri LHU, periode operasi, satuan, dan titik sumbernya."},
  "b3-inventory":{prepare:["Daftar bahan, SDS, proses, dan lokasi penggunaan","Daftar residu/limbah per sumber spesifik","Data jumlah, kemasan, karakteristik, dan frekuensi timbulan"],checks:["Kode limbah memiliki dasar sumber dan karakteristik","Neraca timbulan serta jalur simpan–angkut–olah/manfaat tersedia","Kandidat yang belum pasti ditandai untuk verifikasi, bukan dipaksakan"],next:"Gunakan inventaris untuk Rincian Teknis TPS LB3, kontrak pengelola, manifest, dan pelaporan.",warning:"Jangan memilih kode LB3 hanya dari nama industri; kode harus ditelusuri dari sumber proses dan karakteristik limbah."},
  "b3-storage":{prepare:["Jenis, jumlah maksimum, karakteristik, kemasan, dan masa simpan","Layout, kapasitas, koordinat, zonasi kompatibilitas, serta secondary containment","SOP, logbook, inspeksi, simbol-label, dan tanggap darurat"],checks:["Rincian Teknis TPS LB3 disetujui/terintegrasi sesuai jalur","Fasilitas terbangun sesuai layout dan kapasitas","Syarat masa simpan, pencatatan, serta pengelolaan lanjutan tercatat"],next:"Operasikan TPS sesuai rincian teknis dan gunakan modul PLB3 untuk pencatatan/pelaporan saat diwajibkan.",warning:"Jangan menganggap akses SPEED/SIRAJA sebagai persetujuan awal TPS; rincian teknis dan persetujuan lingkungan harus diselesaikan lebih dahulu."},
  emergency:{prepare:["Skenario tumpahan, kebakaran, paparan, dan kegagalan fasilitas","Peta risiko, organisasi, komunikasi, peralatan, dan kontak eksternal","SOP respons, pemulihan, investigasi, serta pelaporan"],checks:["Program dan peta tanggap darurat disahkan internal","Peralatan tersedia dan personel memahami perannya","Latihan dilakukan serta temuan mempunyai tindakan perbaikan"],next:"Jadwalkan latihan berkala dan perbarui program ketika proses, bahan, atau organisasi berubah.",warning:"Jangan membuat prosedur generik tanpa memperhitungkan bahan, volume, akses lokasi, dan dampak keluar tapak."},
  nonb3:{prepare:["Daftar residu per proses dan hasil identifikasi status","Data jumlah, penyimpanan, karakteristik, dan potensi pemanfaatan","Calon penerima/pengelola serta bukti legalitasnya"],checks:["Neraca timbulan dan bukti serah tersedia","Status non-B3 dan tujuan akhir dapat dijelaskan","Pengelola/penerima telah diverifikasi sesuai kebutuhan"],next:"Masukkan kewajiban pencatatan dan pelaporan ke kalender operasi.",warning:"Jangan menyatakan limbah non-B3 hanya karena tidak ditemukan dalam daftar awal; dokumentasikan dasar identifikasinya."},
  "water-use":{prepare:["Sumber air dan koordinat sumur/intake","Neraca kebutuhan, debit puncak, cadangan, dan efisiensi","Wilayah sungai/kewenangan serta status pemasok"],checks:["Izin/persetujuan atau perjanjian pemasok tersedia","Debit, titik, masa berlaku, alat ukur, dan kewajiban laporan tercatat","Sumber dalam dokumen sama dengan kondisi lapangan"],next:"Pasang pengukuran, jalankan pencatatan, dan pantau masa berlaku serta pelaporan.",warning:"Jangan mencampur izin pengambilan air tanah, air permukaan, dan perjanjian air pemasok sebagai satu dokumen."},
  "location-overlay":{prepare:["Polygon dalam sistem koordinat yang benar","Sumber peta RTR/RDTR, hutan, konservasi, gambut, karst, pesisir, sempadan, dan bencana","Rencana tapak dan batas fasilitas"],checks:["Peta overlay mencantumkan sumber serta tanggal data","Setiap irisan/jarak dan konsekuensi desain dicatat","Temuan material telah dikonfirmasi ke instansi/pengelola kawasan"],next:"Gunakan batasan lokasi dalam penapisan lingkungan, desain, dan pengajuan ruang.",warning:"Jangan menyimpulkan bebas kawasan hanya dari satu layer atau peta tanpa metadata dan konfirmasi kewenangan."},
  "other-impact":{prepare:["Daftar kegiatan per tahap dan penerima dampak","Data rona awal fisik, hayati, sosial, kesehatan, serta lalu lintas","Metode penilaian besaran dan signifikansi"],checks:["Setiap dampak memiliki sumber, penerima, pengelolaan, dan pemantauan","Indikator, lokasi, frekuensi, metode, dan PIC terdefinisi","Matriks konsisten dengan data dasar serta desain proyek"],next:"Masukkan hasil final ke RKL-RPL/UKL-UPL dan kalender implementasi.",warning:"Jangan menambahkan dampak generik tanpa hubungan sebab-akibat dan jangan menghilangkan dampak hanya karena tidak memiliki baku mutu numerik."},
  report:{prepare:["Persetujuan Lingkungan, Pertek, SLO, izin sektor, dan ketentuan daerah","Matriks kewajiban berisi parameter, lokasi, frekuensi, tenggat, PIC, serta bukti","Akun dan modul sistem pelaporan yang relevan"],checks:["Seluruh kewajiban memiliki agenda dan penanggung jawab","Data telah divalidasi dan laporan berhasil dikirim","TTE/bukti kirim serta versi laporan tersimpan per periode"],next:"Pantau tindak lanjut, masa berlaku, dan buat periode pelaporan berikutnya secara otomatis.",warning:"Jangan membuat kalender hanya dari template; ekstrak kewajiban dari dokumen final proyek dan perubahannya."}
};
function playbookForTask(task){return TASK_PLAYBOOKS[task.id]||{prepare:[task.reason],checks:[task.evidence],next:"Lanjutkan ke tugas berikutnya setelah keluaran diperiksa.",warning:"Pastikan keputusan dan bukti berasal dari sumber resmi proyek."};}
function renderTaskPlaybook(task){const p=playbookForTask(task);return `<details class="task-playbook"><summary><span>i</span><div><b>Panduan detail & pemeriksaan selesai</b><small>Buka jika kamu perlu tahu apa yang disiapkan, bagaimana memeriksa hasil, dan langkah berikutnya.</small></div><em>BUKA</em></summary><div class="playbook-body"><div class="playbook-grid"><section><small>SIAPKAN SEBELUM MULAI</small><ul>${p.prepare.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></section><section><small>TUGAS DIANGGAP SELESAI JIKA</small><ul>${p.checks.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></section></div><div class="playbook-next"><div><small>LANGKAH BERIKUTNYA</small><p>${esc(p.next)}</p></div><div><small>HINDARI KESALAHAN INI</small><p>${esc(p.warning)}</p></div></div></div></details>`;}
function taskProgressKey(id){return `${state.projectName}::${id}`;}
function progressForTask(id){const value=state.taskProgress?.[taskProgressKey(id)]||(state.projectName===DEFAULT_STATE.projectName?state.taskProgress?.[id]:null);if(!value||typeof value!=="object")return {status:"not_started",done:[],markedAt:""};const result={status:value.status||"not_started",done:Array.isArray(value.done)?value.done:[],markedAt:value.markedAt||"",verifiedAt:value.verifiedAt||"",verifiedBy:value.verifiedBy||""};if(result.status==="completed"){const docs=documentsForTask(id);if(!docs.length)result.status="self_declared";else if(!docs.every(doc=>doc.status==="Terverifikasi"))result.status="evidence_submitted";}return result;}
function syncTaskEvidence(id){const task=buildTasks().find(x=>x.id===id);if(!task)return;const progress=progressForTask(id),docs=documentsForTask(id),done=(progress.done||[]).length===guideForTask(task).steps.length;if(!done)return;const verified=docs.length>0&&docs.every(doc=>doc.status==="Terverifikasi");state.taskProgress[taskProgressKey(id)]={...progress,status:verified?"completed":docs.length?"evidence_submitted":"evidence_needed"};}
function documentsForTask(id){return (state.documents||[]).filter(d=>(d.projectName||state.projectName)===state.projectName&&(d.taskIds||[]).includes(id));}
function taskWorkflowStrip(){return `<div class="workflow-strip" aria-label="Alur penyelesaian tugas"><div><span>1</span><b>Mulai tugas</b><small>Status menjadi sedang dikerjakan</small></div><div><span>2</span><b>Ikuti langkah</b><small>Kerjakan checklist dari atas</small></div><div><span>3</span><b>Tautkan bukti</b><small>Masukkan dokumen ke tugas</small></div><div><span>4</span><b>Tugas selesai</b><small>Langkah dan bukti sudah lengkap</small></div></div>`;}

const AHU_ROUTES={
  pt:{service:"AHU Perseroan Terbatas",choice:"Klik ikon AHU Perseroan Terbatas",actor:"Notaris yang mengoperasikan AHU",summary:"Jalur PT persekutuan modal—umumnya untuk dua atau lebih pemegang saham, investasi yang tidak memenuhi kriteria UMK, atau struktur perusahaan yang memerlukan organ PT biasa.",before:["Alternatif nama PT dan alamat kedudukan","Identitas serta komposisi pemegang saham","Direktur, komisaris, modal dasar/ditempatkan/disetor","Maksud-tujuan dan seluruh KBLI","Data pemilik manfaat"],inside:["Notaris memesan atau memeriksa nama perseroan","Notaris membuat dan membacakan akta pendirian","Voucher/PNBP diproses dalam alur AHU/SIMPADHU","Notaris mengisi data perseroan, akta, pengurus, modal, KBLI, dan pemilik manfaat","Notaris mengirim permohonan pengesahan"],output:"Akta pendirian dan SK pengesahan badan hukum PT",after:"Periksa kesesuaian data, verifikasi NPWP/Coretax, kemudian lanjutkan pendaftaran pelaku usaha dan NIB di OSS.",guide:"https://panduan.ahu.go.id/doku.php?id=pendirian_perseroan"},
  individual:{service:"AHU Perseroan Perorangan",choice:"Klik ikon AHU Perseroan Perorangan",actor:"Pendiri dapat mendaftar langsung",summary:"Jalur untuk satu pendiri WNI yang memiliki NIK dan memenuhi kriteria Usaha Mikro atau Kecil. Tidak memakai akta notaris untuk pendiriannya.",before:["Satu pendiri WNI dengan NIK","Modal usaha paling banyak Rp5 miliar, tidak termasuk tanah dan bangunan tempat usaha","Nama perseroan, alamat, kegiatan/KBLI, modal, serta data pemilik manfaat","Email dan nomor telepon aktif"],inside:["Buat atau masuk ke akun layanan Perseroan Perorangan","Pesan dan bayar voucher sesuai instruksi sistem","Isi Pernyataan Pendirian dan periksa seluruh data","Kirim permohonan dan unduh sertifikat pendaftaran"],output:"Pernyataan pendirian dan Sertifikat Pendaftaran Perseroan Perorangan",after:"Lanjutkan Coretax dan OSS. Ingat kewajiban laporan keuangan elektronik paling lambat enam bulan setelah akhir periode; ubah menjadi PT persekutuan modal melalui notaris jika pemegang saham menjadi lebih dari satu atau tidak lagi memenuhi kriteria UMK.",guide:"https://panduan.ahu.go.id/doku.php?id=panduan_perseroan_perorangan"},
  partnership:{service:"AHU Badan Usaha",choice:"Klik ikon AHU Badan Usaha",actor:"Pendaftaran dilakukan melalui notaris",summary:"Jalur untuk CV, Firma, atau Persekutuan Perdata. Ini badan usaha bukan badan hukum; jangan menyamakannya dengan PT.",before:["Pilih CV, Firma, atau Persekutuan Perdata","Nama badan usaha dan alamat kedudukan","Identitas para sekutu dan perannya","Maksud-tujuan, KBLI, modal/kontribusi, dan pemilik manfaat","Draf kesepakatan atau akta para sekutu"],inside:["Notaris melakukan pesan nama bila disyaratkan","Notaris membuat akta badan usaha","Pilih jenis CV/Firma/Persekutuan Perdata di layanan Badan Usaha","Isi data sekutu, kegiatan, akta, dan pemilik manfaat lalu daftarkan"],output:"Akta dan Surat Keterangan Terdaftar badan usaha",after:"Validasi pajak badan dan lanjutkan ke OSS untuk memperoleh NIB serta perizinan berbasis risiko.",guide:"https://panduan.ahu.go.id/doku.php?id=panduan_cv"},
  cooperative:{service:"AHU Koperasi",choice:"Klik ikon AHU Koperasi",actor:"Notaris Pembuat Akta Koperasi mengoperasikan proses",summary:"Dipilih bila perusahaan memang akan dimiliki dan dijalankan berdasarkan keanggotaan serta prinsip koperasi—bukan sekadar karena pendirinya banyak.",before:["Jenis koperasi dan hasil rapat pembentukan","Daftar anggota pendiri, pengurus, dan pengawas","Nama, alamat, kegiatan usaha, modal, dan anggaran dasar","Data pemilik manfaat serta dokumen rapat"],inside:["Notaris memesan nama koperasi","Notaris mengisi data koperasi, kedudukan, akta, rapat, kegiatan, modal, pengurus/pengawas, dan pemilik manfaat","Dokumen diunggah, diperiksa, dan permohonan pengesahan dikirim"],output:"Akta koperasi dan keputusan pengesahan badan hukum",after:"Periksa data, lanjutkan administrasi pajak dan perizinan usaha di OSS.",guide:"https://panduan.ahu.go.id/doku.php?id=pendirian_koperasi"},
  foundation:{service:"AHU Yayasan",choice:"Klik ikon AHU Yayasan",actor:"Pendirian dilakukan oleh notaris",summary:"Hanya untuk badan hukum yang bergerak di bidang sosial, keagamaan, atau kemanusiaan dan tidak membagikan hasil kegiatan seperti perusahaan kepada pendiri.",before:["Tujuan sosial/keagamaan/kemanusiaan","Nama, kekayaan awal, alamat, pembina, pengurus, dan pengawas","Program kegiatan, anggaran dasar, dan pemilik manfaat"],inside:["Notaris memesan nama Yayasan","Notaris menyusun akta dan mengisi permohonan pengesahan","Data organ, kekayaan, kegiatan, akta, dan pemilik manfaat diperiksa dan dikirim"],output:"Akta dan SK pengesahan badan hukum Yayasan",after:"Urus pajak dan perizinan yang sesuai dengan kegiatan yayasan; jangan memilih jalur ini untuk bisnis yang membagikan keuntungan kepada pemilik.",guide:"https://panduan.ahu.go.id/doku.php?id=yayasan"},
  association:{service:"AHU Perkumpulan",choice:"Klik ikon AHU Perkumpulan",actor:"Pendirian dilakukan oleh notaris",summary:"Untuk organisasi berbasis anggota dengan tujuan bersama. Bukan pilihan umum untuk perusahaan komersial berbasis saham.",before:["Tujuan dan keanggotaan perkumpulan","Nama, alamat, pendiri, pengurus, dan pengawas","Anggaran dasar, program, sumber dana, dan pemilik manfaat"],inside:["Notaris memesan nama Perkumpulan","Notaris menyusun akta dan mengisi permohonan pengesahan","Data anggota/organ, kegiatan, akta, dan pemilik manfaat diperiksa dan dikirim"],output:"Akta dan SK pengesahan badan hukum Perkumpulan",after:"Lanjutkan pajak dan izin sesuai kegiatan organisasi; gunakan PT/CV bila tujuan sebenarnya adalah usaha komersial milik investor/sekutu.",guide:"https://panduan.ahu.go.id/doku.php?id=perkumpulan"}
};
function ahuRoute(){
  if(state.legalPurpose==="cooperative")return AHU_ROUTES.cooperative;
  if(state.legalPurpose==="foundation")return AHU_ROUTES.foundation;
  if(state.legalPurpose==="association")return AHU_ROUTES.association;
  if(state.legalPurpose!=="business")return null;
  if(state.legalOwners==="partnership")return AHU_ROUTES.partnership;
  if(state.legalOwners==="multiple")return AHU_ROUTES.pt;
  if(state.legalOwners==="one"&&state.legalUmk==="yes")return AHU_ROUTES.individual;
  if(state.legalOwners==="one"&&state.legalUmk==="no")return {...AHU_ROUTES.pt,summary:"Usaha satu pemilik yang tidak memenuhi kriteria UMK tidak dapat memakai Perseroan Perorangan. Siapkan struktur PT persekutuan modal dan tambah pemegang saham sesuai ketentuan bersama notaris."};
  return null;
}
function renderAhuDecision(){
  const route=ahuRoute(),business=state.legalPurpose==="business",one=business&&state.legalOwners==="one";
  const options=(items,value)=>items.map(([k,label])=>`<option value="${k}" ${value===k?"selected":""}>${label}</option>`).join("");
  return `<section class="ahu-assistant"><div class="ahu-title"><div><small>ASISTEN PEMILIH LAYANAN AHU</small><h3>Di layar AHU, ikon mana yang harus dipilih?</h3><p>Jawab berdasarkan struktur yang akan didirikan. Hasil di bawah menentukan layanan, pelaksana, prasyarat, dan keluaran.</p></div><span>AHU</span></div><div class="ahu-questions"><label><b>1. Tujuan bentuk organisasinya</b><select data-field="legalPurpose">${options([["business","Usaha komersial / mencari laba"],["cooperative","Koperasi berbasis anggota"],["foundation","Yayasan sosial, keagamaan, atau kemanusiaan"],["association","Perkumpulan berbasis anggota"]],state.legalPurpose)}</select></label>${business?`<label><b>2. Struktur pemilik atau sekutunya</b><select data-field="legalOwners">${options([["","Pilih struktur pemilik"],["one","Satu pemilik WNI"],["multiple","Dua atau lebih pemegang saham"],["partnership","Sekutu aktif/pasif—ingin CV, Firma, atau Persekutuan Perdata"]],state.legalOwners)}</select></label>`:""}${one?`<label><b>3. Apakah memenuhi kriteria UMK?</b><select data-field="legalUmk">${options([["","Pilih kriteria modal"],["yes","Ya—modal usaha maksimal Rp5 miliar"],["no","Tidak—modal di atas Rp5 miliar / bukan UMK"]],state.legalUmk)}</select><small>Modal usaha di sini tidak termasuk tanah dan bangunan tempat usaha.</small></label>`:""}</div>${route?`<article class="ahu-result"><div class="ahu-result-head"><span>HASIL</span><div><small>LAYANAN YANG DIPILIH</small><h4>${esc(route.service)}</h4><b>${esc(route.choice)}</b></div></div><p>${esc(route.summary)}</p><div class="ahu-route-grid"><div><small>SIAPA YANG MENGERJAKAN</small><b>${esc(route.actor)}</b></div><div><small>KELUARAN YANG HARUS DITERIMA</small><b>${esc(route.output)}</b></div></div><div class="ahu-detail-grid"><div><small>SIAPKAN SEBELUM MASUK</small><ol>${route.before.map(x=>`<li>${esc(x)}</li>`).join("")}</ol></div><div><small>YANG DIKERJAKAN DI AHU</small><ol>${route.inside.map(x=>`<li>${esc(x)}</li>`).join("")}</ol></div></div><div class="ahu-after"><small>SETELAH SELESAI</small><p>${esc(route.after)}</p></div><div class="ahu-result-actions"><a href="${route.guide}" target="_blank" rel="noopener noreferrer">Buka panduan resmi ↗</a><a class="secondary" href="${LINKS.ahu}" target="_blank" rel="noopener noreferrer">Buka AHU Online ↗</a></div></article>`:`<div class="ahu-empty"><b>Lengkapi jawaban di atas</b><p>EnviroTrack akan menampilkan nama ikon AHU yang tepat. Jangan tekan Login sebelum hasil ini muncul.</p></div>`}<details class="ahu-other"><summary>Apa fungsi ikon AHU lain pada layar?</summary><div class="ahu-icon-grid"><p><b>Login</b><span>Pintu masuk akun setelah layanan dan peran pengguna sudah jelas; bukan penentu bentuk usaha.</span></p><p><b>SIMPADHU</b><span>Pemesanan/pembayaran voucher PNBP ketika alur layanan memintanya; bukan tempat memilih bentuk perusahaan.</span></p><p><b>AHU Unduh Data</b><span>Mencari atau mengunduh profil/data entitas yang sudah ada; bukan untuk mendirikan perusahaan.</span></p><p><b>AHU Pendaftaran Notaris</b><span>Layanan profesi untuk pendaftaran notaris; pendiri perusahaan tidak memilih ini.</span></p><p><b>AHU Pemilik Manfaat Korporasi</b><span>Pelaporan atau pembaruan beneficial owner. Datanya juga dapat menjadi bagian dari proses pendirian.</span></p><p><b>Fidusia, Wasiat, Kewarganegaraan, Apostille, Partai Politik, PPNS</b><span>Layanan hukum lain yang tidak digunakan untuk pendirian usaha biasa.</span></p></div></details></section>`;
}

function taskStatusActions(task,progress){
  if(progress.status==="not_started")return `<button type="button" data-action="start-task" data-id="${task.id}">Mulai tugas</button><button type="button" class="secondary declared-action" data-action="mark-existing" data-id="${task.id}">Saya sudah melakukan ini</button>`;
  if(progress.status==="self_declared")return `<button type="button" disabled>Dinyatakan selesai</button><button type="button" class="secondary" data-action="undo-existing" data-id="${task.id}">Batalkan tanda</button>`;
  if(progress.status==="evidence_submitted")return `<button type="button" disabled>Bukti diunggah</button><button type="button" class="secondary" data-action="verify-evidence" data-id="${task.id}">Tinjau & verifikasi</button>`;
  if(progress.status==="completed")return `<button type="button" disabled>Terverifikasi internal</button><button type="button" class="secondary" data-action="reopen-task" data-id="${task.id}">Buka kembali</button>`;
  if(progress.status==="evidence_needed")return `<button type="button" disabled>Langkah selesai</button><button type="button" class="secondary" data-action="reopen-task" data-id="${task.id}">Periksa kembali</button>`;
  return `<button type="button" disabled>Sedang dikerjakan</button>`;
}
function taskRows(tasks){
  return `<div class="tasklist">${tasks.map(x=>{
    const guide=guideForTask(x),progress=progressForTask(x.id),done=Array.isArray(progress.done)?progress.done:[],docs=documentsForTask(x.id),percent=Math.round(done.length/guide.steps.length*100),lockSteps=["not_started","completed","self_declared","evidence_submitted"].includes(progress.status);
    const runtime=progress.status==="completed"?"completed":progress.status==="self_declared"?"self-declared":progress.status==="evidence_submitted"?"evidence-submitted":progress.status==="evidence_needed"?"evidence-needed":progress.status==="in_progress"?"in-progress":x.status;
    const runtimeLabel=progress.status==="completed"?"Terverifikasi internal":progress.status==="self_declared"?`Dinyatakan selesai${progress.markedAt?` · ditandai ${progress.markedAt}`:""}`:progress.status==="evidence_submitted"?"Bukti diunggah · menunggu tinjauan":progress.status==="evidence_needed"?"Sudah dilakukan · bukti belum ada":progress.status==="in_progress"?"Sedang dikerjakan":x.status==="later"?"Nanti / praoperasi":x.status==="blocked"?"Menunggu prasyarat":"Belum dimulai";
    const shortLabel=runtime==="completed"?"TERVERIFIKASI":runtime==="self-declared"?"DINYATAKAN":runtime==="evidence-submitted"?"BUKTI DIUNGGAH":runtime==="evidence-needed"?"SUDAH · PERLU BUKTI":runtime==="in-progress"?"DIKERJAKAN":runtime==="later"?"PRAOPERASI":runtime==="blocked"?"MENUNGGU":"BELUM DIMULAI";
    const guideMessage=progress.status==="not_started"?"Baca dulu, lalu mulai—atau tandai jika sudah pernah dilakukan":progress.status==="self_declared"?`Ditandai dinyatakan selesai${progress.markedAt?` pada ${progress.markedAt}`:""}; tambahkan bukti`:progress.status==="completed"?"Selesai dan diverifikasi internal":progress.status==="evidence_submitted"?"Bukti sudah diunggah—tinjau sebelum menyatakan terverifikasi":progress.status==="evidence_needed"?"Semua langkah selesai—tambahkan bukti agar dapat ditinjau":`${done.length} dari ${guide.steps.length} langkah selesai`;
    return `<article class="task"><button type="button" class="task-main" data-task="${x.id}"><span class="task-state ${runtime}">${runtime==="completed"?"✓":runtime==="self-declared"||runtime==="evidence-submitted"||runtime==="evidence-needed"?"!":runtime==="in-progress"?"◐":x.status==="later"?"◷":x.status==="blocked"?"↳":""}</span><span class="task-copy"><small>${esc(x.cat)}</small><b>${esc(x.title)}</b><em>${esc(x.rule)} · ${runtimeLabel}</em></span><span class="owner">${esc(x.owner)}</span><span class="due">${esc(x.due)}</span><span class="task-status-chip ${runtime}">${shortLabel}</span><span>${state.openTask===x.id?"⌃":"⌄"}</span></button>${state.openTask===x.id?`<div class="task-detail"><div class="task-summary-grid"><div><small>MENGAPA WAJIB</small><p>${esc(x.reason)}</p></div><div><small>HASIL / BUKTI YANG DIBUTUHKAN</small><p>${esc(x.evidence)}</p></div></div>${x.id==="entity"?renderAhuDecision():""}${renderTaskPlaybook(x)}<section class="task-guide"><div class="guide-head"><div><small>CARA MENGERJAKAN</small><b>${guideMessage}</b></div><span>${percent}%</span></div><div class="guide-progress"><span style="width:${percent}%"></span></div><ol>${guide.steps.map((step,index)=>`<li class="${done.includes(index)?"done":""}"><label><input type="checkbox" data-task-step="${x.id}" data-step-index="${index}" ${done.includes(index)?"checked":""} ${lockSteps?"disabled":""}><span class="guide-number">${index+1}</span><span>${esc(step)}</span></label></li>`).join("")}</ol><div class="portal-when"><span>i</span><p><b>Kapan membuka ${esc(x.system[0])}?</b>${esc(guide.portalWhen)}</p></div></section><section class="task-evidence ${["evidence_needed","self_declared","evidence_submitted"].includes(progress.status)?"needs-evidence":""}"><div><small>DOKUMEN TERKAIT TUGAS INI</small><b>${docs.length} dokumen sudah ditautkan</b><p>${docs.length?docs.map(d=>esc(d.name)).join(" · "):progress.status==="self_declared"?"Tugas baru dinyatakan selesai oleh pengguna; belum ada bukti.":"Belum ada dokumen. Gunakan tombol Kelola bukti agar file masuk langsung ke tugas ini."}</p></div><button type="button" class="soft" data-action="manage-evidence" data-id="${x.id}">${["evidence_needed","self_declared"].includes(progress.status)?"Tambahkan bukti":progress.status==="evidence_submitted"?"Tinjau bukti":"Kelola bukti"} →</button></section><div class="task-links">${taskStatusActions(x,progress)}<a class="secondary" href="${x.system[1]}" target="_blank" rel="noopener noreferrer">Buka ${esc(x.system[0])} ↗</a><a class="secondary" href="${x.ruleUrl}" target="_blank" rel="noopener noreferrer">Buka aturan ↗</a></div></div>`:""}</article>`;
  }).join("")}</div>`;
}
function renderTracker(){
  const all=buildTasks(),blocked=all.filter(x=>x.status==="blocked").length,later=all.filter(x=>x.status==="later").length,totalSteps=all.reduce((n,x)=>n+guideForTask(x).steps.length,0),doneSteps=all.reduce((n,x)=>n+(progressForTask(x.id).done||[]).length,0),percent=totalSteps?Math.round(doneSteps/totalSteps*100):0,active=all.filter(x=>progressForTask(x.id).status==="in_progress").length,declared=all.filter(x=>progressForTask(x.id).status==="self_declared").length,submitted=all.filter(x=>["evidence_needed","evidence_submitted"].includes(progressForTask(x.id).status)).length,complete=all.filter(x=>progressForTask(x.id).status==="completed").length;
  return `<div class="tracker-head"><div><span class="kicker">CHECKLIST PROYEK</span><h2>${esc(state.projectName)} — ${all.length} tugas</h2></div><button type="button" class="ghost" data-view="tasks">Lihat semua tugas</button></div><div class="progress"><div class="ring" style="background:conic-gradient(#287158 ${percent}%,#cbdcd4 0)"><b>${percent}%</b></div><div class="progress-info"><b>${active} dikerjakan · ${declared} dinyatakan · ${submitted} menunggu bukti/tinjauan · ${complete} terverifikasi</b><p>${doneSteps}/${totalSteps} langkah · ${blocked} menunggu prasyarat · ${later} praoperasi/operasi</p><div class="bar"><span style="width:${percent}%"></span></div></div></div>${taskWorkflowStrip()}${taskRows(all)}`;
}

function renderContext(){
  const k=selectedKbli(),pack=activePack(),profile=activeProfile(),tasks=buildTasks();
  document.getElementById("context").innerHTML=`<div class="context-title"><span>Ringkasan proyek</span><span>Aktif</span></div><div class="project-card"><span class="sector-icon">${pack.icon}</span><div><b>${esc(state.projectName)}</b><small>${esc(profile.name)}</small></div><em>${esc(k?.code||"—")}${state.kblis.length>1?` +${state.kblis.length-1}`:""}</em></div><dl class="facts"><div><dt>KBLI</dt><dd>${state.kblis.length||0} bidang usaha</dd></div><div><dt>Status</dt><dd>${esc(state.projectStatus)}</dd></div><div><dt>Tahap</dt><dd>${esc(state.stage)}</dd></div><div><dt>Kapasitas utama</dt><dd>${state.capacity?`${esc(state.capacity)} ${esc(state.capacityUnit)}`:"Belum diisi"}</dd></div><div><dt>Lokasi</dt><dd>${esc(state.regency)}</dd></div><div><dt>Sumber dampak</dt><dd>${state.impacts.length} dipilih</dd></div><div><dt>Kandidat B3/LB3</dt><dd>${state.wasteCodes.length+masterCandidateCount()}</dd></div></dl><div class="divider"></div><div class="trigger-head"><span>Kewajiban terpicu</span><b>${tasks.length}</b></div><div class="trigger-list"><div class="trigger"><span class="dot green-dot"></span><p><b>Dokumen lingkungan</b><small>AMDAL / UKL-UPL / SPPL ditapis</small></p></div>${hasGroup("wastewater")?'<div class="trigger"><span class="dot blue-dot"></span><p><b>Air limbah</b><small>Inventarisasi, Pertek, dan SLO</small></p></div>':""}${hasGroup("emission")?'<div class="trigger"><span class="dot orange-dot"></span><p><b>Emisi</b><small>Sumber, baku mutu, pemantauan</small></p></div>':""}${hasGroup("b3")?'<div class="trigger"><span class="dot red-dot"></span><p><b>B3 dan limbah B3</b><small>Kode kandidat, neraca, TPS, dan manifest</small></p></div>':""}${state.province==="Kalimantan Timur"?'<div class="trigger"><span class="dot purple-dot"></span><p><b>Regulasi daerah</b><small>Indeks Kaltim tersedia</small></p></div>':""}</div><div class="divider"></div><div class="legal"><span>R</span><div><b>Dasar aturan transparan</b><p>Tugas memuat sistem tujuan, regulasi, alasan pemicu, dan bukti.</p><button type="button" class="action-link" data-view="regulations" data-reg-open="project">Lihat regulasi proyek</button></div></div><p class="disclaimer">Prototipe pendukung keputusan. Verifikasi tenaga ahli dan keputusan instansi tetap diperlukan.</p>`;
}

function renderScreening(){
  document.getElementById("stepbar").classList.remove("hide");
  document.getElementById("panel-footer").classList.remove("hide");
  document.getElementById("content").className="content";
  renderSteps();
  document.getElementById("screen").innerHTML=[renderProfile,renderImpacts,renderLocation,renderResult,renderTracker][state.step]();
  renderContext();
  if(state.step===2)requestAnimationFrame(initSiteMap);
  const back=document.getElementById("back"),next=document.getElementById("next");
  back.disabled=state.step===0;
  next.innerHTML=(state.step===4?"Buka proyek saya":state.step===3?"Buat checklist":"Lanjutkan")+" <span>→</span>";
}

const demoProjects=[
  {name:"Proyek Migas Kaltim",kbli:"06100",sector:"Pertambangan minyak bumi",location:"Kutai Kartanegara",progress:38,next:"Konfirmasi penapisan AMDAL",status:"Aktif"},
  {name:"Pabrik Pengolahan Pangan",kbli:"10799",sector:"Industri produk makanan",location:"Kabupaten Bekasi",progress:62,next:"Finalisasi kajian air limbah",status:"Aktif"},
  {name:"Rumah Sakit Kota",kbli:"86101",sector:"Aktivitas rumah sakit",location:"Kota Balikpapan",progress:21,next:"Inventaris limbah medis",status:"Draf"}
];
function viewHeader(title,desc,actions=""){return `<div class="view-head"><div><h2>${title}</h2><p>${desc}</p></div><div class="view-head-actions">${actions}</div></div>`;}
function renderProjects(){return `<div class="view-shell">${viewHeader("Proyek saya","Pantau progres, kewajiban berikutnya, dan lokasi setiap proyek.",'<button type="button" class="primary" data-action="new-project">+ Penapisan baru</button>')}<div class="project-grid">${demoProjects.map((p,i)=>`<article class="project-item"><div class="project-item-head"><div><small>KBLI ${p.kbli}</small><h3>${p.name}</h3><small>${p.sector}</small></div><span class="status ${p.status==="Aktif"?"verified":"reviewing"}">${p.status}</span></div><div class="progress-line"><span style="width:${p.progress}%"></span></div><div class="project-meta"><div><span>Progres</span><b>${p.progress}% selesai</b></div><div><span>Lokasi</span><b>${p.location}</b></div></div><div class="card-actions"><span class="helper">Berikutnya: ${p.next}</span><button type="button" class="soft" data-action="open-project" data-index="${i}">Buka proyek →</button></div></article>`).join("")}</div></div>`;}

function renderAllTasks(){
  const all=buildTasks();let shown=all;
  if(state.taskFilter==="in-progress")shown=all.filter(x=>progressForTask(x.id).status==="in_progress");
  else if(state.taskFilter==="completed")shown=all.filter(x=>["self_declared","evidence_needed","evidence_submitted","completed"].includes(progressForTask(x.id).status));
  else if(state.taskFilter==="verified")shown=all.filter(x=>progressForTask(x.id).status==="completed");
  else if(state.taskFilter!=="all")shown=all.filter(x=>x.status===state.taskFilter&&progressForTask(x.id).status==="not_started");
  return `<div class="view-shell">${viewHeader("Checklist tugas",`${all.length} tugas berisi langkah kerja, panduan detail, status yang dapat dilacak, dan dokumen bukti yang saling tertaut.`,'<button type="button" class="ghost" data-action="export-checklist">Ekspor checklist CSV</button>')}${taskWorkflowStrip()}<div class="view-card"><div class="toolbar"><div class="filter-chips">${[["all","Semua"],["in-progress","Sedang dikerjakan"],["completed","Sudah dilakukan"],["verified","Terverifikasi"],["ready","Belum dimulai"],["blocked","Menunggu"],["later","Pra-operasi"]].map(([k,l])=>`<button type="button" class="filter-chip ${state.taskFilter===k?"active":""}" data-task-filter="${k}">${l}</button>`).join("")}</div><span class="helper">${shown.length} tugas ditampilkan</span></div>${shown.length?taskRows(shown):'<div class="empty-note"><b>Belum ada tugas pada status ini</b><p>Mulai tugas atau gunakan tombol “Saya sudah melakukan ini” pada tugas yang selesai sebelum menggunakan EnviroTrack.</p></div>'}</div></div>`;
}

function documentProjectNames(){return [...new Set([state.projectName,...demoProjects.map(p=>p.name),...(state.documents||[]).map(d=>d.projectName)].filter(Boolean))];}
function renderDocuments(){
  const allTasks=buildTasks(),focusTask=state.documentTask?allTasks.find(x=>x.id===state.documentTask):null,allDocs=state.documents||[],projectNames=documentProjectNames();
  const selectedProject=focusTask?state.projectName:(projectNames.includes(state.docProject)?state.docProject:state.projectName);
  const projectDocs=allDocs.filter(d=>(d.projectName||state.projectName)===selectedProject),scope=focusTask?projectDocs.filter(d=>(d.taskIds||[]).includes(focusTask.id)):projectDocs;
  const cats=["Semua",...new Set(scope.map(x=>x.category))],selectedCategory=cats.includes(state.docFilter)?state.docFilter:"Semua",query=String(state.docSearch||"").trim().toLowerCase();
  const docs=scope.filter(d=>(selectedCategory==="Semua"||d.category===selectedCategory)&&(!query||`${d.name} ${d.category} ${d.status}`.toLowerCase().includes(query)));
  const verified=projectDocs.filter(d=>d.status==="Terverifikasi").length,needsReview=projectDocs.filter(d=>d.status!=="Terverifikasi").length,linkedTasks=new Set(projectDocs.flatMap(d=>d.taskIds||[])).size;
  const actions=`<div class="doc-actions"><input class="hide" id="doc-file-input" type="file" multiple><input class="hide" id="state-file-input" type="file" accept="application/json,.json"><input class="hide" id="workspace-file-input" type="file" accept=".zip,application/zip"><button type="button" class="primary" data-action="upload-doc">+ ${focusTask?"Tambah bukti tugas":"Tambah dokumen"}</button><button type="button" class="ghost" data-action="choose-directory">Pilih folder</button><button type="button" class="ghost" data-action="export-state">Ekspor state</button><button type="button" class="ghost" data-action="export-workspace">Ekspor ZIP</button><button type="button" class="ghost" data-action="import-state">Load state</button><button type="button" class="ghost" data-action="import-workspace">Load ZIP</button></div>`;
  const taskContext=focusTask?`<section class="doc-task-context"><div><span class="kicker">BUKTI UNTUK TUGAS AKTIF</span><h3>${esc(focusTask.title)}</h3><p><b>Yang harus dibuktikan:</b> ${esc(focusTask.evidence)}</p><small>Dokumen yang dipilih akan masuk ke proyek ${esc(state.projectName)} dan langsung ditautkan ke tugas ini.</small></div><button type="button" class="ghost" data-action="back-to-task" data-id="${focusTask.id}">← Kembali ke tugas</button></section>`:"";
  const projectBar=!focusTask?`<section class="doc-project-bar"><div><span class="doc-folder">□</span><div><small>RUANG DOKUMEN PROYEK</small><b>${esc(selectedProject)}</b><p>Dokumen proyek lain tidak dicampur dalam daftar ini.</p></div></div><label><span>Ganti proyek</span><select data-field="docProject">${projectNames.map(name=>`<option value="${esc(name)}" ${selectedProject===name?"selected":""}>${esc(name)}</option>`).join("")}</select></label></section>`:"";
  const storage=(()=>{const meta=storageState(),connected=meta.mode==="folder"&&meta.connected,mode=connected?"Folder perangkat tersambung":"Mode browser sementara",mobile=/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent),description=connected?`File baru disalin ke ${esc(meta.rootName)} / EnviroTrack / [proyek] / [kategori].`:mobile?"File disimpan di browser perangkat ini. Pilih atau buat folder baru di HP untuk menyalin dokumen secara terorganisasi.":"File disimpan di browser perangkat ini. Di PC, pilih folder Dokumen atau directory lain untuk membuat salinan terorganisasi.";return `<section class="storage-banner"><span class="storage-icon">${connected?"DIR":"LOC"}</span><div><small>PENYIMPANAN DOKUMEN</small><b>${mode}</b><p>${description}</p></div><span class="storage-state">${connected?"TERHUBUNG":"LOKAL"}</span><div class="storage-actions"><button type="button" class="soft" data-action="choose-directory">${connected?"Ganti folder":mobile?"Pilih / buat folder":"Pilih folder Dokumen"}</button><details><summary>Cara kerja storage lokal</summary><p>Satu folder root menampung subfolder EnviroTrack per proyek dan kategori. State tidak menyimpan path absolut; saat dipindah ke perangkat lain, folder perlu dipilih ulang.</p></details></div></section>`;})();
  return `<div class="view-shell">${viewHeader(focusTask?"Bukti tugas":"Dokumen proyek",focusTask?"Selesaikan tugas dengan menautkan bukti yang tepat.":"Setiap proyek memiliki ruang dokumen sendiri; di dalamnya dokumen ditautkan kembali ke tugas yang membutuhkan.",actions)}${taskContext}${projectBar}${storage}<section class="doc-summary"><div><small>TOTAL DOKUMEN</small><b>${projectDocs.length}</b><span>${esc(selectedProject)}</span></div><div><small>TERVERIFIKASI</small><b>${verified}</b><span>Siap digunakan</span></div><div><small>PERLU TINDAKAN</small><b>${needsReview}</b><span>Draf, review, atau kedaluwarsa</span></div><div><small>TUGAS TERTAUT</small><b>${linkedTasks}</b><span>Bukti tidak berdiri sendiri</span></div></section><div class="view-card doc-workspace"><div class="doc-toolbar"><div class="filter-chips">${cats.map(x=>`<button type="button" class="filter-chip ${selectedCategory===x?"active":""}" data-doc-filter="${esc(x)}">${esc(x)}</button>`).join("")}</div><div class="doc-toolbar-actions"><label class="doc-search"><span>⌕</span><input id="doc-search" value="${esc(state.docSearch||"")}" placeholder="Cari dokumen"></label>${focusTask?`<button type="button" class="soft" data-action="show-all-docs">Semua dokumen proyek</button>`:""}</div></div>${docs.length?`<div class="doc-grid">${docs.map(d=>{const linked=(d.taskIds||[]).map(id=>allTasks.find(x=>x.id===id)).filter(Boolean),ext=d.name.includes(".")?d.name.split(".").pop().toUpperCase():"FILE";return `<article class="doc-card"><div class="doc-card-head"><span class="doc-icon">${esc(ext)}</span><span class="doc-copy"><b>${esc(d.name)}</b><small>${esc(d.category)} · ${esc(d.date)}</small></span><button type="button" class="icon-button" data-action="download-doc" data-id="${d.id}" aria-label="Unduh salinan dokumen">↓</button></div><div class="doc-card-meta"><span class="status ${d.status==="Terverifikasi"?"verified":d.status.includes("Kadaluarsa")?"blocked":"reviewing"}">${esc(d.status)}</span><small>${esc(d.projectName||selectedProject)}</small></div><div class="doc-file-meta"><span>${esc(formatBytes(d.size))}</span><span>${esc(d.relativePath||folderRelativePath(d.projectName||selectedProject,d.category,d.name))}</span></div><div class="doc-linked"><span class="doc-links-label">DIGUNAKAN OLEH ${linked.length} TUGAS</span><span class="doc-task-tags">${linked.map(t=>`<button type="button" data-action="open-linked-task" data-id="${t.id}">${esc(t.title)}</button>`).join("")||"<small>Belum ditautkan—buka tugas lalu pilih Kelola bukti.</small>"}</span></div></article>`;}).join("")}</div>`:`<div class="empty-note"><b>${query?"Dokumen tidak ditemukan":focusTask?"Belum ada bukti untuk tugas ini":"Belum ada dokumen pada proyek ini"}</b><p>${query?"Coba kata kunci atau kategori lain.":focusTask?"Tambahkan bukti dari sini agar otomatis terhubung dengan tugas.":"Dokumen yang ditambahkan akan tersimpan di ruang proyek ini dan dapat ditautkan ke tugas."}</p><button type="button" class="primary" data-action="upload-doc">+ ${focusTask?"Tambah bukti tugas":"Tambah dokumen"}</button></div>`}</div></div>`;
}

function calendarTaskStatus(task){const status=progressForTask(task.id).status;return status==="completed"?"Terverifikasi internal":status==="evidence_submitted"?"Bukti diunggah":status==="evidence_needed"?"Butuh bukti":status==="in_progress"?"Berjalan":status==="self_declared"?"Dinyatakan selesai":"Belum dimulai";}
function calendarTaskDay(task){const match=String(task.due||"").match(/Hari\s+(\d+)/i);return match?Number(match[1]):null;}
function calendarEntries(){
  const tasks=buildTasks().map(task=>({id:`task-${task.id}`,taskId:task.id,title:task.title,owner:task.owner,due:task.due,day:calendarTaskDay(task),status:calendarTaskStatus(task),source:"Dari tugas",manual:false}));
  const manual=(state.calendarEvents||[]).map(item=>{const linked=buildTasks().find(task=>task.id===item.taskId);return {...item,day:item.day||calendarDateDay(item.date),source:"Agenda manual",manual:true,status:linked?calendarTaskStatus(linked):(item.status||"Dijadwalkan")};});
  return [...manual,...tasks];
}
function calendarDateDay(date){const match=String(date||"").match(/^2026-08-(\d{2})$/);return match?Number(match[1]):null;}
function renderCalendar(){
  const entries=calendarEntries(),eventsByDay={};entries.forEach(item=>{if(item.day)eventsByDay[item.day]=(eventsByDay[item.day]||[]).concat(item);});
  const blanks=5,days=31,cells=Array.from({length:blanks},(_,i)=>`<div class="day muted">${27+i}</div>`).concat(Array.from({length:days},(_,i)=>{const d=i+1,dayEvents=eventsByDay[d]||[];return `<div class="day ${d===21?"today":""}"><b>${d}</b>${dayEvents.slice(0,2).map(item=>`<span class="event-dot ${item.manual?"":"relative"} ${item.status==="Selesai"?"complete":""}" title="${esc(item.manual?item.title:`${item.title} · ${item.due}`)}">${esc(item.title.slice(0,18))}</span>`).join("")}</div>`;}));
  const completed=entries.filter(item=>["Selesai","Terverifikasi","Terverifikasi internal"].includes(item.status)).length,nextTask=buildTasks().find(task=>!["completed"].includes(progressForTask(task.id).status)),linkedDocs=(state.documents||[]).filter(doc=>(doc.projectName||state.projectName)===state.projectName&&(doc.taskIds||[]).length).length;
  const addForm=`<details class="calendar-add-panel" id="calendar-add-panel"><summary>Tambah agenda manual</summary><form id="calendar-event-form"><div class="form-row"><label class="form-field">Tanggal<input name="date" type="date" value="2026-08-24" required></label><label class="form-field">Penanggung jawab<input name="owner" placeholder="Contoh: Compliance" required></label></div><label class="form-field">Nama agenda<input name="title" placeholder="Contoh: Review laporan semester" required></label><label class="form-field">Tautkan ke tugas<select name="taskId"><option value="">Tidak ditautkan</option>${buildTasks().map(task=>`<option value="${esc(task.id)}">${esc(task.title)}</option>`).join("")}</select></label><div class="form-row"><label class="form-field">Basis dokumen / nomor<input name="basis" placeholder="Contoh: Persetujuan Lingkungan · No. ..."></label><label class="form-field">Frekuensi<select name="frequency"><option>Sekali</option><option>Bulanan</option><option>Triwulanan</option><option>Semesteran</option><option>Tahunan</option><option>Sesuai masa berlaku</option></select></label></div><label class="form-field">Evidence yang harus disimpan<input name="evidence" placeholder="Contoh: TTE, LHU, tanda terima, foto inspeksi"></label><button type="submit" class="primary">Simpan agenda</button></form></details>`;
  return `<div class="view-shell">${viewHeader("Kalender kepatuhan","Agenda ini mengikuti tugas dan progres proyek aktif. Tambahkan tanggal formal hanya jika sudah berasal dari persetujuan, kontrak, atau rencana kerja yang tervalidasi.",'<button type="button" class="primary" data-action="add-event">+ Tambah agenda</button>')}${addForm}<section class="calendar-sync-strip"><div><span class="label">SUMBER SINKRON</span><b>${entries.filter(item=>item.taskId).length} tugas</b><small>Daftar mengikuti KBLI, dampak, lokasi, dan pilihan B3.</small></div><div><span class="label">PROGRES</span><b>${completed}/${entries.length} selesai</b><small>Status mengikuti checklist tugas.</small></div><div><span class="label">BUKTI</span><b>${linkedDocs} dokumen tertaut</b><small>Dokumen tetap dikelola di menu Dokumen.</small></div></section><section class="calendar-recommendation"><div><span class="kicker">REKOMENDASI KALENDER</span><h3>${nextTask?`Prioritaskan: ${esc(nextTask.title)}`:"Kalender proyek sudah memiliki agenda yang selesai."}</h3><p>${nextTask?`Mulai dari task ini, lalu tambahkan tanggal formal ketika nomor persetujuan, Pertek, SLO, kontrak, atau kewajiban periodiknya sudah tersedia. Jangan mengubah “Hari X” menjadi tanggal resmi tanpa dasar dokumen.`:"Tetap periksa masa berlaku persetujuan dan jadwalkan periode pelaporan berikutnya dari dokumen final."}</p></div>${nextTask?`<button type="button" class="soft" data-action="open-calendar-task" data-id="${esc(nextTask.id)}">Buka task berikutnya →</button>`:""}</section><div class="calendar-layout"><div class="calendar"><div class="calendar-head">${["Sen","Sel","Rab","Kam","Jum","Sab","Min"].map(x=>`<span>${x}</span>`).join("")}</div><div class="calendar-grid">${cells.join("")}</div><p class="calendar-note">Titik dari task adalah rencana relatif berbasis “Hari X”, bukan tenggat resmi. Tanggal formal hanya muncul setelah agenda manual ditambahkan.</p></div><aside class="view-card calendar-agenda"><div class="label" style="margin-top:0"><b>Agenda tersinkron</b><small>${entries.length} item dari proyek ${esc(state.projectName)}</small></div><div class="agenda">${entries.slice(0,18).map(item=>`<button type="button" class="agenda-item ${item.taskId?"is-linked":""}" ${item.taskId?`data-action="open-calendar-task" data-id="${esc(item.taskId)}"`:""}><span class="dot ${item.status==="Selesai"?"green-dot":"orange-dot"}"></span><span><b>${esc(item.title)}</b><small>${esc(item.manual?`${item.date} · ${item.owner}`:`${item.due} · ${item.owner}`)} · ${esc(item.status)}</small>${item.manual?`<small>${esc(item.frequency||"Sekali")} · ${esc(item.basis||"Basis belum dicatat")} · Evidence: ${esc(item.evidence||"Belum dilampirkan")}</small>`:""}</span></button>`).join("")}</div></aside></div></div>`;
}
function renderRegulatorySourceNote(){const refs=["plhk4-2021","pp22-2021","plhk6-2021","plhk5-2021","pp28-2025"];return `<section class="regulatory-source-note"><div><small>CATATAN SUMBER & VERSI</small><b>Gunakan status ini sebagai jejak verifikasi, bukan keputusan kelayakan.</b><p>Permen LHK 4/2021 menjadi rujukan daftar AMDAL, UKL-UPL, atau SPPL; PP 22/2021 menjadi kerangka perlindungan dan pengelolaan; Permen LHK 6/2021 untuk pengelolaan Limbah B3; Permen LHK 5/2021 untuk Persetujuan Teknis/SLO; dan PP 28/2025 untuk konteks perizinan berusaha/OSS.</p></div><div class="source-note-links">${refs.map(id=>{const rule=REGULATIONS.find(r=>r.id===id);return rule?officialLink(rule.url,rule.title):""}).join("")}</div><span class="source-note-date">Metadata dicek 23 Agu 2026</span></section>`;}
function renderRegulations(){
  const q=String(state.regSearch||"").trim().toLowerCase();
  const localLevels=["Provinsi","Kabupaten","Kota"];
  const localProvinces=[...new Set(REGULATIONS.map(r=>r.province).filter(Boolean))];
  let regs=state.regMode==="project"?relevantRules():REGULATIONS;
  regs=regs.filter(r=>{
    const levelMatch=state.regFilter==="Semua"||r.level===state.regFilter||(state.regFilter==="Daerah"&&localLevels.includes(r.level));
    const provinceMatch=state.regMode==="project"||state.regProvince==="Semua daerah"||!localLevels.includes(r.level)||r.province===state.regProvince;
    const queryMatch=!q||`${r.title} ${r.about} ${r.scope} ${r.location} ${r.status}`.toLowerCase().includes(q);
    return levelMatch&&provinceMatch&&queryMatch;
  });
  const scopeCopy=state.regMode==="project"
    ? `Filter ini menampilkan aturan yang terpicu oleh KBLI, sumber dampak, dan lokasi proyek ${esc(state.projectName)}. Gunakan Katalog general untuk kembali ke cakupan umum.`
    : "Katalog ini bersifat general: telusuri regulasi nasional, sektoral, dan daerah tanpa harus membuka penapisan proyek. Gunakan filter proyek hanya bila ingin melihat aturan yang terpicu oleh proyek aktif.";
  const filters=["Semua","Nasional","Sektoral","Daerah"];
  return `<div class="view-shell regulation-shell">${viewHeader("Basis regulasi","Katalog umum regulasi lingkungan dan perizinan berusaha, terpisah dari penapisan proyek.",officialLink(LINKS.jdihn,"Cari langsung di JDIHN","ghost"))}
    <section class="reg-scope" aria-label="Cakupan basis regulasi">
      <div class="segmented" aria-label="Cakupan katalog regulasi"><button type="button" class="${state.regMode==="all"?"active":""}" data-reg-mode="all">Katalog general</button><button type="button" class="${state.regMode==="project"?"active":""}" data-reg-mode="project">Terpicu proyek aktif</button></div>
      <p>${scopeCopy}</p>
    </section>
    <section class="coverage-note"><div><b>Cakupan indeks daerah saat ini</b><p>Katalog general mencakup regulasi nasional dan sektoral. Indeks daerah yang telah dipetakan saat ini mencakup Kalimantan Timur, Kota Balikpapan, dan Kabupaten Kutai Kartanegara. Daerah lain tetap dapat ditelusuri melalui JDIHN atau JDIH pemerintah daerah; tidak dianggap otomatis tidak memiliki aturan.</p></div><span>Diperiksa 23 Agu 2026</span></section>
    ${renderRegulatorySourceNote()}
    <div class="view-card regulation-list"><div class="reg-toolbar"><label class="reg-search"><span class="visually-hidden">Cari regulasi</span><input id="reg-search" class="searchbox" value="${esc(state.regSearch)}" placeholder="Cari nomor, topik, sektor, atau daerah"></label>${state.regMode==="all"?`<label class="reg-location"><span>Wilayah aturan</span><select data-field="regProvince"><option>Semua daerah</option>${localProvinces.map(x=>`<option ${state.regProvince===x?"selected":""}>${esc(x)}</option>`).join("")}</select></label>`:""}</div>
      <div class="filter-chips">${filters.map(x=>`<button type="button" class="filter-chip ${state.regFilter===x?"active":""}" data-reg-filter="${x}">${x}</button>`).join("")}</div>
      <div class="reg-results"><div class="reg-count"><b>${regs.length} regulasi</b><span>${state.regMode==="project"?"aturan yang terpicu proyek":"dalam katalog general"}</span></div>${regs.length?regs.map(r=>`<article class="reg-card"><span class="reg-level">${esc(r.level)}</span><div class="reg-card-copy"><h3>${esc(r.title)}</h3><p>${esc(r.about)}</p><small>${esc(r.scope)} · ${esc(r.location)} · Dicek ${esc(r.checked||"21 Agu 2026")}</small></div><div class="reg-card-side"><span class="status ${r.status==="Berlaku"||r.status.includes("perubahan")?"verified":"reviewing"}">${esc(r.status)}</span>${officialLink(r.url,"Buka sumber")}</div></article>`).join(""):`<div class="empty-note"><b>Tidak ada regulasi yang cocok</b><p>Ubah filter atau cari langsung pada basis resmi nasional dan JDIH pemerintah daerah.</p>${officialLink(LINKS.jdihn,"Cari di JDIHN")}</div>`}</div>
    </div>
  </div>`;
}

const PERMIT_FLOW=[
  {n:"01",phase:"Pendirian",title:"Pilih bentuk usaha dan susun fondasinya",tag:"Keputusan pendiri",summary:"Tentukan PT, Perseroan Perorangan, CV, koperasi, atau bentuk lain sebelum mengurus izin kegiatan.",detail:"Tetapkan pendiri/pemegang saham, pengurus, modal, alamat kedudukan, nama usaha, status penanaman modal, serta pemilik manfaat. Pilihan bentuk usaha menentukan proses AHU, dokumen pendirian, tanggung jawab, dan data yang akan ditarik oleh OSS.",output:"Keputusan bentuk usaha + data pendiri/pengurus/modal/alamat",system:["AHU Online",LINKS.ahu]},
  {n:"02",phase:"Pendirian",title:"Buat akta dan dapatkan legalitas badan usaha",tag:"AHU / notaris",summary:"PT didirikan melalui notaris dan SABH; bentuk usaha lain mengikuti layanan AHU yang sesuai.",detail:"Untuk PT, notaris memproses nama, akta pendirian, data perseroan, pemilik manfaat, dan pengesahan badan hukum melalui AHU/SABH. Perseroan Perorangan, CV, firma, persekutuan perdata, dan koperasi memiliki jalur yang berbeda—jangan menyamaratakannya dengan PT biasa.",output:"Akta/dokumen pendirian + SK pengesahan atau bukti pendaftaran",system:["AHU Online",LINKS.ahu]},
  {n:"03",phase:"Pendirian",title:"Pastikan identitas pajak badan aktif",tag:"Coretax DJP",summary:"Validasi NPWP badan, data pengurus, alamat, dan akses administrasi perpajakan.",detail:"Sebagian pertukaran data berlangsung melalui AHU/OSS, tetapi perusahaan tetap perlu memastikan NPWP badan dan profil perpajakan benar serta akun Coretax dapat digunakan. Kebutuhan PKP dan kewajiban pajak lain ditentukan terpisah sesuai kondisi usaha.",output:"NPWP badan/profil pajak terverifikasi + akses Coretax",system:["Coretax DJP",LINKS.coretax]},
  {n:"04",phase:"Perizinan awal",title:"Tentukan seluruh KBLI dan profil kegiatan",tag:"Data usaha",summary:"Pilih kode final 5 digit untuk kegiatan utama dan semua kegiatan pendukung yang benar-benar dijalankan.",detail:"Cocokkan uraian KBLI dengan produk/jasa dan proses aktual. Siapkan kapasitas, teknologi, bahan, utilitas, luas lahan, kebutuhan ruang, tenaga kerja, investasi, dan lokasi setiap proyek. OSS dapat memperlakukan KBLI/lokasi sebagai bidang usaha atau proyek yang berbeda.",output:"Matriks KBLI–produk–proses–kapasitas–lokasi",system:["KBLI OSS",LINKS.kbli]},
  {n:"05",phase:"Perizinan awal",title:"Buat hak akses OSS dan ajukan NIB",tag:"OSS RBA",summary:"OSS menarik legalitas badan usaha, lalu menentukan tingkat risiko dan keluaran izin setiap bidang usaha.",detail:"Lengkapi profil pelaku usaha, data proyek, KBLI, produk/jasa, modal, lokasi, dan skala. Keluaran dapat berupa NIB saja atau disertai Sertifikat Standar/izin berdasarkan tingkat risiko. NIB adalah identitas berusaha, tetapi belum selalu berarti seluruh persyaratan untuk beroperasi sudah selesai.",output:"NIB + peta tingkat risiko dan persyaratan tiap KBLI/proyek",system:["OSS RBA",LINKS.oss]},
  {n:"06",phase:"Persyaratan dasar",title:"Proses kesesuaian ruang dan verifikasi lokasi",tag:"OSS + ATR/BPN + PTSP",summary:"KKPR/PKKPR diproses melalui OSS dengan keterlibatan ATR/BPN, OPD tata ruang, dan DPMPTSP sesuai kondisi.",detail:"Siapkan polygon, luas, status/penguasaan tanah, alamat, serta jenis dan skala kegiatan. Jika RDTR telah terintegrasi, konfirmasi dapat lebih otomatis; pada jalur penilaian, berkas dapat diverifikasi oleh OPD tata ruang dan DPMPTSP. Lakukan juga overlay kawasan hutan, konservasi, pesisir/ruang laut, sempadan, dan kawasan khusus.",output:"KKPR/PKKPR atau dokumen kesesuaian ruang + hasil overlay",system:["Pilih PTSP lokasi","#penapisan"]},
  {n:"07",phase:"Persyaratan dasar",title:"Tapis AMDAL, UKL-UPL, atau SPPL",tag:"Lingkungan",summary:"KBLI saja tidak cukup; skala, proses, teknologi, dan sensitivitas lokasi menentukan jalurnya.",detail:"Cocokkan seluruh kegiatan utama dan pendukung dengan Permen LHK 4/2021 serta aturan sektoral. Tentukan kewenangan pusat, provinsi, atau kabupaten/kota. DPMPTSP/DLH dan AMDALNet masuk pada tahap ini sesuai jalur dan kewenangan, setelah proyek serta lokasi cukup jelas.",output:"Hasil penapisan + jenis dokumen + kewenangan pemeriksa",system:["Mulai penapisan", "#penapisan"]},
  {n:"08",phase:"Persetujuan",title:"Susun dan ajukan dokumen lingkungan",tag:"AMDALNet / PTSP",summary:"Kedalaman kajian dan proses pemeriksaan mengikuti AMDAL, UKL-UPL, atau SPPL.",detail:"AMDAL mencakup rangkaian kajian dampak dan RKL-RPL; UKL-UPL memuat upaya pengelolaan/pemantauan; SPPL merupakan pernyataan kesanggupan bagi kegiatan yang tidak wajib AMDAL/UKL-UPL. Pengajuan elektronik dan pemeriksaan mengikuti AMDALNet/OSS serta instansi sesuai kewenangan.",output:"Persetujuan Lingkungan/PKPLH atau dokumen yang sesuai",system:["AMDALNet",LINKS.amdalnet]},
  {n:"09",phase:"Persetujuan",title:"Penuhi Pertek dan rincian teknis yang terpicu",tag:"Teknis lingkungan",summary:"Air limbah, emisi, B3/LB3, serta pemanfaatan/pembuangan tertentu membutuhkan dokumen teknis sesuai kondisi nyata.",detail:"Susun inventaris sumber, neraca, kajian/standar teknis, desain fasilitas, baku mutu, titik penaatan, SOP, dan rencana pemantauan. Rincian teknis penyimpanan LB3 diselaraskan dengan persetujuan lingkungan. SPEED/SIRAJA bukan portal pendirian atau pengajuan awal perusahaan.",output:"Pertek/rincian teknis/persetujuan terkait bila diwajibkan",system:["PP 22/2021","https://peraturan.go.id/id/pp-no-22-tahun-2021"]},
  {n:"10",phase:"Praoperasi",title:"Selesaikan izin sektor, daerah, konstruksi, dan SLO",tag:"K/L + DPMPTSP",summary:"PB UMKU dan persyaratan praoperasi berbeda untuk migas, tambang, kesehatan, pangan, energi, dan sektor lain.",detail:"Tuntaskan Sertifikat Standar/izin yang masih menunggu verifikasi, PB UMKU, persyaratan bangunan/fasilitas, commissioning, dan SLO bila diwajibkan. DPMPTSP berfungsi sebagai titik layanan/fasilitasi dan terlibat dalam proses daerah; keputusan teknis dapat berada pada OPD atau kementerian/lembaga sesuai kewenangan.",output:"Seluruh prasyarat konstruksi/operasi berstatus efektif dan terverifikasi",system:["OSS PB UMKU","https://oss.go.id/id/umku"]},
  {n:"11",phase:"Pascaizin",title:"Mulai operasi, laksanakan komitmen, dan laporkan",tag:"SIMPEL",summary:"SIMPEL baru relevan setelah kewajiban, titik pantau, izin/persetujuan, dan kegiatan perusahaan sudah terbentuk.",detail:"Laksanakan RKL-RPL/UKL-UPL, sampling, neraca, manifest, inspeksi, dan laporan berkala. Pelaporan PPA, PPU, RKL-RPL, serta PLB3 berada dalam ekosistem SIMPEL; SPEED/SIRAJA adalah kanal/modul aspek PLB3, bukan sistem pendirian yang berdiri sejajar. Perubahan KBLI, kapasitas, proses, lokasi, atau dampak harus ditapis kembali.",output:"Bukti implementasi, TTE/laporan berkala, dan kalender kepatuhan",system:["SIMPEL",LINKS.simpel]}
];

const FLOW_PHASES=[...new Set(PERMIT_FLOW.map(item=>item.phase))];
const SYSTEM_REFERENCES=[
  {name:"AHU Online",stage:"Pendirian",use:"Nama, akta, pengesahan atau pendaftaran badan usaha.",url:LINKS.ahu},
  {name:"Coretax DJP",stage:"Pendirian",use:"NPWP badan dan administrasi perpajakan.",url:LINKS.coretax},
  {name:"OSS RBA",stage:"Perizinan awal",use:"NIB, risiko, persyaratan dasar, izin, dan PB UMKU.",url:LINKS.oss},
  {name:"DPMPTSP dan OPD",stage:"Sesuai kewenangan",use:"Fasilitasi, verifikasi, dan proses daerah.",url:"#penapisan",view:"screening"},
  {name:"AMDALNet",stage:"Persetujuan lingkungan",use:"Pengajuan dan pemeriksaan dokumen lingkungan sesuai jalur.",url:LINKS.amdalnet},
  {name:"JDIHN dan JDIH",stage:"Verifikasi hukum",use:"Pencarian regulasi pusat dan daerah dari sumber resmi.",url:LINKS.jdihn},
  {name:"SIMPEL",stage:"Setelah izin dan operasi",use:"Pemantauan serta pelaporan berkala. Modul PLB3 berada dalam ekosistem ini.",url:LINKS.simpel}
];

function renderHome(){
  const phasePanels=FLOW_PHASES.map((phase,index)=>{
    const items=PERMIT_FLOW.filter(item=>item.phase===phase);
    return `<details class="phase-panel" ${index===0?"open":""}><summary><span>${String(index+1).padStart(2,"0")}</span><b>${esc(phase)}</b><small>${items.length} tahapan</small></summary><div class="phase-content">${items.map(item=>`<article><div><span>${item.n}</span><h4>${esc(item.title)}</h4></div><p>${esc(item.detail)}</p><dl><div><dt>Hasil</dt><dd>${esc(item.output)}</dd></div><div><dt>Sistem</dt><dd><a href="${item.system[1]}" ${item.system[1].startsWith("http")?'target="_blank" rel="noopener noreferrer"':`data-view="screening" data-step="2"`}>${esc(item.system[0])}</a></dd></div></dl></article>`).join("")}</div></details>`;
  }).join("");
  const references=SYSTEM_REFERENCES.map(item=>`<article class="reference-card"><p>${esc(item.stage)}</p><h4>${esc(item.name)}</h4><span>${esc(item.use)}</span><a href="${item.url}" ${item.url.startsWith("http")?'target="_blank" rel="noopener noreferrer"':`data-view="screening" data-step="2"`}>Buka sistem</a></article>`).join("");
  return `<div class="landing">
    <section class="landing-hero">
      <div class="hero-copy motion-reveal"><h2>Dari perusahaan baru <span class="hero-inline-image" role="img" aria-label="Lanskap hijau"></span> menuju operasi yang patuh lingkungan.</h2><p>EnviroTrack mengubah KBLI, skala, proses, lokasi, dan sumber dampak menjadi jalur izin, langkah kerja, serta bukti yang perlu disimpan.</p><div class="hero-actions"><button type="button" class="primary hero-primary" data-view="screening" data-step="0">Mulai dari profil usaha</button><a class="text-link" href="#alur-izin">Pelajari alur umum</a></div></div>
      <aside class="hero-sequence motion-reveal" aria-label="Urutan utama"><ol><li><span>01</span><div><b>Bentuk perusahaan</b><small>AHU, pajak, dan data pendiri</small></div></li><li><span>02</span><div><b>Daftarkan kegiatan</b><small>OSS, KBLI, lokasi, dan tingkat risiko</small></div></li><li><span>03</span><div><b>Penuhi persetujuan</b><small>Lingkungan, sektor, daerah, dan praoperasi</small></div></li><li><span>04</span><div><b>Jalankan kewajiban</b><small>Pemantauan, bukti, dan pelaporan</small></div></li></ol></aside>
    </section>

    <section class="landing-intro motion-reveal"><h3>Portal pelaporan bukan titik awal.</h3><p class="reveal-copy"><span>Perusahaan baru dimulai dari keputusan bentuk usaha, AHU atau notaris, dan identitas pajak.</span> <span>Setelah itu barulah data badan usaha dibawa ke OSS, kesesuaian ruang, DPMPTSP atau OPD, serta jalur Persetujuan Lingkungan.</span> <span>SIMPEL dan modul PLB3 digunakan ketika kewajiban operasi dan pelaporannya sudah terbentuk.</span></p></section>

    <section class="environment-strip motion-reveal" aria-label="Konteks lingkungan"><figure class="environment-image environment-image-wide"><img src="assets/enviro-water.jpg" alt="Kolam pengolahan air dengan vegetasi dan sungai di sekitar kawasan industri" loading="lazy"><figcaption>Air limbah dan sistem pengolahan</figcaption></figure><figure class="environment-image"><img src="assets/enviro-field.jpg" alt="Perangkat pengukuran kualitas air di tepi sungai dan hutan" loading="lazy"><figcaption>Bukti lapangan dan pemantauan</figcaption></figure></section>

    <section class="flow-section" id="alur-izin"><div class="section-heading"><h3>Alur umum perizinan</h3><p>Buka setiap fase untuk melihat tindakan, hasil yang harus tersedia, dan sistem yang digunakan. Tracker proyek akan menyusun ulang tahapan ini sesuai jawabanmu.</p></div><div class="phase-accordion">${phasePanels}</div></section>

    <section class="decision-section motion-reveal"><div class="section-heading"><h3>Apa yang menentukan jalur lingkungan?</h3><p>KBLI adalah pintu masuk, bukan satu-satunya keputusan.</p></div><div class="decision-grid"><article class="decision-main"><h4>Profil kegiatan yang sebenarnya</h4><p>Gabungkan seluruh KBLI utama dan pendukung dengan kapasitas, teknologi, tahapan konstruksi hingga operasi, penggunaan bahan, utilitas, serta fasilitas penunjang.</p><strong>Dua perusahaan dengan KBLI sama dapat memiliki kewajiban berbeda.</strong></article><article><h4>Lokasi</h4><p>Polygon, tata ruang, hutan, konservasi, pesisir, sempadan, gambut, karst, dan batas administrasi.</p></article><article><h4>AMDAL</h4><p>Untuk kegiatan yang wajib AMDAL karena jenis, skala, teknologi, atau sensitivitas lokasinya.</p></article><article><h4>UKL-UPL</h4><p>Untuk kegiatan yang tidak wajib AMDAL tetapi masih memerlukan pengelolaan dan pemantauan.</p></article><article><h4>SPPL</h4><p>Untuk kegiatan yang tidak wajib AMDAL maupun UKL-UPL menurut hasil penapisan.</p></article></div></section>

    <section class="readiness-section"><div class="section-heading"><h3>Data yang perlu disiapkan</h3><p>Tidak harus sempurna pada hari pertama, tetapi kekosongan data harus terlihat dan ditindaklanjuti.</p></div><ol class="readiness-list">${[["Identitas dan legalitas","Bentuk usaha, pendiri, pengurus, NPWP, dan status proyek."],["KBLI dan keluaran usaha","Seluruh KBLI final 5 digit, produk atau jasa, dan hubungan kegiatan utama-pendukung."],["Proses dan kapasitas","Teknologi, diagram proses, kapasitas beserta satuan, jam operasi, dan fasilitas penunjang."],["Lokasi dan lahan","Alamat, luas, status lahan, koordinat atau polygon, serta sensitivitas tapak."],["Sumber dampak","Air, energi, bahan kimia, emisi, air limbah, B3 atau LB3, limbah padat, dan dampak sosial."],["Dokumen teknis","Site plan, neraca air, PFD, desain pengendalian, rona awal, serta bukti verifikasi."]].map((item,index)=>`<li><span>${String(index+1).padStart(2,"0")}</span><div><b>${item[0]}</b><p>${item[1]}</p></div></li>`).join("")}</ol></section>

    <section class="reference-section"><div class="reference-head"><div><h3>Sistem resmi sesuai fase</h3><p>Baca kegunaannya sebelum membuka tautan; portal hanya dibuka ketika prasyaratnya sudah siap.</p></div><div class="carousel-controls"><button type="button" data-action="reference-prev" aria-label="Referensi sebelumnya">Sebelumnya</button><button type="button" data-action="reference-next" aria-label="Referensi berikutnya">Berikutnya</button></div></div><div class="reference-track" id="reference-track">${references}</div></section>

    <section class="landing-cta motion-reveal"><div><h3>Mulai dengan data kegiatanmu.</h3><p>Masukkan status usaha, semua KBLI, kapasitas, proses, dan lokasi. Hasilnya menjadi tracker tugas yang bisa dicentang, dilewati bila sudah dilakukan, serta dihubungkan dengan dokumen bukti.</p></div><button type="button" class="primary hero-primary" data-view="screening" data-step="0">Buat tracker proyek</button></section>
    <p class="landing-disclaimer">EnviroTrack adalah alat bantu penapisan dan pengelolaan pekerjaan, bukan keputusan hukum atau izin resmi. Konfirmasi keluaran kepada AHU, DJP, OSS, ATR/BPN, DPMPTSP atau OPD, AMDALNet, kementerian atau lembaga, dan sumber regulasi resmi.</p>
  </div>`;
}

function initMotion(){
  if(state.view!=="home"||!window.gsap||!window.ScrollTrigger||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;
  window.gsap.registerPlugin(window.ScrollTrigger);
  window.ScrollTrigger.getAll().filter(trigger=>String(trigger.vars?.id||"").startsWith("enviro-")).forEach(trigger=>trigger.kill());
  window.gsap.fromTo(".landing-hero .motion-reveal",{opacity:0,y:22},{opacity:1,y:0,duration:.75,stagger:.12,ease:"power2.out"});
  window.gsap.fromTo(".hero-inline-image",{scale:.78,opacity:.45},{scale:1.08,opacity:1,ease:"none",scrollTrigger:{id:"enviro-hero-image",trigger:".landing-hero",start:"top top",end:"bottom top",scrub:true}});
  window.gsap.utils.toArray(".motion-reveal:not(.landing-hero .motion-reveal)").forEach((element,index)=>window.gsap.fromTo(element,{opacity:0,y:20},{opacity:1,y:0,duration:.65,ease:"power2.out",scrollTrigger:{id:`enviro-section-${index}`,trigger:element,start:"top 88%"}}));
  window.gsap.utils.toArray(".reveal-copy span").forEach((element,index)=>window.gsap.fromTo(element,{opacity:.55},{opacity:1,ease:"none",scrollTrigger:{id:`enviro-copy-${index}`,trigger:element,start:"top 84%",end:"bottom 62%",scrub:true}}));
}

function scrollWorkspaceTop(){const behavior=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth";window.scrollTo({top:0,behavior});document.scrollingElement?.scrollTo({top:0,behavior});document.querySelector(".workspace")?.scrollTo?.({top:0,behavior});}
function renderView(){
  setPublicMode(false);
  const shouldTransition=lastRenderedView!==null&&lastRenderedView!==state.view;lastRenderedView=state.view;
  const screening=state.view==="screening";
  document.getElementById("stepbar").classList.toggle("hide",!screening);
  document.getElementById("panel-footer")?.classList.toggle("hide",!screening);
  const titles={home:"Overview perizinan",screening:state.step===4?"Tracker proyek":"Proyek baru",projects:"Proyek saya",tasks:"Checklist tugas",documents:"Dokumen",calendar:"Kalender",regulations:"Basis regulasi"};
  document.getElementById("page-title").textContent=titles[state.view];
  document.querySelectorAll("[data-view]").forEach(b=>b.classList.toggle("active",b.dataset.view===state.view&&b.closest(".nav")));
  const content=document.getElementById("content");
  if(screening){content.innerHTML=`<section class="panel"><div class="screen" id="screen"></div><footer class="panel-footer" id="panel-footer"><button type="button" class="back" id="back">← Kembali</button><span class="note">Hasil menyesuaikan data yang kamu masukkan</span><button type="button" class="next" id="next">Lanjutkan <span>→</span></button></footer></section><aside class="context" id="context" aria-label="Ringkasan proyek"></aside>`;renderScreening();}
  else{content.className="content full";content.innerHTML={home:renderHome,projects:renderProjects,tasks:renderAllTasks,documents:renderDocuments,calendar:renderCalendar,regulations:renderRegulations}[state.view]();}
  content.classList.remove("page-enter-active","page-enter","view-transition-in");if(shouldTransition){void content.offsetWidth;content.classList.add("view-transition-in");}initMotion();
  document.getElementById("task-count").textContent=buildTasks().length;
  history.replaceState(null,"",`#${{home:"beranda",screening:"penapisan",projects:"proyek",tasks:"tugas",documents:"dokumen",calendar:"kalender",regulations:"regulasi"}[state.view]}`);
  saveState();
}

async function searchKbli(query){
  const list=document.getElementById("kbli-suggestions"),spinner=document.getElementById("kbli-spinner");if(!list||!spinner)return;
  if(query.trim().length<2){list.classList.add("hide");list.innerHTML="";return;}
  spinner.classList.remove("hide");
  const url=`https://gw.oss.go.id/v2/portal/kbli?kategori=semua&search=${encodeURIComponent(query.trim())}&lang=id&localization=id&limit=40&id_version=fff4053d-cbb0-51e9-9dc5-1e85b5740704`;
  try{
    const response=await fetch(url,{headers:{Accept:"application/json"}});if(!response.ok)throw new Error("OSS unavailable");
    const json=await response.json(),seen=new Set();
    const results=(json?.data?.result||[]).filter(r=>{
      const code=String(r?._source?.kode||"");
      if(!/^\d{5}$/.test(code)||seen.has(code))return false;
      seen.add(code);return true;
    }).slice(0,9);
    list.innerHTML=results.length?results.map(r=>{const s=r._source||{},loc=s.localization?.id||{},already=state.kblis.some(k=>k.code===String(s.kode));return `<button type="button" class="suggestion ${already?"selected-result":""}" ${already?"disabled aria-disabled=\"true\"":`data-kbli-id="${esc(r._id)}" data-kbli-code="${esc(s.kode)}" data-kbli-title="${esc(loc.judul)}" data-kbli-description="${esc(loc.uraian||"")}"`}><strong>${esc(s.kode)}</strong><div><b>${esc(loc.judul)}</b><small>${already?"Sudah dipilih":`${esc((loc.uraian||"").slice(0,180))}${(loc.uraian||"").length>180?"…":""}`}</small></div></button>`;}).join(""):`<div class="empty-note"><b>Tidak ada KBLI final 5 digit</b><p>Coba kata kunci yang lebih spesifik atau buka pencarian OSS.</p></div>`;
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
  const item={...data,code:String(data?.code||"")},profile=kbliActivityProfile(item);
  state.kblis=[item];markNeedsRescreen("KBLI utama berubah");
  state.activities=profile.activities.slice(0,3);state.capacity="";state.capacityUnit=profile.units[0];state.answers={};state.impacts=[...profile.defaults];state.wasteCodes=[...new Set(profile.waste||[])];state.masterB3Selected=[];state.masterLB3Selected=[];state.showAllImpacts=false;state.showAllWaste=false;
  state.projectName=data.title;saveState();renderView();showToast(`KBLI ${data.code} dipilih. Pertanyaan, satuan, dampak, dan kandidat limbah sudah disesuaikan.`);
}
function addKbli(data){
  const code=String(data?.code||"");
  if(!/^\d{5}$/.test(code))return showToast("Pilih kode KBLI final 5 digit.");
  if(state.kblis.some(k=>k.code===code))return showToast(`KBLI ${code} sudah ada di proyek ini.`);
  if(!state.kblis.length){setKbli({...data,code});return;}
  const item={...data,code},profile=kbliActivityProfile(item);
  state.kblis.push(item);markNeedsRescreen("KBLI pendukung berubah");
  addTriggeredImpacts(profile.defaults);addWasteCodes(profile.waste||[]);
  saveState();renderView();showToast(`KBLI ${code} ditambahkan sebagai KBLI pendukung.`);
}
function makePrimaryKbli(code){
  const index=state.kblis.findIndex(k=>k.code===code);if(index<1)return;
  const [item]=state.kblis.splice(index,1);state.kblis.unshift(item);markNeedsRescreen("Urutan KBLI utama berubah");
  const profile=kbliActivityProfile(item);
  state.activities=profile.activities.slice(0,3);state.capacity="";state.capacityUnit=profile.units[0];state.answers={};state.showAllImpacts=false;state.showAllWaste=false;addTriggeredImpacts(profile.defaults);addWasteCodes(profile.waste||[]);state.projectName=item.title;
  saveState();renderView();showToast(`KBLI ${code} sekarang menjadi KBLI utama. Kapasitas dan kuisioner utama sudah disesuaikan.`);
}
function removeKbli(code){
  const index=state.kblis.findIndex(k=>k.code===code);if(index<0)return;
  const wasPrimary=index===0;state.kblis.splice(index,1);markNeedsRescreen("KBLI dihapus");
  if(wasPrimary&&state.kblis.length){
    const next=state.kblis[0],profile=kbliActivityProfile(next);
    state.activities=profile.activities.slice(0,3);state.capacity="";state.capacityUnit=profile.units[0];state.answers={};state.projectName=next.title;addTriggeredImpacts(profile.defaults);addWasteCodes(profile.waste||[]);
  }else if(!state.kblis.length){state.activities=[];state.capacity="";state.answers={};state.impacts=[];state.wasteCodes=[];}
  saveState();renderView();showToast(state.kblis.length?`KBLI ${code} dihapus dari proyek.`:"Semua KBLI telah dihapus.");
}
function updateComplianceField(el){const key=el.dataset.complianceField;if(!key)return;state.complianceReview={...DEFAULT_COMPLIANCE_REVIEW,...(state.complianceReview||{}),[key]:el.value};saveState();renderView();}
function updateField(el){
  const key=el.dataset.field;if(!key)return;state[key]=el.value;
  if(key==="province")state.regency=(REGENCIES[state.province]||[])[0]||"";
  if(["capacity","capacityUnit","province","regency","projectStatus","stage"].includes(key))markNeedsRescreen(`${key} proyek berubah`);
  saveState();renderView();
}

document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!document.getElementById("entry-gate")?.hidden)closeEntryGate();});
document.addEventListener("input",e=>{
  if(e.target.id==="kbli-search"){clearTimeout(searchTimer);searchTimer=setTimeout(()=>searchKbli(e.target.value),350);}
  if(e.target.id==="reg-search"){state.regSearch=e.target.value;clearTimeout(searchTimer);searchTimer=setTimeout(()=>renderView(),250);}
  if(e.target.id==="doc-search"){state.docSearch=e.target.value;clearTimeout(searchTimer);searchTimer=setTimeout(()=>renderView(),250);}
  if(e.target.matches("[data-wms-toggle]")){const id=e.target.dataset.wmsToggle,checked=e.target.checked,statePref=state.mapLayerPreferences?.[id]||{};state.mapLayerPreferences={...(state.mapLayerPreferences||{}),[id]:{...statePref,visible:checked}};if(checked)siteMap?._enviroOfficialLayers?.[id]?.addTo(siteMap);else if(siteMap?._enviroOfficialLayers?.[id])siteMap.removeLayer(siteMap._enviroOfficialLayers[id]);saveState();return;}
  if(e.target.matches("[data-master-search]")){state.masterB3Search=e.target.value;saveState();renderView();return;}
  if(e.target.matches("[data-field][type='text'],[data-field]:not(select)")){state[e.target.dataset.field]=e.target.value;if(["capacity","capacityUnit","projectStatus","stage"].includes(e.target.dataset.field))markNeedsRescreen(`${e.target.dataset.field} proyek berubah`);saveState();}
  if(e.target.matches("[data-compliance-field]")){state.complianceReview={...DEFAULT_COMPLIANCE_REVIEW,...(state.complianceReview||{}),[e.target.dataset.complianceField]:e.target.value};saveState();}
  if(e.target.matches("input[data-answer]")){state.answers[e.target.dataset.answer]=e.target.value;markNeedsRescreen(`Jawaban profil ${e.target.dataset.answer} berubah`);saveState();}
});
document.addEventListener("change",e=>{
  if(e.target.matches("[data-map-filter]")){state[e.target.dataset.mapFilter]=e.target.value;saveState();renderView();return;}
  if(e.target.matches("[data-task-step]")){
    const id=e.target.dataset.taskStep,index=+e.target.dataset.stepIndex,progress=progressForTask(id),task=buildTasks().find(x=>x.id===id);if(!task)return;
    const done=e.target.checked?[...new Set([...progress.done,index])]:progress.done.filter(x=>x!==index),total=guideForTask(task).steps.length,docs=documentsForTask(id),hasEvidence=docs.length>0,verifiedEvidence=hasEvidence&&docs.every(doc=>doc.status==="Terverifikasi"),status=done.length===total?(verifiedEvidence?"completed":hasEvidence?"evidence_submitted":"evidence_needed"):"in_progress";
    state.taskProgress[taskProgressKey(id)]={status,done};saveState();renderView();if(done.length===total)showToast(hasEvidence?"Semua langkah dan bukti tugas sudah lengkap.":"Semua langkah selesai. Tambahkan bukti agar tugas selesai.");return;
  }
  if(e.target.id==="polygon-file-input"){const file=e.target.files?.[0];if(file)importPolygonFile(file);e.target.value="";return;}
  if(e.target.matches("[data-wms-opacity]")){const id=e.target.dataset.wmsOpacity,value=Number(e.target.value)/100;state.mapLayerPreferences={...(state.mapLayerPreferences||{}),[id]:{...(state.mapLayerPreferences?.[id]||{}),opacity:value}};const output=document.querySelector(`[data-wms-value="${CSS.escape(id)}"]`);if(output)output.value=`${Math.round(value*100)}%`;siteMap?._enviroOfficialLayers?.[id]?.setOpacity(value);saveState();return;}
  if(e.target.id==="doc-file-input"){
    const files=[...e.target.files||[]];if(!files.length)return;
    const task=state.documentTask?buildTasks().find(x=>x.id===state.documentTask):null;
    const category=task?(task.cat.includes("Limbah B3")?"Limbah B3":task.cat.includes("Air limbah")?"Air limbah":task.cat.includes("Emisi")?"Emisi":task.cat.includes("Lokasi")||task.cat.includes("Prasyarat")?"Lokasi":task.cat.includes("AMDAL")||task.cat.includes("Persetujuan")?"AMDAL":"Legalitas"):"Lainnya";
    const date=new Intl.DateTimeFormat("id-ID",{day:"2-digit",month:"short",year:"numeric"}).format(new Date());
    const projectName=task?state.projectName:(documentProjectNames().includes(state.docProject)?state.docProject:state.projectName);
    (async()=>{const additions=[];for(const [i,file] of files.entries()){const stored=await storeUploadedFile(file,projectName,category);additions.push({id:`doc-${Date.now()}-${i}`,name:file.name,category,status:"Draf",date,projectName,taskIds:task?[task.id]:[],...stored});}state.documents=[...(state.documents||[]),...additions];state.docFilter="Semua";if(task){const progress=progressForTask(task.id),total=guideForTask(task).steps.length,docs=documentsForTask(task.id),verifiedEvidence=docs.length>0&&docs.every(doc=>doc.status==="Terverifikasi");if(progress.done.length===total)state.taskProgress[taskProgressKey(task.id)]={status:verifiedEvidence?"completed":"evidence_submitted",done:progress.done,markedAt:progress.markedAt};}saveState();renderView();showToast(`${files.length} dokumen ditambahkan${task?" dan ditautkan ke tugas":""}.`);})().catch(()=>showToast("Dokumen gagal disimpan. Coba lagi atau pilih folder lain."));return;
  }
  if(e.target.id==="state-file-input"||e.target.id==="entry-state-input"){
    const file=e.target.files?.[0];if(file){if(e.target.id==="entry-state-input")closeEntryGate(false);importStateFile(file);}e.target.value="";return;
  }
  if(e.target.id==="workspace-file-input"||e.target.id==="entry-workspace-input"){
    const file=e.target.files?.[0];if(file){if(e.target.id==="entry-workspace-input")closeEntryGate(false);importWorkspaceZip(file);}e.target.value="";return;
  }
  if(e.target.matches("select[data-field='docProject']")){state.docProject=e.target.value;state.docFilter="Semua";state.docSearch="";saveState();renderView();return;}
  if(e.target.matches("select[data-master-kind]")){state.masterB3Kind=e.target.value;state.masterB3Search="";saveState();renderView();return;}
  if(e.target.matches("input[data-master-b3-id]")){const id=String(e.target.dataset.masterB3Id),selected=new Set((state.masterB3Selected||[]).map(String));if(e.target.checked)selected.add(id);else selected.delete(id);state.masterB3Selected=[...selected];if(e.target.checked)addTriggeredImpacts(["chemical","storage","packaging"]);markNeedsRescreen(`Bahan B3 master ${id} berubah`);saveState();renderView();return;}
  if(e.target.matches("input[data-master-lb3-code]")){const code=String(e.target.dataset.masterLb3Code),selected=new Set((state.masterLB3Selected||[]).map(String));if(e.target.checked)selected.add(code);else selected.delete(code);state.masterLB3Selected=[...selected];if(e.target.checked)addTriggeredImpacts(["chemical","storage",...masterLb3ImpactKeys(code)]);markNeedsRescreen(`Kandidat LB3 master ${code} berubah`);saveState();renderView();return;}
  if(e.target.matches("select[data-compliance-field]")){updateComplianceField(e.target);return;}
  if(e.target.matches("select[data-field]"))updateField(e.target);
  if(e.target.matches("select[data-answer]")){const id=e.target.dataset.answer;state.answers[id]=e.target.value;applyAnswerTriggers(id,e.target.value);markNeedsRescreen(`Jawaban profil ${id} berubah`);saveState();renderView();}
  if(e.target.matches("[data-impact]")){const k=e.target.dataset.impact;state.impacts=e.target.checked?[...new Set([...state.impacts,k])]:state.impacts.filter(x=>x!==k);markNeedsRescreen("Sumber dampak berubah");saveState();renderView();}
  if(e.target.matches("[data-waste]")){const k=e.target.dataset.waste;state.wasteCodes=e.target.checked?[...new Set([...state.wasteCodes,k])]:state.wasteCodes.filter(x=>x!==k);addTriggeredImpacts(e.target.checked?["storage"]:[]);markNeedsRescreen("Kandidat B3/Limbah B3 berubah");saveState();renderView();}
  if(e.target.matches("[data-location]")){const k=e.target.dataset.location;state.locationFlags=e.target.checked?[...new Set([...state.locationFlags,k])]:state.locationFlags.filter(x=>x!==k);markNeedsRescreen("Sensitivitas lokasi berubah");saveState();renderView();}
});
document.addEventListener("submit",e=>{
  if(e.target.id!=="calendar-event-form")return;e.preventDefault();const data=new FormData(e.target),title=String(data.get("title")||"").trim(),date=String(data.get("date")||""),owner=String(data.get("owner")||"").trim(),basis=String(data.get("basis")||"").trim(),frequency=String(data.get("frequency")||"Sekali"),evidence=String(data.get("evidence")||"").trim()||"Belum dilampirkan";if(!title||!date||!owner){showToast("Lengkapi nama agenda, tanggal, dan penanggung jawab.");return;}state.calendarEvents=[...(state.calendarEvents||[]),{id:`event-${Date.now()}`,title,date,owner,basis:basis||"Basis belum dicatat",frequency,evidence,taskId:String(data.get("taskId")||"")||null,status:"Dijadwalkan"}];saveState();renderView();showToast("Register kewajiban ditambahkan dan disimpan di workspace lokal.");
});
document.addEventListener("click",e=>{
  if(!e.target.closest(".search-wrap")){document.getElementById("kbli-suggestions")?.classList.add("hide");}
  if(e.target.closest("#back")){state.step=Math.max(0,state.step-1);renderView();scrollWorkspaceTop();return;}
  if(e.target.closest("#next")){
    if(state.step===0&&(!selectedKbli()||!state.capacity||!state.capacityUnit||!state.activities.length)){showToast("Pilih KBLI, sedikitnya satu kegiatan, lalu isi kapasitas dan satuannya.");return;}
    if(state.step===1&&!state.impacts.length){showToast("Pilih sedikitnya satu sumber dampak yang benar-benar ada.");return;}
    if(state.step===4){state.view="projects";}else state.step=Math.min(4,state.step+1);renderView();scrollWorkspaceTop();return;
  }
  const publicAction=e.target.closest("[data-public-action]");
  if(publicAction){
    e.preventDefault();
    if(publicAction.dataset.publicAction==="open-screening"){openEntryGate(publicAction);return;}
    if(publicAction.dataset.publicAction==="open-regulations"){state.view="regulations";state.regMode="all";renderView();return;}
    if(publicAction.dataset.publicAction==="open-landing"){setPublicMode(true);history.replaceState(null,"",location.pathname);return;}
  }
  const entryAction=e.target.closest("[data-entry-action]");if(entryAction){const actionName=entryAction.dataset.entryAction;if(actionName==="close"){closeEntryGate();return;}if(actionName==="new"){startNewFromEntry();return;}if(actionName==="resume"){resumeFromEntry();return;}if(actionName==="empty"){emptyWorkspaceFromEntry();return;}if(actionName==="load-state"){document.getElementById("entry-state-input")?.click();return;}if(actionName==="load-zip"){document.getElementById("entry-workspace-input")?.click();return;}}
  const directAction=e.target.closest("[data-action]");if(directAction?.dataset.action==="new-project"){e.preventDefault();state=createNewProjectState();renderView();return;}
  const viewEl=e.target.closest("[data-view]");if(viewEl){e.preventDefault();if(viewEl.dataset.view==="screening"){state=createNewProjectState();if(viewEl.dataset.step!==undefined)state.step=+viewEl.dataset.step;}else{state.view=viewEl.dataset.view;if(state.view==="documents")state.documentTask=null;if(state.view==="regulations")state.regMode=viewEl.dataset.regOpen||"all";if(viewEl.dataset.step!==undefined)state.step=+viewEl.dataset.step;}renderView();return;}
  const step=e.target.closest("[data-step]");if(step){state.view="screening";state.step=+step.dataset.step;renderView();scrollWorkspaceTop();return;}
  const result=e.target.closest("[data-kbli-code]");if(result){addKbli({id:result.dataset.kbliId,code:result.dataset.kbliCode,title:result.dataset.kbliTitle,description:result.dataset.kbliDescription});return;}
  const activity=e.target.closest("[data-activity]");if(activity){const k=activity.dataset.activity,adding=!state.activities.includes(k);state.activities=adding?[...state.activities,k]:state.activities.filter(x=>x!==k);markNeedsRescreen("Tahapan/aktivitas proyek berubah");if(adding){const triggers=ACTIVITY_TRIGGERS[k]||[];addTriggeredImpacts(triggers);if(triggers.includes("usedoil"))addWasteCodes(["b105d","b110d"]);if(triggers.includes("chemical")||triggers.includes("packaging"))addWasteCodes(["b104d"]);if(triggers.includes("battery"))addWasteCodes(["a102d","b107d"]);}saveState();renderView();return;}
  const task=e.target.closest("[data-task]");if(task&&!e.target.closest("a")){state.openTask=state.openTask===task.dataset.task?null:task.dataset.task;renderView();return;}
  const tf=e.target.closest("[data-task-filter]");if(tf){state.taskFilter=tf.dataset.taskFilter;renderView();return;}
  const rf=e.target.closest("[data-reg-filter]");if(rf){state.regFilter=rf.dataset.regFilter;renderView();return;}
  const rm=e.target.closest("[data-reg-mode]");if(rm){state.regMode=rm.dataset.regMode;state.regFilter="Semua";renderView();return;}
  const df=e.target.closest("[data-doc-filter]");if(df){state.docFilter=df.dataset.docFilter;renderView();return;}
  const action=e.target.closest("[data-action]");if(!action)return;
  const a=action.dataset.action;
  if(a==="save")saveState(false);
  if(a==="toggle-all-impacts"){state.showAllImpacts=!state.showAllImpacts;renderView();return;}
  if(a==="toggle-all-waste"){state.showAllWaste=!state.showAllWaste;renderView();return;}
  if(a==="remove-kbli")removeKbli(action.dataset.code);
  if(a==="make-primary")makePrimaryKbli(action.dataset.code);
  if(a==="manual-kbli"){const code=document.getElementById("manual-code")?.value.trim(),title=document.getElementById("manual-title")?.value.trim();if(!/^\d{5}$/.test(code||"")||!title)return showToast("Isi kode KBLI final 5 digit dan judul kegiatan.");addKbli({id:`manual-${code}`,code,title,description:"KBLI dimasukkan manual — verifikasi uraian pada OSS."});}
  if(a==="upload-polygon"){document.getElementById("polygon-file-input")?.click();return;}
  if(a==="remove-polygon"){state.polygon=null;markNeedsRescreen("Polygon tapak dihapus");saveState();renderView();showToast("Polygon dihapus dari workspace lokal.");return;}
  if(a==="open-calendar-task"){state.openTask=action.dataset.id;state.view="tasks";renderView();return;}
  if(a==="add-event"){const panel=document.getElementById("calendar-add-panel");if(panel){panel.open=true;panel.scrollIntoView({behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"center"});panel.querySelector("input")?.focus();}return;}
  if(a==="start-task"){
    const id=action.dataset.id,current=progressForTask(id);state.taskProgress[taskProgressKey(id)]={status:"in_progress",done:current.done};state.openTask=id;saveState();renderView();showToast("Tugas dimulai. Ikuti dan centang langkah dari atas ke bawah.");
  }
  if(a==="mark-existing"){
    const id=action.dataset.id,task=buildTasks().find(x=>x.id===id);if(!task)return;
    const done=guideForTask(task).steps.map((_,i)=>i),markedAt=new Intl.DateTimeFormat("id-ID",{day:"2-digit",month:"short",year:"numeric"}).format(new Date()),docs=documentsForTask(id),status=docs.length?(docs.every(doc=>doc.status==="Terverifikasi")?"completed":"evidence_submitted"):"self_declared";
    state.taskProgress[taskProgressKey(id)]={status,done,markedAt};state.openTask=id;saveState();renderView();showToast(status==="completed"?"Tugas ditandai terverifikasi internal karena seluruh bukti berstatus Terverifikasi.":status==="evidence_submitted"?"Langkah dan bukti sudah ada. Tinjau bukti sebelum verifikasi internal.":"Tugas dinyatakan selesai oleh pengguna; bukti masih diperlukan.");
  }
  if(a==="undo-existing"){const id=action.dataset.id;delete state.taskProgress[taskProgressKey(id)];if(state.projectName===DEFAULT_STATE.projectName)delete state.taskProgress[id];state.openTask=id;saveState();renderView();showToast("Tanda sudah dilakukan dibatalkan.");}
  if(a==="reopen-task"){const id=action.dataset.id;state.taskProgress[taskProgressKey(id)]={status:"in_progress",done:[]};state.openTask=id;saveState();renderView();showToast("Tugas dibuka kembali dan checklist siap diperiksa ulang.");}
  if(a==="verify-evidence"){const id=action.dataset.id,docs=documentsForTask(id),progress=progressForTask(id);if(!docs.length){showToast("Belum ada bukti yang dapat ditinjau.");return;}const verifiedAt=new Intl.DateTimeFormat("id-ID",{day:"2-digit",month:"short",year:"numeric"}).format(new Date());state.taskProgress[taskProgressKey(id)]={...progress,status:"completed",verifiedAt,verifiedBy:"Pengguna · tinjauan internal"};state.openTask=id;saveState();renderView();showToast("Bukti ditandai terverifikasi internal. Ini bukan verifikasi instansi.");}
  if(a==="clear-rescreen"){state.complianceReview={...DEFAULT_COMPLIANCE_REVIEW,...(state.complianceReview||{}),reScreenRequired:false,reScreenReason:""};saveState();renderView();showToast("Re-screening ditandai sudah ditinjau; simpan hasil resmi bila tersedia.");}
  if(a==="manage-evidence"){state.documentTask=action.dataset.id;state.docProject=state.projectName;state.docFilter="Semua";state.docSearch="";state.view="documents";renderView();}
  if(a==="back-to-task"||a==="open-linked-task"){state.openTask=action.dataset.id;state.documentTask=null;state.view="tasks";renderView();}
  if(a==="show-all-docs"){state.documentTask=null;state.docProject=state.projectName;state.docFilter="Semua";state.docSearch="";renderView();}
  if(a==="new-project"){state=createNewProjectState();renderView();}
  if(a==="open-project"){const p=demoProjects[+action.dataset.index];state.projectName=p.name;state.docProject=p.name;state.view="screening";state.step=4;renderView();}
  if(a==="upload-doc")document.getElementById("doc-file-input")?.click();
  if(a==="choose-directory"){chooseDocumentDirectory();return;}
  if(a==="export-state"){exportStateFile();return;}
  if(a==="export-workspace"){exportWorkspaceZip();return;}
  if(a==="import-state")document.getElementById("state-file-input")?.click();
  if(a==="import-workspace")document.getElementById("workspace-file-input")?.click();
  if(a==="export-checklist"){exportChecklistFile();return;}
  if(a==="download-doc"){downloadDocumentFile(action.dataset.id);return;}
  if(a==="toggle-map-catalog"){state.mapCatalogOpen=state.mapCatalogOpen!==true;saveState();renderView();return;}
  if(a==="enable-verified-layers"){const verified=window.ENVIRO_OFFICIAL_MAP_LAYERS.filter(layer=>layer.endpoint&&layer.layerName);state.mapLayerPreferences={...(state.mapLayerPreferences||{})};verified.forEach(layer=>{state.mapLayerPreferences[layer.id]={...(state.mapLayerPreferences[layer.id]||{}),visible:true};});saveState();renderView();showToast(`${verified.length} layer terverifikasi diaktifkan. Layer pending tetap tidak dikirim.`);return;}
  if(a==="copy-gis-request"){copyGisRequest(action.dataset.source);return;}
  if(a==="reference-prev"||a==="reference-next"){
    const track=document.getElementById("reference-track");if(!track)return;
    track.scrollBy({left:(a==="reference-next"?1:-1)*Math.min(track.clientWidth*.8,440),behavior:"smooth"});
  }
});

window.addEventListener("hashchange",()=>{
  const map={"#beranda":"home","#penapisan":"screening","#proyek":"projects","#tugas":"tasks","#dokumen":"documents","#kalender":"calendar","#regulasi":"regulations"};
  const v=map[location.hash];
  if(location.hash==="#beranda"){setPublicMode(true);return;}
  if(v){setPublicMode(false);if(v!==state.view){state.view=v;renderView();}}
});
document.addEventListener("DOMContentLoaded",()=>{
  const map={"#beranda":"home","#penapisan":"screening","#proyek":"projects","#tugas":"tasks","#dokumen":"documents","#kalender":"calendar","#regulasi":"regulations"};
  if(!location.hash||location.hash==="#top"||location.hash==="#beranda"||location.hash.startsWith("#public-")){setPublicMode(true);restoreDocumentDirectory();return;}
  state.view=map[location.hash]||"home";
  renderView();
  restoreDocumentDirectory();
});
