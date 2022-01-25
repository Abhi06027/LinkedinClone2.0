import React from "react";

export default function Button(props) {
  return (
    <div className="  flex justify-center  bg-white sm:shadow-xl  md:shadow-xl lg:shadow-xl  w-96 max-w-lg mx-auto cursor-pointer    ">
      <h1 className="bg-blue-700 rounded-full text-center w-80  hover:bg-blue-900 text-white py-3 mx-2">
        {props.button}
      </h1>
    </div>
  );
}
