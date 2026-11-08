export type Category = {
  slug: string
  name: string
  description: string
}

export type Article = {
  slug: string
  title: string
  excerpt: string
  category: string
  author: string
  authorRole: string
  date: string
  readingTime: number
  image: string
  imageAlt: string
  imageCaption: string
  featured?: boolean
  body: string
}

export type Edition = {
  id: string
  number: string
  title: string
  period: string
  date: string
  cover: string
  description: string
  highlights: string[]
  pages: number
  file: string
  size: string
}

export const site = {
  name: 'Lembar Warta',
  tagline: 'Mencerdaskan, Menyatukan, Mengabarkan',
  description:
    'Buletin bulanan untuk pesantren, desa, organisasi, dan komunitas. Kabar yang tenang, tulisan yang menenangkan, dan arsip yang mudah dirawat.',
  founded: 2018,
  edition: 'Edisi No. 24',
  period: 'November 2026',
  email: 'redaksi@lembarwarta.id',
  phone: '+62 812-3456-7890',
  address: 'Jalan Raya Pesantren No. 12, Sumber Makmur, Kabupaten Malang, Jawa Timur 65123',
  hours: 'Senin–Jumat, 08.00–16.00 WIB',
  instagram: 'https://instagram.com/lembarwarta',
  facebook: 'https://facebook.com/lembarwarta',
  youtube: 'https://youtube.com/@lembarwarta',
}

export const categories: Category[] = [
  {
    slug: 'pesantren',
    name: 'Pesantren',
    description: 'Pendidikan, tradisi, dan denyut kehidupan para santri.',
  },
  {
    slug: 'desa',
    name: 'Desa',
    description: 'Cerita warga, pertanian, dan pembangunan kampung.',
  },
  {
    slug: 'pendidikan',
    name: 'Pendidikan',
    description: 'Literasi, sekolah, dan ruang-ruang belajar yang tumbuh.',
  },
  {
    slug: 'komunitas',
    name: 'Komunitas',
    description: 'Gotong royong, budaya, dan kehidupan bersama.',
  },
  {
    slug: 'redaksi',
    name: 'Redaksi',
    description: 'Catatan editor dan proses di balik setiap terbitan.',
  },
]

export const articles: Article[] = [
  {
    slug: 'menjaga-tradisi-merawat-masa-depan',
    title: 'Menjaga Tradisi, Merawat Masa Depan',
    excerpt:
      'Catatan dari Musyawarah Tahunan Pesantren Al-Hikmah: tentang cara sebuah komunitas merawat akar tanpa menutup pintu pada perubahan.',
    category: 'pesantren',
    author: 'Ahmad Fauzi',
    authorRole: 'Pemimpin Redaksi',
    date: '2026-11-06',
    readingTime: 8,
    image: 'images/pesantren.svg',
    imageAlt: 'Ilustrasi kubah dan menara pesantren di antara pepohonan',
    imageCaption: 'Ilustrasi: Lembar Warta',
    featured: true,
    body: `
      <p>Pagi di Pesantren Al-Hikmah dimulai sebelum matahari benar-benar naik. Dari beranda asrama, suara lantunan kitab bercampur dengan bunyi sapu yang menyapu halaman. Di ruang utama, kursi-kursi sudah ditata melingkar. Hari itu, musyawarah tahunan pesantren akan dimulai.</p>
      <p>Musyawarah bukan sekadar acara seremonial. Di ruang itulah keputusan-keputusan kecil yang menentukan hidup banyak orang diambil: jadwal pengajian, pengelolaan dapur, beasiswa santri, hingga rencana pembangunan ruang kelas baru. Semuanya dibicarakan dengan bahasa yang sederhana, tetapi dengan kesungguhan yang terasa.</p>
      <h2>Tradisi sebagai akar, bukan kandang</h2>
      <p>Pengasuh pesantren, KH. Abdul Rahman, membuka forum dengan sebuah kalimat yang kemudian banyak dikutip: “Tradisi itu akar. Akar tidak pernah melarang pohon tumbuh tinggi; ia justru menjaga pohon agar tidak tumbang.”</p>
      <p>Kalimat itu menjadi benang merah sepanjang diskusi. Para pengurus membicarakan bagaimana mempertahankan tradisi bandongan dan sorogan, tetapi juga membuka ruang bagi metode belajar yang lebih partisipatif. Ada usulan agar santri mendapat pendampingan menulis, ada pula gagasan untuk menghadirkan pelatihan literasi digital bagi para ustaz.</p>
      <blockquote><p>“Kita tidak sedang memilih antara masa lalu dan masa depan. Kita sedang merawat keduanya dengan tangan yang sama.”</p></blockquote>
      <p>Yang menarik, perdebatan berjalan tanpa ketegangan yang berlebihan. Perbedaan pendapat diterima sebagai bagian dari ikhtiar bersama. Ketika seorang pengurus muda mengusulkan anggaran untuk perpustakaan digital, seorang sesepuh bertanya tentang listrik dan perawatan perangkat. Jawabannya tidak langsung memuaskan semua orang, tetapi keputusan akhirnya diambil bersama: perpustakaan digital dimulai dari satu rak, satu komputer, dan satu orang yang bertanggung jawab.</p>
      <h2>Menyiapkan generasi yang fasih membaca zaman</h2>
      <p>Pesan yang paling sering muncul adalah pentingnya kemampuan membaca zaman. Santri tidak cukup hanya hafal teks; ia perlu memahami konteks. Karena itu, musyawarah menyepakati tiga program kecil yang akan berjalan sepanjang tahun: kelas menulis bulanan, klinik literasi untuk santri baru, dan ruang diskusi terbuka setiap Sabtu malam.</p>
      <p>Program-program itu tidak megah. Anggarannya pun terbatas. Namun para pengurus percaya, perubahan besar jarang lahir dari satu lompatan besar. Ia biasanya lahir dari kebiasaan-kebiasaan kecil yang dirawat dengan sabar.</p>
      <p>Menjelang dhuhur, musyawarah ditutup dengan doa. Kursi-kursi dilipat kembali, halaman pesantren kembali lengang. Namun keputusan-keputusan pagi itu akan hidup jauh setelah acara selesai—di ruang kelas, di perpustakaan, dan di percakapan-percakapan santri yang tumbuh dari satu pertanyaan sederhana: apa yang bisa kita rawat hari ini untuk masa depan?</p>
    `,
  },
  {
    slug: 'sawah-yang-kembali-hijau',
    title: 'Sawah yang Kembali Hijau',
    excerpt:
      'Kisah para petani Sumber Makmur yang perlahan beralih ke pertanian organik, dan bagaimana satu musim panen mengubah cara mereka melihat tanah.',
    category: 'desa',
    author: 'Siti Nurhaliza',
    authorRole: 'Kontributor Desa',
    date: '2026-11-05',
    readingTime: 7,
    image: 'images/sawah.svg',
    imageAlt: 'Ilustrasi terasering sawah dengan petani dan matahari pagi',
    imageCaption: 'Ilustrasi: Lembar Warta',
    body: `
      <p>Di Desa Sumber Makmur, sawah bukan hanya sumber penghidupan. Ia adalah kalender, ruang pertemuan, dan tempat anak-anak belajar mengenal nama-nama burung. Pagi itu, Pak Sukarman berdiri di pematang, memandang hamparan yang mulai menguning. Ia tersenyum, lalu berkata, “Tanah ini sudah lama memberi. Sekarang giliran kita memberi lagi.”</p>
      <p>Tiga tahun lalu, Pak Sukarman adalah salah satu petani yang paling bergantung pada pupuk kimia. Hasil panen memang tinggi, tetapi biaya produksi terus naik. Ia mulai merasa ada yang salah ketika tanah di petaknya semakin keras dan cacing tanah sulit ditemukan.</p>
      <h2>Belajar dari satu petak kecil</h2>
      <p>Perubahan dimulai dari satu petak percobaan seluas seperempat hektare. Bersama beberapa petani muda, Pak Sukarman belajar membuat kompos dari jerami dan kotoran ternak, menanam tanaman penutup tanah, dan mengatur air secara bergilir. Hasilnya tidak langsung terlihat. Pada musim pertama, panennya bahkan lebih rendah.</p>
      <p>Namun pada musim kedua, sesuatu berubah. Tanah terasa lebih gembur. Daun padi lebih hijau. Serangga yang dulu dianggap hama mulai kembali, diikuti burung-burung yang memangsa mereka. “Saya baru sadar, sawah itu bukan pabrik. Dia hidup,” ujar Pak Sukarman.</p>
      <blockquote><p>“Kalau kita mendengar tanah, ia akan memberi tahu apa yang ia butuhkan. Masalahnya, kita sering terlalu sibuk bicara.”</p></blockquote>
      <h2>Musim panen yang berbeda</h2>
      <p>Panen tahun ini menjadi istimewa. Hasilnya memang belum melampaui panen konvensional, tetapi biaya produksi turun hampir sepertiga. Berasnya pun mendapat harga lebih baik dari pembeli lokal yang mulai mencari produk organik. Kelompok tani kini menabung untuk membeli mesin penggilingan kecil agar bisa mengolah hasil sendiri.</p>
      <p>Yang paling berubah mungkin cara pandang. Para petani tidak lagi melihat musim sebagai untung-untungan. Mereka mulai mencatat, mengamati, dan mendiskusikan apa yang terjadi di sawah. Di balik rumah Pak Sukarman, sebuah papan tulis kecil dipenuhi catatan curah hujan, jenis pupuk, dan tanggal tanam.</p>
      <p>Menjelang sore, anak-anak berlarian di pematang sambil membawa layangan. Di kejauhan, seseorang menyalakan mesin air. Sawah itu kembali hijau, bukan karena keajaiban, melainkan karena kesabaran yang diulang setiap hari.</p>
    `,
  },
  {
    slug: 'literasi-di-sudut-kampung',
    title: 'Literasi di Sudut Kampung',
    excerpt:
      'Sebuah perpustakaan kecil di garasi rumah tak pernah sepi. Kisah para relawan yang menjaga ruang baca untuk anak-anak kampung.',
    category: 'pendidikan',
    author: 'Rina Kartika',
    authorRole: 'Kontributor Pendidikan',
    date: '2026-11-04',
    readingTime: 6,
    image: 'images/literasi.svg',
    imageAlt: 'Ilustrasi buku terbuka dengan cahaya lampu dan rak buku',
    imageCaption: 'Ilustrasi: Lembar Warta',
    body: `
      <p>Setiap sore, garasi rumah Bu Endang berubah menjadi ruang baca. Rak-rak kayu sederhana dipenuhi buku cerita, ensiklopedia bekas, dan majalah anak. Di lantai, beberapa anak duduk bersila, membaca dengan suara pelan. Sesekali terdengar tawa ketika seorang anak menemukan gambar yang lucu.</p>
      <p>Perpustakaan itu bernama “Pojok Baca Ceria”. Awalnya hanya berisi dua puluh buku sumbangan tetangga. Kini koleksinya lebih dari enam ratus buku, sebagian hasil donasi, sebagian dibeli dari uang kas yang dikumpulkan para relawan.</p>
      <h2>Ruang yang tidak menuntut</h2>
      <p>Bu Endang tidak pernah memaksa anak-anak untuk membaca. Ia hanya membuka pintu, menyediakan tikar, dan kadang menyiapkan teh hangat. “Anak-anak datang karena merasa diterima, bukan karena diwajibkan,” katanya.</p>
      <p>Pendekatan itu ternyata berhasil. Anak-anak yang awalnya hanya datang untuk bermain perlahan mulai tertarik pada buku. Ada yang awalnya hanya melihat gambar, lalu mulai membaca satu paragraf, lalu satu halaman. Seorang anak yang dulu malu berbicara kini rutin membacakan cerita untuk teman-temannya.</p>
      <blockquote><p>“Buku tidak harus mahal untuk bisa mengubah hidup seseorang. Yang penting ada orang yang mau menemani.”</p></blockquote>
      <h2>Menjaga keberlanjutan</h2>
      <p>Pojok Baca Ceria tidak berjalan sendiri. Ada lima relawan yang bergiliran menjaga setiap sore, seorang pensiunan guru yang membantu memilih buku, dan beberapa pemuda karang taruna yang membuat rak baru. Mereka juga mengadakan kelas menggambar dan menulis cerita setiap Sabtu.</p>
      <p>Tantangan terbesar bukan mencari buku, tetapi menjaga semangat. Ada hari-hari ketika hanya dua anak yang datang. Ada bulan-bulan ketika kas kosong. Namun Bu Endang percaya, ruang sekecil apa pun tetap berarti. “Kalau hanya satu anak yang datang, hari itu tetap layak dirawat,” ujarnya.</p>
      <p>Sore itu, seorang anak bernama Raka menutup buku dan bertanya, “Bu, besok bukanya jam berapa?” Pertanyaan sederhana itu seolah menjadi jawaban atas semua kelelahan.</p>
    `,
  },
  {
    slug: 'kiai-dan-teknologi',
    title: 'Kiai dan Teknologi',
    excerpt:
      'Berdakwah dengan bahasa zaman: bagaimana pesantren-pesantren kecil mulai merawat kanal digital tanpa kehilangan adab.',
    category: 'pesantren',
    author: 'M. Ilham Ramadhan',
    authorRole: 'Kontributor Pesantren',
    date: '2026-11-02',
    readingTime: 7,
    image: 'images/mimbar.svg',
    imageAlt: 'Ilustrasi mihrab masjid dengan lentera dan pola geometris',
    imageCaption: 'Ilustrasi: Lembar Warta',
    body: `
      <p>Di sebuah ruang sederhana di belakang masjid, seorang kiai muda menyalakan lampu ring. Di depannya, sebuah ponsel diletakkan di atas tripod kecil. Dalam hitungan menit, kajian malam itu akan disiarkan ke ratusan jamaah yang tersebar di berbagai kota.</p>
      <p>Pemandangan seperti ini semakin biasa di pesantren-pesantren kecil. Teknologi tidak lagi dianggap sebagai ancaman, melainkan alat untuk memperluas jangkauan. Namun para kiai sepakat: yang berubah adalah media, bukan adab.</p>
      <h2>Memilih bahasa yang tepat</h2>
      <p>Ustaz Fahmi, pengelola kanal digital sebuah pesantren di Malang, bercerita bahwa tantangan terbesar bukan membuat video, tetapi menjaga isi. “Kalau hanya mengejar tontonan, kita bisa kehilangan kedalaman. Kami memilih durasi pendek, tetapi tetap menyiapkan naskah dan rujukan,” katanya.</p>
      <p>Kanal digital itu kini memiliki sekitar dua puluh ribu pengikut. Sebagian besar adalah alumni dan orang tua santri. Kontennya sederhana: potongan kajian, penjelasan hadis, dan dokumentasi kegiatan pesantren. Tidak ada musik berlebihan, tidak ada potongan yang dramatis. Justru kesederhanaan itu yang membuatnya dipercaya.</p>
      <blockquote><p>“Teknologi itu seperti kendaraan. Yang menentukan arah tetap sopirnya. Kalau sopirnya tidak punya ilmu, kendaraan cepat hanya membawa kita lebih jauh ke tempat yang salah.”</p></blockquote>
      <h2>Menjaga adab di ruang digital</h2>
      <p>Di pesantren, pelatihan media sosial bukan hanya soal teknik. Santri belajar tentang privasi, izin mengutip, dan cara menanggapi komentar yang berbeda pendapat. Mereka juga diajari untuk tidak menyebarkan konten yang belum diverifikasi.</p>
      <p>Bagi Kiai Abdul Rahman, kehadiran pesantren di ruang digital adalah bentuk tanggung jawab. “Kalau ruang publik dipenuhi suara yang keras, kita perlu hadir dengan suara yang menenangkan. Bukan untuk menang, tetapi untuk menyeimbangkan,” ujarnya.</p>
      <p>Malam semakin larut. Kajian selesai, lampu ring dimatikan. Namun percakapan di kolom komentar masih berlanjut. Seorang jamaah menulis, “Terima kasih, saya jadi ingin belajar lagi.” Pesan kecil itu mungkin tidak akan pernah masuk berita. Tetapi di ruang itulah dakwah menemukan bentuknya yang paling sederhana.</p>
    `,
  },
  {
    slug: 'gotong-royong-di-musim-panen',
    title: 'Gotong Royong di Musim Panen',
    excerpt:
      'Ketika lumbung desa dibuka, yang dibagi bukan hanya beras, tetapi juga kepercayaan dan rasa saling menjaga.',
    category: 'desa',
    author: 'Bayu Prakoso',
    authorRole: 'Kontributor Desa',
    date: '2026-10-30',
    readingTime: 5,
    image: 'images/panen.svg',
    imageAlt: 'Ilustrasi petani membawa hasil panen di antara batang padi',
    imageCaption: 'Ilustrasi: Lembar Warta',
    body: `
      <p>Musim panen selalu membawa ritme tersendiri di Desa Sumber Makmur. Sejak pagi, warga sudah berkumpul di lumbung desa. Ada yang membawa karung, ada yang membawa timbangan, dan tidak sedikit yang datang hanya untuk membantu. Di sudut halaman, anak-anak bermain di tumpukan jerami.</p>
      <p>Lumbung desa didirikan empat tahun lalu oleh kelompok tani bersama pemerintah desa. Tujuannya sederhana: memastikan tidak ada warga yang kelaparan ketika musim paceklik datang, dan memastikan harga gabah tidak dipermainkan tengkulak.</p>
      <h2>Beras untuk semua, bukan untuk segelintir</h2>
      <p>Setiap keluarga menyetor sebagian hasil panennya ke lumbung. Jumlahnya tidak dipaksakan; kesepakatan dibuat berdasarkan kemampuan. Mereka yang menyetor lebih banyak mendapat catatan tersendiri, tetapi tidak ada keistimewaan yang mencolok. Semua warga berhak mengambil sesuai kebutuhan.</p>
      <p>“Dulu kami takut menyimpan beras. Takut rusak, takut hilang. Sekarang justru lebih tenang karena dikelola bersama,” kata Bu Sulastri, salah satu anggota kelompok tani.</p>
      <blockquote><p>“Kalau disimpan sendiri, beras hanya jadi persediaan. Kalau disimpan bersama, ia menjadi kekuatan.”</p></blockquote>
      <p>Pengelolaan lumbung tidak selalu mulus. Pernah terjadi salah catat, pernah pula ada warga yang merasa pembagiannya tidak adil. Namun forum warga selalu menjadi tempat menyelesaikan persoalan. Tidak ada keputusan yang diambil diam-diam.</p>
      <h2>Perayaan kecil di akhir panen</h2>
      <p>Setelah pembagian selesai, warga makan bersama di halaman. Menunya sederhana: nasi, sayur, ikan asin, dan sambal. Tidak ada pidato panjang. Hanya tawa, cerita, dan rasa syukur yang tidak perlu diterjemahkan.</p>
      <p>Menjelang maghrib, lumbung kembali dikunci. Di dalamnya tersimpan karung-karung beras untuk bulan-bulan mendatang. Di luar, warga berjalan pulang dengan hati yang lebih ringan. Musim panen memang tentang hasil, tetapi gotong royong adalah tentang sesuatu yang lebih lama: kepercayaan.</p>
    `,
  },
  {
    slug: 'pesantren-ramah-anak',
    title: 'Pesantren Ramah Anak',
    excerpt:
      'Ruang aman untuk tumbuh: bagaimana satu pesantren belajar mendengar, melindungi, dan menemani anak-anak yang jauh dari rumah.',
    category: 'pendidikan',
    author: 'Nadia Safitri',
    authorRole: 'Kontributor Pendidikan',
    date: '2026-10-27',
    readingTime: 6,
    image: 'images/anak.svg',
    imageAlt: 'Ilustrasi anak-anak bermain layangan di bawah pohon dekat sekolah',
    imageCaption: 'Ilustrasi: Lembar Warta',
    body: `
      <p>Di sudut halaman pesantren, tiga anak duduk melingkar bersama seorang pembimbing. Mereka tidak sedang menghafal kitab. Mereka sedang bercerita tentang hari yang melelahkan. Pembimbing mendengarkan tanpa menyela, sesekali mencatat hal-hal kecil yang perlu ditindaklanjuti.</p>
      <p>Kegiatan itu bagian dari program “Ruang Aman”, sebuah inisiatif yang dimulai dua tahun lalu. Latar belakangnya sederhana: banyak santri baru datang dengan rasa cemas, rindu rumah, atau pengalaman yang belum pernah mereka ceritakan kepada siapa pun.</p>
      <h2>Mendengar sebelum menasihati</h2>
      <p>Program ini melatih para pembimbing untuk mendengar aktif. Mereka tidak langsung memberi nasihat, tidak menghakimi, dan tidak membocorkan cerita anak. Jika ada persoalan serius, mereka merujuk kepada tim yang lebih berwenang dengan persetujuan anak.</p>
      <p>“Dulu kami berpikir tugas kami hanya mengajar. Sekarang kami sadar, mendampingi juga bagian dari mengajar,” kata Ustazah Laila, salah satu pembimbing.</p>
      <blockquote><p>“Anak yang merasa aman akan lebih mudah belajar. Anak yang merasa didengar akan lebih berani bertanya.”</p></blockquote>
      <h2>Perubahan yang tidak selalu terlihat</h2>
      <p>Hasil program ini sulit diukur dengan angka. Namun para guru mencatat perubahan kecil: santri yang tadinya pendiam mulai mau bergabung dalam diskusi, santri yang sering melanggar aturan mulai mau menceritakan alasannya, dan orang tua yang tadinya cemas mulai merasa lebih tenang.</p>
      <p>Pesantren juga memperbaiki hal-hal sederhana: penerangan di lorong asrama, jadwal makan yang lebih teratur, dan ruang khusus untuk anak yang ingin menangis tanpa ditertawakan. Perubahan-perubahan itu terlihat sepele, tetapi bagi anak-anak, itulah wajah pesantren yang sesungguhnya.</p>
      <p>Menjelang sore, anak-anak kembali ke asrama. Salah satu dari mereka berhenti di depan pintu, lalu berkata kepada pembimbing, “Besok cerita lagi, ya, Ustazah.” Jawaban itu cukup untuk membuat program ini terus berjalan.</p>
    `,
  },
  {
    slug: 'mengapa-buletin-cetak-masih-penting',
    title: 'Mengapa Buletin Cetak Masih Penting',
    excerpt:
      'Catatan dari meja redaksi tentang kertas, kepercayaan, dan kebiasaan membaca yang tidak perlu tergesa-gesa.',
    category: 'redaksi',
    author: 'Redaksi Lembar Warta',
    authorRole: 'Catatan Editor',
    date: '2026-10-24',
    readingTime: 4,
    image: 'images/redaksi.svg',
    imageAlt: 'Ilustrasi mesin tik, kertas, cangkir kopi, dan pena',
    imageCaption: 'Ilustrasi: Lembar Warta',
    body: `
      <p>Ada sesuatu yang berbeda ketika sebuah tulisan hadir di atas kertas. Ia tidak bisa di-scroll dengan cepat, tidak bisa ditutup dengan satu usapan jari, dan tidak bisa digantikan oleh notifikasi berikutnya. Ia menuntut waktu. Dan justru karena itu, ia memberi ruang.</p>
      <p>Di era ketika berita datang bertubi-tubi, buletin cetak mungkin terdengar kuno. Namun bagi banyak komunitas—pesantren, desa, organisasi—buletin justru menjadi salah satu bentuk komunikasi yang paling dipercaya.</p>
      <h2>Kepercayaan yang bisa dipegang</h2>
      <p>Buletin tidak hanya menyampaikan informasi. Ia menunjukkan bahwa seseorang telah memeriksa, menimbang, dan memilih. Proses itu terasa dalam tata bahasa yang rapi, dalam nama penulis yang dicantumkan, dan dalam keberanian mengoreksi diri di edisi berikutnya.</p>
      <p>Ketika sebuah kabar dibaca di kertas, ia juga lebih mudah didiskusikan. Orang bisa menunjuk satu paragraf, melipat halaman, atau membawa buletin ke pertemuan warga. Ia menjadi benda bersama, bukan sekadar tautan yang hilang di grup percakapan.</p>
      <blockquote><p>“Kertas tidak membuat tulisan menjadi lebih benar. Tetapi ia memberi kita kesempatan untuk berhenti dan berpikir sebelum membagikannya.”</p></blockquote>
      <h2>Merawat tradisi menulis</h2>
      <p>Buletin juga menjadi sekolah bagi penulis-penulis baru. Banyak kontributor Lembar Warta adalah guru, santri, ibu rumah tangga, dan pemuda desa yang belum pernah menulis untuk publik. Mereka belajar mewawancarai, menyusun, dan menyunting. Keterampilan itu tidak hilang setelah edisi selesai.</p>
      <p>Kami tidak menolak digital. Situs ini adalah rumah baru bagi tulisan-tulisan kami. Namun kami percaya, keduanya bisa berjalan bersama: digital untuk jangkauan, cetak untuk kedalaman.</p>
      <p>Edisi ini kami tutup dengan rasa terima kasih kepada para pembaca yang masih menyimpan buletin di meja, di lemari, atau di rak masjid. Tulisan-tulisan ini hidup karena ada yang membacanya dengan tenang.</p>
    `,
  },
  {
    slug: 'lentera-ramadan-di-kampung-nelayan',
    title: 'Lentera Ramadan di Kampung Nelayan',
    excerpt:
      'Tradisi memasang lentera menjelang maghrib, dan bagaimana ia merawat ingatan kolektif sebuah kampung di tepi laut.',
    category: 'komunitas',
    author: 'Hasan Basri',
    authorRole: 'Kontributor Komunitas',
    date: '2026-10-20',
    readingTime: 5,
    image: 'images/lentera.svg',
    imageAlt: 'Ilustrasi lentera tergantung di atas laut dengan perahu dan bulan',
    imageCaption: 'Ilustrasi: Lembar Warta',
    body: `
      <p>Menjelang maghrib, Kampung Nelayan di pesisir timur mulai berubah. Lentera-lentera kecil digantung di depan rumah, di tiang dermaga, dan di haluan perahu. Cahayanya tidak terang, tetapi cukup untuk mengingatkan bahwa Ramadan telah datang.</p>
      <p>Tradisi ini sudah berlangsung puluhan tahun. Tidak ada yang tahu persis kapan dimulai. Yang diingat warga hanyalah cerita para orang tua: lentera dipasang agar nelayan yang pulang terlambat bisa menemukan jalan, dan agar anak-anak belajar bahwa cahaya selalu punya tempat di tengah gelap.</p>
      <h2>Lentera sebagai bahasa bersama</h2>
      <p>Setiap keluarga memiliki cara sendiri membuat lentera. Ada yang menggunakan kaleng bekas, ada yang memakai kertas minyak berwarna, ada pula yang membuat rangka dari bambu. Bentuknya sederhana, tetapi ketika dipasang bersama-sama, kampung itu seperti berbicara dalam satu bahasa.</p>
      <p>Bagi Pak Harun, nelayan yang sudah melaut sejak usia remaja, lentera adalah penanda waktu. “Kalau lampu sudah banyak, berarti sebentar lagi bedug. Kami di laut juga tahu, waktunya pulang,” katanya.</p>
      <blockquote><p>“Cahaya kecil tidak perlu bersaing dengan matahari. Tugasnya hanya menemani malam.”</p></blockquote>
      <h2>Menjaga tradisi, membuka ruang</h2>
      <p>Dalam beberapa tahun terakhir, tradisi ini mulai melibatkan anak-anak muda. Mereka membuat lentera dari bahan daur ulang, mengadakan lomba, dan mendokumentasikannya untuk arsip kampung. Ada juga kelompok ibu-ibu yang menyiapkan takjil bersama di halaman masjid.</p>
      <p>Yang dijaga bukan hanya lentera, tetapi juga kebiasaan berkumpul. Di tengah kesibukan masing-masing, Ramadan memberi alasan untuk duduk bersama, berbagi cerita, dan saling mengingatkan.</p>
      <p>Malam semakin gelap. Dari kejauhan, perahu-perahu kembali ke dermaga, ditemani cahaya kecil di bibir pantai. Lentera itu tidak menyelesaikan semua persoalan kampung. Tetapi ia cukup untuk membuat orang merasa tidak sendirian.</p>
    `,
  },
  {
    slug: 'koperasi-desa-dari-simpanan-kecil',
    title: 'Koperasi Desa: Dari Simpanan Kecil Menjadi Kekuatan Bersama',
    excerpt:
      'Bagaimana koperasi warga membantu ibu-ibu membuka usaha, membayar sekolah anak, dan menemukan keberanian untuk bermimpi.',
    category: 'komunitas',
    author: 'Dewi Lestari',
    authorRole: 'Kontributor Komunitas',
    date: '2026-10-16',
    readingTime: 6,
    image: 'images/koperasi.svg',
    imageAlt: 'Ilustrasi warung desa, timbangan, dan karung hasil bumi',
    imageCaption: 'Ilustrasi: Lembar Warta',
    body: `
      <p>Di sebuah ruangan kecil di samping balai desa, sekelompok ibu-ibu duduk melingkar. Di depan mereka, sebuah buku besar terbuka. Mereka sedang membahas simpanan bulanan, pinjaman usaha, dan rencana pembelian alat jahit bersama.</p>
      <p>Koperasi ini dimulai sepuluh tahun lalu dengan modal awal yang sangat kecil. Setiap anggota menyetor uang secukupnya. Tidak ada paksaan, tidak ada target yang memberatkan. Yang penting adalah kebiasaan menyisihkan, sekecil apa pun.</p>
      <h2>Modal kecil, keberanian besar</h2>
      <p>Bu Aminah adalah salah satu anggota pertama. Ia meminjam uang untuk membeli bahan baku kue. Usahanya berkembang perlahan. Kini ia memiliki dua karyawan dan rutin memasok kue ke warung-warung sekitar. “Dulu saya takut meminjam. Sekarang saya sadar, yang paling mahal bukan bunga, tetapi tidak berani mencoba,” katanya.</p>
      <p>Koperasi tidak hanya soal uang. Setiap bulan, anggota mengadakan pertemuan untuk belajar pembukuan sederhana, pemasaran, dan cara menghitung keuntungan. Mereka juga saling membantu ketika ada anggota yang sakit atau kehilangan keluarga.</p>
      <blockquote><p>“Koperasi bukan tempat orang kaya memberi pinjaman. Koperasi adalah tempat orang biasa belajar saling percaya.”</p></blockquote>
      <h2>Menghadapi tantangan</h2>
      <p>Perjalanan koperasi tidak selalu mulus. Ada pinjaman yang macet, ada anggota yang keluar, dan ada masa ketika kas hampir kosong. Namun sistem yang sederhana—rapat rutin, catatan terbuka, dan musyawarah—membantu mereka bertahan.</p>
      <p>Sekarang koperasi memiliki sekitar seratus anggota. Mereka sedang menyiapkan unit usaha baru: pengolahan hasil bumi dan pemasaran daring. Anak-anak muda dilibatkan untuk membantu foto produk dan mengelola media sosial.</p>
      <p>Pertemuan sore itu ditutup dengan senyum dan gelak tawa. Di luar, hujan mulai turun. Di dalam, buku besar itu ditutup dengan hati-hati. Angka-angka di dalamnya memang kecil, tetapi ia menyimpan mimpi yang tidak kecil: masa depan yang lebih baik, dibangun sedikit demi sedikit.</p>
    `,
  },
]

export const editions: Edition[] = [
  {
    id: 'edisi-24-november-2026',
    number: 'No. 24',
    title: 'Menjaga Tradisi, Merawat Masa Depan',
    period: 'November 2026',
    date: '2026-11-01',
    cover: 'images/pesantren.svg',
    description:
      'Laporan utama dari Musyawarah Tahunan Pesantren Al-Hikmah, disertai catatan dari desa, ruang baca kampung, dan meja redaksi.',
    highlights: [
      'Musyawarah tahunan dan masa depan pesantren',
      'Petani Sumber Makmur beralih ke pertanian organik',
      'Pojok Baca Ceria: ruang aman di sudut kampung',
    ],
    pages: 5,
    file: 'pdf/lembar-warta-edisi-24-november-2026.pdf',
    size: '0,1 MB',
  },
  {
    id: 'edisi-23-oktober-2026',
    number: 'No. 23',
    title: 'Musim Panen dan Janji Kesejahteraan',
    period: 'Oktober 2026',
    date: '2026-10-01',
    cover: 'images/panen.svg',
    description:
      'Menelusuri lumbung desa, harga gabah, dan gotong royong yang membuat musim panen terasa lebih ringan.',
    highlights: [
      'Lumbung desa yang dikelola bersama',
      'Kisah para perempuan di balik panen',
      'Catatan redaksi: menulis tentang tanah',
    ],
    pages: 5,
    file: 'pdf/lembar-warta-edisi-23-oktober-2026.pdf',
    size: '0,1 MB',
  },
  {
    id: 'edisi-22-september-2026',
    number: 'No. 22',
    title: 'Ruang Belajar yang Tak Pernah Sepi',
    period: 'September 2026',
    date: '2026-09-01',
    cover: 'images/literasi.svg',
    description:
      'Edisi khusus pendidikan: perpustakaan kampung, guru-guru penggerak, dan anak-anak yang menemukan keberanian untuk bertanya.',
    highlights: [
      'Perpustakaan kecil di garasi rumah',
      'Guru penggerak di sekolah pinggiran',
      'Tips membangun pojok baca di rumah',
    ],
    pages: 5,
    file: 'pdf/lembar-warta-edisi-22-september-2026.pdf',
    size: '0,1 MB',
  },
  {
    id: 'edisi-21-agustus-2026',
    number: 'No. 21',
    title: 'Merawat Kampung, Merayakan Kemerdekaan',
    period: 'Agustus 2026',
    date: '2026-08-01',
    cover: 'images/anak.svg',
    description:
      'Catatan dari perayaan kemerdekaan di kampung, lomba-lomba sederhana, dan makna merdeka bagi warga kecil.',
    highlights: [
      'Perayaan 17 Agustus di Sumber Makmur',
      'Pesan para sesepuh kampung',
      'Anak-anak dan mimpi tentang masa depan',
    ],
    pages: 5,
    file: 'pdf/lembar-warta-edisi-21-agustus-2026.pdf',
    size: '0,1 MB',
  },
  {
    id: 'edisi-20-juli-2026',
    number: 'No. 20',
    title: 'Cahaya di Tepi Laut',
    period: 'Juli 2026',
    date: '2026-07-01',
    cover: 'images/lentera.svg',
    description:
      'Kisah komunitas nelayan, tradisi lentera, dan cara warga menjaga laut agar tetap memberi kehidupan.',
    highlights: [
      'Tradisi lentera di Kampung Nelayan',
      'Nelayan muda dan tantangan perubahan iklim',
      'Resep takjil dari dapur warga',
    ],
    pages: 5,
    file: 'pdf/lembar-warta-edisi-20-juli-2026.pdf',
    size: '0,1 MB',
  },
  {
    id: 'edisi-19-juni-2026',
    number: 'No. 19',
    title: 'Dari Simpanan Kecil Menjadi Kekuatan',
    period: 'Juni 2026',
    date: '2026-06-01',
    cover: 'images/koperasi.svg',
    description:
      'Potret koperasi warga, usaha kecil yang tumbuh, dan solidaritas yang dirawat dari bulan ke bulan.',
    highlights: [
      'Koperasi desa dan keberanian memulai usaha',
      'Belajar pembukuan sederhana',
      'Profil pengrajin lokal',
    ],
    pages: 5,
    file: 'pdf/lembar-warta-edisi-19-juni-2026.pdf',
    size: '0,1 MB',
  },
]

export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}

export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(`${iso}T00:00:00`))
}

export function formatShortDate(iso: string): string {
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(`${iso}T00:00:00`))
}

export function categoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug)
}

export function categoryName(slug: string): string {
  return categoryBySlug(slug)?.name ?? slug
}

export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug)
}

export function articlesByCategory(slug: string): Article[] {
  return articles.filter((article) => article.category === slug)
}

export function relatedArticles(article: Article, limit = 3): Article[] {
  const sameCategory = articles.filter(
    (item) => item.slug !== article.slug && item.category === article.category,
  )
  const others = articles.filter(
    (item) => item.slug !== article.slug && item.category !== article.category,
  )
  return [...sameCategory, ...others].slice(0, limit)
}

export function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}
