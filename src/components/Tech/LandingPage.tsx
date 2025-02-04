import * as React from "react";
import Herotext from "./Herotext";
import { FeatureCard } from "./FeatureCard";
import { WhyUsContent } from "./WhyUsContent";
import Headline from "./Headline";
import Feature from "./Feature";

const LandingPage = () => {
  const heroData = {
    title: ["PLAN, BUILD,", "LAUNCH."],
    description: [
      "Talk to us today if you have a world-changing idea, we",
      "can help you build the MVP for the same. Launch and",
      "grow with us as a trusted partner by your side in the",
      "journey."
    ],
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ac0276dea9ecfd6a57e5fdd9337abf1d37911999a9aabbcaa0e90883a6f9756c?placeholderIfAbsent=true&apiKey=bc78d96b1bfe4229ab8bdab79a935f37",
    imageAlt: "Plan Build Launch Illustration"
  };

  const featuresList = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/1e07a71894987d0e508303b2b07464af5b841861ca0e89f03776abf41183410e?placeholderIfAbsent=true&apiKey=bc78d96b1bfe4229ab8bdab79a935f37",
      imageAlt: "Cross-platform application interface",
      title: ["Cross-Platform"],
      description: [
        "AI app templates that work cross",
        "platform to provide a seamless",
        "experience across various device form",
        "factors"
      ]
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e7e2487fccd51a866dd91181e1dd51f3895946d356bb2b281505bea6948eabb6?placeholderIfAbsent=true&apiKey=bc78d96b1bfe4229ab8bdab79a935f37",
      imageAlt: "System integration diagram",
      title: ["Effortless Integration"],
      description: [
        "Quick and easy integration with third",
        "party systems with our proven integration",
        "and ETL platform"
      ]
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e43d859ecb65fed234175a2f57f8e1858bd2fe85c17a237dceb16b7a0c0607f9?placeholderIfAbsent=true&apiKey=bc78d96b1bfe4229ab8bdab79a935f37",
      imageAlt: "Analytics dashboard visualization",
      title: ["Engagement Analytics"],
      description: [
        "Build and analyze user traction and",
        "engagement analytics with our analytics",
        "enabled app templates to draw insights"
      ]
    }
  ];

  const partnershipFeatures = [
    "Pre-built application templates and themes to get you started quickly",
    "Let AI do its magic in aligning your objectives with MVP features",
    "Our tech experts will put together an MVP development plan and strategy in place"
  ];

  const solutionsFeatures = [
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7e51603350324b7c71f4f4c58c0a1f3db9b8200e087c3d9df39f39b861cd58a0?placeholderIfAbsent=true&apiKey=bc78d96b1bfe4229ab8bdab79a935f37",
      title: "Built-in automation",
      description: `Transform your website with automation that streamlines operations
      enhances user experiences, and boosts efficiency.From smart forms to personalized user engagement
       we provide tailored solutions to help your business thrive online.`
    },
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/58abbcf1e17eb937ca8d9fdb686e41d2be4aa5b6a325fd1d49e2002d0c12982f?placeholderIfAbsent=true&apiKey=bc78d96b1bfe4229ab8bdab79a935f37",
      title: "Automatic workflows",
      description: `Optimize your business processes with automated workflows that reduce manual tasks and enhance efficiency.
      Streamline operations and improve user engagement for a smarter,
    solution-driven website experience.`
    },
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/caa9c2079919f507b910cac8b077fce3327ed8c871f70ba0b1d7908b111a9c56?placeholderIfAbsent=true&apiKey=bc78d96b1bfe4229ab8bdab79a935f37",
      title: "Real-time analytics",
      description: `Gain actionable insights with real-time analytics to monitor user behavior 
     and website performance. Make informed decisions
      and optimize strategies on the go.`
    }
  ];
  
  return (
    <div>
      {/* Hero Section */}
      <Herotext {...heroData} />

      {/* Features Section */}
      <div className="flex flex-col items-center mt-20">
        <h2 className="text-5xl font-semibold text-center leading-[66px]  dark:text-purple-500 text-indigo-500 max-md:max-w-full max-md:text-4xl max-md:leading-[55px]">
          Build a successful MVP showcase
        </h2>
        <p className="mt-10 text-2xl leading-10 text-center dark:text-white text-neutral-800 max-md:max-w-full">
          Our past success and AI-based application templates can help you build
          your MVP in no time.
        </p>
        <div className="self-stretch mt-20 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {featuresList.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>

      {/* Partnership Section */}
      <div className="flex flex-col items-center mt-16 pt-10 pr-16 pb-12 pl-16 max-md:px-5">
        <div className="max-w-full w-[1107px]">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-6/12 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7bb771d2f632fe999b62159e5f79c53d0c2fab63c7882dde42f72688312de694?placeholderIfAbsent=true&apiKey=bc78d96b1bfe4229ab8bdab79a935f37"
                alt="Partnership illustration showcasing collaboration"
                className="object-contain mt-14 w-full aspect-[0.88] max-md:mt-10 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:w-full">
              <WhyUsContent features={partnershipFeatures} />
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <div> 

           <div className=" py-10 px-16 mr-10 ml-10 flex flex-col items-center">
        <Headline
          title="The Complete Solutions"
          description=""
          />
        <div className="self-stretch mt-10 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              {solutionsFeatures.map((feature, index) => (
                <Feature
                key={index}
                imgSrc={feature.imgSrc}
                title={feature.title}
                description={feature.description}
                />
              ))}
            </div>
            <div className="flex flex-col ml-10 w-6/12 max-md:ml-0 max-md:w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a397b44371ce55a567281b5a686594fee692b0ba1220fb29e298de69b59c7984?placeholderIfAbsent=true&apiKey=bc78d96b1bfe4229ab8bdab79a935f37"
                alt="Descriptive image text"
                className="object-contain"
                />
            </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
