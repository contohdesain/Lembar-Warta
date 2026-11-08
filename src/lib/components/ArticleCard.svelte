<script lang="ts">
  import { asset, categoryName, formatShortDate, type Article } from '../data'

  let {
    article,
    variant = 'default',
    showExcerpt = true,
  }: { article: Article; variant?: 'default' | 'compact'; showExcerpt?: boolean } = $props()
</script>

{#if variant === 'compact'}
  <a
    href="#/artikel/{article.slug}"
    class="group grid grid-cols-[92px_1fr] gap-4 border-b border-rule-soft pb-4 last:border-b-0 last:pb-0 sm:grid-cols-[112px_1fr]"
  >
    <div class="aspect-square overflow-hidden border border-rule bg-paper-deep">
      <img
        src={asset(article.image)}
        alt={article.imageAlt}
        loading="lazy"
        class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
      />
    </div>
    <div class="min-w-0">
      <p class="eyebrow text-[10px] text-accent">{categoryName(article.category)}</p>
      <h3
        class="mt-1.5 font-serif text-[17px] font-semibold leading-snug transition-colors group-hover:text-accent"
      >
        {article.title}
      </h3>
      <p class="mt-1.5 font-sans text-[10px] uppercase tracking-[0.1em] text-ink-muted">
        {formatShortDate(article.date)} · {article.readingTime} menit baca
      </p>
    </div>
  </a>
{:else}
  <a href="#/artikel/{article.slug}" class="group block">
    <div class="aspect-[4/3] overflow-hidden border border-rule bg-paper-deep">
      <img
        src={asset(article.image)}
        alt={article.imageAlt}
        loading="lazy"
        class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]"
      />
    </div>
    <div class="mt-4">
      <p class="eyebrow text-[10px] text-accent">{categoryName(article.category)}</p>
      <h3
        class="mt-2 font-serif text-[1.35rem] font-semibold leading-[1.25] tracking-[-0.01em] transition-colors group-hover:text-accent"
      >
        {article.title}
      </h3>
      {#if showExcerpt}
        <p class="mt-2 line-clamp-2 text-[15px] leading-relaxed text-ink-soft">{article.excerpt}</p>
      {/if}
      <p class="mt-3 font-sans text-[10px] font-medium uppercase tracking-[0.1em] text-ink-muted">
        {article.author} · {formatShortDate(article.date)}
      </p>
    </div>
  </a>
{/if}
