import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const Cockpit = (props) => {
  useEffect(() => {
    console.log("useEffect rendered");
  });

  const style = {
    backgroundColor: "yellow",
    color: "white",
    border: "2px white solid",
    // ":hover": {
    //   backgroundColor: "green",
    // },
  };

  return (
    <div className={classes}>
      <h1> {props.title}</h1>
      <button onClick={props.toggled} style={style}>
        Toggle
      </button>
    </div>
  );
};

export default Cockpit;
