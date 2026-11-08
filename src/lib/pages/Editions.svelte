<script lang="ts">
  import PageHeader from '../components/PageHeader.svelte'
  import { asset, editions, formatDate, type Edition } from '../data'

  const current = editions[0]
  const rest = editions.slice(1)

  const grouped = rest.reduce<Record<string, Edition[]>>((result, edition) => {
    const year = edition.date.slice(0, 4)
    if (!result[year]) result[year] = []
    result[year].push(edition)
    return result
  }, {})

  const years = Object.keys(grouped).sort((a, b) => Number(b) - Number(a))
</script>

<div class="mx-auto max-w-6xl px-5">
  <div class="py-8 sm:py-10">
    <PageHeader
      kicker="Edisi & Arsip"
      title="Rak Arsip Lembar Warta"
      intro="Setiap edisi adalah potongan waktu yang kami rawat. Unduh berkas PDF-nya, cetak, atau simpan untuk dibaca kapan saja."
    />
  </div>

  <section class="pb-10" aria-labelledby="edisi-terkini">
    <div class="grid items-start gap-8 border-b-4 border-double border-rule pb-10 md:grid-cols-12">
      <div class="md:col-span-4">
        <div class="border border-rule bg-paper-deep p-2.5">
          <img
            src={asset(current.cover)}
            alt="Sampul {current.number} — {current.title}"
            class="aspect-[3/4] w-full object-cover"
          />
        </div>
      </div>
      <div class="md:col-span-8">
        <p class="eyebrow text-[10px] text-accent">Edisi Terkini</p>
        <p class="eyebrow mt-2 text-[10px] text-ink-muted">{current.number} · {current.period}</p>
        <h2 id="edisi-terkini" class="mt-2 font-serif text-3xl font-bold leading-tight tracking-[-0.02em] sm:text-4xl">
          {current.title}
        </h2>
        <p class="mt-4 max-w-2xl text-[16px] leading-relaxed text-ink-soft">{current.description}</p>

        <ul class="mt-5 space-y-2 border-t border-rule-soft pt-4">
          {#each current.highlights as highlight}
            <li class="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
              <span class="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true"></span>
              {highlight}
            </li>
          {/each}
        </ul>

        <div class="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
          <a class="btn btn-accent" href={asset(current.file)} download>
            Unduh PDF
            <span class="text-[9px] font-normal opacity-70">{current.size}</span>
          </a>
          <p class="font-sans text-[10px] uppercase tracking-[0.1em] text-ink-muted">
            {current.pages} halaman · {formatDate(current.date)}
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="pb-12" aria-labelledby="arsip-lengkap">
    <div class="mb-6 flex flex-wrap items-end justify-between gap-3 border-b border-ink pb-3">
      <div>
        <p class="eyebrow text-[10px] text-accent">Arsip Lengkap</p>
        <h2 id="arsip-lengkap" class="mt-1 font-serif text-3xl font-semibold tracking-[-0.015em]">Edisi Sebelumnya</h2>
      </div>
      <p class="font-sans text-[10px] uppercase tracking-[0.1em] text-ink-muted">{rest.length} edisi tersimpan</p>
    </div>

    {#each years as year}
      <div class="mb-8">
        <h3 class="eyebrow mb-3 text-[10px] text-ink-muted">{year}</h3>
        <div class="border-t border-rule">
          {#each grouped[year] as edition}
            <article class="grid gap-4 border-b border-rule-soft py-5 sm:grid-cols-[88px_1fr_auto] sm:items-center sm:gap-5">
              <a href={asset(edition.file)} download class="block w-20 border border-rule bg-paper-deep p-1 sm:w-[88px]" tabindex="-1" aria-hidden="true">
                <img
                  src={asset(edition.cover)}
                  alt=""
                  class="aspect-[3/4] w-full object-cover"
                  loading="lazy"
                />
              </a>
              <div class="min-w-0">
                <p class="eyebrow text-[9px] text-accent">{edition.number} · {edition.period}</p>
                <h4 class="mt-1 font-serif text-xl font-semibold leading-snug">
                  <a class="transition hover:text-accent" href={asset(edition.file)} download>{edition.title}</a>
                </h4>
                <p class="mt-1 line-clamp-2 text-[14px] leading-relaxed text-ink-soft">{edition.description}</p>
                <p class="mt-2 font-sans text-[9px] uppercase tracking-[0.1em] text-ink-muted">
                  {edition.pages} halaman · PDF {edition.size}
                </p>
              </div>
              <div class="sm:pl-4">
                <a class="btn btn-ghost w-full sm:w-auto" href={asset(edition.file)} download>
                  <svg viewBox="0 0 20 20" fill="none" class="h-3.5 w-3.5" aria-hidden="true">
                    <path d="M10 3v10M6 9l4 4 4-4M4 16.5h12" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  Unduh
                </a>
              </div>
            </article>
          {/each}
        </div>
      </div>
    {/each}

    <div class="mt-10 grid gap-5 border border-rule bg-paper-deep/45 p-6 sm:grid-cols-2">
      <div>
        <p class="eyebrow text-[9px] text-accent">Butuh versi cetak?</p>
        <p class="mt-2 text-[15px] leading-relaxed text-ink-soft">
          Kami menyediakan beberapa eksemplar cetak untuk masjid, sekolah, dan balai desa. Sampaikan kebutuhan Anda melalui halaman kontak.
        </p>
      </div>
      <div class="sm:text-right">
        <a class="btn btn-ghost" href="#/kontak">Hubungi Redaksi →</a>
      </div>
    </div>
  </section>
</div>
