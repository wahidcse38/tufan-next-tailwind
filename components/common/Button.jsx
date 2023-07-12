import React from "react";
import Link from "next/link";

function Button({ path, title }) {
  return (
    <Link href={path}>
      <button className="flex justify-center py-3 bg-venetianRed text-white font-normal font-angkor text-2xl w-full line-clamp-1">
        {title}
      </button>
    </Link>
  );
}
export default Button;
