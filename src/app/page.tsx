'use client'
import Hero from '@/components/hero/hero'

import { Toaster } from "@/components/ui/sonner"
import { useEffect, useState } from 'react'

import { toast } from "sonner"

type MouseEventRight = {
  handleOnContextMenu: () => void
}

export default function Home() {

  const [isFirstRender, setIsFirstRender] = useState(true)

  useEffect(() => {
    // Birinchi rendir bo'lsa
    if (isFirstRender) {
      console.log("Birinchi renderda ishlaydigan logika")

      setIsFirstRender(false)
    } else {
      document.body.addEventListener('contextmenu', (e) => {
        e.preventDefault()

        if (e.button == 2) {
          toast("Ispekt xafsizlik uchun yopilgan 😊.")
        }
      })
      console.log("Ikkinchi va keyingi renderlarda ishlaydigan logika")
    }
  }, [isFirstRender])


  return (
    <main>
      <Hero />
      <Toaster invert={true} className='light' />
    </main>
  )
}
