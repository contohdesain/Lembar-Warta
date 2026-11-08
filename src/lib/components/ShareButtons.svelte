<script lang="ts">
  let { title }: { title: string } = $props()

  let shareUrl = $state('')
  let copied = $state(false)
  let canNativeShare = $state(false)

  $effect(() => {
    shareUrl = window.location.href
    canNativeShare = typeof navigator !== 'undefined' && typeof navigator.share === 'function'
  })

  const encodedTitle = $derived(encodeURIComponent(title))
  const encodedUrl = $derived(encodeURIComponent(shareUrl))

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(shareUrl)
      copied = true
      window.setTimeout(() => (copied = false), 2200)
    } catch {
      copied = false
    }
  }

  async function nativeShare() {
    if (canNativeShare) {
      try {
        await navigator.share({ title, url: shareUrl })
        return
      } catch {
        // Pengguna membatalkan dialog bagikan.
      }
    }
    await copyLink()
  }
</script>

<div class="no-print flex flex-wrap items-center gap-2">
  <button
    type="button"
    onclick={nativeShare}
    class="inline-flex items-center gap-2 border border-rule px-3 py-2 font-sans text-[10px] font-semibold uppercase tracking-[0.1em] text-ink-soft transition hover:border-ink hover:text-ink"
  >
    <svg viewBox="0 0 20 20" fill="none" class="h-3.5 w-3.5" aria-hidden="true">
      <circle cx="15" cy="4.5" r="2" stroke="currentColor" stroke-width="1.3" />
      <circle cx="5" cy="10" r="2" stroke="currentColor" stroke-width="1.3" />
      <circle cx="15" cy="15.5" r="2" stroke="currentColor" stroke-width="1.3" />
      <path d="M6.8 9L13.2 5.5M6.8 11L13.2 14.5" stroke="currentColor" stroke-width="1.3" />
    </svg>
    {copied ? 'Tersalin' : 'Bagikan'}
  </button>

  <a
    href="https://wa.me/?text={encodedTitle}%20{encodedUrl}"
    target="_blank"
    rel="noreferrer"
    class="inline-flex items-center gap-2 border border-rule px-3 py-2 font-sans text-[10px] font-semibold uppercase tracking-[0.1em] text-ink-soft transition hover:border-ink hover:text-ink"
  >
    WhatsApp
  </a>

  <a
    href="https://www.facebook.com/sharer/sharer.php?u={encodedUrl}"
    target="_blank"
    rel="noreferrer"
    class="inline-flex items-center gap-2 border border-rule px-3 py-2 font-sans text-[10px] font-semibold uppercase tracking-[0.1em] text-ink-soft transition hover:border-ink hover:text-ink"
  >
    Facebook
  </a>

  <a
    href="https://twitter.com/intent/tweet?text={encodedTitle}&url={encodedUrl}"
    target="_blank"
    rel="noreferrer"
    class="inline-flex items-center gap-2 border border-rule px-3 py-2 font-sans text-[10px] font-semibold uppercase tracking-[0.1em] text-ink-soft transition hover:border-ink hover:text-ink"
  >
    X
  </a>

  <button
    type="button"
    onclick={copyLink}
    class="inline-flex items-center gap-2 border border-rule px-3 py-2 font-sans text-[10px] font-semibold uppercase tracking-[0.1em] text-ink-soft transition hover:border-ink hover:text-ink"
  >
    {copied ? 'Tautan tersalin' : 'Salin tautan'}
  </button>

  <button
    type="button"
    onclick={() => window.print()}
    class="inline-flex items-center gap-2 border border-rule px-3 py-2 font-sans text-[10px] font-semibold uppercase tracking-[0.1em] text-ink-soft transition hover:border-ink hover:text-ink"
  >
    Cetak
  </button>
</div>
