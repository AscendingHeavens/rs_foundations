import React from "react";

const Logo = () => {
  return (
    <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
      {/* RS Logo Box */}
      <span className="flex items-center justify-center w-12 h-12 text-normal bg-[#4F46E5] text-white font-semibold rounded p-4">
        RS
      </span>
      <span>Foundations</span>
    </span>
  );
};

export default Logo;
