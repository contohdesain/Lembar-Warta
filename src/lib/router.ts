import { writable } from 'svelte/store'

export type Route = {
  path: string
  query: URLSearchParams
  raw: string
}

function parseHash(): Route {
  const raw = window.location.hash.replace(/^#/, '') || '/'
  const [pathPart, queryPart = ''] = raw.split('?')
  return {
    path: pathPart || '/',
    query: new URLSearchParams(queryPart),
    raw,
  }
}

export const route = writable<Route>(parseHash())

if (typeof window !== 'undefined') {
  window.addEventListener('hashchange', () => {
    route.set(parseHash())
    window.scrollTo(0, 0)
  })
}

export function go(to: string) {
  const target = to.startsWith('#') ? to : `#${to}`
  if (window.location.hash === target) {
    window.scrollTo(0, 0)
    return
  }
  window.location.hash = target
}

export function href(path: string) {
  return `#${path}`
}
