import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'


const TheCampersPage = (props) => {
  return (
    <>
            <div  className='flex mt-[10rem] md:mx-[10rem] text-md'>
            <img width={22} height={18} src={assets.prev_icon} alt="" />
            <Link to='/rvs'>Back to RVs</Link>
        </div>
        <div className='flex flex-col md:flex-row justify-center gap-[5rem] items-center my-[10rem] md:mx-10'>
        <div className='flex flex-col md:px-10'>
            <div className='flex flex-col gap-10'>
            <div className='animate-drop-down duration-300'>
            <h1 className='text-5xl mb-2'>{props.name}</h1>
            <p className='text-2xl'>${props.price}</p>
            </div>
            <div className='mt-10'>
            <h1 className='text-3xl'>Specifications</h1>
            <div className='grid grid-cols-2 gap-5 md:gap-10'>
                <div className='mt-5'>
                    <div className='rounded-full flex items-center justify-center  w-[50px] h-[50px] bg-[#feae97]'>
                        <img src={assets.passengers} alt="" />
                    </div>
                    <p className='font-semibold animate-drop-down duration-300 text-xl'>4 Passengers</p>
                </div>
                <div className='mt-5 md:mx-10'>
                    <div className='rounded-full flex items-center justify-center  w-[50px] h-[50px] bg-[#feae97]'>
                        <img src={assets.dimension} alt="" />
                    </div>
                    <p className='font-semibold text-xl animate-drop-down duration-300'>Dimensions</p>
                    <span className='animate-drop-down duration-300'>7m x 3m x 2.8</span>
                </div>
                <div className='mt-5'>
                    <div className='rounded-full flex items-center justify-center  w-[50px] h-[50px] bg-[#feae97]'>
                        <img src={assets.double_beds} alt="" />
                    </div>
                    <p className='font-semibold text-xl animate-drop-down duration-300'>2 Double Beds</p>
                    <span className='animate-drop-down duration-300'>Sleeps four</span>
                </div>
                <div className='mt-5 md:mx-10'>
                    <div className='rounded-full flex items-center justify-center  w-[50px] h-[50px] bg-[#feae97]'>
                        <img src={assets.WC} alt="" />
                    </div>
                    <p className='font-semibold text-xl animate-drop-down duration-300'>WC</p>
                    <span className='animate-drop-down duration-300'>Optional as extra</span>
                </div>
            </div>
            </div>
            </div>
        </div>
        <div>
            <img className='fluid' src={props.img} alt="" />
        </div>
    </div>
    <div className="flex mt-[4rem] mb-[5rem] md:mb-[10rem] md:m-10 justify-center gap-2 flex-col md:flex-row items-center animate-drop-down duration-300">
        <h1 className="text-5xl animate-drop-down duration-300">Want This RV?</h1>
        <button
          type="submit"
          className="animate-drop-down md:ml-5 mt-3 md:mt-0 mx-0 md:mx-2 text-xl w-3/4 md:w-[200px]  text-white px-3 py-3 bg-[#4da674] duration-300"
          style={{ borderRadius: "25px" }}
        >
          Check Availability
        </button>
      </div>
    </>

  )
}

export default TheCampersPage