import Link from "next/link";

const Me = () => {
  return (
    <div class="w-1/2 max-sm:w-2/3 ">
      <h1 className="underline underline-offset-2 mb-4">Me.</h1>

      <p class="text-justify max-sm:text-lg">
        As a Full Stack Developer specializing in web technologies, I blend
        backend logic with frontend user experience to craft innovative
        solutions.
      </p>
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
