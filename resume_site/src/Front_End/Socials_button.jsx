import React from "react";
import './tailwind.css';

import LinkdnImage from "../images/linkdn.png"
import InstagramImage from "../images/Instagram.png"
import GithubImage from "../images/github-mark-white.png"

export function LinkdnButtonsText() {
  return (
    <button
      type="button"
      className="flex items-center rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg bg-blue-700"
    >
      <img src={LinkdnImage} alt="Linkdn Icon" className="h-4 w-4 mr-2"/>
      LinkedIn
    </button>
  );
}

export function GithubButtonsText() {
  return (
    <button
      type="button"
      className="flex rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
      style={{ backgroundColor: "#1da1f2" }}
    >
      <img src={GithubImage} alt="Github Icon" className="h-4 w-4 mr-2"/>
      Github
    </button>
  );
}

export function InstagramButtonsText() {
  return (
    <button
      type="button"
      className="flex rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
      style={{ backgroundColor: "#c13584" }}
    >
      <img src={InstagramImage} alt="Instagram Icon" className="h-4 w-4 mr-2"/>
      Instagram
    </button>
  );
}
