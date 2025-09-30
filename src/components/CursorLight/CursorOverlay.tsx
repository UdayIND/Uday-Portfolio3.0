'use client'

import { useEffect, useState } from 'react'

export function CursorOverlay() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    document.addEventListener('mousemove', updateMousePosition)

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      document.removeEventListener('mousemove', updateMousePosition)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  // Don't render on mobile or if user prefers reduced motion
  if (typeof window !== 'undefined' && 
      (window.innerWidth <= 768 || 
       window.matchMedia('(prefers-reduced-motion: reduce)').matches)) {
    return null
  }

  return (
    <div
      className={`cursor-light ${isHovering ? 'large' : ''}`}
      style={{
        transform: `translate3d(${mousePosition.x - 10}px, ${mousePosition.y - 10}px, 0)`,
      }}
    />
  )
}
