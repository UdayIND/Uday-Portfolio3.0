'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { HeroLayers } from './Layers/HeroLayers'
import { SectionStepper } from './SectionStepper'
import { SplitText } from '@/utils/SplitText'

gsap.registerPlugin(ScrollTrigger)

export function HeroMNTN() {
  const heroRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!heroRef.current || !titleRef.current) return

    const title = titleRef.current
    const splitText = new SplitText(title, { type: 'words,chars' })
    const chars = splitText.chars

    gsap.set(chars, { opacity: 0, y: 50 })

    const tl = gsap.timeline()

    tl.to(chars, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.05,
      ease: 'power3.out',
    })

    const layers = heroRef.current.querySelectorAll('.parallax-layer')
    layers.forEach((layer, index) => {
      const speed = 0.3 + (index * 0.3)
      
      gsap.to(layer, {
        yPercent: -50 * speed,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    })

    const cta = heroRef.current.querySelector('.cta-button')
    if (cta) {
      gsap.fromTo(cta,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.5,
          ease: 'power3.out',
        }
      )
    }

    return () => {
      splitText.revert()
    }
  }, [])

  return (
    <section ref={heroRef} className="relative h-screen overflow-hidden">
      <HeroLayers />
      
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white">
          <h1 
            ref={titleRef}
            className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
          >
            Uday Vallabhaneni
          </h1>
          <p className="text-xl md:text-2xl mb-12 opacity-80">
            Full-Stack Developer & Designer
          </p>
          <button className="cta-button bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
            View My Work
          </button>
        </div>
      </div>

      <SectionStepper />
    </section>
  )
}
