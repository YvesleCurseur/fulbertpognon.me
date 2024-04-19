import Link from "next/link";
import { useTranslations } from "next-intl";

const Me = () => {
  const t = useTranslations("About");
  return (
    <div class="w-1/2 max-sm:w-2/3 ">
      <h1 className="underline underline-offset-2 mb-4">Me.</h1>
      <p class="text-justify max-sm:text-lg">{t("work")}</p>
      <br />
      <p className="text-justify max-sm:text-lg">{t("mission")}</p>
      <br />
      <p className="text-justify max-sm:text-lg">{t("social")}</p>
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

export default Me;
