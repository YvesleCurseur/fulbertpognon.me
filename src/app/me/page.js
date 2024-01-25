import Link from "next/link";

const Me = () => {
  return (
    <div class="w-1/2 p-8">
      <h1 className="underline underline-offset-2 mb-4">Me.</h1>

      <p class="text-white text-justify">
        As a Full Stack Developer specializing in web technologies, I blend
        backend logic with frontend user experience to craft innovative
        solutions.
      </p>
      <div className="mt-4 text-right">
        <Link href="/" className="">
          {"<"}-- Homepage
        </Link>
      </div>
    </div>
  );
};

export default Me;
