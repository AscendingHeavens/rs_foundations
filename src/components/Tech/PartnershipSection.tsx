import * as React from 'react';
import { WhyUsContent } from './WhyUsContent';

export const PartnershipSection: React.FC = () => {
  const features = [
    'Pre-built application templates and themes to get you\nstarted quickly',
    'Let AI do its magic in aligning your objectives with MVP\nfeatures',
    'Our tech experts will put together a MVP development\nplan and strategy in place'
  ];

  return (
    <div className="flex flex-col items-center pt-4 pr-16 pb-12 pl-16 bg-zinc-100 max-md:px-5">
      <div className="max-w-full w-[1107px]">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7bb771d2f632fe999b62159e5f79c53d0c2fab63c7882dde42f72688312de694?placeholderIfAbsent=true&apiKey=bc78d96b1bfe4229ab8bdab79a935f37"
              alt="Partnership illustration showcasing collaboration"
              className="object-contain mt-14 w-full aspect-[0.88] max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <WhyUsContent features={features} />
          </div>
        </div>
      </div>
    </div>
  );
}