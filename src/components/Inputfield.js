import React from "react";

export default function Inputfield(props) {
  return (
    <div className="text-center  bg-gray-50 shadow-md pb-2 w-72  max-w-lg mx-auto  ">
      <input
        className=" border-blue-500 border h-12 w-64 rounded-md text-black "
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
}
