import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import './enhancements.css'

const elegantFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif'
})

const elegantFontSans = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Roshan & Thilini | Wedding Celebration',
  description: 'Join us as we celebrate the wedding of Roshan and Thilini on September 5, 2026.',
  generator: 'InviteMint',
  icons: {
    icon: '/wedding-icon.png',
    apple: '/wedding-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#dbb030',
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${elegantFont.variable} ${elegantFontSans.variable}`}>
      <body className="font-serif italic antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
