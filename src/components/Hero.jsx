import React from "react";
import { assets } from "../assets/assets";
import TestimonialsCarousel from "./TestimonialsCarousel";

const Hero = () => {
  return (
<>
      <div className="relative">
        <img className="fluid" src={assets.hero_bg1} alt="" />
        <div className="absolute animate-drop-down duration-300 top-[35%] left-5 md:left-[15%] text-white">
          <h1 className="w-[250px] md:w-[480px] leading-10 md:leading-[5rem] ml-0 md:ml-[50px] text-[2.2rem] md:text-[5rem] font-bold">
            RV Rentals in California
          </h1>
          <div className="bg-transparent md:flex-row rounded-[45px] flex-col justify-between w-full md:bg-white md:w-[950px] md:mt-7 px-0 md:px-5 flex md:items-center py-4 text-black ">
            <p className="w-2/4 leading-5 font-semibold text-lg md:text-2xl text-white md:text-black">
              Travel The Way You Want It
            </p>
            <button
              type="submit"
              className="md:ml-5 mt-3 md:mt-0 mx-0 md:mx-2 font-semibold w-3/4 md:w-[200px]  text-white px-3 py-3 bg-[#4da674] duration-300"
              style={{ borderRadius: "25px" }}
            >
              Check Availability
            </button>
          </div>
        </div>
      </div>
      <div className="md:p-10 pb-0 w-full h-[100vh] animate-drop-down duration-300">
        <h1 className="text-4xl mt-5 ml-5 mb-5">Why Book With Us</h1>
        <div className="w-full flex flex-col md:flex-row gap-5 h-[90%] bg-white">
          <div className="w-full md:w-[30%] pt-10 bg-[#4da674] h-[100%]">
            <h1 className="leading-[3.5rem] py-[80px] px-5 text-[3.9rem] text-white">
              Roadside Assistance
            </h1>
          </div>
          <div className="md:w-[30%] md:mt-[84px] h-[85%]">
            <img className="w-[100%] h-[100%]" src={assets.hero_bg2} alt="" />
            <p className="mt-[-380px] ml-5 text-white text-5xl leading-[3.5rem]">
              Unlimited <br /> Miles
            </p>
          </div>
          <div className="md:w-[23%] md:mt-[84px] flex flex-col justify-between gap-5 h-[85%]">
            <div className="h-[50%]">
              <img className="w-[100%] h-[100%]" src={assets.hero_bg3} alt="" />
              <p className="mt-[-150px] ml-5 text-white text-5xl leading-[3.5rem]">
                Trip <br /> Advice
              </p>
            </div>
            <div className="w-full md:w-[20rem]mb-5 md:mb-0 h-[45%] bg-[#e95354] flex items-center px-5 md:px-0">
              <h1 className="w-2/4 md:w-full leading-[3.5rem] px-0 md:pl-5 text-[3.8rem] text-white">
                No Booking Fees
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-[45rem] mb-10 md:m-10 justify-center gap-2 flex-col md:flex-row items-center animate-drop-down duration-300">
        <div className="rounded-full bg-[#e95354] w-[35px] h-[35px]"></div>
        <h1 className="text-5xl">Get to Know Us</h1>
        <button
          type="submit"
          className="md:ml-5 mt-3 md:mt-0 mx-0 md:mx-2 text-xl w-3/4 md:w-[200px]  text-white px-3 py-3 bg-[#4da674] duration-300"
          style={{ borderRadius: "25px" }}
        >
          Learn More
        </button>
      </div>
      <div className="px-10 md:p-[80px] pt-10 pb-[80px] md:pb-0 bg-gray-100">
        <h1 className="text-center text-2xl font-semibold md:text-4xl">Book Your Trip in 3 Easy Steps</h1>
        <div className="mt-[80px] flex flex-col gap-10 md:flex-row justify-between">
         <div className="flex flex-col gap-10 md:gap-[100px]">
         <div className="flex flex-col gap-3 text-xl">
              <span className="text-gray-800">01</span>
              <h1 className="text-5xl">Reserve Your Ride</h1>
              <p>
                I'm a paragraph. Click here to add your own <br/> text and edit me.
                Let your users get to know you.
              </p>
            </div>
            <div className="flex flex-col gap-3 text-xl">
              <span className="text-gray-800">02</span>
              <h1 className="text-5xl">Plan Your Trip</h1>
              <p>
                I'm a paragraph. Click here to add your own <br/> text and edit me.
                Let your users get to know you.
              </p>
            </div>
            <div className="flex flex-col gap-3 text-xl">
              <span className="text-gray-800">03</span>
              <h1 className="text-5xl">Hit The Road</h1>
              <p>
                I'm a paragraph. Click here to add your own <br/> text and edit me.
                Let your users get to know you.
              </p>
            </div>
         </div>
          <div>
          <img className="" src={assets.hero_bg5} alt="" />
            <img className="px-10 mt-[-30rem]  md:mt-[-40rem] ml-[-50px]" src={assets.hero_bg4} alt="" />
          </div>
        </div>
        <div className="flex mb-10 mt-[300px] md:mt-[100px] md:m-10 justify-center gap-2 flex-col md:flex-row items-center">
        <div className="rounded-full bg-[#e95354] w-[35px] h-[35px]"></div>
        <h1 className="text-5xl">Find Your Next Road Trip</h1>
        <button
          type="submit"
          className="md:ml-5 mt-3 md:mt-0 mx-0 md:mx-2 text-xl w-3/4 md:w-[200px]  text-white px-3 py-3 bg-[#4da674] duration-300"
          style={{ borderRadius: "25px" }}
        >
          Discover Trip Ideas
        </button>
      </div>
      </div>

      <div className="w-full flex items-center justify-center">
        <img className="w-full md:w-[50%] md:h-[50%]" src={assets.hero_bg6} alt="" />
      </div>
      <div className="flex flex-col md:flex-row mb-[100px] my-10 py-10 px-5 md:px-[80px] w-full">
        <div className="w-full md:w-2/4">
            <h1 className="text-4xl animate-drop-down duration-300 font-medium w-full md:w-2/4 animate-drop-down duration-300">What People Say About Us</h1>
        </div>
        <div className="px-5 w-full md:w-2/4">
        <TestimonialsCarousel/>
        </div>
      </div>
</>
  );
};

export default Hero;
