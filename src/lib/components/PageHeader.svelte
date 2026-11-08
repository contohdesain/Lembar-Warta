<script lang="ts">
  let {
    kicker,
    title,
    intro = '',
  }: {
    kicker: string
    title: string
    intro?: string
  } = $props()
</script>

<header class="border-b-4 border-double border-rule pb-8">
  <p class="eyebrow text-[10px] text-accent">{kicker}</p>
  <h1 class="mt-3 font-serif text-[2.35rem] font-bold leading-[1.08] tracking-[-0.03em] sm:text-5xl">
    {title}
  </h1>
  {#if intro}
    <p class="mt-4 max-w-2xl text-[17px] leading-relaxed text-ink-soft sm:text-lg">{intro}</p>
  {/if}
</header>
