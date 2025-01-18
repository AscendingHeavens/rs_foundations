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
        <h2 className="card-title text-2xl font-semibold text-gray-800 dark:text-purple-600">
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
          Ascending Heavens is a technology-driven organization focused on building
          innovative and industry-changing solutions. We leverage a
          comprehensive tech stack to craft solutions tailored to our client's
          needs, from web and mobile development to data processing, cloud
          deployment, and more.
        </h3>
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
