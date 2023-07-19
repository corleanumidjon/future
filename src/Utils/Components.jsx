import React from "react";

const Button = ({ type, text }) => {
  return (
    <button className={type == "orange" ? "btn orange" : "btn blue"}>
      {text}
    </button>
  );
};

export { Button };
