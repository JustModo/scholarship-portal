import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div
      className="w-full h-14 flex flex-row px-2 shadow-lg justify-end"
      id="navbar"
    >
      <div className="flex flex-row px-2 gap-5 h-full items-center justify-around sm:w-3/6 whitespace-nowrap text-sm sm:text-base">
        <Link to={"/"}>
          <div>HOME</div>
        </Link>
        <Link to={"/About"}>
          <div>ABOUT</div>
        </Link>
        <Link to={"/Help"}>
          <div>HELP</div>
        </Link>
        <Link to={"/Auth/Login"}>
          <div
            className="bg-accent p-2 px-6 text-white"
            style={{ lineHeight: "1" }}
          >
            LOGIN
          </div>
        </Link>
      </div>
    </div>
  );
}
