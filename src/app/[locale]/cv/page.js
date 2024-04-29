import Link from "next/link";
import { useLocale } from "next-intl";

const Cv = ({ locale }) => {
  locale = useLocale();

  const fileName =
    locale === "en"
      ? "https://drive.google.com/file/d/1aHQGr6gSlyFH3ta9FjpUtQPvrah0Izs2/view"
      : "https://drive.google.com/file/d/1M3074A1-_vREFuR1m2SvwynRbKu_2OXH/view";

  return (
    <div className="w-1/2 max-sm:w-2/3">
      <h1 className="underline underline-offset-2 mb-4">C.V.</h1>
      <div className="mt-4 flex justify-center">
        <a href={fileName} target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 50 50"
            className="cursor-pointer relative group cv-svg"
          >
            <path d="M 30.398438 2 L 7 2 L 7 48 L 43 48 L 43 14.601563 Z M 15 28 L 31 28 L 31 30 L 15 30 Z M 35 36 L 15 36 L 15 34 L 35 34 Z M 35 24 L 15 24 L 15 22 L 35 22 Z M 30 15 L 30 4.398438 L 40.601563 15 Z"></path>
          </svg>
        </a>
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

