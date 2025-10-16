export function useScrollToSection() {
  const getHeaderOffset = () => {
    const header = document.querySelector('header')
    return header instanceof HTMLElement ? header.offsetHeight : 0
  }

  const scrollToSection = (href: string, opts?: { offset?: number; updateHash?: boolean }) => {
    if (!href) return
    const id = href.startsWith('#') ? href.slice(1) : href
    const el = document.getElementById(id)
    if (!el) return

    const offset = typeof opts?.offset === 'number' ? opts.offset : getHeaderOffset() + 8
    const y = el.getBoundingClientRect().top + window.scrollY - offset

    window.scrollTo({ top: y, behavior: 'smooth' })

    if (opts?.updateHash !== false) {
      try {
        history.pushState(null, '', `#${id}`)
      } catch (e) {
        // no-op
        console.debug('hash update failed', e)
      }
    }
  }

  return { scrollToSection, getHeaderOffset }
}
