import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ 
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: 'Portfolio de Nahuel Viera | Full Stack Developer',
  description: 'Nahuel Viera — Full Stack Developer focused on .NET',
  icons: {
    icon: [
      { url: "/favicon-nv.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-nv.png", sizes: "192x192", type: "image/png" },
    ],
  },
  openGraph: {
    title: 'Nahuel Viera — Full Stack Developer',
    description: 'Full Stack Developer specialized in .NET and Angular. Check out my projects and skills.',
    images: [
      {
        url: 'https://res.cloudinary.com/dclt3q5lo/image/upload/v1775202134/foto_banner_porfolio_qlal1u.png',
        width: 1200,
        height: 630,
        alt: 'Nahuel Viera — Full Stack Developer Portfolio',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nahuel Viera — Full Stack Developer',
    description: 'Full Stack Developer specialized in .NET and Angular. Check out my projects and skills.',
    images: ['https://res.cloudinary.com/dclt3q5lo/image/upload/v1775202134/foto_banner_porfolio_qlal1u.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
