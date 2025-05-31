import React from 'react'
import Link from 'next/link'

const FinalFooter = () => {
  return (
    <section className='bg-[#304f25] text-white pb-10 lg:px-0 px-4 flex flex-col items-center w-full'>
        <h1 className='lg:text-[18rem] text-[4rem] text-center font-bold'>FOODSAVER</h1>
        <article className='flex items-center justify-around w-full gap-5'>
            <Link href="/privacy-policy" className='lg:text-sm text-xs font-medium tracking-wide font-lato hover:underline'>Privacy Policy</Link>
            <Link href="/cookie-policy" className='lg:text-sm text-xs font-medium tracking-wide font-lato hover:underline'>Cookie Policy</Link>
            <Link href="/terms-and-condition" className='lg:text-sm text-xs font-medium tracking-wide font-lato hover:underline'>Terms & Conditions</Link>
            <Link href="/contact-us" className='lg:text-sm text-xs font-medium tracking-wide font-lato hover:underline'>Contact US</Link>
        </article>
    </section>
  )
}

export default FinalFooter