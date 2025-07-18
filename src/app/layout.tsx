import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Arthenticity - Blockchain Art Verification',
  description: 'Art Verification Product on Blockchain, Made By Artists for Artists under European Artist Bank',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="arthenticity">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}