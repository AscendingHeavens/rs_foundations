import { Variants } from "framer-motion";

export const techStack: tech[] = [
  {
    id: 1,
    name: "React",
    usage: "Frontend",
    description: "A JavaScript library for building user interfaces.",
  },
  {
    id: 2,
    name: "Next.js",
    usage: "Frontend",
    description: "A React framework for server-rendered applications.",
  },
  {
    id: 3,
    name: "TypeScript",
    usage: "Frontend",
    description:
      "A typed superset of JavaScript that compiles to plain JavaScript.",
  },
  {
    id: 4,
    name: "Tailwind CSS",
    usage: "Frontend",
    description: "A utility-first CSS framework for rapid UI development.",
  },
  {
    id: 5,
    name: "ShadCN",
    usage: "Frontend",
    description: "A collection of accessible components for React apps.",
  },
  {
    id: 6,
    name: "DaisyUI",
    usage: "Frontend",
    description: "A plugin for Tailwind CSS to create styled components.",
  },
  {
    id: 7,
    name: "Golang",
    usage: "Backend",
    description:
      "A statically typed, compiled programming language for backend services.",
  },
  {
    id: 8,
    name: "Python",
    usage: "Backend & Data Science",
    description:
      "A versatile, high-level programming language often used for backend development and data analysis.",
  },
  {
    id: 9,
    name: "Django",
    usage: "Backend",
    description: "A high-level Python web framework for rapid development.",
  },
  {
    id: 10,
    name: "Node.js",
    usage: "Backend",
    description:
      "JavaScript runtime built on Chrome's V8 for backend services.",
  },
  {
    id: 11,
    name: "Express.js",
    usage: "Backend",
    description: "A minimal and flexible Node.js web application framework.",
  },
  {
    id: 12,
    name: "Flutter",
    usage: "Mobile",
    description:
      "A UI toolkit for building natively compiled applications for mobile from a single codebase.",
  },
  {
    id: 13,
    name: "Dart",
    usage: "Mobile",
    description:
      "A client-optimized language for fast apps on any platform, used with Flutter.",
  },
  {
    id: 14,
    name: "Docker",
    usage: "Cloud & DevOps",
    description:
      "A platform to develop, ship, and run applications in isolated containers.",
  },
  {
    id: 15,
    name: "AWS",
    usage: "Cloud & DevOps",
    description:
      "Amazon's cloud services platform, offering compute power, storage, and other tools.",
  },
  {
    id: 16,
    name: "Figma",
    usage: "Design",
    description:
      "A collaborative interface design tool for web and mobile apps.",
  },
];

// Card Data
export const cardData: CardProps[] = [
  {
    title: "Tech",
    description:
      "Creating innovative, proprietary projects that push boundaries and drive industry impact.",
    image: "/img/tech.png",
    link: "/tech",
  },
  {
    title: "Solutions",
    description:
      "Offering custom development solutions tailored to client specifications, from design to deployment.",
    image: "/img/solution.png",
    link: "/solutions",
  },
  {
    title: "Media",
    description:
      "Delivering strategic social media marketing to help clients reach and engage their target audience.",
    image: "/img/media.jpeg",
    link: "/media",
  },
];

// Base Pricing
export const basePricing: BaseProject[] = [
  {
    projectType: "Landing Pages",
    priceRange: { inr: "₹20K – ₹60K", usd: "$240 – $720" },
    details: "Next.js, Tailwind, basic SEO, contact forms"
  },
  {
    projectType: "Corporate Websites",
    priceRange: { inr: "₹40K – ₹80K", usd: "$480 – $960" },
    details: "Multi-page site, blog, CMS integration"
  },
  {
    projectType: "E-Commerce (Basic)",
    priceRange: { inr: "₹75K – ₹1.5L", usd: "$900 – $1,800" },
    details: "Product pages, checkout, payment gateway, CRM"
  },
  {
    projectType: "E-Commerce (Advanced)",
    priceRange: { inr: "₹1.5L – ₹3L", usd: "$1,800 – $3,600" },
    details: "Multi-vendor, custom dashboard, inventory mgmt"
  },
  {
    projectType: "CRM & ERP Systems",
    priceRange: { inr: "₹2L – ₹5L+", usd: "$2,400 – $6,000+" },
    details: "Custom business solutions, role-based access, automation"
  },
  {
    projectType: "Custom SaaS MVPs",
    priceRange: { inr: "₹3L – ₹8L+", usd: "$3,600 – $9,600+" },
    details: "Full SaaS apps with multi-tenant support"
  },
  {
    projectType: "Marketing Websites",
    priceRange: { inr: "₹30K – ₹70K", usd: "$360 – $840" },
    details: "SEO-optimized, conversion-focused sites"
  },
  {
    projectType: "Web Apps (Custom Software)",
    priceRange: { inr: "₹2L – ₹6L+", usd: "$2,400 – $7,200+" },
    details: "Bespoke solutions for startups & enterprises"
  }
];

// Add-ons
export const addOns: AddOnService[] = [
  {
    service: "Advanced SEO & Content Strategy",
    pricing: { inr: "₹15K – ₹30K", usd: "$180 – $360" },
    details: "SEO audit, keyword research, blog setup"
  },
  {
    service: "Marketing & Lead Generation",
    pricing: { inr: "₹25K – ₹50K", usd: "$300 – $600" },
    details: "AI lead scoring, automation tools"
  },
  {
    service: "Cloud Scaling & DB Optimization",
    pricing: { inr: "₹30K – ₹80K", usd: "$360 – $960" },
    details: "High-traffic site optimization"
  },
  {
    service: "DevOps & CI/CD Pipelines",
    pricing: { inr: "₹20K – ₹60K", usd: "$240 – $720" },
    details: "Automated deployments, infra setup"
  },
  {
    service: "AI & Automation Features",
    pricing: { inr: "₹50K+", usd: "$600+" },
    details: "AI chatbots, automation, predictive analytics"
  },
  {
    service: "Mobile App (React Native/Flutter)",
    pricing: { inr: "₹1L – ₹3L", usd: "$1,200 – $3,600" },
    details: "Mobile version of the web product"
  }
];

// Bundles
export const smartBundles: BundlePackage[] = [
  {
    bundle: "Startup Booster",
    includes: "Business Website + Branding + SEO + Lead Gen",
    discountedPrice: { inr: "₹60K (Save ₹15K)", usd: "$720 (Save $180)" }
  },
  {
    bundle: "E-Com Pro",
    includes: "E-Commerce + CRM + Advanced Analytics",
    discountedPrice: { inr: "₹1.75L (Save ₹25K)", usd: "$2,100 (Save $300)" }
  },
  {
    bundle: "SaaS Growth Pack",
    includes: "Multi-Tenant SaaS + Cloud Scaling + DevOps",
    discountedPrice: { inr: "₹3.5L (Save ₹50K)", usd: "$4,200 (Save $600)" }
  },
  {
    bundle: "Enterprise Suite",
    includes: "CRM + Marketing Automation + AI Analytics",
    discountedPrice: { inr: "₹5L+", usd: "$6,000+" }
  }
];


export const FADE_IN_ANIMATION = (scrollDirection: string):Variants => {
  return {
    hidden: (i: number) => ({
      opacity: 0,
      y: scrollDirection === "down" ? 10 : -10,
      transition: { delay: i * 0.05, duration: 0.4 }, 
    }),
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };
};

export const CONTAINER_ANIMATION:Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};