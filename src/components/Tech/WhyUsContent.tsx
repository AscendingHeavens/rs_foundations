import * as React from 'react';
import { SupportFeature } from './SupportFeature';
import { WhyUsContentProps } from './Types';

export const WhyUsContent: React.FC<WhyUsContentProps> = ({ features }) => (
  <div className="flex flex-col grow text-xl leading-8  dark:text-white  text-neutral-800 max-md:mt-10 max-md:max-w-full">
    <div className="self-start text-base font-bold tracking-wide leading-none uppercase">
      Why us
    </div>
    <div className="mt-0.5 mr-5 text-7xl font-bold leading-[84px]   dark:text-purple-500  text-indigo-500 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full max-md:text-4xl max-md:leading-[56px]">
      We make better<br />partnership
    </div>
    <div className="mt-9 max-md:max-w-full">
      We use a collaborative approach to ensure that you as<br />
      business owner(s) are involved in every step of the process. We<br />
      believe that open communication and right technology<br />
      support are essential for building successful startup<br />
      partnerships.
    </div>
    <div className="self-start mt-8 text-3xl font-bold leading-none   dark:text-purple-500 text-indigo-500">
      Startup support
    </div>
    {features.map((feature, index) => (
      <SupportFeature key={index} description={feature} />
    ))}
  </div>
);