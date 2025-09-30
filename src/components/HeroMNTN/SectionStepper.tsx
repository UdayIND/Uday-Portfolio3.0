'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sections = [
  { id: 'start', label: 'Start' },
  { id: '01', label: '01' },
  { id: '02', label: '02' },
  { id: '03', label: '03' },
]

export function SectionStepper() {
  const stepperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!stepperRef.current) return

    sections.forEach((section, index) => {
      if (section.id === 'start') return

      ScrollTrigger.create({
        trigger: `#section-${section.id}`,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => {
          const steps = stepperRef.current?.querySelectorAll('.step')
          steps?.forEach((step, i) => {
            if (i === index) {
              step.classList.add('active')
            } else {
              step.classList.remove('active')
            }
          })
        },
      })
    })
  }, [])

  return (
    <div 
      ref={stepperRef}
      className="fixed right-8 top-1/2 transform -translate-y-1/2 z-20 hidden md:block"
    >
      <div className="flex flex-col space-y-4">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className={`step w-3 h-3 rounded-full border-2 border-white/50 transition-colors duration-300 ${
              index === 0 ? 'active bg-white' : ''
            }`}
          >
            <span className="sr-only">{section.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
