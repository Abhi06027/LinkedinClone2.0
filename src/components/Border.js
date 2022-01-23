import React from "react";

export default function Border(props) {
  return (
    <div className="  bg-gray-50 flex justify-center shadow-md w-72 max-w-lg mx-auto items-center px-2">
      <div className="mt-3  w-32 border"> </div>
      <div className="mt-3 px-4 text-black "> or </div>
      <div className="mt-3 w-32 border"> </div>
    </div>
  );
}
