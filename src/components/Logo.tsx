import React from "react";
import Image from "next/image"; // Import the Image component from next/image

const Logo = () => {
  return (
    <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
      <Image
        src="/bg logo.png"
        alt="Logo"
        width={100}  // Specify width for the image
        height={100} // Specify height for the image
       
      />
     
     
    </span>
  );
};

export default Logo;
