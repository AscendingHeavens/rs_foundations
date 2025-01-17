import * as React from "react";
import { HeroText } from "./HeroText";
import { Image } from "./Image";

// Sample image data
const images = [
  {
    src: "/path/to/image1.jpg",
    alt: "Image 1 description"
  },
  {
    src: "/path/to/image2.jpg",
    alt: "Image 2 description"
  }
];

export const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center font-medium text-center text-black">
      <div className="ml-3.5 text-8xl font-semibold tracking-tighter leading-none max-md:max-w-full max-md:text-4xl">
        Transform Your{" "}
      </div>
      <div className="mt-7 text-8xl font-semibold tracking-tighter leading-tight max-md:max-w-full max-md:text-4xl">
        Ideas Into Stunning Media
      </div>
      
      

      <button 
        className="flex overflow-hidden flex-col mt-9 max-w-full text-base leading-loose text-white rounded-xl shadow-sm bg-indigo-600 w-[122px]"
        aria-label="Place order"
      >
        <div className=" jusitfy text-center px-4 py-5 rounded-xl border-t-2 border-indigo-600 max-md:px-5">
          Get Started
        </div>
      </button>

    </div>
  );
};
