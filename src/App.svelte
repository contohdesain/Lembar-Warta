<script lang="ts">
  import Footer from './lib/components/Footer.svelte'
  import Header from './lib/components/Header.svelte'
  import About from './lib/pages/About.svelte'
  import ArticleDetail from './lib/pages/ArticleDetail.svelte'
  import Articles from './lib/pages/Articles.svelte'
  import Contact from './lib/pages/Contact.svelte'
  import Editions from './lib/pages/Editions.svelte'
  import Home from './lib/pages/Home.svelte'
  import NotFound from './lib/pages/NotFound.svelte'
  import { getArticle } from './lib/data'
  import { route } from './lib/router'

  const current = $derived($route)
  const path = $derived(current.path)

  type Page =
    | { name: 'home' }
    | { name: 'articles'; category: string; query: string }
    | { name: 'detail'; slug: string }
    | { name: 'editions' }
    | { name: 'about' }
    | { name: 'contact' }
    | { name: 'notfound' }

  const page = $derived.by<Page>(() => {
    const value = current.path.replace(/\/+$/, '') || '/'

    if (value === '/') return { name: 'home' }
    if (value === '/artikel') {
      return {
        name: 'articles',
        category: current.query.get('kategori') ?? '',
        query: current.query.get('q') ?? '',
      }
    }
    if (value.startsWith('/artikel/')) {
      return { name: 'detail', slug: decodeURIComponent(value.slice('/artikel/'.length)) }
    }
    if (value === '/edisi') return { name: 'editions' }
    if (value === '/tentang') return { name: 'about' }
    if (value === '/kontak') return { name: 'contact' }
    return { name: 'notfound' }
  })

  const article = $derived(page.name === 'detail' ? getArticle(page.slug) : undefined)

  $effect(() => {
    const base = 'Lembar Warta — Buletin Komunitas'
    const titles: Record<Page['name'], string> = {
      home: base,
      articles: 'Daftar Artikel — Lembar Warta',
      detail: article ? `${article.title} — Lembar Warta` : 'Artikel — Lembar Warta',
      editions: 'Edisi & Arsip — Lembar Warta',
      about: 'Tentang Kami — Lembar Warta',
      contact: 'Kontak — Lembar Warta',
      notfound: 'Halaman tidak ditemukan — Lembar Warta',
    }
    document.title = titles[page.name]

    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute(
        'content',
        page.name === 'detail' && article
          ? article.excerpt
          : 'Lembar Warta — buletin komunitas pesantren, desa, dan organisasi. Kabar yang tenang, tulisan yang menenangkan.',
      )
    }
  })
</script>

<a
  href="#konten"
  onclick={(event) => {
    event.preventDefault()
    const main = document.getElementById('konten')
    main?.focus()
    main?.scrollIntoView()
  }}
  class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:font-sans focus:text-xs focus:font-semibold focus:uppercase focus:tracking-widest focus:text-paper"
>
  Lewati ke konten
</a>

<Header path={path} />

<main id="konten" tabindex="-1" class="min-h-[60vh] focus:outline-none">
  {#key current.raw}
    {#if page.name === 'home'}
      <Home />
    {:else if page.name === 'articles'}
      <Articles initialCategory={page.category} initialQuery={page.query} />
    {:else if page.name === 'detail'}
      <ArticleDetail slug={page.slug} />
    {:else if page.name === 'editions'}
      <Editions />
    {:else if page.name === 'about'}
      <About />
    {:else if page.name === 'contact'}
      <Contact />
    {:else}
      <NotFound />
    {/if}
  {/key}
</main>

<Footer />
