import React from "react";

export default function BodyLayout({ children }) {
  return (
    <div
      className="w-full p-5"
      style={{ height: `calc(100vh - 5.5rem)` }}
    >
      {children}
    </div>
  );
}
