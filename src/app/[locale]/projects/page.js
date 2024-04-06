import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="w-1/2 sticky max-sm:w-2/3">
      <h1 className="underline underline-offset-2 mb-4">Projects</h1>
      <h2 className="mb-4">MiabuSusu</h2>
      <div className="flex max-sm:block">
        <Image src="/maibususu.jpg" alt="MiabuSusu" width={500} height={500} />
        <p className="ml-4 mb-4 max-sm:text-lg max-sm:ml-0">It's a project</p>
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

export default Projects;
