import FinalFooter from '@/components/FinalFooter'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const PrivacyPolicy = () => {
  return (
    <main>
      <Header />
      <section className='min-h-[87.8vh] mt-30 border border-black flex flex-col items-center py-16 px-32 space-y-32'>
        <article className='flex items-center flex-col gap-2'>
          <h1 className='text-base-green-300 text-[3.5rem] font-black tracking-tight uppercase'>Privacy Policy</h1>
          <p className='text-lg text-center'>Welcome to FoodSaver! Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the FoodSaver mobile application, website, and related services (collectively, the "Service"). By using FoodSaver, you agree to the terms of this Privacy Policy.</p>
          <p className='text-base-green-300/40 text-sm tracking-wide'>Last updated April 2025</p>
        </article>

        <div className='w-2/3 md:w-1/2 space-y-3 md:space-y-10'>
          <article className='flex flex-col gap-3'>
            <h1 className='text-3xl font-black uppercase'>1. Information We Collect</h1>
            <p className='text-lg leading-8'><strong>Personal Information </strong>such as your name, email address, phone number, delivery or pickup preferences, payment details (which are processed securely via third-party providers), and business information if you are a partner store.</p>
            <p className='text-lg leading-8'><strong>Usage Data </strong>including device information (such as IP address and device type), log data (like access times and pages viewed), and location data if you enable location services.</p>
            <p className='text-lg leading-8'><strong>Cookies & Tracking Technologies </strong>may also be used to enhance your user experience through cookies or similar tracking methods.</p>
          </article>

          <article className='flex flex-col gap-3'>
            <h1 className='text-3xl font-black uppercase'>2. How We Use Your Information</h1>
            <p className='text-lg leading-8'>We use the information we collect to provide and maintain the FoodSaver service, facilitate transactions between users and partner businesses, and improve, personalize, and expand our services.</p>
            <p className='text-lg leading-8'>Additionally, we use this information to communicate with you through notifications, updates, and promotions, to ensure security and prevent fraud, and to comply with legal obligations.</p>
          </article>

          <article className='flex flex-col gap-3'>
            <h1 className='text-3xl font-black uppercase'>3. Sharing of Information</h1>
            <p className='text-lg leading-8'>We do not sell your personal data. However, we may share your information with partner businesses to fulfill your orders or reservations, and with service providers—such as payment processors or hosting providers—who perform services on our behalf. </p>
            <p className='text-lg leading-8'>We may also disclose information to legal authorities if required by law or necessary to protect our rights. In the event of a merger, sale, or asset transfer, your information may be shared as part of the business transition.</p>
          </article>

          <article className='flex flex-col gap-3'>
            <h1 className='text-3xl font-black uppercase'>4. Data Security</h1>
            <p className='text-lg leading-8'>We implement reasonable security measures to protect your personal information. However, no method of transmission over the internet or mobile networks is 100% secure.</p>
          </article>

          <article className='flex flex-col gap-3'>
            <h1 className='text-3xl font-black uppercase'>5. Your Rights</h1>
            <p className='text-lg leading-8'>Under applicable laws, you may have the right to access the personal data we hold about you, request the correction of inaccurate information, and request the deletion of your data.</p>
            <p className='text-lg leading-8'>You may also withdraw your consent where processing is based on consent, and object to certain types of data processing activities. To exercise any of these rights, please contact us at <span className='underline'>foodsaverph@gmail.com</span>.</p>
          </article>

          <article className='flex flex-col gap-3'>
            <h1 className='text-3xl font-black uppercase'>6. Retention of Data</h1>
            <p className='text-lg leading-8'>We retain your personal information only as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce agreements.</p>
          </article>

          <article className='flex flex-col gap-3'>
            <h1 className='text-3xl font-black uppercase'>7. Third-Party Links</h1>
            <p className='text-lg leading-8'>Our service may contain links to third-party websites or services. We are not responsible for the privacy practices of such third parties.</p>
          </article>

          <article className='flex flex-col gap-3'>
            <h1 className='text-3xl font-black uppercase'>8. Children's Privacy</h1>
            <p className='text-lg leading-8'>FoodSaver is not intended for individuals under the age of 18. We do not knowingly collect personal data from children.</p>
          </article>

          <article className='flex flex-col gap-3'>
            <h1 className='text-3xl font-black uppercase'>9. Changes to This Privacy Policy</h1>
            <p className='text-lg leading-8'>We may update this Privacy Policy from time to time. Changes will be posted within the app or on our website. Your continued use of the Service after such changes constitutes your acceptance of the new policy.</p>
          </article>

          <article className='flex flex-col gap-3'>
            <h1 className='text-3xl font-black uppercase'>10. Contact Us</h1>
            <p className='text-lg leading-8'>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
            <div>
              <p className='text-lg leading-8'>FoodSaver Team</p>
              <p className='text-lg leading-8'><strong>Email:</strong> foodsaverph@gmail.com</p>
              <p className='text-lg leading-8'><strong>Phone:</strong> +63 915 875 2882</p>
              <p className='text-lg leading-8'>FoodSaver, Cagayan de Oro City</p>
            </div>
          </article>
        </div>
      </section>
      <Footer/>
      <FinalFooter/>
    </main>
  )
}

export default PrivacyPolicy
