import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext.jsx'
import Title from './Title.jsx';
import ProductItem from './ProductItem.jsx';

const Bestseller = () => {
const {products} = useContext(ShopContext);
const [bestseller,setbestseller]= useState([]);

useEffect(()=>{
    const bestseller = products.filter((item)=>(item.bestseller));
    setbestseller(bestseller.slice(0,5))
},[])
  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'Best'} text2={'Seller'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores ex odit culpa. Quasi blanditiis expedita dicta repellendus repudiandae perspiciatis corporis porro minima fuga neque sed cupiditate ipsa, aut officiis libero!
        </p>

      </div>

      {/* Rendering Products */}

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
      {
        bestseller.map((item, index)=>{
           
          return <ProductItem key={index} id={item.id} image={item.image} name={item.name} price={item.price}/>
          
        })
      }
      </div>
         
      
       
    </div>
  )
}

export default Bestseller