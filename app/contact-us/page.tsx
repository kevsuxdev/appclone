import FinalFooter from '@/components/FinalFooter'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const ContactUs = () => {
  return (
    <>
      <Header />
      <section className='min-h-[60dvh] mt-30 border border-black flex flex-col items-center py-16 px-32 space-y-32'>
        <article className='flex items-center flex-col gap-2'>
          <h1 className='text-base-green-300 text-[3.5rem] font-black tracking-tight uppercase'>Contact Us</h1>
        </article>
        <article className='w-2/3 md:w-1/2 space-y-3 md:space-y-8'>
          <h3 className='text-3xl font-black uppercase'>Contact Us</h3>
          <div className='flex flex-col gap-1'>
            <a href='mailto:foodsaverph@gmail.com' className='hover:underline text-lg'><strong className='font-medium'>Email Address: </strong>foodsaverph@gmail.com</a>
            <a href='tel:+639158752882' className='hover:underline text-lg'><strong className='font-medium'>Phone: </strong>+63 915 875 2882</a>
            <a href='https://instagram.com/foodsaver.ph' target='_blank' className='hover:underline text-lg'><strong className='font-medium'>Instagram: </strong>foodsaver.ph </a>
          </div>
        </article>
      </section>
      <Footer/>
      <FinalFooter/>
    </>
  )
}

export default ContactUs
