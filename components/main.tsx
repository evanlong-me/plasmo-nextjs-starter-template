'use client'

import '@/styles/global.css'

import { Input } from '@/components/ui/input'
import { useState } from 'react'
import Link from 'next/link'

interface MainProps {
  name: string
}

export function Main({ name }: MainProps) {
  const [data, setData] = useState('')

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen p-4">
      <h1 className="text-2xl font-bold text-center">
        Welcome to your <Link href="https://www.plasmo.com">Plasmo</Link> {name}
        !
      </h1>
      <Input onChange={(e) => setData(e.target.value)} value={data} />

      <Link href="https://docs.plasmo.com">READ THE DOCS!</Link>
    </div>
  )
}
