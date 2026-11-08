<script lang="ts">
  import PageHeader from '../components/PageHeader.svelte'
  import { site } from '../data'

  let name = $state('')
  let email = $state('')
  let topic = $state('Kirim tulisan')
  let message = $state('')
  let sent = $state(false)

  const mailtoHref = $derived(
    `mailto:${site.email}?subject=${encodeURIComponent(`[${topic}] dari ${name || 'pembaca'}`)}&body=${encodeURIComponent(
      `${message}\n\n— ${name}\n${email}`,
    )}`,
  )

  function handleSubmit(event: SubmitEvent) {
    event.preventDefault()
    sent = true
    window.location.href = mailtoHref
  }

  function resetForm() {
    name = ''
    email = ''
    topic = 'Kirim tulisan'
    message = ''
    sent = false
  }

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`
</script>

<div class="mx-auto max-w-6xl px-5">
  <div class="py-8 sm:py-10">
    <PageHeader
      kicker="Kontak"
      title="Mari berbincang."
      intro="Punya ide tulisan, pertanyaan, atau ingin meminta edisi cetak? Kirim pesan kepada redaksi. Kami membaca setiap surat."
    />
  </div>

  <div class="grid gap-10 pb-12 lg:grid-cols-12 lg:gap-14">
    <section class="lg:col-span-7" aria-labelledby="formulir-kontak">
      <h2 id="formulir-kontak" class="font-serif text-2xl font-semibold tracking-[-0.01em]">Formulir pesan</h2>
      <p class="mt-2 text-[15px] leading-relaxed text-ink-soft">
        Isi kolom di bawah ini. Setelah dikirim, aplikasi surel Anda akan terbuka dengan pesan yang sudah terisi.
      </p>

      {#if sent}
        <div class="mt-6 border border-rule bg-paper-deep/60 p-6" role="status">
          <p class="eyebrow text-[9px] text-accent">Pesan disiapkan</p>
          <p class="mt-2 font-serif text-xl font-semibold">Terima kasih, {name || 'Sahabat Lembar Warta'}.</p>
          <p class="mt-2 text-[15px] leading-relaxed text-ink-soft">
            Aplikasi surel Anda seharusnya sudah terbuka. Jika belum, gunakan tautan di bawah ini untuk mengirim pesan secara langsung.
          </p>
          <div class="mt-5 flex flex-wrap gap-3">
            <a class="btn btn-accent" href={mailtoHref}>Buka aplikasi surel</a>
            <button type="button" class="btn btn-ghost" onclick={resetForm}>Tulis pesan lain</button>
          </div>
        </div>
      {:else}
        <form class="mt-6 space-y-5" onsubmit={handleSubmit}>
          <div class="grid gap-5 sm:grid-cols-2">
            <div>
              <label for="nama" class="eyebrow block text-[10px] text-ink-muted">Nama</label>
              <input
                id="nama"
                name="nama"
                type="text"
                class="input mt-2"
                placeholder="Nama lengkap"
                autocomplete="name"
                required
                bind:value={name}
              />
            </div>
            <div>
              <label for="surel" class="eyebrow block text-[10px] text-ink-muted">Surel</label>
              <input
                id="surel"
                name="surel"
                type="email"
                class="input mt-2"
                placeholder="nama@contoh.id"
                autocomplete="email"
                required
                bind:value={email}
              />
            </div>
          </div>

          <div>
            <label for="topik" class="eyebrow block text-[10px] text-ink-muted">Topik</label>
            <select id="topik" name="topik" class="input mt-2" bind:value={topic}>
              <option>Kirim tulisan</option>
              <option>Pertanyaan umum</option>
              <option>Permintaan edisi cetak</option>
              <option>Kerja sama & kolaborasi</option>
              <option>Koreksi atau hak jawab</option>
            </select>
          </div>

          <div>
            <label for="pesan" class="eyebrow block text-[10px] text-ink-muted">Pesan</label>
            <textarea
              id="pesan"
              name="pesan"
              rows="7"
              class="input mt-2 resize-y"
              placeholder="Tuliskan pesan, ide tulisan, atau pertanyaan Anda…"
              required
              minlength="20"
              bind:value={message}
            ></textarea>
            <p class="mt-2 font-sans text-[10px] tracking-wide text-ink-muted">
              Mohon sertakan konteks singkat agar redaksi dapat menindaklanjuti dengan tepat.
            </p>
          </div>

          <div class="flex flex-wrap items-center gap-4 border-t border-rule-soft pt-5">
            <button type="submit" class="btn btn-accent">
              Siapkan pesan
              <span aria-hidden="true">→</span>
            </button>
            <p class="font-sans text-[10px] leading-relaxed tracking-wide text-ink-muted">
              Tidak ada data yang disimpan di situs ini.
            </p>
          </div>
        </form>
      {/if}
    </section>

    <aside class="lg:col-span-5" aria-label="Informasi redaksi">
      <div class="border border-rule bg-paper-deep/45 p-6">
        <p class="eyebrow text-[9px] text-accent">Sekretariat Redaksi</p>
        <h2 class="mt-2 font-serif text-2xl font-semibold">Lembar Warta</h2>
        <address class="mt-4 space-y-4 text-[15px] not-italic leading-relaxed text-ink-soft">
          <div>
            <p class="eyebrow text-[8px] text-ink-muted">Alamat</p>
            <p class="mt-1">{site.address}</p>
          </div>
          <div>
            <p class="eyebrow text-[8px] text-ink-muted">Surel</p>
            <p class="mt-1"><a class="link-underline" href="mailto:{site.email}">{site.email}</a></p>
          </div>
          <div>
            <p class="eyebrow text-[8px] text-ink-muted">Telepon / WhatsApp</p>
            <p class="mt-1"><a class="link-underline" href="tel:{site.phone.replace(/\s|-/g, '')}">{site.phone}</a></p>
          </div>
          <div>
            <p class="eyebrow text-[8px] text-ink-muted">Jam layanan</p>
            <p class="mt-1">{site.hours}</p>
          </div>
        </address>
        <a class="btn btn-ghost mt-5 w-full" href={mapsUrl} target="_blank" rel="noreferrer">
          Buka peta lokasi
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div class="mt-5 border border-rule p-6">
        <p class="eyebrow text-[9px] text-accent">Panduan Kirim Tulisan</p>
        <ul class="mt-3 space-y-2.5 text-[14px] leading-relaxed text-ink-soft">
          <li class="flex gap-2.5"><span class="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"></span>Panjang 600–1.200 kata, orisinal, dan belum pernah terbit di tempat lain.</li>
          <li class="flex gap-2.5"><span class="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"></span>Sertakan nama, asal komunitas, dan nomor yang bisa dihubungi.</li>
          <li class="flex gap-2.5"><span class="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"></span>Foto boleh dikirim terpisah; sebutkan sumber dan izin penggunaan.</li>
          <li class="flex gap-2.5"><span class="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"></span>Redaksi dapat menyunting tanpa mengubah makna tulisan.</li>
        </ul>
      </div>

      <div class="mt-5 flex flex-wrap gap-x-5 gap-y-2 font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-ink-muted">
        <a class="transition hover:text-accent" href={site.instagram} target="_blank" rel="noreferrer">Instagram ↗</a>
        <a class="transition hover:text-accent" href={site.facebook} target="_blank" rel="noreferrer">Facebook ↗</a>
        <a class="transition hover:text-accent" href={site.youtube} target="_blank" rel="noreferrer">YouTube ↗</a>
      </div>
    </aside>
  </div>

  <section class="border-t-4 border-double border-rule py-10" aria-labelledby="faq">
    <p class="eyebrow text-[10px] text-accent">Pertanyaan Umum</p>
    <h2 id="faq" class="mt-1 font-serif text-3xl font-semibold tracking-[-0.02em]">Sebelum menghubungi kami</h2>
    <div class="mt-6 max-w-3xl border-t border-rule">
      <details class="group border-b border-rule-soft py-4">
        <summary class="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg font-semibold">
          Apakah Lembar Warta berbayar?
          <span class="font-sans text-xl font-normal text-accent transition group-open:rotate-45" aria-hidden="true">+</span>
        </summary>
        <p class="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
          Tidak. Edisi digital dapat diunduh gratis. Untuk edisi cetak, kami menyediakan jumlah terbatas dan memprioritaskan masjid, sekolah, serta balai desa.
        </p>
      </details>
      <details class="group border-b border-rule-soft py-4">
        <summary class="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg font-semibold">
          Apakah saya bisa menjadi kontributor?
          <span class="font-sans text-xl font-normal text-accent transition group-open:rotate-45" aria-hidden="true">+</span>
        </summary>
        <p class="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
          Bisa. Kami terbuka untuk penulis baru, pelajar, guru, dan warga komunitas. Kirim contoh tulisan atau ide liputan melalui formulir di atas.
        </p>
      </details>
      <details class="group border-b border-rule-soft py-4">
        <summary class="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg font-semibold">
          Bagaimana cara mengoreksi tulisan?
          <span class="font-sans text-xl font-normal text-accent transition group-open:rotate-45" aria-hidden="true">+</span>
        </summary>
        <p class="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
          Sampaikan koreksi melalui surel dengan menyebutkan judul artikel dan bagian yang perlu diperbaiki. Kami akan memverifikasi dan menandai koreksi pada edisi berikutnya.
        </p>
      </details>
    </div>
  </section>
</div>
