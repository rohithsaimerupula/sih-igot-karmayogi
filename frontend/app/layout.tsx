import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'iGOT Karmayogi Bharat - Official Portal',
  description: 'National Programme for Civil Services Capacity Building (Mission Karmayogi)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-[#F4F7FC]">
        {children}
      </body>
    </html>
  )
}
