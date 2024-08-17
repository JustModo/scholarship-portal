import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="w-full h-14 flex flex-row px-2 shadow-lg justify-end">
      <div className="flex flex-row px-2 gap-5 h-full items-center justify-around sm:w-3/6 whitespace-nowrap text-sm sm:text-base">
        <Link to={"/"}>
          <a>HOME</a>
        </Link>
        <Link to={"/About"}>
          <a>ABOUT</a>
        </Link>
        <Link to={"/Help"}>
          <a>HELP</a>
        </Link>
        <Link to={"/Auth/Login"}>
          <a
            className="bg-accent p-2 px-6 text-white"
            style={{ lineHeight: "1" }}
          >
            LOGIN
          </a>
        </Link>
      </div>
    </div>
  );
}
