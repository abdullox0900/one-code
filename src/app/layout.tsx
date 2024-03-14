import ProvidersNextUI from '@/Providers/next.ui'
import Header from '@/components/header/header'
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import Footer from '@/components/footer/footer'
import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {



  return (
    <html lang="en" className='dark'>
      <body className={inter.className}>
        <ClerkProvider>
          <ProvidersNextUI>
            <Header />
            {children}
            <Footer />
          </ProvidersNextUI>
        </ClerkProvider>
      </body>
    </html>
  )
}
