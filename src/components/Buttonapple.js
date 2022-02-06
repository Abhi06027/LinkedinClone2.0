import React from "react";

export default function Buttonapple(props) {
  return (
    <div>
      <div className="pt-2 pb-6 ">
        <a href="https://www.instagram.com/abhinavdesigns1/">
          <button className={props.applebuttonstyle}>
            <img className=" w-6 mx-2 " src="./images/apple.png" alt="" />
            {props.button2}
          </button>
        </a>
      </div>
    </div>
  );
}
