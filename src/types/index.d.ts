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
}

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
}