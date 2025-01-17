import React from "react";
import Image from "next/image";
import { CaseStudyCardProps } from "./types";

export const CaseStudyCard = ({ imageUrl, description }: CaseStudyCardProps) => {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full group">
      <div className="flex flex-col grow text-sm text-center max-md:mt-10 transition-transform duration-300 ease-in-out group-hover:scale-105">
        <Image
          loading="lazy"
          src={imageUrl} // Use imageUrl here
          height={300}
          width={450}
          alt="Case study preview"
          className="object-contain w-full rounded aspect-[1.5]"
        />
        <div className="flex overflow-hidden flex-col px-11 py-5 bg-white rounded-none shadow-lg max-md:px-5">
          <div className="self-center leading-none text-gray-700 uppercase">
            Case study
          </div>
          <div className="mt-3.5 leading-5 text-gray-500">{description}</div>
        </div>
      </div>
    </div>
  );
};
