import * as React from "react";

const Herotext: React.FC<HeroSectionProps> = ({ title, description, imageSrc, imageAlt }) => {
  return (
    <div className="flex flex-col justify-center items-center px-16 py-36 max-md:px-5 max-md:py-24">
      <div className="max-w-full w-[1088px]">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src={imageSrc}
              alt={imageAlt}
              className="object-contain grow w-full aspect-[0.86] max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
              <div className="self-start text-7xl font-bold leading-[84px]  dark:text-purple-500 text-indigo-500 max-md:max-w-full max-md:text-4xl max-md:leading-[56px]">
                {title.map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </div>
              <div className="mt-12 text-xl leading-9  dark:text-gray-300 text-neutral-800 max-md:mt-10 max-md:max-w-full">
                {description.map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herotext;
