"use client"
import { images } from '@/images'
import Image from 'next/image'
import React from 'react'

const AppStore = () => {
  return (
    <div onClick={() => window.open("https://apps.apple.com/us/app/super-mario-run/id1145275343")} className='cursor-pointer p-2 rounded-lg bg-white border border-black flex items-center justify-center gap-3'>
      <Image src={images.AppleStore} alt='Apple Store' width={30} height={30} />
      <p className='flex items-center justify-between flex-col leading-2 text-black font-lato font-bold text-xs'>
        <span className='font-normal w-full'>Download on the</span>{' '}
        <span className='text-lg font-black'>App Store</span>
      </p>
    </div>
  )
}

export default AppStore
