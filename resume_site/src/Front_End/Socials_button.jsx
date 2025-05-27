import React from "react";
import './tailwind.css';

import LinkdnImage from "../images/linkdn.png"
import InstagramImage from "../images/Instagram.png"
import GithubImage from "../images/github-mark-white.png"

export function LinkdnButtonsText() {
  return (
    <a
      href="https://www.linkedin.com/in/leonardo-jimenez-952719256/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button
        type="button"
        className="flex items-center rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out
          bg-blue-700 hover:bg-blue-800 focus:bg-blue-800 active:bg-blue-900"
      >
        <img src={LinkdnImage} alt="LinkedIn Icon" className="h-4 w-4 mr-2" />
        LinkedIn
      </button>
    </a>
  );
}

export function GithubButtonsText() {
  return (
    <a
      href="https://github.com/lejimene"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button
        type="button"
        className="flex items-center rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white 
          shadow-md transition duration-150 ease-in-out
          bg-gray-800 hover:bg-gray-900 text-white"
      >
        <img src={GithubImage} alt="GitHub Icon" className="h-4 w-4 mr-2" />
        GitHub
      </button>
    </a>
  );
}

export function InstagramButtonsText() {
  return (
    <a
      href="https://www.instagram.com/your-profile"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button
        type="button"
        className="flex items-center rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white 
          shadow-md transition duration-150 ease-in-out
          bg-pink-500 hover:bg-pink-600 focus:bg-pink-600 active:bg-pink-700"
      >
        <img src={InstagramImage} alt="Instagram Icon" className="h-4 w-4 mr-2" />
        Instagram
      </button>
    </a>
  );
}