import { HeroMNTN } from '@/components/HeroMNTN/Hero'
import { ContactSection } from '@/components/Contact/ContactSection'
import { Footer } from '@/components/Footer/Footer'

export default function Home() {
  return (
    <>
      <main className="relative">
        <HeroMNTN />
        <div id="contact">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </>
  )
}

