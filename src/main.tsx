const css = document.createElement('link')
css.rel = 'stylesheet'
css.href = '/legacy/index.css'
document.head.appendChild(css)

const script = document.createElement('script')
script.src = '/legacy/index.js'
script.defer = true

const mount = () => {
  document.body.appendChild(script)
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mount, { once: true })
} else {
  mount()
}
