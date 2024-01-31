import React from "react";
import Link from "next/link";
const NavBar = () => {
  return (
    <div class="text-center">
      <nav class="mt-4 space-x-4">
        <Link href="/me" class="relative after:bg-white after:absolute after:h-0.5 after:w-0 after:top-5 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
          Me.
        </Link>
        <Link href="/projects" class="relative after:bg-white after:absolute after:h-0.5 after:w-0 after:top-5 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
          Projects
        </Link>
        <Link href="/stack" class="relative after:bg-white after:absolute after:h-0.5 after:w-0 after:top-5 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
          Stack
        </Link>
        {/* <Link href="/blog" class="relative after:bg-white after:absolute after:h-0.5 after:w-0 after:top-5 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
          Blog
        </Link> */}
        <Link href="/cv" class="relative after:bg-white after:absolute after:h-0.5 after:w-0 after:top-5 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
          C.V.
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
