import React from "react";

export default function Lasttext(props) {
  return (
    <div className=" flex justify-center space-x-  mt-6    ">
      <p className="text-black text-lg  ">{props.name3}</p>
      <p className=" text-lg px-2 text-blue-500 font-bold hover:bg-blue-300 rounded-full hover:underline ">
        {props.name4}
      </p>
    </div>
  );
}
