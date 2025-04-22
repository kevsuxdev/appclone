import { images } from '@/images'
import Image from 'next/image'
import React from 'react'
import Button from './Button'
import AppStore from './AppStore'
import GoogleStore from './GoogleStore'

const Hero = () => {
  return (
    <section className='relative w-full h-[80dvh] flex items-end justify-center mt-10'>
      <Image src={images.Banner} alt='Banner' fill className='absolute' />
      <div className='absolute inset-0 bg-black/20 z-10' />
      <article className='z-10 mb-20 flex flex-col gap-5 items-center'>
        <h1 className='flex flex-col items-center text-white text-6xl font-black gap-2 tracking-tight'>
          <span>Save Food,</span> <span>Save the Planet</span>
        </h1>
        <article className='flex items-center gap-x-5'>
          <AppStore />
          <GoogleStore />
        </article>
      </article>
    </section>
  )
}

export default Hero
