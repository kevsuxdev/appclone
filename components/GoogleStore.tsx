"use client"
import { images } from '@/images'
import Image from 'next/image'
import React from 'react'

const GoogleStore = () => {
  return (
    <div
      onClick={() => {
        window.open(
          'https://play.google.com/pc-store/games/details?id=com.neowizgames.game.browndust2&pcampaignid=merch-FCC-gpg-browndust2-websky'
        )
      }}
      className='p-2 rounded-lg bg-white border border-black flex items-center justify-center gap-3 cursor-pointer'
    >
      <Image src={images.Playstore} alt='Apple Store' width={30} height={30} />
      <p className='flex items-center justify-between flex-col leading-2 text-black font-lato font-bold text-xs'>
        <span className='font-normal w-full'>Get it on</span>{' '}
        <span className='text-lg font-black'>Google Play</span>
      </p>
    </div>
  )
}

export default GoogleStore
