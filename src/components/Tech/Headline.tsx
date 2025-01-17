import * as React from "react";

interface HeadlineProps {
  title: string;
  description: string;
}

const Headline: React.FC<HeadlineProps> = ({ title, description }) => (
  <div className="flex flex-col items-center">
    <div className="text-5xl font-semibold leading-none text-center  dark:text-purple-600 text-purple-500  max-md:max-w-full max-md:text-4xl">
      {title}
    </div>
    <div className="mt-8 text-2xl leading-loose text-center  dark:text-gray-300 text-neutral-800 max-md:max-w-full">
      {description}
    </div>
  </div>
);

export default Headline;