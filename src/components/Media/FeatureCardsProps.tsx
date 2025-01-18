import { FeatureCardsProps } from "@/types";



export const FeatureCard: React.FC<FeatureCardsProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-wrap gap-8 items-start">
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain shrink-0 self-end mt-16 aspect-square rounded-[30px] w-[60px] max-md:mt-10"
      />
      <div className="flex flex-col grow shrink-0 self-start basis-0 w-fit">
        <div className="self-start text-2xl font-semibold leading-none text-blue-700">
          {title}
        </div>
        {description && (
          <div className="mt-7 text-base leading-6 text-gray-500">
            {description}
          </div>
        )}
      </div>
    </div>
  );
}