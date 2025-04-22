import AboutFoodWaste from '@/components/AboutFoodWaste'
import AboutUs from '@/components/AboutUs'
import FinalFooter from '@/components/FinalFooter'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import HowFoodHelps from '@/components/HowFoodHelps'
import CustomMarquee from '@/components/Marquee'
import Tagline from '@/components/Tagline'
import WhyUseFoodSaver from '@/components/WhyUseFoodSaver'
import React from 'react'

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Tagline />
      <WhyUseFoodSaver />
      <CustomMarquee/>
      <AboutFoodWaste/>
      <AboutUs/>
      <Footer/>
      <FinalFooter/>
    </>
  )
}

export default HomePage
