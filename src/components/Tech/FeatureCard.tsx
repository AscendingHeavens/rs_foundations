import * as React from "react";
import { FeatureCardProps } from "./Types";

export const FeatureCard: React.FC<FeatureCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description
}) => {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col max-md:mt-9">
        <div className="flex flex-col px-11 pt-11 rounded-xl max-md:px-5">
          <img
            loading="lazy"
            src={imageSrc}
            alt={imageAlt}
            className="object-contain w-full aspect-[1.5]"
          />
        </div>
        <div className="self-center mt-11 text-2xl font-bold leading-none text-center text-purple-500   dark:text-purple-500 max-md:mt-10">
          {title}
        </div>
        <div className="mt-6 text-xl leading-8 text-center  dark:text-gray-300 text-neutral-800">
          {description.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};