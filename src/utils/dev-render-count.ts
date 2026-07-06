/**
 * Dev-only render counter for comparing React.memo impact.
 * In browser console: window.__RENDER_STATS__
 */
const counts: Record<string, number> = {}

export function useRenderCount(componentName: string) {
  if (process.env.NODE_ENV !== 'development') return

  counts[componentName] = (counts[componentName] ?? 0) + 1

  if (typeof window !== 'undefined') {
    ;(
      window as Window & { __RENDER_STATS__?: Record<string, number> }
    ).__RENDER_STATS__ = { ...counts }
  }
}

export function resetRenderCounts() {
  Object.keys(counts).forEach((k) => delete counts[k])
  if (typeof window !== 'undefined') {
    ;(
      window as Window & { __RENDER_STATS__?: Record<string, number> }
    ).__RENDER_STATS__ = {}
  }
}

export function getRenderCounts() {
  return { ...counts }
}
