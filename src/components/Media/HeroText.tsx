import * as React from "react";

export const HeroText: React.FC<HeroTextProps> = ({ text, className }) => (
  <div className={`text-2xl leading-loose dark:text-purple-500 text-zinc-800 ${className}`}>
    {text}
  </div>
);