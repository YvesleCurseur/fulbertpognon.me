"use client";

import Link from "next/link";

import { useRouter, usePathname } from "@/navigation";
import { useLocale } from "next-intl";

const Cv = ({ locale }) => {
  locale = useLocale();

  console.log(locale);

  const fileName =
    locale === "fr"
      ? "http://localhost:3000/public/Curriculum_Vitae_Fulbert_Pognon_FR.pdf"
      : "http://localhost:3000/public/Curriculum_Vitae_Fulbert_Pognon_EN.pdf";

  console.log(fileName);

  const downloadCv = () => {
    const link = document.createElement("a");
    link.href = fileName;
    link.setAttribute(
      "download",
      `${
        locale === "Fr"
          ? "Curriculum_Vitae_Fulbert_Pognon_FR.pdf"
          : "Curriculum_Vitae_Fulbert_Pognon_EN.pdf"
      }`
    ); // Nom de fichier de téléchargement par défaut
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-1/2 max-sm:w-2/3">
      <h1 className="underline underline-offset-2 mb-4">C.V.</h1>
      <div className="mt-4 flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 50 50"
          className="cursor-pointer relative group cv-svg"
          onClick={downloadCv}
        >
          <path d="M 30.398438 2 L 7 2 L 7 48 L 43 48 L 43 14.601563 Z M 15 28 L 31 28 L 31 30 L 15 30 Z M 35 36 L 15 36 L 15 34 L 35 34 Z M 35 24 L 15 24 L 15 22 L 35 22 Z M 30 15 L 30 4.398438 L 40.601563 15 Z"></path>
        </svg>
      </div>
      <div className="mt-4 text-right">
        <Link href="/" className="cursor-pointer relative group">
          <span className="absolute h-0 -left-6 transform -translate-y-1/2 z-10 transition-transform ease-in group-hover:-translate-x-1/2">
            {"<"}--
          </span>
          <span>Homepage</span>
        </Link>
      </div>
    </div>
  );
};

export default Cv;
