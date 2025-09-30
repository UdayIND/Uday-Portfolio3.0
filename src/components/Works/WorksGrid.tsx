'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import WorkCardLegacy from './WorkCardLegacy'
import Tilt from 'react-parallax-tilt'
import { projects } from '@/data/projects'

gsap.registerPlugin(ScrollTrigger)

export function WorksGrid() {
  const gridRef = useRef<HTMLDivElement>(null)
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  )

  useEffect(() => {
    if (!gridRef.current) return

    const cards = gridRef.current.querySelectorAll('.work-card')
    
    cards.forEach((card, index) => {
      gsap.fromTo(card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })

    const filterButtons = document.querySelectorAll('[data-filter]')
    filterButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const target = e.target as HTMLElement
        const filter = target.dataset.filter
        
        if (filter) {
          setActiveFilter(filter)
          
          filterButtons.forEach(btn => {
            btn.removeAttribute('data-active')
          })
          target.setAttribute('data-active', 'true')
        }
      })
    })

    return () => {
      filterButtons.forEach(button => {
        button.removeEventListener('click', () => {})
      })
    }
  }, [activeFilter])

  return (
    <section ref={gridRef} className="py-20 bg-white">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project) => (
            <div key={project.id} className="work-card">
              <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={1000}>
                <WorkCardLegacy project={project} />
              </Tilt>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
