import React from "react";

export default function Button1(props) {
  return (
    <div>
      <div className=" py-4 cursor-pointer">
        <a href="https://www.linkedin.com/in/abhinav-gupta-03403a184/">
          <button className={props.buttonstyle}>{props.button}</button>
        </a>
      </div>
    </div>
  );
}
