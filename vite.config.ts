import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig(({ command }) => ({
  // Build memakai path relatif supaya hasil `dist/` bisa dipublikasikan
  // ke subdirektori GitHub Pages mana pun tanpa mengubah konfigurasi.
  // Jika perlu, path absolut tetap bisa dipaksa lewat env BASE_PATH,
  // mis. BASE_PATH=/lembar-warta/ bun run build.
  base: process.env.BASE_PATH || (command === 'build' ? './' : '/'),
  plugins: [svelte(), tailwindcss()],
}))
