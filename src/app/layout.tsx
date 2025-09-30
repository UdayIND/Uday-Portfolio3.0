import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LenisProvider } from '@/components/providers/LenisProvider'
import { CursorOverlay } from '@/components/CursorLight/CursorOverlay'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Uday Vallabhaneni - Portfolio',
  description: 'Full-stack developer and designer creating innovative digital experiences',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LenisProvider>
          <CursorOverlay />
          {children}
        </LenisProvider>
      </body>
    </html>
  )
}
