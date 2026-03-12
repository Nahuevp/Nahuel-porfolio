import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Portfolio de Nahuel Viera | Full Stack Developer',
  description: 'Nahuel Viera — Full Stack Developer focused on .NET',
  icons: {
    icon: [
      { url: "/dragonball.jpg", sizes: "32x32", type: "image/jpeg" },
      { url: "/dragonball.jpg", sizes: "192x192", type: "image/jpeg" },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
