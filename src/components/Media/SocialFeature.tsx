import { SocialFeatureProps } from "@/types";
import * as React from "react";


export const SocialFeature: React.FC<SocialFeatureProps> = ({ icon, description }) => {
  return (
    <div className="flex gap-2.5 mt-3.5">
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain shrink-0 aspect-[1.06] w-[35px]"
      />
      <div className="my-auto basis-auto">
        {description}
      </div>
    </div>
  );
}