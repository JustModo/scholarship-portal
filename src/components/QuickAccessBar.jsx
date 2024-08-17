import React from "react";

export default function QuickAccessBar() {
  return (
    <div className="flex w-full h-8 items-center overflow-hidden text-sm justify-between px-2 shadow-sm">
      <div>PlaceHolder</div>
      <div className="flex flex-row gap-2 items-center h-full">
        <p>Language</p>
        <select
          name="languages"
          id="languages"
          className="border-slate-400"
          style={{ borderWidth: "1px" }}
        >
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
          <option value="kannada">Kannada</option>
        </select>
      </div>
    </div>
  );
}
