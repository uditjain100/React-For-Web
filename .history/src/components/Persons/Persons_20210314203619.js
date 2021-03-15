import AppError from "../../AppError/AppError";
import Person from "./Person/Person";
import React, { Component } from "react";

class Persons extends Component {
  render() {
    this.props.persons.map((p, index) => {
      return (
        <AppError key={p.id}>
          <Person
            change={(event) => this.props.changed(event, p.id)}
            click={() => this.props.deleted(index)}
            name={p.name}
            age={p.age}
          ></Person>
        </AppError>
      );
    });
  }
}
export default Persons;
