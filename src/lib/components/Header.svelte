<script lang="ts">
  import Logo from './Logo.svelte'
  import { site } from '../data'

  let { path = '/' }: { path?: string } = $props()

  const navItems = [
    { label: 'Beranda', href: '#/', match: '/' },
    { label: 'Artikel', href: '#/artikel', match: '/artikel' },
    { label: 'Edisi & Arsip', href: '#/edisi', match: '/edisi' },
    { label: 'Tentang Kami', href: '#/tentang', match: '/tentang' },
    { label: 'Kontak', href: '#/kontak', match: '/kontak' },
  ]

  function isActive(match: string): boolean {
    if (match === '/') return path === '/'
    return path === match || path.startsWith(`${match}/`)
  }
</script>

<header>
  <div class="bg-ink text-paper">
    <div
      class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-2.5 font-sans text-[10px] font-medium uppercase tracking-[0.16em]"
    >
      <span class="truncate">Buletin Komunitas · Sejak {site.founded}</span>
      <span class="hidden shrink-0 sm:inline">{site.edition} · {site.period}</span>
      <a class="shrink-0 text-paper/80 transition hover:text-paper" href="#/kontak">Kirim Tulisan</a>
    </div>
  </div>

  <div class="mx-auto max-w-6xl px-5 pb-7 pt-9 text-center sm:pb-8 sm:pt-11">
    <a href="#/" class="group inline-flex flex-col items-center" aria-label="Lembar Warta — Beranda">
      <Logo class="h-14 w-14 text-accent transition-transform duration-300 group-hover:-rotate-3 sm:h-16 sm:w-16" />
      <span
        class="mt-3 font-serif text-[2.6rem] font-bold leading-none tracking-[-0.025em] text-ink sm:text-6xl"
      >
        Lembar Warta
      </span>
      <span class="mt-3 flex items-center gap-3 text-ink-muted">
        <span class="h-px w-8 bg-rule"></span>
        <span class="font-sans text-[9px] font-semibold uppercase tracking-[0.24em] sm:text-[10px]">
          {site.tagline}
        </span>
        <span class="h-px w-8 bg-rule"></span>
      </span>
    </a>
  </div>

  </header>

  <nav
    class="sticky top-0 z-40 border-y border-rule bg-paper/95 backdrop-blur-sm"
    aria-label="Navigasi utama"
  >
    <div class="mx-auto max-w-6xl px-5">
      <ul
        class="flex items-stretch justify-start gap-5 overflow-x-auto font-sans text-[11px] font-semibold uppercase tracking-[0.15em] sm:justify-center sm:gap-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {#each navItems as item}
          <li class="shrink-0">
            <a
              href={item.href}
              aria-current={isActive(item.match) ? 'page' : undefined}
              class="relative flex h-12 items-center border-b-2 transition-colors {isActive(item.match)
                ? 'border-accent text-accent'
                : 'border-transparent text-ink-soft hover:text-ink'}"
            >
              {item.label}
            </a>
          </li>
        {/each}
        <li class="ml-auto hidden shrink-0 items-center sm:flex">
          <a
            href="#/artikel"
            class="flex items-center gap-1.5 py-3 text-ink-muted transition hover:text-accent"
            aria-label="Cari artikel"
          >
            <svg viewBox="0 0 20 20" fill="none" class="h-4 w-4" aria-hidden="true">
              <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" stroke-width="1.4" />
              <path d="M12.8 12.8L17 17" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" />
            </svg>
            <span>Cari</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
