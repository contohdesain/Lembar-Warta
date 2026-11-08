<script lang="ts">
  let {
    kicker = '',
    title,
    actionLabel = '',
    actionHref = '',
    id = '',
  }: {
    kicker?: string
    title: string
    actionLabel?: string
    actionHref?: string
    id?: string
  } = $props()
</script>

<div class="mb-6 flex flex-wrap items-end justify-between gap-x-6 gap-y-3 border-b border-ink pb-3">
  <div>
    {#if kicker}
      <p class="eyebrow text-[10px] text-accent">{kicker}</p>
    {/if}
    <h2 id={id} class="mt-1 font-serif text-[1.7rem] font-semibold leading-tight tracking-[-0.015em] sm:text-3xl">
      {title}
    </h2>
  </div>
  {#if actionLabel && actionHref}
    <a
      href={actionHref}
      class="group inline-flex items-center gap-1.5 pb-1 font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-soft transition hover:text-accent"
    >
      {actionLabel}
      <span class="transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>
    </a>
  {/if}
</div>
