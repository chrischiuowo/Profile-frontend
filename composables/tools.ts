export const scrollTop = () => {
  window.scrollTo(0, 0)
}

export const scrollTo = (target) => {
  event.preventDefault()
  const t: HTMLElement = document.querySelector(target)
  t.scrollIntoView({
    behavior: 'smooth'
  })
}
