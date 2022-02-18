import React from "react";

export default function ButtonRaised({ type = "button", children }) {
  return (
    <button className="bg-blue-500 cursor-pointer px-4 py-2 w-full rounded-lg shadow-lg hover:bg-blue-700 text-white">
      {children}
    </button>
  );
}
