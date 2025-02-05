import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'About'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, aspernatur laborum, eligendi perspiciatis sunt placeat voluptatum consequuntur minus natus ad et qui a, rem voluptas at quis dolores! Expedita, consectetur!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fuga iste sed corporis omnis quis soluta suscipit aut aspernatur in labore dolorem laudantium, illum beatae harum accusantium cupiditate. Fugiat, hic.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci necessitatibus repudiandae modi nostrum quia molestiae delectus cupiditate est aperiam nesciunt illo, praesentium similique qui ipsum suscipit nemo distinctio soluta quos!</p>
        </div>
      </div>
      <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSR US'}/>
      </div>

      <div className='felx flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Ouality assurance</b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam dolorem accusantium nihil quos debitis temporibus velit corporis iure voluptatibus id, ad, itaque porro odio libero pariatur hic ducimus optio possimus?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam dolorem accusantium nihil quos debitis temporibus velit corporis iure voluptatibus id, ad, itaque porro odio libero pariatur hic ducimus optio possimus?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Custormer Services</b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam dolorem accusantium nihil quos debitis temporibus velit corporis iure voluptatibus id, ad, itaque porro odio libero pariatur hic ducimus optio possimus?</p>
        </div>
      </div>

      <NewsletterBox/>

    </div>
  )
}

export default About