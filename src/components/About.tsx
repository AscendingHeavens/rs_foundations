"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { cardData } from "@/constants";

interface CardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const Card = ({ title, description, image, link }: CardProps) => {
  return (
    <div className="card bg-base-100 w-full max-w-sm shadow-xl dark:bg-gray-800">
      <figure>
        <img src={image} alt={title} className="w-full h-[240px] object-cover" />
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

const About = () => {
  const [isZenbookFold, setIsZenbookFold] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsZenbookFold(width >= 1300 && width <= 1450);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section className="mb-16">
        <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
          Ascending Heavens is a technology-driven organization focused on
          building innovative and industry-changing solutions. We leverage a
          comprehensive tech stack to craft solutions tailored to our client's
          needs, from web and mobile development to data processing, cloud
          deployment, and more.
        </h3>
      </section>

      {/* Cards Section */}
      <section
        className={`grid gap-4 ${
          isZenbookFold
            ? "grid-cols-4" // Zenbook Fold
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        }`}
      >
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
