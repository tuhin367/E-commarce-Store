import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'
import Collection from './pages/Collection'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
const App = () => {
  return (

    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/About' element = {<About/>} />
        <Route path='/Cart' element = {<Cart/>} />
        <Route path='/Collection' element = {<Collection/>} />
        <Route path='/Login' element = {<Login/>}/>
        <Route path='/PlaceOrder' element = {<PlaceOrder/>} />
        <Route path='/Product/:porductId' element = {<Product/>} />
        <Route path='/Contact' element = {<Contact/>} /> 
        <Route path='/orders' element = {<Orders/>} /> 
      </Routes>
      <Footer/>
    </div>
  )
}

export default App