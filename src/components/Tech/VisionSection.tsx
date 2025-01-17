
import { Card } from "./Card";


export const VisionSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl font-medium tracking-tighter leading-none text-center  dark:text-purple-500 text-neutral-800 max-md:max-w-full max-md:text-4xl">
        Let's turn your vision into reality
      </h1>
      <p className="mt-8 text-2xl leading-tight text-center dark:text-white text-neutral-600 max-md:max-w-full">
        Glide elevates your business with modern custom software.
      </p>
      <div className="flex self-stretch justify-center mt-20 text-base font-semibold max-md:mt-10">
        <Card imageSrc={""} imageAlt={""} {...cardData[0]} />
        <div className="overflow-hidden z-10 self-start  px-8 py-7 mt-80 text-xl leading-tight whitespace-nowrap bg-white rounded-full shadow-2xl dark:text-purple-500 text-neutral-800 max-md:px-5 max-md:mt-10 max-md:mr-0">
          OR
        </div>
        <Card imageSrc={""} imageAlt={""} {...cardData[1]} />
      </div>
    </div>
  );
};