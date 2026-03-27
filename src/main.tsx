const css = document.createElement('link')
css.rel = 'stylesheet'
css.href = '/legacy/index.css'
document.head.appendChild(css)

const script = document.createElement('script')
script.src = '/legacy/index.js'
script.defer = true

function patchHeaderBrand() {
  const heading = Array.from(document.querySelectorAll('h1')).find((el) =>
    (el.textContent || '').includes('Vọng Âm Quá Khứ')
  ) as HTMLElement | undefined

  if (!heading) return false

  const textBlock = heading.parentElement as HTMLElement | null
  const brandWrap = textBlock?.parentElement as HTMLElement | null
  if (!textBlock || !brandWrap) return false

  const maybeOldBadge = brandWrap.firstElementChild as HTMLElement | null
  if (maybeOldBadge && (maybeOldBadge.textContent || '').includes('VÂ')) {
    maybeOldBadge.remove()
  }

  heading.textContent = '3 công chúa'
  heading.style.fontSize = '14px'
  heading.style.lineHeight = '1.1'
  heading.style.letterSpacing = '0.01em'

  const subtitle = textBlock.querySelector('p') as HTMLElement | null
  if (subtitle) subtitle.remove()

  let logo = brandWrap.querySelector('#menu-logo-3-cong-chua') as HTMLImageElement | null
  if (!logo) {
    logo = document.createElement('img')
    logo.id = 'menu-logo-3-cong-chua'
    logo.src = '/logo-3-cong-chua.jpg'
    logo.alt = 'Logo 3 công chúa'
    logo.style.width = '40px'
    logo.style.height = '40px'
    logo.style.objectFit = 'cover'
    logo.style.borderRadius = '9999px'
    logo.style.border = '2px solid rgba(245,158,11,0.7)'
    logo.style.boxShadow = '0 6px 16px rgba(0,0,0,0.25)'
    brandWrap.insertBefore(logo, brandWrap.firstChild)
  }

  return true
}

function patchHeroContent() {
  const heroSection = document.querySelector('section.relative.min-h-screen') as HTMLElement | null
  if (!heroSection) return false

  const heroTitle = heroSection.querySelector('h1') as HTMLElement | null
  if (!heroTitle) return false

  // Remove old injected hero elements from previous patches.
  const oldHeroBadge = document.getElementById('hero-logo-badge')
  if (oldHeroBadge) oldHeroBadge.remove()
  heroSection.querySelectorAll('#hero-logo-badge, [data-injected-hero-logo], [data-injected-hero-text]').forEach((el) => el.remove())

  // Push hero content down to avoid overlap with fixed menu.
  const textContainer = heroTitle.parentElement as HTMLElement | null
  if (textContainer) {
    textContainer.style.marginTop = '84px'
  }

  // Restore headline style close to original look.
  heroTitle.innerHTML = ''
  heroTitle.style.fontSize = 'clamp(44px, 7vw, 96px)'
  heroTitle.style.lineHeight = '1.04'
  heroTitle.style.fontWeight = '800'
  heroTitle.style.color = '#f5c542'
  heroTitle.style.textShadow = '0 0 10px rgba(255,255,255,0.45), 0 2px 10px rgba(0,0,0,0.35)'

  const mainLine = document.createElement('span')
  mainLine.textContent = 'Vọng Âm Quá Khứ'
  mainLine.style.display = 'block'

  const subLine = document.createElement('span')
  subLine.textContent = 'Hành Trình Di Sản Của 3 Công Chúa'
  subLine.style.display = 'block'
  subLine.style.fontSize = '0.72em'
  subLine.style.marginTop = '10px'
  subLine.style.color = '#ffffff'
  subLine.style.textShadow = '0 0 8px rgba(245,197,66,0.55), 0 2px 8px rgba(0,0,0,0.35)'

  heroTitle.appendChild(mainLine)
  heroTitle.appendChild(subLine)

  // Hero tagline under title.
  const introP = heroTitle.parentElement?.querySelector('p') as HTMLElement | null
  if (introP) {
    introP.textContent = 'Nơi Dấu Ấn 3 Miền Thăng Hoa, Tri Thức 3 Miền Thăng Hoa'
    introP.style.color = 'rgba(255,255,255,0.96)'
    introP.style.textShadow = '0 1px 6px rgba(0,0,0,0.45)'
    introP.style.fontSize = 'clamp(18px, 2.3vw, 34px)'
    introP.style.fontWeight = '500'
  }

  return true
}

const mount = () => {
  document.body.appendChild(script)

  const runPatches = () => {
    const ok1 = patchHeaderBrand()
    const ok2 = patchHeroContent()
    return ok1 && ok2
  }

  const observer = new MutationObserver(() => {
    if (runPatches()) observer.disconnect()
  })

  observer.observe(document.body, { childList: true, subtree: true })
  setTimeout(runPatches, 300)
  setTimeout(runPatches, 1200)
  setTimeout(runPatches, 2200)
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mount, { once: true })
} else {
  mount()
}
