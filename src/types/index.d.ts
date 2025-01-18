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
  title: string[];
  description: string[];
  imageSrc: string;
  imageAlt: string;
}
interface FeatureCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string[];
  description: string[];
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
interface FeatureCardsProps {
  icon: string;
  title: string;
  description?: string;
}

interface ButtonProps {
  children: React.ReactNode;
  icon?: string;
  onClick?: () => void;
}
interface SocialFeatureProps {
  icon: string;
  text: string;
  description: string;
}

interface SocialFeatureListProps {
  features: SocialFeatureProps[];
}

interface ButtonsProps {
  text: string;
  iconSrc?: string;
}

interface FormFieldProps {
  label: string;
  type?: string;
  id: string;
  value: string;
  onChange: any;
}

interface BusinessFeatureProps {
  title: string;
  description: string[];
}
