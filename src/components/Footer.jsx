import React, {useState} from "react";
import { Link } from "react-router-dom";
import Booking from "../pages/Booking";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };


  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
<>
<div className="my-10 flex md:flex-row  flex-col md:px-10">
      {/* <hr className="w-full h-[2px] bg-gray-400 mb-5"/> */}
      <div className="w-full md:w-2/4 flex md:flex-row  flex-col gap-2 md:gap-10">
        <div className="flex px-5 flex-col gap-5">
          <Link
            to="/"
            className="font-semibold text-3xl cursor-pointer flex flex-col justify-center"
          >
            <h1 className="text-xl font-bold">Dandy Campers</h1>
            <p className="text-lg">RV Rentals</p>
          </Link>
          <div className="font-semibold text-lg md:mt-[80px]">
            <p>
              500 Terry Francine Street <br />
              San Francisco, CA 94158
            </p>
            <p>info@mysite.com</p>
            <p>123-456-7890</p>
          </div>
        </div>
        <div>
          <button
            onClick={handleOpenModal}
            type="submit"
            className="z-100 md:ml-2 mx-5 md:mx-10 font-semibold w-[200px] md:w-[200px]  text-white px-3 py-3 bg-[#4da674]"
            style={{ border: "2px solid white", borderRadius: "25px" }}
          >
            Check Availability
          </button>
          <div className="flex flex-col px-5 mt-10 md:mt-[100px] text-lg font-semibold gap-2">
            <a href="/rvs">RVs</a>
            <a href="/trips">Road Trips</a>
            <a href="/faq">FAQ</a>
            <a href="/about">About</a>
          </div>
        </div>
      </div>
      <div className="mt-10 px-5 mb-10">
        <h1 className="text-3xl font-semibold">Contact Us</h1>
        <form>
          <div className="flex md:flex-row flex-col gap-5 mt-10 font-semibold">
            <label className="flex flex-col text-lg gap-5">
              First name
              <input
                className="border-0 outline-0 w-full md:w-[250px]"
                style={{ borderBottom: "1px solid black"}}
                type="text"
                required
              />
            </label>
            <label className="flex flex-col text-lg gap-5">
              Last name
              <input
                className="border-0 outline-0 w-full md:w-[250px]"
                style={{ borderBottom: "1px solid black"}}
                type="text"
                required
              />
            </label>
          </div>
          <div className="flex md:flex-row flex-col gap-5 mt-10 font-semibold">
            <label className="flex flex-col text-lg gap-5">
              Email
              <input
                className="border-0 outline-0 w-full md:w-[250px]"
                style={{ borderBottom: "1px solid black"}}
                type="email"
                required
              />
            </label>
            <label className="flex flex-col text-lg gap-5">
              Subject
              <input
                className="border-0 outline-0 w-full md:w-[250px]"
                style={{ borderBottom: "1px solid black"}}
                type="text"
                required
              />
            </label>
          </div>
          <label className="flex flex-col text-lg mt-10 font-semibold text-lg">
            Message
            <textarea
              className="border-0 outline-0"
              style={{ borderBottom: "1px solid black" }}
              rows="5"
            ></textarea>
          </label>
          <button
            type="submit"
            className="mt-10 font-semibold w-3/4 md:w-[150px]  text-white px-3 py-3 bg-[#4da674]"
            style={{ border: "2px solid white", borderRadius: "25px" }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
          <div className="md:mt-[-100px] mb-5 md:mx-5 px-5 md:px-10">
          <div></div>
          <p className="md:text-lg text-[13px]">© 2035 by Dandy Campers. Developed by <span className="font-semibold">Musty</span></p>
        </div>
        <Booking isOpen={isModalOpen} onClose={handleCloseModal}/>
</>
  );
};

export default Footer;
