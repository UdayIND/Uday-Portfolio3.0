// Simple SplitText utility for GSAP animations
export class SplitText {
  chars: HTMLElement[] = []
  words: HTMLElement[] = []
  lines: HTMLElement[] = []

  constructor(element: HTMLElement, options: { type: string }) {
    const { type } = options
    
    if (type.includes('chars')) {
      this.chars = this.splitIntoChars(element)
    }
    
    if (type.includes('words')) {
      this.words = this.splitIntoWords(element)
    }
    
    if (type.includes('lines')) {
      this.lines = this.splitIntoLines(element)
    }
  }

  private splitIntoChars(element: HTMLElement): HTMLElement[] {
    const text = element.textContent || ''
    element.innerHTML = ''
    
    return text.split('').map(char => {
      const span = document.createElement('span')
      span.textContent = char === ' ' ? '\u00A0' : char
      span.style.display = 'inline-block'
      element.appendChild(span)
      return span
    })
  }

  private splitIntoWords(element: HTMLElement): HTMLElement[] {
    const text = element.textContent || ''
    element.innerHTML = ''
    
    return text.split(' ').map(word => {
      const span = document.createElement('span')
      span.textContent = word + ' '
      span.style.display = 'inline-block'
      element.appendChild(span)
      return span
    })
  }

  private splitIntoLines(element: HTMLElement): HTMLElement[] {
    // Simplified line splitting - for more complex scenarios, consider using a library
    const words = element.textContent?.split(' ') || []
    element.innerHTML = ''
    
    return words.map((word, index) => {
      const span = document.createElement('span')
      span.textContent = word + (index < words.length - 1 ? ' ' : '')
      span.style.display = 'inline-block'
      element.appendChild(span)
      return span
    })
  }

  revert() {
    // Clean up and restore original text
    this.chars.forEach(char => {
      if (char.parentNode) {
        char.parentNode.removeChild(char)
      }
    })
    this.words.length = 0
    this.chars.length = 0
    this.lines.length = 0
  }
}
