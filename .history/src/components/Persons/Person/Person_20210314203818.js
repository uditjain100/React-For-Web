import React, { Component } from "react";
import classes from "./Person.css";

class Person extends Component{
  // const rnd = Math.random();
  // if (rnd > 0.7) throw new Error("Something went Wrong");

  return (
    <div className={classes.Person}>
      <h1 onClick={this.props.click}>How you doing {this.props.name}</h1>
      <p>{this.props.children}</p>
      <input onChange={this.props.change} value={this.props.name} />
    </div>
  );
};

export default person;
