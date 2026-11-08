<script lang="ts">
  import ArticleCard from '../components/ArticleCard.svelte'
  import SectionHeading from '../components/SectionHeading.svelte'
  import ShareButtons from '../components/ShareButtons.svelte'
  import {
    asset,
    categoryName,
    formatDate,
    getArticle,
    initials,
    relatedArticles,
  } from '../data'

  let { slug }: { slug: string } = $props()

  const article = $derived(getArticle(slug))
</script>

{#if article}
  <article class="mx-auto max-w-6xl px-5 pb-12 pt-7 sm:pt-9">
    <nav aria-label="Breadcrumb" class="mx-auto max-w-3xl font-sans text-[10px] font-medium uppercase tracking-[0.12em] text-ink-muted">
      <ol class="flex flex-wrap items-center gap-2">
        <li><a class="transition hover:text-accent" href="#/">Beranda</a></li>
        <li aria-hidden="true">/</li>
        <li><a class="transition hover:text-accent" href="#/artikel">Artikel</a></li>
        <li aria-hidden="true">/</li>
        <li><a class="transition hover:text-accent" href="#/artikel?kategori={article.category}">{categoryName(article.category)}</a></li>
      </ol>
    </nav>

    <div class="mx-auto mt-7 max-w-3xl">
      <p class="eyebrow text-accent">{categoryName(article.category)}</p>
      <h1 class="mt-3 font-serif text-[2.35rem] font-bold leading-[1.06] tracking-[-0.03em] sm:text-[3.25rem]">
        {article.title}
      </h1>
      <p class="mt-4 text-[1.15rem] italic leading-relaxed text-ink-soft sm:text-xl">
        {article.excerpt}
      </p>

      <div class="mt-7 flex flex-wrap items-center gap-4 border-y border-rule py-4">
        <div
          class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-rule bg-paper-deep font-sans text-[11px] font-semibold tracking-wide text-accent"
          aria-hidden="true"
        >
          {initials(article.author)}
        </div>
        <div>
          <p class="text-[15px] font-semibold leading-tight">{article.author}</p>
          <p class="eyebrow mt-1 text-[9px] text-ink-muted">{article.authorRole}</p>
        </div>
        <div class="ml-auto text-right font-sans text-[10px] font-medium uppercase leading-relaxed tracking-[0.1em] text-ink-muted">
          <time datetime={article.date}>{formatDate(article.date)}</time><br />
          {article.readingTime} menit baca
        </div>
      </div>
    </div>

    <figure class="mx-auto mt-8 max-w-4xl">
      <div class="overflow-hidden border border-rule bg-paper-deep">
        <img
          src={asset(article.image)}
          alt={article.imageAlt}
          class="aspect-[16/9] w-full object-cover"
        />
      </div>
      <figcaption class="mt-2 flex items-start justify-between gap-4 font-sans text-[10px] tracking-wide text-ink-muted">
        <span>{article.imageCaption}</span>
        <span class="shrink-0">Lembar Warta · {formatDate(article.date)}</span>
      </figcaption>
    </figure>

    <div class="mx-auto mt-8 max-w-3xl">
      <div class="border-y border-rule-soft py-3">
        <ShareButtons title={article.title} />
      </div>

      <div class="prose-editorial mt-8">
        {@html article.body}
      </div>

      <div class="mt-10 border-t border-rule pt-5">
        <ShareButtons title={article.title} />
      </div>

      <div class="mt-8 flex flex-wrap items-center justify-between gap-4 border border-rule bg-paper-deep/45 px-5 py-4">
        <div>
          <p class="eyebrow text-[9px] text-ink-muted">Rubrik</p>
          <a
            href="#/artikel?kategori={article.category}"
            class="mt-1 inline-block font-serif text-lg font-semibold transition hover:text-accent"
          >
            {categoryName(article.category)}
          </a>
        </div>
        <a class="btn btn-ghost" href="#/artikel">← Semua artikel</a>
      </div>

      <aside class="mt-8 border-t-4 border-double border-rule pt-5" aria-label="Tentang penulis">
        <p class="eyebrow text-[9px] text-accent">Tentang Penulis</p>
        <p class="mt-2 font-serif text-xl font-semibold">{article.author}</p>
        <p class="mt-1 text-[15px] leading-relaxed text-ink-soft">
          {article.authorRole} di Lembar Warta. Menulis tentang pendidikan, kehidupan komunitas, dan hal-hal kecil yang sering luput dari perhatian.
        </p>
      </aside>
    </div>
  </article>

  <section class="mx-auto max-w-6xl px-5 pb-16" aria-labelledby="artikel-terkait">
    <SectionHeading
      kicker="Lanjutkan Membaca"
      title="Artikel Terkait"
      id="artikel-terkait"
      actionLabel="Semua artikel"
      actionHref="#/artikel"
    />
    <div class="grid gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {#each relatedArticles(article) as related}
        <ArticleCard article={related} />
      {/each}
    </div>
  </section>
{:else}
  <div class="mx-auto max-w-3xl px-5 py-20 text-center">
    <p class="eyebrow text-accent">404 · Tidak ditemukan</p>
    <h1 class="mt-3 font-serif text-4xl font-bold tracking-tight">Tulisan ini tidak ada.</h1>
    <p class="mx-auto mt-3 max-w-md text-[17px] leading-relaxed text-ink-soft">
      Mungkin tautannya berubah, atau artikelnya belum pernah diterbitkan. Silakan kembali ke indeks artikel.
    </p>
    <a class="btn btn-accent mt-7" href="#/artikel">Buka daftar artikel</a>
  </div>
{/if}
