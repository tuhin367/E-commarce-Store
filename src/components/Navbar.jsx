import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Navbar = () => {
    const [visiable, setVisiable] =useState(false);
  return (
    <>
    <div className='my-2 flex justify-between  '>
        <div><Link to={'/'}>
          <img src={assets.logo} className='w-36' alt="" />
          </Link>
        </div>

         <div>
            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
            
                    <NavLink to='/' className='flex flex-col items-center gap-1'>
                        <p >Home</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
                    </NavLink>
                    <NavLink to='/Collection' className='flex flex-col items-center gap-1'>
                        <p>Collection</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
                    </NavLink>
                    <NavLink to='/About' className='flex flex-col items-center gap-1'>
                        <p>ABOUT</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
                    </NavLink>
                    <NavLink to='/Contact' className='flex flex-col items-center gap-1'>
                        <p>CONTACT</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
                    </NavLink>
                </ul>

        </div>
        

        <div className='flex items-center gap-6'>
                <img src={assets.search_icon} className='w-5 cursor-pointer' alt="" />


                <div className="group relative">
                    <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="" />
                    <div className='group-hover:block hidden absolute  right-0 pt-4'>
                       <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-50 text-gray-500">
                       <p className=' cursor-pointer hover:text-black'>My Profile</p>
                        <p className=' cursor-pointer hover:text-black'>Orders</p>
                        <p className=' cursor-pointer hover:text-black'>Logout</p>
                       </div>
                    </div>
                </div>

                <Link to='/Cart' className='relative'>
                <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
                <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-blue-950 text-white aspect-square  rounded-full text-[8px]'>10</p>
                </Link>

                <img onClick={()=>setVisiable(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
                
                <div  className={`absolute top-0 left-[0] transition-all text-lg py-10 bg-white ${visiable ? 'w-full h-full' : 'hidden'}`}>

                    <div className=' flex flex-col text-gray-600] sm:hidden'>
                        <div onClick={()=>setVisiable(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                            <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="" />
                            <p>Back</p>
                        </div>
                        <NavLink to='/' onClick={()=>setVisiable(false)} className='flex flex-col py-5 items-center gap-1'>
                        <p >Home</p>
                        <hr className='w-full border-none h-[1.5px] bg-gray-700 '/>
                    </NavLink>
                    <NavLink to='/Collection' onClick={()=>setVisiable(false)} className='flex flex-col py-5 items-center gap-1'>
                        <p>Collection</p>
                        <hr className='w-full border-none h-[1.5px] bg-gray-700 '/>
                    </NavLink>
                    <NavLink to='/About' onClick={()=>setVisiable(false)} className='flex flex-col py-5 items-center gap-1'>
                        <p>ABOUT</p>
                        <hr className='w-full border-none h-[1.5px] bg-gray-700 '/>
                    </NavLink>
                    <NavLink to='/Contact' onClick={()=>setVisiable(false)} className='flex flex-col py-5 items-center gap-1'>
                        <p>CONTACT</p>
                        <hr className=' w-full border-none h-[1.5px] bg-gray-700 '/>
                    </NavLink>
                    </div>
                    
                </div>
        </div>

            {/* Slider menu for small screans */}
        
            
    </div>
    
    
    </>
  )
}

export default Navbar