import React from 'react';

export const NavBar = () => {
  return (
    <div className=" flex justify-between text-black bg-yellow-200">
      <div className="">
        <button className="">
          soy un boton
 
        </button>
      </div>
      <div className="">
        <a className="">Soy NavBar</a>
      </div>
      <div className="">
        <button className="">
          soy el segundo boton
          <svg
            
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
