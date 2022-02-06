import React from "react";

export default function Border(props) {
  return (
    <div>
      <div className="  flex items-center pb-1 px-2">
        <div className=" w-32 border"> </div>
        <div className=" px-4 text-black "> or </div>
        <div className=" w-32 border"> </div>
      </div>
    </div>
  );
}
