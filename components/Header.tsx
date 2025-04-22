import { images } from '@/images'
import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <header className='fixed px-32 py-10 top-0 flex items-center justify-between bg-[#8c925b] z-20 min-w-screen'>
      <nav className='flex items-center justify-center gap-x-5'>
        <a href='#' className='text-sm tracking-wide font-bold uppercase text-white hover:underline cursor-pointer'>Home</a>
        <a href='#about' className='text-sm tracking-wide font-bold uppercase text-white hover:underline cursor-pointer'>About Us</a>
        <a href='#foodwaste' className='text-sm tracking-wide font-bold uppercase text-white hover:underline cursor-pointer'>About Food Waste</a>
      </nav>
      <Image
        src={images.Logo}
        alt='Logo'
        width={100}
        height={100}
        className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'
      />
      <Button title='DOWNLOAD THE APP' className='border-white text-white'/>
    </header>
  )
}

export default Header
