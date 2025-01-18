import { button } from "framer-motion/client";
import React from "react";

const TechHero = () => {
  return (
    <div className=" dark:focus:bg-trueGray-700 min-h-[calc(50vh-6rem)]">
      <div className="max-w-4xl mx-auto py-8 px-14 sm:px-6 lg:px-8">
        <h1 className="font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug dark:text-purple-600 text-gray-800">
          Your website beyond expectations
        </h1>
        <div className="max-w-xl mx-auto">
          <p className="mt-10 dark:text-white text-gray-500 text-center text-xl lg:text-3xl">
            Make your website wonderful and build beyond your expectations.
          </p>
        </div>
        <div className="mt-10 flex justify-center items-center w-full mx-auto">
        <a
  href="/form"
  className="bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
>
  Get started
</a>
          <span className="mx-2">or</span>
          <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg font-medium hover:bg-gray-300 transition duration-300">
            Contact us
          </button>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <div className="mt-4 w-full">
          <p className="font-mono uppercase text-center font-medium text-sm text-gray-600"></p>
          <div className="flex items-center justify-center mx-auto flex-wrap"></div>
        </div>
      </div>
    </div>
  );
};

export default TechHero;
