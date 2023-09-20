import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <Link href={"/"} className="text-white font-bold">
        TODO APP
      </Link>
      <Link
        href={"/addTopic"}
        className="bg-white p-2 rounded-md hover:bg-gray-300"
      >
        Add Todo List
      </Link>
    </nav>
  );
}

export default Navbar;
