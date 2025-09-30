import { WorksHeader } from '@/components/Works/WorksHeader'
import { WorksGrid } from '@/components/Works/WorksGrid'
import { Footer } from '@/components/Footer/Footer'

export default function WorksPage() {
  return (
    <>
      <main className="relative">
        <WorksHeader />
        <WorksGrid />
      </main>
      <Footer />
    </>
  )
}

