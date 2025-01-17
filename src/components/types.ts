export interface CaseStudyCardProps {
  url:string  
  imageUrl: string;
    description: string;
  }
  
  export interface CaseStudySectionProps {
    title: string;
    subtitle: string;
    caseStudies: CaseStudyCardProps[];
  }