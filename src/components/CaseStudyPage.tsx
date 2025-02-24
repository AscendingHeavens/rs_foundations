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
      imageUrl: "/agency.png", 
      description: "Agency Website",
      url: "https://transcendconsultancy.in/",  // Add a valid URL
    },
    {
      imageUrl: "/LandingPage.png",
      description: "Product Landing Page",
      url: "https://vrindaskin.vercel.app/",  // Add a valid URL
    },
    {
      imageUrl: "/travels.png",
      description: "Tours & Travels Landong Page",
      url: "https://next-travels.vercel.app/",  // Add a valid URL
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
