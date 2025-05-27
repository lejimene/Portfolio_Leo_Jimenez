import React from "react";
import './tailwind.css';
import PhotoImage from "../images/Face_Photo.png"

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
      <div className="flex flex-col md:flex-row justify-center items-center rounded shadow-lg bg-cream m-4 p-2.5 gap-6">
        {/* Description */}
        <div className="bg-slate-300 text-gray-700 rounded-lg p-5 md:mr-14 w-full md:w-9/12 max-w-5xl">
          <h2 className="text-4xl mb-3 text-center text-neutral-800 animate-fadeInUp">
            About Me
          </h2>
          <p className="text-3xl text-center">
            Hello, my name is Leonardo Jimenez, or Leo for short. 
            <br /><br />
            I'm a recent Computer Science graduate from the University at Buffalo blending 
            technical expertise with a passion for creativity. I enjoy web development because of its ability to merge innovation with accessibility.
             Allowing me to build platforms that have functionality and engage everyone together.
             <br /><br />
            Beyond coding, I enjoy the balance of mindful simplicity and competitive energy. 
            Whether it's listening to the calming rush of rivers or creeks, strategizing in 
            League of Legends, or diving into creativity with Minecraft. I appreciate how technology 
            can make life easier, more efficient, and fun and connect everyone together. 
            <br /><br />
            Feel free to check my work below on the projects I have worked on.
            <br /><br />
            Let's connect and create something meaningful. 

          </p>
        </div>

        {/* Photo */}
      <div className="relative rounded-2xl p-1 bg-gradient-to-tr from-blue-300 via-purple-300 to-pink-300 shadow-xl">
        <div className="rounded-2xl bg-white/10 backdrop-blur-md p-1">
          <img
            src={PhotoImage}
            alt="Photo of me"
            className="rounded-xl w-80 h-96 object-cover shadow-md"
          />
        </div>
      </div>
      </div>
    </div>
  );
}

export default Resume_Banner;