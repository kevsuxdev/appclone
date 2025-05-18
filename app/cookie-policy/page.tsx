import FinalFooter from '@/components/FinalFooter'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const CookiePolicy = () => {
  return (
    <main>
      <Header />
      <section className='min-h-[87.8vh] mt-30 border border-black flex flex-col items-center py-16 px-32 space-y-32'>
        <article className='flex items-center flex-col gap-2'>
          <h1 className='text-base-green-300 text-[3.5rem] font-black tracking-tight uppercase'>Cookie Policy</h1>
        </article>

        <div className='w-2/3 md:w-1/2 space-y-3 md:space-y-10'>
          <p className='text-lg leading-8'>This Cookie Policy explains how FoodSaver uses cookies and similar technologies to recognize you when you visit our website or use our services. It describes what these technologies are, why we use them, and your rights to control their use.</p>

          <article className='flex flex-col gap-3'>
            <h1 className='text-3xl font-black uppercase'>1. What Are Cookies?</h1>
            <p className='text-lg leading-8'>Cookies are small text files that are stored on your device when you visit a website. These files allow FoodSaver to recognize your browser and capture certain information about your visit to improve user experience and functionality.</p>
          </article>

          <article className='flex flex-col gap-3'>
            <h1 className='text-3xl font-black uppercase'>2. How FoodSaver Uses Cookies</h1>
            <p className='text-lg leading-8'>FoodSaver uses cookies for a variety of purposes, including:</p>
            <p className='text-lg leading-8'><strong>Essential Cookies</strong> - These cookies are required for the operation of the FoodSaver platform. They enable core functionalities such as page navigation, user login, and secure areas of the website.</p>
            <p className='text-lg leading-8'><strong>Performance & Analytics Cookies</strong> - These help FoodSaver understand how users interact with the platform by collecting anonymous data such as page visits, traffic sources, and user behavior. We use this information to improve the performance and design of our services.</p>
            <p className='text-lg leading-8'><strong>Functional Cookies</strong> - Functional cookies enable FoodSaver to remember your preferences (such as delivery options or language settings) to provide a more personalized experience.</p>
            <p className='text-lg leading-8'><strong>Marketing & Advertising Cookies</strong> - FoodSaver may use marketing cookies, including third-party cookies, to deliver relevant ads and measure the effectiveness of marketing campaigns across platforms.</p>
          </article>

          <article className='flex flex-col gap-3'>
            <h1 className='text-3xl font-black uppercase'>3. Third-Party Cookies</h1>
            <p className='text-lg leading-8'>Some cookies on FoodSaver may be set by third-party services such as analytics tools or payment gateways. These third parties have their own privacy and cookie policies that govern their use of cookies.</p>
          </article>

          <article className='flex flex-col gap-3'>
            <h1 className='text-3xl font-black uppercase'>4. Your Cookie Choices</h1>
            <p className='text-lg leading-8'>You can control or disable cookies through your browser settings. Most browsers allow you to:</p>
            <ul className='list-disc pl-5 text-lg leading-8'>
              <li>View the cookies on your device</li>
              <li>Delete cookies</li>
              <li>Block cookies from specific websites</li>
              <li>Block all cookies entirely</li>
            </ul>
            <p className='text-lg leading-8'>Please note that disabling cookies may affect the functionality of FoodSaver, and some features may not work properly.</p>
          </article>

          <article className='flex flex-col gap-3'>
            <h1 className='text-3xl font-black uppercase'>5. Updates to This Cookie Policy</h1>
            <p className='text-lg leading-8'>FoodSaver may update this Cookie Policy to reflect changes in technology, legal requirements, or our business practices. Any updates will be posted on this page with a new effective date.</p>
          </article>
        </div>
      </section>
      <Footer/>
      <FinalFooter/>
    </main>
  )
}

export default CookiePolicy
