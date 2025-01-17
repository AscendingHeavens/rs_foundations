import React from "react";
import { CaseStudyCard } from "./CaseStudyCard";
import { CaseStudySectionProps } from "./types";
import Image from "next/image";
import Link from "next/link";  // Don't forget to import Link

export const CaseStudySection = ({
  title,
  subtitle,
  caseStudies,
}: CaseStudySectionProps) => {
  return (
    <div className="flex overflow-hidden relative flex-col justify-center items-center px-20 py-36 w-full min-h-[960px] max-md:px-5 max-md:py-24 max-md:max-w-full">
      <Image
        src="/tech/starbg.png"
        alt="Background with stars"
        className="object-cover absolute inset-0 w-full h-full"
        layout="fill"
      />
      <div className="flex relative flex-col items-center mb-0 max-w-full w-[1238px] max-md:mb-2.5">
        <h1 className="text-7xl font-bold leading-none text-center text-white max-md:max-w-full max-md:text-4xl">
          {title}
        </h1>
        <p className="mt-12 text-xl leading-snug text-center text-gray-400 max-md:mt-10 max-md:max-w-full">
          {subtitle}
        </p>
        <div className="self-stretch mt-24 max-md:mt-10 max-md:max-w-full">
          <div className="transition-transform duration-300 ease-in-out">
            <div className="flex gap-5 max-md:flex-col">
              {caseStudies.map((study, index) => (
                // Provide the correct URL to the `Link` component
                <Link href={study.url || '/default-page'} key={index}>
                  <a>
                    <CaseStudyCard
                      imageUrl={study.imageUrl}
                      description={study.description}
                      url={study.url} // Pass the correct `url` to `CaseStudyCard`
                    />
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <button
          className="flex gap-2.5 mt-24 max-w-full text-xl leading-snug text-indigo-400 w-[218px] max-md:mt-10"
          tabIndex={0}
        >
          {/* Button content */}
        </button>
      </div>
    </div>
  );
};
