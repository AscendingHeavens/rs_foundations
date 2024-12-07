import React from 'react';
import { CardProps } from './Types';

const Card = ({ className }: CardProps) => {
  return (
    <div className={`flex flex-col w-[33%] max-md:ml-0 max-md:w-full ${className}`} />
  );
};

export default Card;
