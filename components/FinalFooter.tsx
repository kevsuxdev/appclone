import React from 'react'

const FinalFooter = () => {
  return (
    <section className='bg-[#304f25] text-white pb-10'>
        <h1 className='text-[18rem] text-center font-bold'>FOODSAVER</h1>

        <article className='flex items-center justify-around w-full gap-x-5'>
            <a href="" className='text-sm font-medium tracking-wide font-lato hover:underline'>Legal</a>
            <a href="" className='text-sm font-medium tracking-wide font-lato hover:underline'>Privacy Policy</a>
            <a href="" className='text-sm font-medium tracking-wide font-lato hover:underline'>Cookie Policy</a>
            <a href="" className='text-sm font-medium tracking-wide font-lato hover:underline'>Terms & Conditions</a>
            <a href="" className='text-sm font-medium tracking-wide font-lato hover:underline'>Contact US</a>
        </article>
    </section>
  )
}

export default FinalFooter