import Link from "next/link";

const Blog = () => {
  return (
    <div class="w-1/2 p-8">
      <p class="text-white text-justify">
        Coming soon...
      </p>
      <div className="mt-4 text-right">
        <Link href="/" className="hover:text-underline">{"<"}-- Homepage</Link>
      </div>
    </div>
  );
};

export default Blog;
