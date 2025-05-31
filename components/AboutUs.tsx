import React from 'react'

const AboutUs = () => {
  return (
    <section id='about' className='h-[80dvh] lg:mt-0 mt-50 flex items-center justify-center flex-col gap-10'>
        <article className='flex items-center justify-center flex-col gap-2 px-4'>
            <h1 className='text-3xl font-bold uppercase mb-10'>About FoodSaver</h1>
            <p className='lg:w-1/2 text-justify lg:text-center text-xl font-medium tracking-tight font-lato'>At FoodSaver, we believe that great food should never go to waste. Our mission is to connect businesses with surplus food to conscious consumers looking for affordable, delicious meals—helping both the planet and people's wallets.</p>
        </article>

        <aside className='flex items-center lg:flex-row flex-col gap-5 px-4'>
            <article className='p-4 rounded-lg border border-black w-full lg:max-w-[30dvw] space-y-3'>
                <h2 className='font-bold text-3xl'>OUR VISION</h2>
                <p className='text-lg font-lato tracking-tighter text-justify'>We envision a world where food waste is minimized, businesses maximize their resources, and consumers enjoy quality meals at lower prices. By making surplus food accessible through our platform, we contribute to a more sustainable and responsible food ecosystem.</p>
            </article>
            <article className='p-4 rounded-lg border border-black w-full lg:max-w-[30dvw] space-y-3'>
                <h2 className='font-bold text-3xl'>OUR MISSION</h2>
                <p className='text-lg font-lato tracking-tighter text-justify'>FoodSaver partners with restaurants, cafés, bakeries, and grocery stores to list their surplus food at discounted prices. Consumers can browse, reserve, and pick up these meals through our easy-to-use app—ensuring good food is enjoyed instead of wasted.</p>
            </article>
        </aside>

        <p className='text-lg italic font-medium tracking-tight px-4 lg:text-start text-center'>Join us in making a difference—one meal at a time. Download the FoodSaver app today and be part of the food waste revolution!</p>
    </section>
  )
}

export default AboutUs