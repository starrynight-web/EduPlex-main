// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Eduplex - DIU Student Platform',
  description: 'A comprehensive platform for Daffodil International University students - SWE, NFE & English Departments',
  keywords: ['DIU', 'education', 'students', 'SWE', 'NFE', 'English', 'Daffodil', 'Eduplex'],

  openGraph: {
    title: 'Eduplex - DIU Student Platform',
    description: 'Platform for DIU Students - SWE, NFE & English Departments',
    url: 'https://eduplex-diu.unleft.space',
    siteName: 'Eduplex',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Eduplex - DIU Student Platform',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Eduplex - DIU Student Platform',
    description: 'Platform for DIU Students - SWE, NFE & English Departments',
    images: ['/images/og-image.jpg'],
  },

  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <meta name="theme-color" content="#0B0E1A" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
/*import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// Optimized font loading
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', 
  preload: true,
})

export const metadata: Metadata = {
  title: 'Eduplex - DIU Student Platform',
  description: 'A comprehensive platform for Daffodil International University students - SWE, NFE & English Departments',
  keywords: ['DIU', 'education', 'students', 'SWE', 'NFE', 'English', 'Daffodil', 'Eduplex'],

  openGraph: {
    title: 'Eduplex - DIU Student Platform',
    description: 'Platform for DIU Students - SWE, NFE & English Departments',
    url: 'https://eduplex-diu.unleft.space',
    siteName: 'Eduplex',
    images: [
         {
        url: '/images/og-image-2025.jpg', // You need to create this image
        width: 1200,
        height: 630,
        alt: 'Eduplex - DIU Student Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Eduplex - DIU Student Platform',
    description: 'Platform for DIU Students - SWE, NFE & English Departments',
    images: ['/images/og-image.jpg'],
  },
  
  // Icons
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        
        <meta name="theme-color" content="#0B0E1A" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
import type { Metadata } from 'next'
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