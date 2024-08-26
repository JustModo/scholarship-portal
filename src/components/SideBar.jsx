import React, { Fragment, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

export default function SideBar() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <Fragment>
      {isVisible && (
        <div className="w-60 h-full flex flex-col gap-5 font-semibold shadow-lg flex-shrink-0 bg-white absolute md:relative">
          <ul className="flex flex-col gap-5 p-5">
            <div className="w-7 h-7 my-2" />
            <li className="flex flex-col cursor-pointer">
              <Link
                to={"Verification"}
                onClick={() => setIsVisible(!isVisible)}
              >
                Verification
              </Link>
              {/* <label className="text-xs text-zinc-400">Deadline: 12-7-24</label> */}
            </li>
            {/* <li className="flex flex-col cursor-pointer">
              <Link to={"Allotment"} onClick={() => setIsVisible(!isVisible)}>
                Allotment
              </Link>
              <label className="text-xs text-zinc-400">Deadline: 12-7-24</label>
            </li>
            <li className="flex flex-col cursor-pointer">
              <Link to={"Payment"} onClick={() => setIsVisible(!isVisible)}>
                Payment
              </Link>
              <label className="text-xs text-zinc-400">Deadline: 12-7-24</label>
            </li> */}
          </ul>
        </div>
      )}
      <div className="absolute p-5 py-2 w-full bg-white shadow-md">
        <RxHamburgerMenu
          className="w-7 h-7 cursor-pointer"
          onClick={() => setIsVisible(!isVisible)}
        />
      </div>
    </Fragment>
  );
}
