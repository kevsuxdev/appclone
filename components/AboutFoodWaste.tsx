import React from 'react'

const AboutFoodWaste = () => {
  return (
    <section id='foodwaste' className='mt-20 flex flex-col items-start px-10 lg:px-32 w-full' >
          <h1 className='text-3xl font-bold uppercase mb-10 text-center w-full'>About Food Waste</h1>

          <article className='flex flex-col gap-5 w-full'>
            <h1 className='text-3xl font-bold'>The Global Food Waste Problem</h1>
            <p className='font-lato text-xl tracking-tighter'>Food waste is a significant environmental and economic challenge. Globally, approximately 1.3 billion tons of food are wasted annually, contributing to 2.6 million tons of organic waste per day. This waste not only represents a loss of valuable resources but also contributes to environmental degradation. philstar.com</p>
          </article>

          <article className='flex flex-col gap-5 mt-24 w-full'>
            <h1 className='text-3xl font-bold'>Food Waste in the Philippines</h1>
            <p className='font-lato text-xl tracking-tighter'>The Philippines faces a serious food waste crisis, even as many Filipinos experience food insecurity. Key facts include:</p>
            <ul className='list-disc pl-5 text-lg'>
              <li>2,175 tons of food are wasted daily in the Philippines, equating to significant economic and environmental losses.</li>
              <li>While food is wasted, over 3 million Filipino families experience involuntary hunger due to poverty and lack of access to affordable meals. </li>
              <li>Food waste contributes to landfill overflow and climate change, as decomposing food produces methane—a greenhouse gas significantly more potent than CO₂.</li>
            </ul>
          </article>

          <article className='flex flex-col gap-5 mt-24'>
            <h1 className='text-3xl font-bold'>Food Waste in Cebu City</h1>
            <p className='font-lato text-xl tracking-tighter'>In Cebu City, waste management is a growing concern:</p>
            <ul className='list-disc pl-5 text-lg'>
              <li>The city generated approximately 953,261 kilograms of waste daily in 2023, with projections indicating this could exceed 1 million kilograms per day by 2027.</li>
              <li>A significant portion of this waste is organic, including food waste, which contributes to environmental issues such as methane emissions and landfill overcapacity.</li>
            </ul>
          </article>

          <article className='flex flex-col gap-5 mt-24'>
            <h1 className='text-3xl font-bold'>The Impact of Food Waste</h1>
            <p className='font-lato text-xl tracking-tighter'>Food waste has serious environmental, economic, and social consequences:</p>
            <ul className='list-disc pl-5 text-lg'>
              <li>Environmental Damage – Wasted food contributes to 8-10% of global greenhouse gas emissions, accelerating climate change</li>
              <li>Financial Losses – Businesses and households lose billions annually due to wasted food</li>
              <li>Hunger and Inequality – While tons of food are discarded daily, many Filipinos struggle to afford their next meal</li>
            </ul>
          </article>

          <article className='flex flex-col gap-5 mt-24'>
            <h1 className='text-3xl font-bold'>How FoodSaver Helps</h1>
            <p className='font-lato text-xl tracking-tighter'>At FoodSaver, we believe that small actions can make a big impact. By rescuing surplus food from restaurants, bakeries, and grocery stores, we:            </p>
            <ul className='list-disc pl-5 text-lg'>
              <li>Reduce food waste and CO₂ emissions</li>
              <li>Help businesses recover losses
              </li>
              <li>Provide affordable, high-quality meals to consumers</li>
              <li>Support a more sustainable and fair food system</li>
            </ul>
          </article>

          <p className='mt-24 text-xl italic text-center w-full'>Join us in the fight against food waste. Together, we can ensure that good food is eaten—not wasted</p>
    </section>
  )
}

export default AboutFoodWaste
