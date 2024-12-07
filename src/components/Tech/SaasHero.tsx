import React from 'react';
import Image from 'next/image'; // Use only if you're working in a Next.js environment

import { WideCard } from './WideCard';
import Card from './Card';

const SaasHero = () => {
  const cards = Array(3).fill(null);
  const wideCards = Array(2).fill(null);

  return (
    <div className="flex flex-col items-center">
      <div className="text-7xl font-extrabold tracking-tighter text-center leading-[66px] text-neutral-950 max-md:max-w-full max-md:text-4xl max-md:leading-10">
        Kick off with a bang
        <br />
        with SaaS Starter
      </div>
      <div className="mt-9 text-xl leading-8 text-center text-neutral-500 max-md:max-w-full">
        Build your next project using our SaaS model
        <br />
      </div>
      <Image
        loading="lazy"
        src="/tech/hero.png" // Ensure the image path is correct
        alt="SaaS Starter platform interface showcase"
        className="object-contain self-stretch mt-20 w-full rounded-xl aspect-[1.74] max-md:mt-10 max-md:max-w-full"
        height={1000} // Adjust height if necessary
        width={1000} // Adjust width if necessary
      />
      <div className="self-stretch mt-48 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {cards.map((_, index) => (
            <Card key={index} className={index > 0 ? 'ml-5' : ''} />
          ))}
        </div>
      </div>
      <div className="self-stretch mt-3 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {wideCards.map((_, index) => (
            <WideCard key={index} className={index > 0 ? 'ml-5' : ''} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SaasHero;
