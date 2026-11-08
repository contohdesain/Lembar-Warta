<script lang="ts">
  let { class: className = 'h-12 w-12' }: { class?: string } = $props()
</script>

<svg
  class={className}
  viewBox="0 0 64 64"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  aria-hidden="true"
>
  <circle cx="32" cy="32" r="30" stroke="currentColor" stroke-width="1.4" />
  <circle cx="32" cy="32" r="25.5" stroke="currentColor" stroke-width="0.7" />
  <path
    d="M21.5 48V31.5C21.5 25.1 26.2 20 32 20C37.8 20 42.5 25.1 42.5 31.5V48"
    stroke="currentColor"
    stroke-width="1.2"
    stroke-linecap="round"
  />
  <path
    d="M23.5 38.7C26.8 37.2 29.7 37.5 32 39.7C34.3 37.5 37.2 37.2 40.5 38.7V47C37.2 45.7 34.3 46 32 48.1C29.7 46 26.8 45.7 23.5 47V38.7Z"
    stroke="currentColor"
    stroke-width="1.1"
    stroke-linejoin="round"
  />
  <path d="M32 40.4V47.6" stroke="currentColor" stroke-width="0.9" />
  <path
    d="M32 25.2L33.1 28.3L36.2 29.4L33.1 30.5L32 33.6L30.9 30.5L27.8 29.4L30.9 28.3L32 25.2Z"
    fill="currentColor"
  />
  <path d="M15 53.5H49" stroke="currentColor" stroke-width="0.7" />
</svg>
