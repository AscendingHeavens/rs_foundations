
import * as React from "react";


export const BusinessFeature: React.FC<BusinessFeatureProps> = ({ title, description }) => {
  return (
    <div className="mt-12 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
      {title}
      {description.map((line, index) => (
        <React.Fragment key={index}>
          <span className="text-gray-500"> {line}</span>
          <br />
        </React.Fragment>
      ))}
    </div>
  );
}