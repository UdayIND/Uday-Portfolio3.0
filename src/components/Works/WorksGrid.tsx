'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { WorkCard } from './WorkCard'
import Tilt from 'react-parallax-tilt'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'web',
    description: 'Full-stack e-commerce solution with React, Node.js, and Stripe integration.',
    image: '/images/works/project1.jpg',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  },
  {
    id: 2,
    title: 'AI Chat Application',
    category: 'ai',
    description: 'Real-time chat application powered by OpenAI GPT-3.5 with custom fine-tuning.',
    image: '/images/works/project2.jpg',
    tech: ['Next.js', 'OpenAI', 'Socket.io', 'PostgreSQL'],
  },
  {
    id: 3,
    title: 'Design System',
    category: 'design',
    description: 'Comprehensive design system with 200+ components and documentation.',
    image: '/images/works/project3.jpg',
    tech: ['Figma', 'Storybook', 'React', 'TypeScript'],
  },
  {
    id: 4,
    title: 'Mobile Banking App',
    category: 'web',
    description: 'Cross-platform mobile banking application with biometric authentication.',
    image: '/images/works/project4.jpg',
    tech: ['React Native', 'Node.js', 'Firebase', 'Biometrics'],
  },
  {
    id: 5,
    title: 'Machine Learning Dashboard',
    category: 'ai',
    description: 'ML model monitoring and visualization dashboard with real-time predictions.',
    image: '/images/works/project5.jpg',
    tech: ['Python', 'TensorFlow', 'D3.js', 'FastAPI'],
  },
  {
    id: 6,
    title: 'Brand Identity Package',
    category: 'design',
    description: 'Complete brand identity including logo, colors, typography, and guidelines.',
    image: '/images/works/project6.jpg',
    tech: ['Adobe CC', 'Figma', 'Brand Strategy'],
  },
]

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
                <WorkCard project={project} />
              </Tilt>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
