import React, { Fragment } from "react";
import QuickAccessBar from "./QuickAccessBar";
import NavBar from "./NavBar";
import { useLocation } from "react-router-dom";

export default function BodyLayout({ children }) {
  const location = useLocation();

  // Determine if we are on the "Not Found" route
  const isNotFound = location.pathname === "/404";
  return (
    <Fragment>
      {!isNotFound && (
        <>
          <QuickAccessBar />
          <NavBar />
        </>
      )}
      <div className="w-full" style={{ height: `calc(100vh - 5.5rem)` }}>
        {children}
      </div>
    </Fragment>
  );
}
