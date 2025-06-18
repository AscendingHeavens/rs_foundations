"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

const Logo = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  const logoProps = isDark
    ? { src: "/removebglogo_1.png", width: 160, height: 60 }
    : { src: "/bglogo.png", width: 160, height: 60 };

  return (
    <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
      <Image {...logoProps} alt="Logo" />
    </span>
  );
};

export default Logo;
