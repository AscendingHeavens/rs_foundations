import * as React from "react";
import { SocialFeature } from "./SocialFeature";

const features = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4097aa1c1ce48adab41d3a09ba011e8b723bed83cc1b4e1d311b1341acbcec23?placeholderIfAbsent=true&apiKey=bc78d96b1bfe4229ab8bdab79a935f37",
    description: "Facebook and X account management and engagement"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4097aa1c1ce48adab41d3a09ba011e8b723bed83cc1b4e1d311b1341acbcec23?placeholderIfAbsent=true&apiKey=bc78d96b1bfe4229ab8bdab79a935f37",
    description: "Social media content creation"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4097aa1c1ce48adab41d3a09ba011e8b723bed83cc1b4e1d311b1341acbcec23?placeholderIfAbsent=true&apiKey=bc78d96b1bfe4229ab8bdab79a935f37",
    description: "Brand listening"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4097aa1c1ce48adab41d3a09ba011e8b723bed83cc1b4e1d311b1341acbcec23?placeholderIfAbsent=true&apiKey=bc78d96b1bfe4229ab8bdab79a935f37",
    description: "Social review monitoring and management"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4097aa1c1ce48adab41d3a09ba011e8b723bed83cc1b4e1d311b1341acbcec23?placeholderIfAbsent=true&apiKey=bc78d96b1bfe4229ab8bdab79a935f37",
    description: "Explore additional features like Instagram and Pinterest account management, boosted posts, and social infographics and blog creation"
  }
];

export const SocialMediaPresence: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col justify-center items-center px-16 py-20  max-md:px-5">
      <div className="max-w-full w-[1114px]">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[46%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4abc0505234b86359957c58315a897d56ecbf382845841180ad1a0077063ec3?placeholderIfAbsent=true&apiKey=bc78d96b1bfe4229ab8bdab79a935f37"
              alt="Social media presence illustration"
              className="object-contain grow w-full aspect-[0.84] max-md:mt-10"
            />
          </div>
          <div className="flex flex-col ml-5 w-[54%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
              <div className="self-start text-4xl font-semibold leading-[50px] dark:text-purple-600 text-neutral-800 max-md:max-w-full">
                Build a better social media
                <br />
                presence for your small
                <br />
                business
              </div>
              <div className="flex flex-col items-start pl-5 mt-8 w-full text-lg dark:text-white text-gray-500 max-md:max-w-full">
                {features.map((feature, index) => (
                  <SocialFeature
                        key={index}
                        icon={feature.icon}
                        description={feature.description} text={""}                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}