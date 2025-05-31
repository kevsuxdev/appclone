import { images } from '@/images'
import Image from 'next/image'
import React from 'react'
import AppStore from './AppStore'
import GoogleStore from './GoogleStore'

const Footer = () => {
  return (
    <footer className='flex items-center h-[30dvh] lg:flex-row flex-col justify-between bg-[#8c925b] relative lg:mt-0 mt-10'>
      <aside className='py-10 w-full flex items-center justify-between'>
        <Image src={images.Logo} width={120} height={120} alt='Logo'  />
        <aside className='flex flex-col-reverse lg:flex-col gap-10 items-center justify-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <article className='flex items-center gap-x-4'>
                <Image src={images.LinkedIn} width={30} height={30} alt='LinkedIn' className='object-contain cursor-pointer' />
                <Image src={images.Instagram} width={30} height={30} alt='Instragram' className='object-contain cursor-pointer' />
                <Image src={images.Facebook} width={30} height={30} alt='Facebook' className='object-contain cursor-pointer' />
                <Image src={images.Tiktok} width={30} height={30} alt='Tiktok' className='object-contain cursor-pointer' />
                <Image src={images.Youtube} width={30} height={30} alt='Youtube' className='object-contain cursor-pointer' />
                <Image src={images.X} width={30} height={30} alt='X' className='object-contain cursor-pointer' />
            </article>

            <article className='flex items-center gap-2 flex-col lg:flex-row'>
                <AppStore/>
                <GoogleStore/>
            </article>
        </aside>
        <article></article>
      </aside>
    </footer>
  )
}

export default Footer
