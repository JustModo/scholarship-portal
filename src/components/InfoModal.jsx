import React, { useEffect, useState } from "react";

export default function InfoModal({ title, onClose, open }) {
  useEffect(() => {
    if (!open) return;

    const handleClick = () => {
      onClose();
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="flex items-center justify-center fixed top-28 left-0 w-full z-40">
      <div className="bg-yellow-200 mx-2 flex gap-5 p-2 px-4 w-5/6 justify-between rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-black h-6 w-6 shrink-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span key={title} className="text-black">
          {title}
        </span>
        <div>
          <button
            className="btn btn-sm btn-ghost text-black"
            type="button"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
