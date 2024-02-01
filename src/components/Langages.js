"use client";

import { useRouter, usePathname } from "@/navigation";
import { useTheme } from "next-themes";

export default function Language({ locale }) {
  const router = useRouter();
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();

  const handleLanguageChange = (newLocale) => {
    router.push(pathname, { locale: newLocale });
  };

  const links = [
    { label: "Fr", locale: "fr" },
    { label: "En", locale: "en" },
  ];

  return (
    <div className="space-x-4">
      {links.map(({ label, locale: linkLocale }) => (
        <button
          key={linkLocale}
          className={
            locale === linkLocale
              ? "active-link"
              : `relative after:absolute after:h-0.5 after:w-0 after:top-5 after:left-0 hover:after:w-full after:transition-all after:duration-300 ${
                  resolvedTheme === "dark"
                    ? "after:bg-white"
                    : "after:bg-black"
                }`
          }
          onClick={() => handleLanguageChange(linkLocale)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
