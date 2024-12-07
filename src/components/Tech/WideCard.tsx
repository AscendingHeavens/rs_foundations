import React from 'react';
import { CardProps } from './Types';

export const WideCard = ({ className }: CardProps) => {
  return (
    <div className={`flex flex-col w-6/12 max-md:ml-0 max-md:w-full ${className}`} />
  );
};

export default WideCard;
