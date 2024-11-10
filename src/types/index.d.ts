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