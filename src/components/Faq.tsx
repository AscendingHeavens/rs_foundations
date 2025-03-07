"use client";
import React from "react";
import { Container } from "@/components/Container";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={index} className="mb-5">
            <div
              tabIndex={0}
              className="collapse collapse-arrow bg-gray-50 dark:bg-trueGray-800 shadow-lg"
            >
              <input type="checkbox" className="peer" />
              <div className="collapse-title text-lg text-gray-800 dark:text-gray-200 flex items-center justify-between">
                <span>{item.question}</span>
              </div>
              <div className="collapse-content text-gray-500 dark:text-gray-300">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

const faqdata: Faq[] = [
  {
    question: "What does Ascending Heavens do?",
    answer:
      "Ascending Heavens is structured into three branches: Tech, which focuses on creating our own projects; Ascending HeavensSolutions, which builds custom projects as per client requirements; and Ascending HeavensMedia, specializing in social media marketing services.",
  },
  {
    question: "What’s the difference between Ascending Heavens Tech and Ascending Heavens Solutions?",
    answer:
      "Ascending Heavens Tech is dedicated to developing proprietary projects aimed at innovation and market impact, while RS Solutions is a service-based branch that builds projects tailored to client specifications.",
  },
  
 
  {
    question: "What services does Ascending Heavens Solutions offer?",
    answer:
      "We offer full-stack services, including UI/UX design, Frontend Web development, Mobile App development, APIs and Backend solutions. We handle everything from planning to execution, ensuring a seamless experience for your project. We manage everything from the initial planning stages to the final execution, ensuring your project is completed with attention to detail and the highest industry standards.",
  },
  {
    question: "What is the typical timeline for Ascending Heavens Solutions projects?",
    answer:
      "Timelines vary based on project complexity, requirements, and scope. After our initial consultation, we will provide you with an estimated timeline for your specific project.",
  },
  {
    question: "How can I track the progress of my project?",
    answer:
      "We provide regular updates and use project management tools to keep you informed of every milestone. You’ll have visibility into the project’s progress and can communicate directly with our team throughout.",
  },
  
  {
    question:
      "Can I use Ascending Heavens services for both custom projects and marketing?",
    answer:
      "Yes! We offer custom project development under Ascending Heavens Solutions and marketing services through Ascending Heavens Media, covering a range of client needs from technical solutions to audience outreach.",
  },
  {
    question: "Do you offer support for completed projects?",
    answer:
      "Yes, we provide post-project support and maintenance for an additional fee, but only for projects completed by our team at Ascending Heavens. This ensures that your project continues to run smoothly after launch, with updates, bug fixes, and any necessary adjustments handled by our experts.",
  },
  {
    question: "What is the onboarding process for new projects?",
    answer:
      "Our onboarding process includes an initial consultation to understand your goals, followed by detailed planning and timeline estimates. We ensure that every aspect is covered to align with your vision before development begins.",
  },
];
