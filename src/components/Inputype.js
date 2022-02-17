import React from "react";

export default function Inputype(props) {
  return (
    <div>
      <div className=" w-full pb-3">
        <input
          className="border-blue-500 border w-full h-12 px-3 rounded-md text-black"
          type={props.type}
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
}
