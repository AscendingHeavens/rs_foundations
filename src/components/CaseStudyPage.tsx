import React from "react";
import { CaseStudySection } from "./CaseStudySection";

export interface CaseStudyCardProps {
  src: string;
  description: string;
  url?: string;  // Add url to the interface to ensure it's optional
}

export const CaseStudiesPage = () => {
  const caseStudiesData = [
    {
      imageUrl: "/headphone.png", 
      description: "Velit reprehenderit culpa Lorem reprehenderit excepteur ipsum esse.",
      url: "/headphone-study",  // Add a valid URL
    },
    {
      imageUrl: "/chess.png",
      description: "Velit reprehenderit culpa Lorem reprehenderit ipsum esse.",
      url: "/chess-study",  // Add a valid URL
    },
    {
      imageUrl: "/clock.png",
      description: "Velit reprehenderit culpa Lorem reprehenderit excepteur esse.",
      url: "/clock-study",  // Add a valid URL
    },
  ];

  return (
    <CaseStudySection
      title="What we have built?"
      subtitle="Don't just take our word for it — see what leaders in digital are saying"
      caseStudies={caseStudiesData}
    />
  );
};
