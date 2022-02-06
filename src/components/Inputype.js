import React from "react";

export default function Inputype(props) {
  return (
    <div>
      <div className=" pb-3">
        <input
          className={props.styled}
          type={props.type}
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
}
