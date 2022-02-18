import React from "react";

export default function TextLink({ children }) {
  return (
    <div className="text-blue-800 hover:underline hover:bg-blue-300 hover:rounded-lg px-3 py-1 cursor-pointer font-semibold w-full">
      {children}
    </div>
  );
}
