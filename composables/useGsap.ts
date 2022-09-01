import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

const banner = () => {
  // banner
  gsap.to('section.banner p.slogan-1', {
    opacity: 0,
    y: -60,
    scrollTrigger: {
      trigger: 'section.banner',
      start: 'top top',
      scrub: true
    }
  })
  gsap.to('section.banner p.slogan-2', {
    opacity: 0,
    y: -80,
    scrollTrigger: {
      trigger: 'section.banner',
      start: 'top top',
      scrub: true
    }
  })
  gsap.to('section.banner .cover-content', {
    scale: 2,
    scrollTrigger: {
      trigger: 'section.banner',
      start: 'top top',
      scrub: true
    }
  })
  gsap.to('section.banner .mask', {
    opacity: 0.9,
    scrollTrigger: {
      trigger: 'section.banner',
      start: 'top top',
      scrub: true
    }
  })
  gsap.to('#main-cover', {
    opacity: 1,
    scrollTrigger: {
      trigger: 'section.banner',
      start: 'center',
      scrub: true,
      onUpdate: self => {
        if (self.progress === 1) { document.querySelector('#header').classList.add('active') } else { document.querySelector('#header').classList.remove('active') }
      }
    }
  })
}
const about = () => {
  const circles: Array<HTMLElement> = Array.from(document.querySelectorAll('.about .circle'))
  circles.forEach((element) => {
    const counter: HTMLElement = element.querySelector('span')
    const count: { val: number } = { val: 0 }

    const timeLine = gsap.timeline({
      defaults: {
        duration: 2,
        delay: 1
      },
      scrollTrigger: {
        trigger: circles[0],
        onLeaveBack: self => self.disable()
      }
    })

    timeLine.to(count, {
      val: element.dataset.value,
      roundProps: 'val',
      onUpdate: function () {
        const newVal = count.val + '%'
        element.style.setProperty('--value', newVal)
        counter.textContent = newVal
      }
    }, 0)
  })
}

export const usePageGsap = () => {
  banner()
  about()
}
