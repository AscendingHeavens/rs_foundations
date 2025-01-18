type Navlinks = {
  title: string;
  href: string;
};

interface PageProps {
  params: {
    slug: string;
  };
  searchParams: {};
}

interface Faq {
  question: string;
  answer: string;
}

type FormRequest = {
  name: string;
  email: string;
  section: string;
  message: string;
};

interface CardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

type tech = {
  id: number;
  name: string;
  usage: string;
  description: string;
};

interface CaseStudyCardProps {
  url: string;
  imageUrl: string;
  description: string;
}

interface CaseStudySectionProps {
  title: string;
  subtitle: string;
  caseStudies: CaseStudyCardProps[];
}

interface HeroSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}
interface FeatureCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}
interface SupportFeatureProps {
  description: string;
}

interface WhyUsContentProps {
  features: string[];
}
interface HeroTextProps {
  text: string;
  className?: string;
}

interface ImageProps {
  src: string;
  alt: string;
  className: string;
}

export interface FeatureCardsProps {
  icon: string;
  title: string;
  description?: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  icon?: string;
  onClick?: () => void;
}
export interface SocialFeatureProps {
  icon: string;
  text: string;
  description:string;
}

export interface SocialFeatureListProps {
  features: SocialFeatureProps[];
}

export interface ButtonsProps {
  text: string;
  iconSrc?: string;
}

export interface FormFieldProps {
  label: string;
  type?: string;
  id: string;
  value:string;
  onChange:any;
}

export interface BusinessFeatureProps {
  title: string;
  description: string[];
}