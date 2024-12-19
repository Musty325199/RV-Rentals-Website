import React, { useState } from 'react'
import { assets, tripPost } from '../assets/assets'
import { Link } from 'react-router-dom'
import {FaSearch} from 'react-icons/fa';


const RoadTrips = () => {
  const [searchInput, setSearchInput] = useState("");
  const handleSearchChange = (value) => {
    setSearchInput(value);
  }

  const handleCloseSearchBar= () =>{
    setSearchInput("");
  }

  const filteredPosts = tripPost.filter((post)=>
  post.title.toLowerCase().includes(searchInput.toLowerCase())
  )

  return (
    <div>
    <div className=''>
        <img className="fluid md:mt-0 mt-[4rem] relative" src={assets.road_bg1} alt="" />
        <div className='absolute top-0 bottom-0 left-0 right-0 h-[11rem] md:h-[23.5rem] Overlay'></div>
        <div className="absolute top-0 md:top-1/4 text-white text-center flex px-3 md:px-10 flex-col items-center md:gap-3">
          <h1 className="text-3xl md:mt-0 mt-[4.5rem] md:text-8xl font-semibold animate-drop-down duration-300">Get Inspired</h1>
          <p className="w-full text-[10px] font-semibold md:text-lg md:w-2/4 animate-drop-down duration-300">
            RVs Rentals allow customers to rent vehicles, such as cars, vans, trucks, or
            SUVs, typically on a daily or weekly basis. Well-known examples
            include Enterprise Rent-A-Car, Hertz, and Avis.
          </p>
        </div>
      </div>
      <div className='flex px-5 items-center justify-between m-5 md:m-10'>
        <span className='text-md md:text-lg'>All Posts</span>
        <div className='flex'>
         <FaSearch className='m-2 cursor-pointer'/>
         <input className='border-none outline-none' type="text" value={searchInput} placeholder='Search posts...' onChange={(e)=>handleSearchChange(e.target.value)} /> 
         <button onClick={handleCloseSearchBar} className="ml-2 text-gray-500">
          X
        </button>
        </div>
      </div>
      <div className='md:mb-[10rem] grid md:grid-cols-3 gap-5 md:gap-10'>
      {filteredPosts.length > 0 ?
      filteredPosts.map((post, index)=>(
        <Link key={index} className='mb-5 px-5 w-[25rem]'>
          <img className='fluid mb-3' src={post.image} alt="" />
          <span className='text-sm'>{post.date}</span>
          <h3 className='text-2xl font-semibold'>{post.title}</h3>
          <p className='text-lg' style={{textOverflow:'ellipsis',maxHeight:"100px"}}>{post.desc}</p>
        </Link>
      )): 
      <div className='flex items-center md:justify-center mx-[5rem]  md:w-[50rem] md:my-10 md:mx-[15rem] md:px-10'>
        <span className='text-xl text-gray-600 font-medium'>No Trips Available</span>
      </div>
      }
      </div>
    </div>
  )
}

export default RoadTrips