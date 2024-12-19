import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'


const Campers = () => {
  return (
    <div className='p-5'>
        <div className='grid gap-3 md:grid-cols-3 md:grid-rows-2'>
                    <Link to='/euro-campers' className='w-[23rem] md:ml-10 my-[3rem] hover:scale-125 duration-300'>
                    <img className='w-[20rem] h-[20rem] ' src={assets.euro_camper} alt="" />
                    <h3 className='text-3xl'>EuroCamper</h3>
                    <p className='text-lg text-gray-400 font-semibold'>$70</p>
                    </Link>
                    <Link to='/vanagons' className='w-[23rem] md:ml-10 my-[3rem] hover:scale-125 duration-300'>
                    <img className='w-[20rem] h-[20rem] ' src={assets.vanagon} alt="" />
                    <h3 className='text-3xl'>Vanagon</h3>
                    <p className='text-lg text-gray-400 font-semibold'>$90</p>
                    </Link>
                    <Link to='/ranger-vans' className='w-[23rem] md:ml-10 my-[3rem] hover:scale-125 duration-300'>
                    <img className='w-[20rem] h-[20rem] ' src={assets.range_van} alt="" />
                    <h3 className='text-3xl'>Ranger Van</h3>
                    <p className='text-lg text-gray-400 font-semibold'>$110</p>
                    </Link>
                    <Link to='/travel-trailers' className='w-[23rem] md:ml-10 my-[3rem] hover:scale-125 duration-300'>
                    <img className='w-[20rem] h-[20rem] ' src={assets.travel_trailer} alt="" />
                    <h3 className='text-3xl'>Travel Trailer</h3>
                    <p className='text-lg text-gray-400 font-semibold'>$110</p>
                    </Link>
                    <Link to='/flying-campers' className='w-[23rem] md:ml-10 my-[3rem] hover:scale-125 duration-300'>
                    <img className='w-[20rem] h-[20rem] ' src={assets.flying_camper} alt="" />
                    <h3 className='text-3xl'>Flying Cloud</h3>
                    <p className='text-lg text-gray-400 font-semibold'>$130</p>
                    </Link>
                    <Link to='/motorhomes' className='w-[23rem] md:ml-10 my-[3rem] hover:scale-125 duration-300'>
                    <img className='w-[20rem] h-[20rem] ' src={assets.motor_home} alt="" />
                    <h3 className='text-3xl'>MotorHome</h3>
                    <p className='text-lg text-gray-400 font-semibold'>$170</p>
                    </Link>
        </div>
    </div>
  )
}

export default Campers