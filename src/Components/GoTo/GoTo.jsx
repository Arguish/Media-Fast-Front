import React from "react";
import { NavLink } from "react-router-dom";

function GoTo({ text, path }) {
  return (
    <NavLink to={path}>
      <h4
        style={{
          backgroundColor: "antiquewhite",
          padding: "3px",
          borderRadius: "10px",
          margin: "3px",
        }}
      >
        Go To: {text}
      </h4>
    </NavLink>
  );
}

export default GoTo;
