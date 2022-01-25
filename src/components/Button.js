import React from "react";

export default function Button(props) {
  return (
    <div className="  flex justify-center  bg-white sm:shadow-xl  md:shadow-xl lg:shadow-xl  w-96 max-w-lg mx-auto cursor-pointer    ">
      <a href="https://www.linkedin.com/in/abhinav-gupta-03403a184/">
        <button className="bg-blue-700 rounded-full text-center w-80  hover:bg-blue-900 text-white py-3 mx-2">
          {props.button}
        </button>
      </a>
    </div>
  );
}
