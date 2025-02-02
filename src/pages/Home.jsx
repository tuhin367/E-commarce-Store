import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection.jsx'
import Bestseller from '../components/Bestseller.jsx'
import Ourpolicy from '../components/Ourpolicy.jsx'
import NewsletterBox from '../components/NewsletterBox.jsx'

const Home = () => {
  return (
    <>
    <Hero/>
    <LatestCollection/> 
    <Bestseller/>
    <Ourpolicy/>
    <NewsletterBox/>
    </>
    
  )
}

export default Home