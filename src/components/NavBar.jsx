import React from "react";
import { Link } from "react-router-dom";
import useTranslator from "../translator";

export default function NavBar() {
  const t = useTranslator("navbar");

  return (
    <div
      className="w-full h-14 flex flex-row px-2 shadow-md justify-end select-none"
      id="navbar"
    >
      <div className="flex flex-row px-2 gap-5 h-full items-center justify-around sm:w-3/6 whitespace-nowrap text-sm sm:text-base">
        <Link to={"/"}>
          <div>{t("home")}</div>
        </Link>
        <Link to={"/About"}>
          <div>{t("about")}</div>
        </Link>
        <Link to={"/Help"}>
          <div>{t("help")}</div>
        </Link>
        <Link to={"/Auth/Login"}>
          <div
            className="bg-accent p-2 px-6 text-white"
            style={{ lineHeight: "1" }}
          >
            {t("login")}
          </div>
        </Link>
      </div>
    </div>
  );
}
