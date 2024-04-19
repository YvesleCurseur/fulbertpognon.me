"use client";

import Link from "next/link";
import { useTheme } from "next-themes";

import { useTranslations } from "next-intl";

const NavBar = () => {
  const { resolvedTheme } = useTheme();
  const t = useTranslations("Home");

  return (
    <div class="text-center">
      <nav class="mt-4 space-x-4">
        <Link
          href="/me"
          className={`relative after:absolute after:h-0.5 after:w-0 after:top-5 after:left-0 hover:after:w-full after:transition-all after:duration-300 ${
            resolvedTheme === "dark" ? "after:bg-white" : "after:bg-black"
          }`}
        >
          {t("me")}.
        </Link>
        <Link
          href="/projects"
          className={`relative after:absolute after:h-0.5 after:w-0 after:top-5 after:left-0 hover:after:w-full after:transition-all after:duration-300 ${
            resolvedTheme === "dark" ? "after:bg-white" : "after:bg-black"
          }`}
        >
          {t("projects")}
        </Link>
        <Link
          href="/stack"
          className={`relative after:absolute after:h-0.5 after:w-0 after:top-5 after:left-0 hover:after:w-full after:transition-all after:duration-300 ${
            resolvedTheme === "dark" ? "after:bg-white" : "after:bg-black"
          }`}
        >
          {t("stack")}
        </Link>
        {/* <Link href="/blog" className={`relative after:absolute after:h-0.5 after:w-0 after:top-5 after:left-0 hover:after:w-full after:transition-all after:duration-300 ${
            resolvedTheme === "dark" ? "after:bg-white" : "after:bg-black"
          }`}>
          Blog
        </Link> */}
        <Link
          href="/cv"
          className={`relative after:absolute after:h-0.5 after:w-0 after:top-5 after:left-0 hover:after:w-full after:transition-all after:duration-300 ${
            resolvedTheme === "dark" ? "after:bg-white" : "after:bg-black"
          }`}
        >
          C.V.
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
