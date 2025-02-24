"use client";

import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

const Logo = () => {
  const { theme } = useTheme();

  const logoProps =
    theme === "dark"
      ? { src: "/removebglogo_1.png", width: 120, height:180} // Dark mode logo dimensions
      : { src: "/bglogo.png", width: 100, height: 100 }; // Light mode logo dimensions

  return (
    <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
      <Image {...logoProps} alt="Logo" />
    </span>
  );
};

export default Logo;
