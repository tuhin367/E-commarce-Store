import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />\
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Stroe</p>
          <p className='text-gray-500'>54658 willm Station <br />Sution 3560, Dhaka</p>
          <p className='text-gray-500'>Tel: (451) 55254583 <br />Email: dummy@gamil.com</p>
          <p className='font-semibold text-xl'>Careers at Forever</p>
          <p className='text-gray-500'>Ea elitr amet amet aliquyam sit ut, diam tempor tem</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 '>Explor Jobs</button>
        </div>

      </div>
      <NewsletterBox/>

    </div>
  )
}

export default Contact