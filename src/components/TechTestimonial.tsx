"use client"
import React from 'react'
import { useState } from 'react';

const socialProofs = [
    {
      name: `Manish Bajaj`,
      company: `OpenRainbow`,
      image: `/images/social-1.webp`,
      text: `Commodo Lorem consequat ea consectetur pariatur proident excepteur.
      Pariatur eiusmod minim minim ipsum tempor aute excepteur minim eu nisi laboris.
      Duis sunt labore eu eu cupidatat labore commodo id aliquip.`,
    },
    {
      name: `Umesh Shinde`,
      company: `Vrundaskin`,
      image: `/images/social-2.webp`,
      text: `Anim labore ut amet cupidatat pariatur pariatur labore ad est.
      Fugiat eiusmod dolore aliquip aute duis esse excepteur amet.
      Sit cupidatat ipsum culpa nisi esse ipsum culpa in consectetur.
      Enim incididunt do sunt ex do. Proident duis nulla minim sunt irure est
      magna nostrud Lorem consectetur irure.`,
    },
  ];
  
const TechTestimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
      if (currentIndex + 1 < socialProofs.length) {
        setCurrentIndex(currentIndex + 1);
      }
    };
  
    const previous = () => {
      if (currentIndex - 1 >= 0) {
        setCurrentIndex(currentIndex - 1);
      }
    };
  
    return (
      <div className=" mx-auto my-8">
        <div className="max-w-7xl mx-auto">
          <section>
            <figure>
              <div className="relative">
               
                <div className="pt-20 px-6 md:px-0">
                  <p className=" dark:text-white text-gray-600 text-base pb-6">{socialProofs[currentIndex].text}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center pb-12">
                      <div className="h-12 w-12">
                        <img
                          src={socialProofs[currentIndex].image}
                          alt={socialProofs[currentIndex].name}
                          className="h-full w-full object-cover overflow-hidden rounded-full"
                          height={48}
                          width={48}
                        />
                      </div>
                      <p className="text-gray-600 font-bold ml-3">
                        {socialProofs[currentIndex].name} <br />
                        <span className="text-gray-600 text-base font-light">
                          {socialProofs[currentIndex].company}
                        </span>
                      </p>
                    </div>
                    <div className="cursor-pointer flex pb-12">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={44}
                        height={44}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#CBD5E0"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        onClick={previous}
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="15 6 9 12 15 18" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={44}
                        height={44}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#CBD5E0"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        onClick={next}
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="9 6 15 12 9 18" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </figure>
          </section>
        </div>
      </div>
  )
}

export default TechTestimonial