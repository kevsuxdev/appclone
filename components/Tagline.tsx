import { images } from '@/images'
import Image from 'next/image'
import React from 'react'
import AppStore from './AppStore'
import GoogleStore from './GoogleStore'

const Tagline = () => {
  return (
    <section className='h-96 flex items-center justify-center flex-col gap-10 mb-10 lg:mt-0 mt-10 px-4'>
      <h1 className='lg:w-1/2 px-4 lg:px-0 text-lg lg:text-xl font-normal text-justify lg:text-center tracking-wide font-lato '>
        At FoodSaver, we believe that great food should never go to waste. Our
        mission is to connect businesses with surplus food to conscious
        consumers looking for affordable, delicious meals—helping both the
        planet and people's wallets.
      </h1>
      <article className='flex items-center gap-5 lg:gap-10'>
        <AppStore />
        <GoogleStore/>
      </article>
    </section>
  )
}

export default Tagline
