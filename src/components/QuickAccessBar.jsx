import React from "react";

export default function QuickAccessBar() {
  return (
    <div className="flex w-full h-8 items-center overflow-hidden text-sm justify-between px-2 shadow-sm">
      <div>PMSSS Scholarship</div>
      <div className="flex flex-row gap-2 items-center h-full">
        <p className="sm:block hidden">Language:</p>
        <select
          name="languages"
          id="languages"
          className="border-slate-400 bg-white px-1"
          style={{ borderWidth: "1px", padding: "0.1rem" }}
        >
          <option value="english">English</option>
          <option value="hindi">हिंदी</option>
          <option value="kannada">ಕನ್ನಡ</option>
        </select>
      </div>
    </div>
  );
}
