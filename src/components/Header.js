import React from "react";

export default function Header(props) {
  return (
    <div>
      <img
        className=" w-28 pt-6 ml-8 hidden sm:flex md:flex lg:flex "
        src="./images/li.png"
        alt=""
      />
      <div className=" sm:mt-36  md:mt-36 lg:mt-36 pt-6  pl-8 max-w-lg mx-auto bg-white w-96 sm:shadow-xl  md:shadow-xl lg:shadow-xl rounded-t-md   ">
        <img
          className=" w-28  mb-4 flex sm:hidden md:hidden lg:hidden  "
          src="./images/li.png"
          alt=""
        />
        <h1 className="text-black text-3xl font-semibold   ">{props.name}</h1>
        <p className="text-black text-sm pb-5 pt-1 ">{props.name2}</p>
      </div>
    </div>
  );
}
