import React from 'react';

const GptSearchButton = ({text}) => {
  return (
    <div className="relative inline-flex items-center group mr-[15px]">
      <button className="bg-red-500 text-white h-[40px] px-4 py-2 rounded-[6px] shadow-inner shadow-red-700/40 hover:shadow-red-700/60 focus:outline-none focus:ring-2 focus:ring-red-300 active:scale-95 transition-all duration-300 pr-10">
        {text}
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white w-7 h-7 flex items-center justify-center rounded-[5px] shadow-md shadow-red-700/40 transition-all duration-300 group-hover:w-[calc(100%-0.5rem)]  group-hover:translate-x-1 group-hover:scale-102">
          <svg height={20} width={20} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor" className="text-red-700 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default GptSearchButton;
