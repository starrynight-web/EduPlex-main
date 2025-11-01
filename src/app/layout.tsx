import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// Optimized font loading
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', // Improves performance
  preload: true,
})

export const metadata: Metadata = {
  title: 'Eduplex - DIU Student Platform',
  description: 'A web platform for students of Daffodil International University',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
/*import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Eduplex - DIU Student Platform',
  description: 'A web platform for students of Daffodil International University',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}*/