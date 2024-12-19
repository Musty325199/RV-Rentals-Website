import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import Booking from "../pages/Booking";

const Navbar = () => {

    const [activeLink, setActiveLink] = useState('home');

    const handleLinkClick = (link) => {
      setActiveLink(link);
    };
    const [showMenu, setShowMenu] = useState(false)

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };

  return (
    <div className="nav w-full top-0 left-0">
        <div className="md:flex items-center justify-between py-2 md:px-10">
        <Link to='/'  onClick={() => handleLinkClick('home')} className={`${
                activeLink === 'home' ? 'text-white pl-9 font-semibold flex flex-col justify-center' :"w-full md:w-[25%] font-semibold pl-9 text-3xl cursor-pointer flex flex-col justify-center text-white" }`}>
         <h1 className="text-xl font-bold">Dandy Campers</h1>
         <p className="text-lg">RV Rentals</p> 
        </Link>
        <div onClick={()=>setShowMenu(!showMenu)} className="absolute right-8 top-6 cursor-pointer md:hidden">
            {showMenu ? 
        <img width={30} height={30} src={assets.close_icon} alt="" />
            :
        <img width={30} height={30}  src={assets.menu_icon} alt="" />
        }
        </div>
        <div className={`flex flex-col md:gap-0 gap-5 bg-black md:bg-transparent text-center md:flex-row pt-5 md:items-center md:pb-5 pb-12 absolute md:static md:z-auto z-[-1]
        left-0 w-full md:w-auto md:pl-0 pl-9 transition-all ease-in duration-500 ${showMenu ? 'top-[4.5rem] opacity-100':'top-[-490px] opacity-0 md:opacity-100'}`}>
             <Link
              to="/rvs"
              onClick={() => handleLinkClick('RVs')}
              className={`${
                activeLink === 'RVs' ? 'text-[#4da674] text-2xl' : "w-full md:w-[100px] text-3xl md:text-xl text-white hover:text-[#4da674] duration-300"
              }`}
            >
              RVs
            </Link>
            <Link
              to="/road-trips"
              onClick={() => handleLinkClick('road-trips')}
              className={`${
                activeLink === 'road-trips' ? 'text-[#4da674] text-2xl' : "w-full md:w-[150px] text-3xl md:text-xl text-white hover:text-[#4da674] duration-300"
              }`}
            >
              Road Trips
            </Link>
            <Link
              to="/faq"
              onClick={() => handleLinkClick('faq')}
              className={`${
                activeLink === 'faq' ? 'text-[#4da674] text-2xl ' : "w-full md:w-[100px] text-3xl md:text-xl text-white hover:text-[#4da674] duration-300"
              }`}
            >
              FAQ
            </Link>
            <Link
              to="/about"
              onClick={() => handleLinkClick('about')}
              className={`${
                activeLink === 'about' ? 'text-[#4da674] text-2xl' : "w-full md:w-[100px] text-3xl md:text-xl text-white hover:text-[#4da674] duration-300"
              }`}
            >
              About
            </Link>
             <button onClick={handleOpenModal} type='submit' className='md:ml-4 mx-10 font-semibold w-3/4 md:w-[200px]  text-white px-3 py-3 hover:bg-[#4da674] duration-300'
                style={{border:"2px solid white",borderRadius:"25px"}}>Check Availability</button>
        </div>
        </div>
        <Booking isOpen={isModalOpen} onClose={handleCloseModal}/>
    </div>

  );
};

export default Navbar;
