import FinalFooter from '@/components/FinalFooter'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const TermsAndCondition = () => {
  return (
    <main>
      <Header />
      <section className='min-h-[87.8vh] mt-30 flex flex-col items-center py-16 px-4 lg:px-32 space-y-32'>
        <article className='flex items-center flex-col gap-2'>
          <h1 className='text-base-green-300 text-[3.5rem] font-black tracking-tight uppercase'>Terms & Condition</h1>
        </article>

        <div className='lg:w-1/2 space-y-3 md:space-y-10'>
          <article className='space-y-4'>
            <h1 className='font-bold'>User Terms</h1>
            <p className='text-lg leading-8'>These Terms and Conditions ("Terms") govern your use of the FoodSaver website and services. By accessing or using the FoodSaver platform, you agree to be bound by these Terms. If you do not agree, please do not use the service.</p>
          </article>

          <article className='flex flex-col gap-3 mt-5'>
            <h1 className='text-3xl font-black uppercase'>1. Use of the FoodSaver Platform</h1>
            <p className='text-lg leading-8'>You agree to use FoodSaver only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
          </article>

          <article className='flex flex-col gap-3 mt-5'>
            <h1 className='text-3xl font-black uppercase'>2. User Accounts</h1>
            <p className='text-lg leading-8'>To access certain features of FoodSaver, you may be required to register an account and provide accurate, current, and complete information. You are responsible for safeguarding your account and notifying FoodSaver of any unauthorized use.</p>
          </article>

          <article className='flex flex-col gap-3 mt-5'>
            <h1 className='text-3xl font-black uppercase'>3. Orders and Transactions</h1>
            <p className='text-lg leading-8'>FoodSaver connects users with partner businesses for placing food orders, deliveries, and pickups. All payments are securely processed via third-party providers. Product availability, pricing, and service times may vary depending on the partner business.</p>
          </article>

          <article className='flex flex-col gap-3 mt-5'>
            <h1 className='text-3xl font-black uppercase'>4. Cancellations and Refunds</h1>
            <p className='text-lg leading-8'>Cancellations and refunds are subject to the policies of the respective partner businesses. While FoodSaver does not directly issue refunds, we will assist in facilitating communication between you and the partner business when needed.</p>
          </article>

          <article className='flex flex-col gap-3 mt-5'>
            <h1 className='text-3xl font-black uppercase'>5. Intellectual Property</h1>
            <p className='text-lg leading-8'>All content and materials on FoodSaver, including text, graphics, logos, icons, and software, are the property of FoodSaver or its licensors and are protected by applicable intellectual property laws. You may not reuse or reproduce any content without written permission from FoodSaver.</p>
          </article>

          <article className='flex flex-col gap-3'>
            <h1 className='text-3xl font-black uppercase'>6. Prohibited Activities</h1>
            <p className='text-lg leading-8'>You agree not to:</p>
            <ul className='list-disc pl-5 text-lg leading-8'>
              <li>Use FoodSaver for any unlawful or fraudulent purpose</li>
              <li>Interfere with the operation or security of the platform</li>
              <li>Attempt to access other user accounts or restricted parts of the platform</li>
            </ul>
          </article>

          <article className='flex flex-col gap-3 mt-5'>
            <h1 className='text-3xl font-black uppercase'>7. Limitation of Liability</h1>
            <p className='text-lg leading-8'>FoodSaver is provided “as is” and without warranties of any kind. FoodSaver shall not be liable for any damages arising from your use of the platform, including indirect or consequential losses.</p>
          </article>

          <article className='flex flex-col gap-3 mt-5'>
            <h1 className='text-3xl font-black uppercase'>8. Third-Party Links</h1>
            <p className='text-lg leading-8'>The FoodSaver platform may contain links to third-party websites or services. FoodSaver is not responsible for the content, policies, or practices of these third-party services.</p>
          </article>

          <article className='flex flex-col gap-3 mt-5'>
            <h1 className='text-3xl font-black uppercase'>9. Termination</h1>
            <p className='text-lg leading-8'>FoodSaver reserves the right to suspend or terminate your account at any time for violating these Terms or engaging in any activity that harms the platform or its users.</p>
          </article>

          <article className='flex flex-col gap-3 mt-5'>
            <h1 className='text-3xl font-black uppercase'>10. Changes to These Terms</h1>
            <p className='text-lg leading-8'>FoodSaver may update these Terms at any time. Changes will be effective upon posting. Your continued use of the platform after such updates constitutes your acceptance of the revised Terms.</p>
          </article>
        </div>
      </section>
      <Footer/>
      <FinalFooter/>
    </main>
  )
}

export default TermsAndCondition
