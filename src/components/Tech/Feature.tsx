import * as React from "react";

interface FeatureProps {
  imgSrc: string;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ imgSrc, title, description }) => (
    
  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
    <div className="flex flex-col w-full text-2xl font-bold leading-loose text-indigo-500  dark:text-purple-600 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 self-start">
        <img
          loading="lazy"
          src={imgSrc}
          alt=""
          className="object-contain shrink-0 aspect-square w-[43px]"
        />
        <div className="mt-10 my-auto basis-auto">{title}</div>
      </div>
      <div className="text-xl leading-8 text-neutral-800  dark:text-gray-300  max-md:max-w-full">
        {description}
      </div>
    </div>
  </div>
);

export default Feature;