import React, { useState } from "react";

const CustomSelect = ({ options, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-2/4 md:w-64">
      <label className="block text-white mb-2">{label}</label>
      
      <div
        className="bg-[#1F6340] text-white font-semibold cursor-pointer"
        onClick={toggleDropdown}
      >
        <div className="px-4 py-2 flex justify-between items-center">
          <span>{selectedOption || ""}</span>
          <svg
            className={`w-5 h-5 transform ${isOpen ? "rotate-180" : "rotate-0"}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 8l4 4 4-4" />
          </svg>
        </div>
      </div>

      {isOpen && (
        <div className="absolute w-full mt-1 bg-[#1F6340] z-10">
          {options.map((option, index) => (
            <div
              key={index}
              className="px-4 py-2 cursor-pointer text-white hover:bg-green-200"
              onClick={() => selectOption(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
