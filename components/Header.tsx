import { images } from '@/images'
import Image from 'next/image'
import React from 'react'
import Button from './Button'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='fixed px-4 lg:px-32 py-10 top-0 flex items-center flex-col lg:flex-row gap-2 justify-between bg-[#8c925b] z-20 min-w-screen'>
      <nav className='flex items-center justify-center gap-x-5'>
        <Link href='/' className='text-sm tracking-wide font-bold uppercase text-white hover:underline cursor-pointer'>Home</Link>
        <Link href='/#about' className='text-sm tracking-wide font-bold uppercase text-white hover:underline cursor-pointer'>About Us</Link>
        <Link href='/#foodwaste' className='text-sm tracking-wide font-bold uppercase text-white hover:underline cursor-pointer'>About Food Waste</Link>
      </nav>
      <Image
        src={images.Logo}
        alt='Logo'
        width={100}
        height={100}
        className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden lg:block'
      />
      <Button title='DOWNLOAD THE APP' className='border-white text-white'/>
    </header>
  )
}

export default Header
