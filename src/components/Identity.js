"use client";

import { useState } from "react";

const Identity = ({profile}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <h1
        className="text-5xl font-bold relative inline-block px-1 transition-all duration-300 cursor-default"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Fulbert Pognon
        <span
          className={`absolute top-0 left-full bg-yellow-500 px-1 py-0.5 rounded text-xs text-black whitespace-nowrap opacity-0 transform transition-all duration-300 ${
            isHovered
              ? "translate-x-2 opacity-100 max-sm:hidden"
              : "translate-x-0 opacity-0 max-sm:hidden"
          }`}
        >
          {"<--"} {profile}
        </span>
      </h1>
      {/* Mini text saying still building */}
      <p className="text-xs text-gray-500 text-center">Work In Progress</p>
    </div>
  );
};

export default Identity;
