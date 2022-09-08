import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

const mainCover = () => {
  const header: HTMLElement = document.querySelector('#header')
  const body: HTMLElement = document.querySelector('body')
  const sections: Array<HTMLElement> = Array.from(document.querySelectorAll('main > section'))
  const checkClass = (now: string) => {
    sections.forEach(element => {
      if (element.classList.contains(now)) element.classList.add('active')
    })
  }
  const isAbout = ():void => {
    body.classList.remove('project-mode', 'contact-mode')
    body.classList.add('about-mode')
    checkClass('about')
  }
  const isProject = ():void => {
    body.classList.remove('contact-mode', 'about-mode')
    body.classList.add('project-mode')
    checkClass('project')
  }
  const isContact = ():void => {
    body.classList.remove('project-mode', 'about-mode')
    body.classList.add('contact-mode')
    checkClass('contact')
  }
  gsap.to('#cover', {
    scrollTrigger: {
      trigger: 'section.banner',
      start: '30%',
      end: 'center bottom',
      onUpdate: self => {
        if (self.progress === 1) {
          header.classList.add('active')
          body.classList.add('cover-show')
          isAbout()
        } else {
          header.classList.remove('active')
          body.classList.remove('cover-show', 'about-mode', 'project-mode', 'contact-mode')
        }
      }
    }
  })
  gsap.to('#cover', {
    scrollTrigger: {
      trigger: 'section.about',
      start: 'start',
      onUpdate: self => {
        if (self.progress >= 0.6) {
          isProject()
        } else {
          isAbout()
        }
      }
    }
  })
  gsap.to('#cover', {
    scrollTrigger: {
      trigger: 'section.project',
      start: 'start',
      onUpdate: self => {
        if (self.progress >= 0.6) {
          isContact()
        } else {
          isProject()
        }
      }
    }
  })
}

const banner = () => {
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
    scale: 2.5,
    scrollTrigger: {
      trigger: 'section.banner',
      start: 'top top',
      scrub: true
    }
  })
  gsap.to('section.banner .mask', {
    opacity: 0.8,
    scrollTrigger: {
      trigger: 'section.banner',
      start: 'top top',
      scrub: true
    }
  })
}

export const usePageGsap = () => {
  mainCover()
  banner()
}

export const useProjectCardGsap = (dom: HTMLElement) => {
  const target: HTMLElement = dom
  const imageOuter: HTMLElement = target.querySelector('.image-outer')
  const image: HTMLElement = target.querySelector('.image')

  gsap.to(imageOuter, {
    scrollTrigger: {
      trigger: 'section.project',
      start: 'top bottom',
      end: 'bottom',
      scrub: true,
      onUpdate: self => {
        const outerW = imageOuter.offsetHeight
        const imageW = image.offsetHeight
        const diff = imageW - outerW
        image.style.setProperty('transform', `translate3D(0, ${diff * self.progress * 1.5}px, 0)`)
      }
    }
  })
}
