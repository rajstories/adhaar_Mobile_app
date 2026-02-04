import React from "react"
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

// Fonts are loaded but not applied to specific elements
// Using default system fonts via Tailwind's font-sans class

export const metadata: Metadata = {
  title: 'UIDAI Alert System - Government of India',
  description: 'Aadhaar System Alert Monitoring for Field Officers',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
