import React, { useContext, useEffect, useState } from 'react'
import { assets, products } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import ProductItem from '../components/ProductItem';
import { use } from 'react';

const Collection = () => {

const {product}=useContext(ShopContext);
const[showFilter,setshowFilter] =useState(false);
const [filterProducts,setfilterProducts]= useState([]);
const [catagory,setcatagory]=useState([]);
const [Subcataory,setSubcataory]=useState([]);
const [sortType,setSortType] =useState('relevent');


const toggleCatagory =(event)=>{
  if(catagory.includes(event.target.value)){
    setcatagory(prev=> prev.filter(item=>item !== event.target.value))
  }
  else{
    setcatagory(prev=>[...prev,event.target.value])
  }
}

const toggleSubCatagory =(event)=>{
  if(Subcataory.includes(event.target.value)){
    setSubcataory(prev=> prev.filter(item=>item !== event.target.value))
  }
  else{
    setSubcataory(prev=>[...prev,event.target.value])
  }
}


const applyFilter =()=>{
  let productCopy = products.slice();

  if(catagory.length > 0){
    productCopy = productCopy.filter(item => catagory.includes(item.category));
  }

  if(Subcataory.length > 0){
    productCopy = productCopy.filter(item => Subcataory.includes(item.subCategory));
  }
  

  setfilterProducts(productCopy);
}

const sortProduct =()=>{
  let filterProductsCopy = filterProducts.slice();

  switch(sortType){
    case 'low-high':
      setfilterProducts(filterProductsCopy.sort((a,b)=>(a.price - b.price)));
      break;
    case 'high-low':
        setfilterProducts(filterProductsCopy.sort((a,b)=>(b.price - a.price)));
        break;
    default:
      applyFilter();
      break;
  }

}


useEffect(()=>{
  setfilterProducts(products);
},[])

useEffect(()=>{
  applyFilter();
},[catagory,Subcataory])


useEffect(()=>{
  sortProduct();
},[sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 border-t'>

      {/* filter Optiojns */}

      <div className=' min-w-60'>
        <p onClick={()=>setshowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTER
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' :''}`} src={assets.dropdown_icon}  alt="" />
        </p>


      {/* Category Filter */}

      <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '': 'hidden'} sm:block`}>
      <p className='mb-3 text-sm font-medium'>CATAGORIES</p>
      <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
        <p className='flex gap-2'>
          <input className='w-3' type="checkbox" value={'Men'} onClick={toggleCatagory}/>Men
        </p>
        <p className='flex gap-2'>
          <input className='w-3' type="checkbox" value={'Women'} onClick={toggleCatagory} />Women
        </p>
        <p className='flex gap-2'>
          <input className='w-3' type="checkbox" value={'Kids'} onClick={toggleCatagory} />Kids
        </p>
      </div>
      </div>

      {/* Subcataory filter */}
      <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '': 'hidden'} sm:block`}>
      <p className='mb-3 text-sm font-medium'>Type</p>
      <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
        <p className='flex gap-2'>
          <input className='w-3' type="checkbox" value={'Topwear'} onClick={toggleSubCatagory}/>Topwear
        </p>
        <p className='flex gap-2'>
          <input className='w-3' type="checkbox" value={'Bottomwear'} onClick={toggleSubCatagory}/>Bottomware
        </p>
        <p className='flex gap-2'>
          <input className='w-3' type="checkbox" value={'Winterwear'} onClick={toggleSubCatagory}/>Winterwear
        </p>
      </div>
      </div>



      </div>

      {/* right side */}

      <div className='flex-1'>

        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <h2>-All COLLECTION</h2>
          <select onChange={(event)=>{setSortType(event.target.value)}} className='border-1 border-gray-300 text-sm px-2'>
            <option value="relevent">Sort by: Relevent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to low</option>
          </select>
        </div>


        {/* Map products */}

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-4'>
        {
          filterProducts.map((item,index)=>{

            return <ProductItem key={index} id={item.id} image={item.image} name={item.name} price={item.price}/>
          })
        }
        </div>
      </div>
      
      
      
    </div>
  )
}

export default Collection