'use client'

import * as React from "react"
import { useState } from "react"
import { Button } from "./Button"
import { SocialMediaPresence } from "./SocialMediaPresence"

// Define the Feature interface
interface Feature {
  id: number
  title: string
  description: string
  icon: 'up' | 'down'
}

// Features data
const features: Feature[] = [
  {
    id: 1,
    title: 'Increase social engagement',
    description: 'Grow your reach with consistent, relevant posts that drive interactions with followers.',
    icon: 'up',
  },
  {
    id: 2,
    title: 'Manage your reviews & do it all in less time',
    description:
      'Monitor and respond to customer reviews from one place. There are never enough hours in your day. We\'ll help manage your primary social media channels and review feedback, so you can focus on your customers.',
    icon: 'down',
  },
]

// FeatureList component
const FeatureList: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null)

  const toggleFeature = (id: number) => {
    setSelectedId((prevSelectedId) => (prevSelectedId === id ? null : id))
  }

  return (
    <div className="space-y-6">
      {features.map((feature) => {
        const isSelected = selectedId === feature.id

        return (
          <button
            key={feature.id}
            onClick={() => toggleFeature(feature.id)}
            className="flex items-start gap-4 text-left w-full"
          >
            {/* Icon */}
            <div
              className={`p-2 rounded-full transition-colors duration-200 ${
                isSelected ? 'bg-blue-100' : 'bg-gray-100'
              }`}
            >
              <span
                className={`text-lg font-bold ${
                  isSelected ? 'text-blue-600' : 'text-gray-400:text-gray-400'
                }`}
              >
                {feature.icon === 'up' ? '↑' : '↓'}
              </span>
            </div>

            {/* Title and Description */}
            <div>
              <h3
                className={`text-xl font-semibold transition-colors duration-200 ${
                  isSelected ? 'text-blue-600' : 'text-gray-900'
                }`}
              >
                {feature.title}
              </h3>
              {isSelected && (
                <p className="mt-2 dark:text-white text-gray-600 transition-all duration-200">
                  {feature.description || 'No description available.'}
                </p>
              )}
            </div>
          </button>
        )
      })}
    </div>
  )
}

// LandingPage component
export const LandingPage: React.FC = () => {
  return (
    <>
      <div className="max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {/* Left Section */}
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
              {/* Title */}
              <div className="flex flex-wrap gap-4 text-5xl font-semibold leading-none dark:text-purple-500 text-neutral-800 max-md:mr-2.5 max-md:text-4xl">
                <div className="flex-auto ml-8 max-md:max-w-full max-md:text-4xl">
                  Social Media Marketing
                </div>
              </div>

              {/* Description */}
              <div className="flex flex-col pl-10 mt-14 w-full max-md:pl-5 max-md:mt-10 max-md:max-w-full">
                <div className="text-lg leading-8 dark:text-white text-gray-500 max-md:mr-1.5 max-md:max-w-full">
                  Managing your social media accounts is a 24/7 job. Grow your
                  <br />
                  brand presence on Facebook, X, and more with smart
                  <br />
                  automation features for social media marketing.
                </div>

                {/* Button */}
                <div className="mt-11">
                  <Button icon="https://cdn.builder.io/api/v1/image/assets/TEMP/2ca593a51bb73a46dbb3d44cb2edfe68e909b4ed86a0d734e9fdbc92f4c6245a?apiKey=bc78d96b1bfe4229ab8bdab79a935f37&">
                    Ask us how it works
                  </Button>
                </div>

                {/* Features */}
                <div className="mt-24 max-md:mt-10">
                  <FeatureList />
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/db250abd261ccb0b143f8f0ea8d933a5904352d0ddee98f965ec6a5443e6c970?apiKey=bc78d96b1bfe4229ab8bdab79a935f37&"
              alt="Social media marketing dashboard interface"
              className="object-contain grow mt-44 w-full aspect-[0.98] max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>

      {/* Additional Component */}
      <SocialMediaPresence />
    </>
  )
}
