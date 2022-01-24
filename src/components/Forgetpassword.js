import React from "react";

export default function Forgetpassword(props) {
  return (
    <div className="  pb-2  pl-8 max-w-lg mx-auto w-96 bg-white shadow-lg   ">
      <p className="text-blue-500 font-bold hover:bg-blue-300 hover:underline text-center  text-sm  cursor-pointer  py-1 w-32 rounded-full">
        {props.forgetpassword}
      </p>
    </div>
  );
}
