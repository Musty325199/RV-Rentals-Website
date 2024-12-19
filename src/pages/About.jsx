import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
            <div>
        <img
          className="fluid md:mt-0 mt-[4rem] relative"
          src={assets.about_b1}
          alt=""
        />
        <div className="absolute top-0 bottom-0 left-0 right-0 h-[11rem] md:h-[23.5rem] Overlay"></div>
        <div className="absolute top-0 md:top-1/4 text-white text-center flex px-3 md:px-10 flex-col items-center md:gap-3">
          <h1 className="text-3xl md:mt-0 mt-[4.5rem] md:text-8xl font-semibold animate-drop-down duration-300">
            Our Story
          </h1>
          <p className="w-full text-[10px] font-semibold md:text-lg md:w-2/4 animate-drop-down duration-300">
            RVs Rentals allow customers to rent vehicles, such as cars, vans,
            trucks, or SUVs, typically on a daily or weekly basis. Well-known
            examples include Enterprise Rent-A-Car, Hertz, and Avis.
          </p>
        </div>
      </div>
      <div className='md:w-[75%] grid md:grid-cols-2 px-10 my-10 md:my-[10rem] md:mx-[10rem] gap-5'>
      <div className='md:w-[300px] flex items-center justify-center h-[300px] md:ml-[9.5rem] bg-green-600'>
        <h3 className='text-3xl text-white'>About Us</h3>
      </div>
      <div className=''>
        <p className='font-medium'>At RV Rentals, we believe that the open road holds the key to unforgettable adventures. Whether you’re planning a weekend getaway or a cross-country road trip, we are here to provide you with the perfect RV to make your journey comfortable, exciting, and hassle-free.

We are a family-owned and operated business with a passion for travel and exploration. Our fleet of well-maintained, modern RVs caters to a variety of travelers, offering everything from compact campervans for couples to spacious motorhomes for families. With a commitment to excellent service, we aim to ensure that your RV rental experience is seamless from start to finish.

We understand that everyone’s travel plans are unique, which is why we offer flexible rental options, allowing you to customize your trip to suit your needs. Whether you're new to RV travel or a seasoned road warrior, our knowledgeable team is always ready to provide guidance and support to make your experience as smooth as possible.

At RV Rentals, our mission is to provide you with not just a vehicle, but a home on wheels. Explore the freedom of the open road, create lasting memories with your loved ones, and enjoy the journey with us. Let’s hit the road together!
</p>
      </div>
      <div className='md:mt-[-12.5rem]'>
        <img src={assets.about_b2} alt="" />
      </div>
      <div>
      <img src={assets.about_b3} alt="" />
      </div>
      </div>
      <div className='bg-slate-200 flex flex-col items-center justify-center'>
      <h1 className='text-5xl my-10 mx-[4rem] md:m-10'>Our Company Headquarters</h1>
      <div className='w-full'><iframe width="100%" height="600" frameborder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=500%20Terry%20Francine%20Street%20%20San%20Francisco,%20CA%2094158+(RV%20Rentals)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe></div>
      </div>
    </div>
  )
}

export default About