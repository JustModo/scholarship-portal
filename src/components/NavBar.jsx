import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="w-full h-12 flex flex-row px-2 shadow-lg">
      <div className="flex flex-row px-2 gap-5 h-full items-center justify-around w-3/6 whitespace-nowrap">
        <Link to={"/"}>
          <a>Home</a>
        </Link>
        <Link to={"/About"}>
          <a>About</a>
        </Link>
        <Link to={"/Help"}>
          <a>Help</a>
        </Link>
        <Link to={"/Auth/Login"}>
          <a>Login / Register</a>
        </Link>
      </div>
    </div>
  );
}
