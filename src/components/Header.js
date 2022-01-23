import React from "react";

export default function Header(props) {
  return (
    <div className="  mt-72   pl-4 max-w-lg mx-auto bg-gray-50 w-72  shadow-md   ">
      <h1 className="text-black  text-2xl font-bold   ">{props.name}</h1>
      <p className="text-black text-xs pb-2 ">{props.name2}</p>
    </div>
  );
}
