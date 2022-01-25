import React from "react";

export default function Header(props) {
  return (
    <div className=" mt-20 lg:mt-60 pt-6  pl-8 max-w-lg mx-auto bg-white w-96  shadow-xl rounded-md   ">
      <h1 className="text-black  text-2xl font-bold   ">{props.name}</h1>
      <p className="text-black text-sm pb-5 pt-1 ">{props.name2}</p>
    </div>
  );
}
