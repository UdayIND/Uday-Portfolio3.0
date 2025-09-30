'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const filters = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web' },
  { id: 'ai', label: 'AI' },
  { id: 'design', label: 'Design' },
]

export function WorksHeader() {
  const headerRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!headerRef.current || !titleRef.current) return

    ScrollTrigger.create({
      trigger: headerRef.current,
      start: 'top top',
      end: '+=40%',
      pin: true,
      pinSpacing: false,
    })

    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top center',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, [])

  return (
    <section ref={headerRef} className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold mb-12 text-gray-900"
        >
          My Works
        </h1>
        
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className="px-6 py-3 bg-white text-gray-700 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors data-[active=true]:bg-black data-[active=true]:text-white"
              data-filter={filter.id}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
