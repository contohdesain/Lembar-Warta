<script lang="ts">
  import ArticleCard from '../components/ArticleCard.svelte'
  import SectionHeading from '../components/SectionHeading.svelte'
  import {
    articles,
    articlesByCategory,
    asset,
    categories,
    editions,
    formatDate,
    site,
  } from '../data'

  const featured = articles.find((article) => article.featured) ?? articles[0]
  const latest = articles.filter((article) => article.slug !== featured.slug).slice(0, 6)
  const editorPicks = articles.filter((article) => article.slug !== featured.slug).slice(0, 3)
  const currentEdition = editions[0]

  const categoryCounts = categories.map((category) => ({
    ...category,
    count: articlesByCategory(category.slug).length,
  }))
</script>

<div class="mx-auto max-w-6xl px-5">
  <section class="py-8 sm:py-11" aria-labelledby="laporan-utama">
    <div class="grid gap-9 lg:grid-cols-12 lg:gap-0">
      <div class="lg:col-span-8 lg:border-r lg:border-rule lg:pr-10">
        <div class="flex items-center gap-3">
          <span class="eyebrow text-accent">Laporan Utama</span>
          <span class="h-px flex-1 bg-rule"></span>
          <span class="eyebrow text-[10px] text-ink-muted">{currentEdition.number} · {currentEdition.period}</span>
        </div>

        <article class="group mt-5">
          <a href="#/artikel/{featured.slug}" class="block">
            <div class="aspect-[16/9] overflow-hidden border border-rule bg-paper-deep">
              <img
                src={asset(featured.image)}
                alt={featured.imageAlt}
                class="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]"
              />
            </div>
            <h1
              id="laporan-utama"
              class="mt-5 font-serif text-[2.3rem] font-bold leading-[1.06] tracking-[-0.03em] transition-colors group-hover:text-accent sm:text-[3.35rem]"
            >
              {featured.title}
            </h1>
            <p class="mt-4 max-w-2xl text-[17px] leading-relaxed text-ink-soft sm:text-lg">
              {featured.excerpt}
            </p>
          </a>
          <div
            class="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-rule-soft pt-3 font-sans text-[10px] font-medium uppercase tracking-[0.1em] text-ink-muted"
          >
            <span class="text-ink-soft">Oleh {featured.author}</span>
            <span aria-hidden="true">·</span>
            <time datetime={featured.date}>{formatDate(featured.date)}</time>
            <span aria-hidden="true">·</span>
            <span>{featured.readingTime} menit baca</span>
            <a
              href="#/artikel/{featured.slug}"
              class="ml-auto font-semibold text-accent transition hover:text-accent-dark"
            >
              Baca selengkapnya →
            </a>
          </div>
        </article>
      </div>

      <aside class="lg:col-span-4 lg:pl-9" aria-label="Pilihan redaksi dan edisi terbaru">
        <div class="border-b border-ink pb-3">
          <p class="eyebrow text-[10px] text-accent">Pilihan Redaksi</p>
          <h2 class="mt-1 font-serif text-2xl font-semibold tracking-[-0.01em]">Patut Dibaca</h2>
        </div>
        <div class="mt-5 space-y-5">
          {#each editorPicks as article}
            <ArticleCard {article} variant="compact" />
          {/each}
        </div>

        <div class="mt-8 border border-rule bg-paper-deep/55 p-5">
          <p class="eyebrow text-[10px] text-accent">Edisi Terbaru</p>
          <p class="mt-2 font-serif text-xl font-semibold leading-snug">{currentEdition.title}</p>
          <p class="mt-2 text-sm leading-relaxed text-ink-soft">{currentEdition.period} · {currentEdition.pages} halaman</p>
          <div class="mt-4 flex flex-wrap gap-2">
            <a class="btn btn-accent w-full" href={asset(currentEdition.file)} download>
              Unduh PDF
              <span class="text-[9px] font-normal opacity-70">{currentEdition.size}</span>
            </a>
            <a class="btn btn-ghost w-full" href="#/edisi">Lihat semua edisi</a>
          </div>
        </div>
      </aside>
    </div>
  </section>

  <section class="rule-double py-10 sm:py-12" aria-labelledby="artikel-terbaru">
    <SectionHeading
      kicker="Kabar Terkini"
      title="Artikel Terbaru"
      id="artikel-terbaru"
      actionLabel="Semua artikel"
      actionHref="#/artikel"
    />
    <div class="grid gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {#each latest as article}
        <ArticleCard {article} />
      {/each}
    </div>
  </section>

  <section class="border-t border-rule py-10 sm:py-12" aria-labelledby="rubrik">
    <SectionHeading
      kicker="Jelajahi"
      title="Rubrik"
      id="rubrik"
      actionLabel="Cari artikel"
      actionHref="#/artikel"
    />
    <div class="grid grid-cols-1 border-l border-t border-rule sm:grid-cols-2 lg:grid-cols-5">
      {#each categoryCounts as category}
        <a
          href="#/artikel?kategori={category.slug}"
          class="group border-b border-r border-rule p-5 transition-colors hover:bg-paper-deep/70"
        >
          <p class="font-serif text-[1.35rem] font-semibold transition-colors group-hover:text-accent">
            {category.name}
          </p>
          <p class="eyebrow mt-1 text-[9px] text-ink-muted">{category.count} tulisan</p>
          <p class="mt-3 text-[14px] leading-relaxed text-ink-soft">{category.description}</p>
        </a>
      {/each}
    </div>
  </section>

  <section class="my-6 bg-ink px-6 py-9 text-paper sm:my-10 sm:px-10 sm:py-11" aria-labelledby="edisi-terbaru">
    <div class="grid items-center gap-8 md:grid-cols-12">
      <div class="md:col-span-3">
        <a href="#/edisi" class="block border border-paper/20 bg-paper-deep p-2">
          <img
            src={asset(currentEdition.cover)}
            alt="Sampul {currentEdition.number} — {currentEdition.title}"
            class="aspect-[3/4] w-full object-cover"
            loading="lazy"
          />
        </a>
      </div>
      <div class="md:col-span-6">
        <p class="eyebrow text-[10px] text-gold-soft">Baru Terbit</p>
        <h2 id="edisi-terbaru" class="mt-2 font-serif text-3xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl">
          {site.edition} telah hadir.
        </h2>
        <p class="mt-3 max-w-xl text-[15px] leading-relaxed text-paper/75">
          {currentEdition.description}
        </p>
        <p class="eyebrow mt-4 text-[9px] text-paper/50">
          {currentEdition.period} · {currentEdition.pages} halaman · PDF {currentEdition.size}
        </p>
      </div>
      <div class="flex flex-col gap-3 md:col-span-3">
        <a class="btn border-paper bg-paper text-ink hover:bg-paper-deep hover:text-ink" href={asset(currentEdition.file)} download>
          Unduh edisi PDF
        </a>
        <a class="btn border-paper/40 text-paper hover:border-paper hover:bg-paper hover:text-ink" href="#/edisi">
          Buka arsip
        </a>
      </div>
    </div>
  </section>
</div>
