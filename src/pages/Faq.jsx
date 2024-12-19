import React, { useState } from "react";
import { assets } from "../assets/assets";
import FaqSection from "../components/FaqSection";

const Faq = () => {
 
  return (
    <div>
      <div className="">
        <img
          className="fluid md:mt-0 mt-[4rem] relative"
          src={assets.faq_bg1}
          alt=""
        />
        <div className="absolute top-0 bottom-0 left-0 right-0 h-[11rem] md:h-[23.5rem] Overlay"></div>
        <div className="absolute top-0 md:top-1/4 text-white text-center flex px-3 md:px-10 flex-col items-center md:gap-3">
          <h1 className="text-3xl md:mt-0 mt-[4.5rem] md:text-8xl font-semibold animate-drop-down duration-300">
            FAQ
          </h1>
          <p className="w-full text-[10px] font-semibold md:text-lg md:w-2/4 animate-drop-down duration-300">
            RVs Rentals allow customers to rent vehicles, such as cars, vans,
            trucks, or SUVs, typically on a daily or weekly basis. Well-known
            examples include Enterprise Rent-A-Car, Hertz, and Avis.
          </p>
        </div>
      </div>
      <div className="m-10">
            <FaqSection />
      </div>
    </div>
  );
};

export default Faq;
