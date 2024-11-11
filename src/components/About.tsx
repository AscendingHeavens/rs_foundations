import React from "react";
import Link from "next/link";
import { techStack, cardData } from "@/constants";

const Card: React.FC<CardProps> = ({ title, description, image, link }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl dark:bg-gray-800">
      <figure>
        <img src={image} alt={title} className="w-full h-[240px]" />
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

export default About;
