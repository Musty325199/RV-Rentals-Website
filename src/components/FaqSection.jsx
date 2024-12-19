import React, { useState } from 'react'
import { faqGeneral, faqRandom } from '../assets/assets'
import { FaChevronDown } from 'react-icons/fa'
import { FaSearch } from "react-icons/fa";


const FaqSection = () => {

    const [openSearchBar, setOpenSearchBar] = useState(false);
    const [input, setInput] = useState("");
    const [openFaq, setOpenFaq] = useState(null);
    const [activeTab, setActiveTab] = useState('general');

    const handleSearchBar = () => {
      setOpenSearchBar(true);
    };
    const handleCloseSearchBar = () => {
      setOpenSearchBar(false);
    };
    const handleSearchChange = (value) => {
      setInput(value);
    }

    const clearSearchWords = () => {
        setInput("");
    }
    const faqs = activeTab === 'general' ? faqGeneral : faqRandom

    const handleOpenFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index );
    }


    const filteredFaqs = faqs.filter((faaq)=>
        faaq.question.toLowerCase().includes(input.toLowerCase())
        )

  return (
    <>
     <div className="flex flex-col justify-between md:mx-10 md:px-10">
          <h3 className="text-3xl text-center md:text-xl font-medium ml-5 md:ml-[25rem]">
            Frequently asked questions
          </h3>
          <div className="hidden  flex items-center gap-5">
            {openSearchBar ? (
              <div className="flex items-center border border-gray-700 px-5 py-2">
                <input
                  className="md:w-[370px] border-none outline-none"
                  value={input}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  type="text"
                  placeholder="looking for something?"
                />
                <button
                  onClick={handleCloseSearchBar}
                  className="text-gray-800 text-lg"
                >
                  x
                </button>
              </div>
            ) : (
              <FaSearch onClick={handleSearchBar} />
            )}
          </div>
          <div className="md:hidden mt-5 flex items-center gap-5 border border-gray-700 px-5 py-2">
                <FaSearch/>
                <input
                  className="w-full border-none outline-none"
                  value={input}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  type="text"
                  placeholder="looking for something?"
                />
                <button
                  onClick={clearSearchWords}
                  className="text-gray-800 text-lg"
                >
                  x
                </button>
              </div>
        </div>
             
          <div className='md:m-10 flex flex-col p-2'>
        <div className="mb-6 border-b border-gray-200">
        <div className="flex space-x-4">
          <button
            onClick={() => setActiveTab("general")}
            className={`px-4 py-2 text-lg font-medium ${
              activeTab === "general" ? "text-[#4da674] border-b-2 border-[#4da674]" : "text-gray-800"
            }`}
          >
            General
          </button>
          <button
            onClick={() => setActiveTab("faqSetup")}
            className={`px-4 py-2 text-lg font-medium ${
              activeTab === "faqSetup" ? "text-[#4da674] border-b-2 border-[#4da674]" : "text-gray-800"
            }`}
          >
            Random FAQ
          </button>
        </div>
        {filteredFaqs.length > 0 ? 
        filteredFaqs.map((faaq, index) => (
            <div key={index}>
            <div onClick={()=>handleOpenFaq(index)} className='cursor-pointer flex items-center justify-between px-3 py-5 md:p-5'>
                <div className='font-semibold md:text-lg'>{faaq.question}</div>
                <FaChevronDown className={`transform transition-transform duration-300 ${
                  openFaq === index ? "rotate-180" : ''
                }`} />
            </div>
            {
                openFaq === index && ( <div className='md:p-5 py-0 px-3 text-gray-800'>{faaq.answer}</div> 
                )
            }
            </div>

        )):
        <div>Nothing Found!</div>
        }
    </div>
    </div>
    </>

  )
}

export default FaqSection