import { ClerkLoaded, ClerkLoading, ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Loading from './loading'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Crafty's Home",
  description: "Crafty's Home",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className='items-align-center flex justify-center bg-pink-200'>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
