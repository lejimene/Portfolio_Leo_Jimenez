import React from "react";
import './tailwind.css';

export function Resume_Banner() {
  return (
    <div className="w-screen h-auto font-dongle">
      {/* Title Section */}
      <div className="flex bg-center h-80 justify-center items-center">
        <h1 className="text-center text-neutral-600 text-6xl">
          Welcome to My Portfolio
        </h1>
      </div>
      
      {/* Description and Photo Section */}
      <div className="flex flex-col md:flex-row justify-center items-center rounded shadow-lg bg-cream m-4 p-2.5">
        {/* Description */}
        <p className="text-center bg-slate-300 text-3xl text-gray-700 w-5/12 min-w-80 m-4 rounded-lg p-3">
          Welcome to my Portfolio Website. My name is Leo Jimenez or Leonardo Jimenez. I'm a student
          at the Universtiy at Buffalo studying computer science. I have been fascinated in website building
          but also making life easier. 
        </p>
        
        {/* Photo */}
        <img
          src="/path_to_your_image.jpg"
          alt="In Progress, No photo as of yet"
          className="rounded-full w-1/5 h-1/5 object-cover bg-black"
        />
      </div>
    </div>
  );
}

export default Resume_Banner
