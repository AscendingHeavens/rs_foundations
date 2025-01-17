import Image from "next/image";

const mockData = {
  title: "Empower Your Projects",
  description:
    "Unlock the full potential of your projects with our open-source SaaS platform. Collaborate seamlessly, innovate effortlessly, and scale limitlessly.",
  image: "/_static/illustrations/work-from-home.jpg",
  features: [
    {
      title: "Collaborative",
      description: "Work together with your team members in real-time.",
      icon: "laptop", // This will be unused but kept for structure consistency
    },
    {
      title: "Innovative",
      description: "Stay ahead of the curve with constant updates.",
      icon: "settings",
    },
    {
      title: "Scalable",
      description: "Our platform offers the scalability needed to adapt to your needs.",
      icon: "search",
    },
  ],
};
// Types
interface InfoFeature {
  title: string;
  description: string;
  icon: string; // Keeping it in case it's used elsewhere
}

interface InfoSectionData {
  title: string;
  description: string;
  image: string;
  features: InfoFeature[];
}

interface TechFeatureProps {
  data: InfoSectionData;
  reverse?: boolean;
}

// Component
const TechFeature: React.FC<TechFeatureProps> = ({ data, reverse = false }) => {
  return (
    <div className="py-10 sm:py-20">
      <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-2 lg:items-center lg:px-8">
        {/* Text Content */}
        <div className={reverse ? "lg:order-2" : "lg:order-1"}>
          <h2 className="text-2xl font-bold md:text-4xl lg:text-5xl">{data.title}</h2>
          <p className="mt-4 text-base dark:text-white text-gray-600">{data.description}</p>
          <dl className="mt-6 space-y-6">
            {data.features.map((feature, index) => (
              <div className="relative pl-10" key={index}>
                <dt className="flex items-center font-semibold">
                  <span className="absolute left-0 top-0 h-6 w-6  bg-blue-500 rounded-full"></span>
                  {feature.title}
                </dt>
                <dd className="mt-1 text-sm dark:text-white text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Image Content */}
        <div className={`overflow-hidden rounded-lg border ${reverse ? "lg:order-1" : "lg:order-2"}`}>
          <div className="aspect-video">
            <Image
              className="h-full w-full object-cover"
              src={data.image}
              alt={data.title}
              width={1000}
              height={500}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechFeature;
