"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon, FiLoader } from "react-icons/fi";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <FiLoader className="animate-spin text-gray-500" /> // Icône de chargement
    );
  }

  return (
    <>
      {resolvedTheme === "dark" ? (
        <FiSun
          onClick={() => setTheme("light")}
          className="cursor-pointer transition-transform duration-200 hover:scale-125"
        />
      ) : (
        <FiMoon
          onClick={() => setTheme("dark")}
          className="cursor-pointer transition-transform duration-200 hover:scale-125"
        />
      )}
    </>
  );
}
