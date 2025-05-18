import React from 'react'
import Link from 'next/link'

const FinalFooter = () => {
  return (
    <section className='bg-[#304f25] text-white pb-10'>
        <h1 className='text-[18rem] text-center font-bold'>FOODSAVER</h1>
        <article className='flex items-center justify-around w-full gap-x-5'>
            <Link href="/privacy-policy" className='text-sm font-medium tracking-wide font-lato hover:underline'>Privacy Policy</Link>
            <Link href="/cookie-policy" className='text-sm font-medium tracking-wide font-lato hover:underline'>Cookie Policy</Link>
            <Link href="/terms-and-condition" className='text-sm font-medium tracking-wide font-lato hover:underline'>Terms & Conditions</Link>
            <Link href="/contact-us" className='text-sm font-medium tracking-wide font-lato hover:underline'>Contact US</Link>
        </article>
    </section>
  )
}

export default FinalFooter