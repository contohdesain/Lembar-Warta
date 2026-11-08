<script lang="ts">
  import Logo from './Logo.svelte'
  import { categories, site } from '../data'

  const year = new Date().getFullYear()
</script>

<footer class="mt-20 border-t-4 border-double border-rule bg-paper-deep/60">
  <div class="mx-auto max-w-6xl px-5 py-12 sm:py-16">
    <div class="grid gap-10 md:grid-cols-12">
      <div class="md:col-span-5">
        <a href="#/" class="inline-flex items-center gap-3" aria-label="Lembar Warta — Beranda">
          <Logo class="h-11 w-11 text-accent" />
          <span class="font-serif text-2xl font-bold tracking-tight">Lembar Warta</span>
        </a>
        <p class="mt-4 max-w-sm text-[15px] leading-relaxed text-ink-soft">
          {site.description}
        </p>
        <p class="eyebrow mt-5 text-[10px] text-ink-muted">
          Terbit setiap awal bulan · Sejak {site.founded}
        </p>
      </div>

      <div class="md:col-span-3">
        <h2 class="eyebrow border-b border-rule pb-2 text-ink-muted">Rubrik</h2>
        <ul class="mt-4 space-y-2.5 text-[15px] text-ink-soft">
          {#each categories as category}
            <li>
              <a class="link-underline" href="#/artikel?kategori={category.slug}">{category.name}</a>
            </li>
          {/each}
        </ul>
      </div>

      <div class="md:col-span-4">
        <h2 class="eyebrow border-b border-rule pb-2 text-ink-muted">Redaksi</h2>
        <address class="mt-4 space-y-3 text-[15px] not-italic leading-relaxed text-ink-soft">
          <p>{site.address}</p>
          <p>
            <a class="link-underline" href="mailto:{site.email}">{site.email}</a><br />
            <a class="link-underline" href="tel:{site.phone.replace(/\s|-/g, '')}">{site.phone}</a>
          </p>
          <p class="text-ink-muted">{site.hours}</p>
        </address>
        <div class="mt-5 flex flex-wrap gap-x-4 gap-y-2 font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
          <a class="transition hover:text-accent" href={site.instagram} target="_blank" rel="noreferrer">Instagram</a>
          <a class="transition hover:text-accent" href={site.facebook} target="_blank" rel="noreferrer">Facebook</a>
          <a class="transition hover:text-accent" href={site.youtube} target="_blank" rel="noreferrer">YouTube</a>
        </div>
      </div>
    </div>

    <div
      class="mt-12 flex flex-col gap-3 border-t border-rule pt-6 font-sans text-[10px] font-medium uppercase tracking-[0.13em] text-ink-muted sm:flex-row sm:items-center sm:justify-between"
    >
      <p>© {year} {site.name}. Hak cipta dilindungi.</p>
      <p class="normal-case tracking-normal">Dibuat dengan tenang di Jawa Timur.</p>
      <a class="transition hover:text-accent" href="#/" onclick={(event) => { event.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
        Kembali ke atas ↑
      </a>
    </div>
  </div>
</footer>
