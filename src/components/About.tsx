import React from "react";
import Link from "next/link";

const Card: React.FC<CardProps> = ({ title, description, image, link }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl dark:bg-gray-800">
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-semibold text-gray-800 dark:text-gray-100">
          {title}
        </h2>
        <p className="text-md text-gray-700 dark:text-gray-300">
          {description}
        </p>
        <div className="card-actions justify-end">
          <Link className="btn btn-primary" href={link}>
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

// About Component
const About = () => {
  return (
    <>
      <section className="mb-16">
        <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
          RS Foundations is a technology-driven organization focused on building
          innovative and industry-changing solutions. We leverage a
          comprehensive tech stack to craft solutions tailored to our client's
          needs, from web and mobile development to data processing, cloud
          deployment, and more.
        </h3>
      </section>

      {/* Tech Stack Table Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          Our Tech Stack
        </h2>
        <div className="overflow-x-auto">
          <table className="table w-full border border-gray-300 dark:border-gray-700 shadow-xl">
            <thead>
              <tr>
                <th className="text-left border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100">
                  #
                </th>
                <th className="text-left border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100">
                  Technology
                </th>
                <th className="text-left border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100">
                  Usage
                </th>
                <th className="text-left border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {techStack.map((tech) => (
                <tr key={tech.id}>
                  <th className="border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200">
                    {tech.id}
                  </th>
                  <td className="text-bold border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200">
                    {tech.name}
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200">
                    {tech.usage}
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200">
                    {tech.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Cards for Different RS Branches */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            link={card.link}
          />
        ))}
      </section>
    </>
  );
};

const techStack: tech[] = [
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
const cardData: CardProps[] = [
  {
    title: "RS Tech",
    description:
      "Creating innovative, proprietary projects that push boundaries and drive industry impact.",
    image: "/path/to/tech-image.jpg",
    link: "/tech",
  },
  {
    title: "RS Solutions",
    description:
      "Offering custom development solutions tailored to client specifications, from design to deployment.",
    image: "/path/to/solutions-image.jpg",
    link: "/solutions",
  },
  {
    title: "RS Media",
    description:
      "Delivering strategic social media marketing to help clients reach and engage their target audience.",
    image: "/path/to/media-image.jpg",
    link: "/media",
  },
];

export default About;
