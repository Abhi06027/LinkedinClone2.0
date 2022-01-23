import React from "react";

export default function Forgetpassword(props) {
  return (
    <div className="    pl-3 max-w-lg mx-auto  bg-gray-50 w-72 shadow-md  ">
      <p className="text-blue-500 font-bold hover:bg-blue-300 hover:underline text-center  text-sm  cursor-pointer  py-1 w-32 rounded-full">
        {props.forgetpassword}
      </p>
    </div>
  );
}
