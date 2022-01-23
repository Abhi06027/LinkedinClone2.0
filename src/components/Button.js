import React from "react";

export default function Button(props) {
  return (
    <div className="bg-gray-50 shadow-md w-72 max-w-lg mx-auto  cursor-pointer">
      <h1 className="bg-blue-700 rounded-full text-center  hover:bg-blue-900 text-white py-3 mx-2">
        {props.button}
      </h1>
    </div>
  );
}
