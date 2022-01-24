import React from "react";

export default function Inputfield(props) {
  return (
    <div className={props.styledin}>
      <input
        className={props.styled}
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
}
