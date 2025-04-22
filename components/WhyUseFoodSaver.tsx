import { CircleDollarSign, Handshake, Leaf } from 'lucide-react'
import React from 'react'

const WhyUseFoodSaver = () => {
  return (
    <section className='mb-20 flex items-center justify-start flex-col h-[50dvh]'>
      <article className='flex flex-col gap-12'>
        <h1 className='text-4xl font-bold text-center uppercase'>Why Use</h1>
        <h1 className='text-7xl font-bold text-center font-coiny tracking-wide'>
          FoodSaver
        </h1>
      </article>

      <aside className='mt-12 flex items-center flex-col gap-5'>
        <div className='flex items-center gap-x-5'>
          <article className='flex flex-col border border-black p-3 rounded-lg gap-4 min-w-96'>
            <div className='flex items-center justify-between'>
              <h2 className='text-2xl font-bold tracking-tight'>Save Money</h2>
              <CircleDollarSign size={30} />
            </div>
            <p className='text-lg tracking-tight'>
              Get high-quality meals at reduced prices.
            </p>
          </article>

          <article className='flex flex-col border border-black p-3 rounded-lg gap-4 min-w-96'>
            <div className='flex items-center justify-between'>
              <h2 className='text-2xl font-bold tracking-tight'>
                Help the Planet
              </h2>
              <Leaf size={30}/>
            </div>
            <p className='text-lg tracking-tight'>
              Reduce food waste and support sustainability.
            </p>
          </article>
        </div>

        <article className='flex flex-col border border-black p-3 rounded-lg gap-4 min-w-96'>
          <div className='flex items-center justify-between'>
            <h2 className='text-2xl font-bold tracking-tight'>
              Support Local Businesses
            </h2>
            <Handshake size={30}/>
          </div>
          <p className='text-lg tracking-tight'>
            Help food establishments recover losses and reduce waste.
          </p>
        </article>
      </aside>
    </section>
  )
}

export default WhyUseFoodSaver
