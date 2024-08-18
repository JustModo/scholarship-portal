import React, { useContext } from "react";
import { GlobalDispatchContext } from "../context/GlobalContext";

export default function QuickAccessBar() {
  const dispatch = useContext(GlobalDispatchContext);

  return (
    <div className="flex w-full h-8 items-center overflow-hidden text-sm justify-between px-2 shadow-sm">
      <div>{"PMSSS Scholarship"}</div>
      <div className="flex flex-row gap-2 items-center h-full">
        <p className="sm:block hidden">Language:</p>
        <select
          name="languages"
          id="languages"
          className="border-slate-400 bg-white px-1"
          style={{ borderWidth: "1px", padding: "0.1rem" }}
          onChange={(e) =>
            dispatch({ type: "SET_LANGUAGE", payload: e.target.value })
          }
        >
          <option value="en">English</option>
          <option value="hi">हिंदी</option>
          <option value="kn">ಕನ್ನಡ</option>
        </select>
      </div>
    </div>
  );
}
