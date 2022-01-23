import React from "react";

export default function Buttonapple(props) {
  return (
    <div className="  pt-2 pb-6    bg-gray-50  shadow-md w-72   max-w-lg mx-auto  ">
      <div className=" flex  items-center justify-center   bg-white rounded-full cursor-pointer  border-gray-400  hover:border-black  border-2  hover:bg-gray-100  text-black mx-2   py-3 ">
        <img className=" w-6 mx-2 " src="./images/apple.png" alt="" />
        {props.button2}
      </div>
    </div>
  );
}
