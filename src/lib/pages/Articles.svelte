<script lang="ts">
  import ArticleCard from '../components/ArticleCard.svelte'
  import PageHeader from '../components/PageHeader.svelte'
  import { untrack } from 'svelte'
  import { articles, articlesByCategory, categories, categoryName } from '../data'

  let {
    initialCategory = '',
    initialQuery = '',
  }: { initialCategory?: string; initialQuery?: string } = $props()

  let query = $state(untrack(() => initialQuery))
  let activeCategory = $state(untrack(() => initialCategory))

  const categoryCounts = categories.map((category) => ({
    ...category,
    count: articlesByCategory(category.slug).length,
  }))

  const filtered = $derived.by(() => {
    const needle = query.trim().toLowerCase()
    return articles.filter((article) => {
      const matchesCategory = activeCategory === '' || article.category === activeCategory
      const haystack = [
        article.title,
        article.excerpt,
        article.author,
        article.authorRole,
        categoryName(article.category),
        article.body.replace(/<[^>]+>/g, ' '),
      ]
        .join(' ')
        .toLowerCase()
      return matchesCategory && (needle === '' || haystack.includes(needle))
    })
  })

  function resetFilters() {
    query = ''
    activeCategory = ''
  }
</script>

<div class="mx-auto max-w-6xl px-5">
  <div class="py-8 sm:py-10">
    <PageHeader
      kicker="Indeks Tulisan"
      title="Daftar Artikel"
      intro="Telusuri tulisan berdasarkan rubrik atau kata kunci. Semua yang pernah kami terbitkan, tersimpan rapi di sini."
    />
  </div>

  <div class="grid gap-10 pb-10 lg:grid-cols-[230px_1fr] lg:gap-12">
    <aside aria-label="Filter artikel">
      <div>
        <label for="pencarian" class="eyebrow block text-[10px] text-ink-muted">Cari tulisan</label>
        <div class="relative mt-2">
          <svg
            viewBox="0 0 20 20"
            fill="none"
            class="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted"
            aria-hidden="true"
          >
            <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" stroke-width="1.4" />
            <path d="M12.8 12.8L17 17" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" />
          </svg>
          <input
            id="pencarian"
            type="search"
            class="input pl-10"
            placeholder="Cari judul atau penulis…"
            bind:value={query}
          />
        </div>
      </div>

      <div class="mt-7">
        <p class="eyebrow text-[10px] text-ink-muted">Rubrik</p>
        <ul class="mt-2 border-t border-rule-soft">
          <li class="border-b border-rule-soft">
            <button
              type="button"
              onclick={() => (activeCategory = '')}
              aria-pressed={activeCategory === ''}
              class="flex w-full items-center justify-between gap-3 py-2.5 text-left font-serif text-[15px] transition {activeCategory === ''
                ? 'font-semibold text-accent'
                : 'text-ink-soft hover:text-ink'}"
            >
              <span>Semua tulisan</span>
              <span class="font-sans text-[10px] tracking-wide text-ink-muted">{articles.length}</span>
            </button>
          </li>
          {#each categoryCounts as category}
            <li class="border-b border-rule-soft">
              <button
                type="button"
                onclick={() => (activeCategory = category.slug)}
                aria-pressed={activeCategory === category.slug}
                class="flex w-full items-center justify-between gap-3 py-2.5 text-left font-serif text-[15px] transition {activeCategory ===
                category.slug
                  ? 'font-semibold text-accent'
                  : 'text-ink-soft hover:text-ink'}"
              >
                <span>{category.name}</span>
                <span class="font-sans text-[10px] tracking-wide text-ink-muted">{category.count}</span>
              </button>
            </li>
          {/each}
        </ul>
      </div>

      <div class="mt-7 border border-rule bg-paper-deep/50 p-4">
        <p class="eyebrow text-[9px] text-accent">Arsip cetak</p>
        <p class="mt-2 font-serif text-[15px] leading-snug text-ink-soft">
          Semua edisi bulanan tersedia dalam berkas PDF.
        </p>
        <a class="link-underline mt-3 inline-block font-sans text-[10px] font-semibold uppercase tracking-[0.12em]" href="#/edisi">
          Buka edisi →
        </a>
      </div>
    </aside>

    <div>
      <div class="flex flex-wrap items-center justify-between gap-3 border-b border-ink pb-3">
        <p class="eyebrow text-[10px] text-ink-muted">
          {filtered.length} tulisan ditemukan
          {#if activeCategory}
            <span class="text-accent">· {categoryName(activeCategory)}</span>
          {/if}
        </p>
        {#if activeCategory || query}
          <button
            type="button"
            onclick={resetFilters}
            class="font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-accent transition hover:text-accent-dark"
          >
            Hapus filter ×
          </button>
        {/if}
      </div>

      {#if filtered.length > 0}
        <div class="mt-8 grid gap-x-7 gap-y-10 sm:grid-cols-2">
          {#each filtered as article}
            <ArticleCard {article} />
          {/each}
        </div>
      {:else}
        <div class="mt-8 border border-dashed border-rule px-6 py-16 text-center">
          <p class="font-serif text-2xl font-semibold text-ink">Belum ada tulisan yang cocok.</p>
          <p class="mx-auto mt-2 max-w-sm text-[15px] leading-relaxed text-ink-soft">
            Coba kata kunci lain, atau kembali ke seluruh rubrik untuk melihat semua artikel.
          </p>
          <button type="button" class="btn mt-6" onclick={resetFilters}>Tampilkan semua</button>
        </div>
      {/if}
    </div>
  </div>
</div>
