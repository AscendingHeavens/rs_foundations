import React from "react";
import Image from "next/image";


export const CaseStudyCard = ({ imageUrl, description }: CaseStudyCardProps) => {
  return (
    <div className="flex flex-col w-[100%] max-md:ml-0  max-md:w-full group">
      <div className="flex flex-col grow text-sm text-center max-md: transition-transform duration-300 ease-in-out group-hover:scale-105">
        <Image
          loading="lazy"
          src={imageUrl} // Use imageUrl here
          height={100}
          width={450}
          alt="Case study preview"
          className="object-contain w-full "
        />
        <div className="flex overflow-hidden flex-col px-11 py-10 bg-white rounded-none shadow-lg max-md:px-5">
          <div className="self-center leading-none text-gray-700 uppercase">
            Case study
          </div>
          <div className="mt-3.5 leading-5 text-gray-500">{description}</div>
        </div>
      </div>
    </div>
  );
};
