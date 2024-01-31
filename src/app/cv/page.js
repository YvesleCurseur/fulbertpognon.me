import Link from "next/link";

const Cv = () => {
  return (
    <div className="w-1/2 max-sm:w-2/3">
      <h1 className="underline underline-offset-2 mb-4">C.V.</h1>
      <div className="flex justify-center space-x-52 max-sm:block">
        <h2>French</h2>
        <h2>English</h2>
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
