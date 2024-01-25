import React from "react";
import Link from "next/link";
const NavBar = () => {
  return (
    <div class="text-center">
      <nav class="mt-4">
        <Link href="/me" class="text-white px-4">
          Me.
        </Link>
        <Link href="#" class="text-white px-4">
          Projects
        </Link>
        <Link href="#" class="text-white px-4">
          Stack
        </Link>
        <Link href="/blog" class="text-white px-4">
          Blog
        </Link>
        <Link href="#" class="text-white px-4">
          C.V.
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
