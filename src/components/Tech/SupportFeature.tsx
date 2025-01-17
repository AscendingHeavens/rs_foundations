import * as React from 'react';
import { SupportFeatureProps } from './Types';

export const SupportFeature: React.FC<SupportFeatureProps> = ({ description }) => (
  <div className="mt-3.5 mr-8 ml-9 max-md:mr-2.5 max-md:max-w-full">
    {description.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}<br />
      </React.Fragment>
    ))}
  </div>
);