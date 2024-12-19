import React from "react";
import { assets } from "../assets/assets";
import Campers from "../components/Campers";
import { Link } from "react-router-dom";

const RVs = () => {
  return (
    <div>
      <div>
        <img className="fluid md:mt-0 mt-[4rem] relative" src={assets.rv_bg1} alt="" />
        <div className="absolute top-0 md:top-1/4 text-white text-center flex px-3 md:px-10 flex-col items-center md:gap-3">
          <h1 className="text-3xl md:mt-0 mt-[4.5rem] md:text-8xl font-semibold animate-drop-down duration-300">Our RVs</h1>
          <p className="text-[13px] md:text-lg md:w-2/4 animate-drop-down duration-300">
            RVs Rentals allow customers to rent vehicles, such as cars, vans, trucks, or
            SUVs, typically on a daily or weekly basis. Well-known examples
            include Enterprise Rent-A-Car, Hertz, and Avis.
          </p>
        </div>
      </div>
      <div className="m-5">
        <Campers/>
      </div>
      <div className="flex mt-[4rem] mb-10 md:m-10 justify-center gap-2 flex-col md:flex-row items-center animate-drop-down duration-300">
        <h1 className="text-5xl animate-drop-down duration-300">Reserve Your Trip</h1>
        <button
          type="submit"
          className="animate-drop-down md:ml-5 mt-3 md:mt-0 mx-0 md:mx-2 text-xl w-3/4 md:w-[200px]  text-white px-3 py-3 bg-[#4da674] duration-300"
          style={{ borderRadius: "25px" }}
        >
          Check Availability
        </button>
      </div>
      <div className="bg-gray-200 flex mt-[4rem] py-5 md:my-[6rem] my-10 md:p-[6rem] justify-center gap-2 flex-col md:flex-row items-center animate-drop-down duration-300">
        <div className="rounded-full bg-[#e95354] w-[35px] h-[35px]"></div>
        <h1 className="text-2xl md:text-5xl animate-drop-down duration-300">Have Questions? Visit Our</h1>
        <Link to='/faq'
          type="submit"
          className="animate-drop-down duration-300 flex items-center justify-center md:ml-5 mt-3 md:mt-0 mx-0 md:mx-2 text-xl w-3/4 md:w-[200px]  text-white px-3 py-3 bg-[#4da674]"
          style={{ borderRadius: "25px" }}
        >
          FAQ Page
        </Link>
      </div>
    </div>
  );
};

export default RVs;
