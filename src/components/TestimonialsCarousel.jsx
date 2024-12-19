import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets';

const testimonials = [
    {
        id: 1,
        text: "Working with RV Rentals  was an absolute pleasure! From the initial consultation to the final touches, their team was professional, reliable, and incredibly detail-oriented",
        author: '__John Doe'
    },
    {
        id: 2,
        text: "Our kitchen remodel exceeded all expectations thanks to RV Rentals. They listened to our vision and delivered exactly what we wanted — a modern, functional, and beautiful space.",
        author: '__Amanda Dart'
    },
    {
        id: 3,
        text: "We decided to remodel our outdated bathroom, and RV Rentals made the entire process seamless. The team offered great design suggestions and kept us updated at every step.",
        author: '__Jane Kils'
    },
    {
        id: 4,
        text: "We hired RV Rentals for a full-home remodel, and we couldn't be happier with the outcome. From redesigning our layout to installing beautiful finishes, every detail was handled with care and precision.",
        author: '__Bob Smith'
    },
]
const TestimonialsCarousel = () => {
const [currentIndex, setCurrentIndex] = useState(0);
const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
};
const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
};


  return (
    <div className='max-w-full mx-2 md:mx-auto bg-white p-4 relative'>
        <h5 className='px-10 px-5 text-sm md:text-lg mb-5'>{testimonials[currentIndex].text}</h5>
        <p className='px-10 md:text-xl font-medium'>{testimonials[currentIndex].author}</p>
        <div className='flex justify-between absolute right-0 top-1/2 md:transform-translate-y-1/2 w-full'>
        <button className='text-gray-500 h-6 w-6 bg-white rounded-full hover:text-gray-900 transition duration-300'
        onClick={handlePrevClick}>
            <img src={assets.prev_icon} alt="" />
        </button>
          <button className='text-gray-500 h-6 w-6'
        onClick={handleNextClick}>
            <img src={assets.next_icon} alt="" />
        </button>
        </div>
    </div>
  )
}

export default TestimonialsCarousel