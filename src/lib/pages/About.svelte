<script lang="ts">
  import PageHeader from '../components/PageHeader.svelte'
  import { initials, site } from '../data'

  const team = [
    { name: 'Ahmad Fauzi', role: 'Pemimpin Redaksi', note: 'Menulis tentang pesantren, tradisi, dan perubahan sosial.' },
    { name: 'Siti Nurhaliza', role: 'Redaktur Desa', note: 'Mendampingi cerita-cerita warga dan pertanian.' },
    { name: 'Rina Kartika', role: 'Redaktur Pendidikan', note: 'Merawat isu literasi dan ruang belajar.' },
    { name: 'M. Ilham Ramadhan', role: 'Redaktur Pesantren', note: 'Menekuni dakwah, media, dan kehidupan santri.' },
    { name: 'Nadia Safitri', role: 'Sekretaris Redaksi', note: 'Mengelola surat pembaca dan koordinasi liputan.' },
    { name: 'Bayu Prakoso', role: 'Fotografi & Visual', note: 'Merekam wajah kampung dan keseharian warga.' },
  ]

  const values = [
    {
      title: 'Akurasi sebelum kecepatan',
      body: 'Kami memeriksa nama, angka, dan kutipan. Bila keliru, kami terbuka untuk mengoreksi di edisi berikutnya.',
    },
    {
      title: 'Berpihak pada komunitas',
      body: 'Kami menulis bersama warga, bukan sekadar tentang mereka. Suara yang jarang terdengar kami beri ruang.',
    },
    {
      title: 'Sederhana dan mudah dirawat',
      body: 'Buletin yang baik harus bisa dilanjutkan oleh orang lain. Kami menjaga prosesnya tetap jelas dan terbuka.',
    },
  ]

  const steps = [
    'Warga, guru, santri, atau siapa pun mengirim ide dan catatan melalui surel atau WhatsApp.',
    'Redaksi mendiskusikan sudut pandang, narasumber, dan kelayakan liputan setiap awal bulan.',
    'Penulis melakukan wawancara, menulis, lalu melalui proses sunting bersama redaktur rubrik.',
    'Edisi dicetak terbatas, diunggah dalam PDF, dan diarsipkan di situs ini.',
  ]
</script>

<div class="mx-auto max-w-6xl px-5">
  <div class="py-8 sm:py-10">
    <PageHeader
      kicker="Tentang Kami"
      title="Kabar dari akar rumput, ditulis dengan tenang."
      intro="Lembar Warta adalah buletin komunitas yang lahir dari kebiasaan sederhana: duduk bersama, mendengar cerita, lalu menuliskannya dengan rapi."
    />
  </div>

  <section class="grid gap-10 pb-12 lg:grid-cols-12" aria-labelledby="profil-lembaga">
    <div class="lg:col-span-7">
      <p class="eyebrow text-[10px] text-accent">Profil Lembaga</p>
      <h2 id="profil-lembaga" class="mt-2 font-serif text-3xl font-semibold tracking-[-0.02em]">
        Sejak 2018, merawat cerita dari pesantren dan desa.
      </h2>
      <div class="prose-editorial mt-5 text-[1.05rem]">
        <p>
          Lembar Warta dimulai sebagai lembar fotokopi yang dibagikan di serambi masjid. Waktu itu hanya ada empat halaman, ditulis oleh lima orang, dan dicetak seadanya. Yang penting bukan jumlah halamannya, melainkan niatnya: menyimpan kabar-kabar baik yang sering luput dari perhatian.
        </p>
        <p>
          Kini Lembar Warta terbit setiap awal bulan dalam versi cetak terbatas dan PDF. Kami bekerja bersama para kontributor di pesantren, desa, sekolah, dan komunitas. Tidak ada ruang redaksi yang megah; sebagian besar kerja kami dilakukan di rumah, di kelas, dan di balai desa.
        </p>
        <p>
          Kami percaya bahwa publikasi komunitas tidak harus rumit. Yang dibutuhkan adalah konsistensi, kejujuran, dan orang-orang yang mau merawat prosesnya bersama-sama.
        </p>
      </div>
    </div>

    <div class="lg:col-span-5">
      <div class="border border-rule bg-paper-deep/50 p-6">
        <p class="eyebrow text-[10px] text-accent">Lembar Warta dalam angka</p>
        <dl class="mt-5 grid grid-cols-2 gap-x-4 gap-y-6">
          <div>
            <dt class="font-sans text-[9px] uppercase tracking-[0.14em] text-ink-muted">Edisi terbit</dt>
            <dd class="mt-1 font-serif text-4xl font-semibold leading-none text-accent">24</dd>
          </div>
          <div>
            <dt class="font-sans text-[9px] uppercase tracking-[0.14em] text-ink-muted">Tahun berjalan</dt>
            <dd class="mt-1 font-serif text-4xl font-semibold leading-none text-accent">8</dd>
          </div>
          <div>
            <dt class="font-sans text-[9px] uppercase tracking-[0.14em] text-ink-muted">Kontributor</dt>
            <dd class="mt-1 font-serif text-4xl font-semibold leading-none text-accent">40+</dd>
          </div>
          <div>
            <dt class="font-sans text-[9px] uppercase tracking-[0.14em] text-ink-muted">Lembaga mitra</dt>
            <dd class="mt-1 font-serif text-4xl font-semibold leading-none text-accent">12</dd>
          </div>
        </dl>
        <div class="mt-6 border-t border-rule pt-4">
          <p class="eyebrow text-[9px] text-ink-muted">Alamat redaksi</p>
          <p class="mt-2 text-[14px] leading-relaxed text-ink-soft">{site.address}</p>
        </div>
      </div>
    </div>
  </section>

  <section class="border-t-4 border-double border-rule py-12" aria-labelledby="nilai">
    <p class="eyebrow text-[10px] text-accent">Prinsip Kerja</p>
    <h2 id="nilai" class="mt-1 font-serif text-3xl font-semibold tracking-[-0.02em]">Nilai yang kami rawat</h2>
    <div class="mt-7 grid gap-6 sm:grid-cols-3">
      {#each values as value, index}
        <div class="border-t border-ink pt-4">
          <p class="font-serif text-3xl font-semibold text-rule">0{index + 1}</p>
          <h3 class="mt-2 font-serif text-xl font-semibold leading-snug">{value.title}</h3>
          <p class="mt-2 text-[15px] leading-relaxed text-ink-soft">{value.body}</p>
        </div>
      {/each}
    </div>
  </section>

  <section class="border-t border-rule py-12" aria-labelledby="redaksi">
    <div class="flex flex-wrap items-end justify-between gap-3 border-b border-ink pb-3">
      <div>
        <p class="eyebrow text-[10px] text-accent">Orang-orang di baliknya</p>
        <h2 id="redaksi" class="mt-1 font-serif text-3xl font-semibold tracking-[-0.02em]">Redaksi</h2>
      </div>
      <a class="link-underline font-sans text-[10px] font-semibold uppercase tracking-[0.12em]" href="mailto:{site.email}">
        Gabung sebagai kontributor →
      </a>
    </div>

    <div class="mt-7 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
      {#each team as person}
        <div class="flex gap-4">
          <div
            class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-rule bg-paper-deep font-sans text-[12px] font-semibold text-accent"
            aria-hidden="true"
          >
            {initials(person.name)}
          </div>
          <div>
            <h3 class="font-serif text-lg font-semibold leading-tight">{person.name}</h3>
            <p class="eyebrow mt-1 text-[9px] text-accent">{person.role}</p>
            <p class="mt-2 text-[14px] leading-relaxed text-ink-soft">{person.note}</p>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <section class="border-t border-rule py-12" aria-labelledby="cara-kerja">
    <div class="grid gap-8 lg:grid-cols-12">
      <div class="lg:col-span-4">
        <p class="eyebrow text-[10px] text-accent">Proses</p>
        <h2 id="cara-kerja" class="mt-1 font-serif text-3xl font-semibold tracking-[-0.02em]">Cara kami bekerja</h2>
        <p class="mt-3 text-[15px] leading-relaxed text-ink-soft">
          Empat langkah sederhana yang kami ulang setiap bulan. Tidak glamor, tetapi cukup untuk menjaga kepercayaan pembaca.
        </p>
      </div>
      <ol class="lg:col-span-8">
        {#each steps as step, index}
          <li class="flex gap-5 border-t border-rule-soft py-4 first:border-t-0 first:pt-0">
            <span class="font-serif text-2xl font-semibold leading-none text-accent">{String(index + 1).padStart(2, '0')}</span>
            <p class="text-[15px] leading-relaxed text-ink-soft">{step}</p>
          </li>
        {/each}
      </ol>
    </div>
  </section>

  <section class="mb-6 grid gap-5 bg-ink px-6 py-9 text-paper sm:grid-cols-[1fr_auto] sm:items-center sm:px-10" aria-labelledby="ajakan">
    <div>
      <p class="eyebrow text-[9px] text-gold-soft">Punya cerita?</p>
      <h2 id="ajakan" class="mt-2 font-serif text-2xl font-semibold leading-tight sm:text-3xl">
        Cerita terbaik sering dimulai dari percakapan biasa.
      </h2>
      <p class="mt-2 max-w-xl text-[15px] leading-relaxed text-paper/70">
        Kirim ide, catatan lapangan, atau foto ke redaksi. Kami akan membacanya dengan tenang.
      </p>
    </div>
    <a class="btn border-paper bg-paper text-ink hover:bg-paper-deep hover:text-ink" href="#/kontak">Hubungi redaksi</a>
  </section>
</div>
