import React from "react";

const Button = (props) => {
  return (
    <button
      style={props.style}
      type={`${props.type ? props.type : 'button'}`}
      className="btn"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
