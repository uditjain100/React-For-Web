import AppError from "../../AppError/AppError";
import Person from "./Person/Person";
import React, { Component } from "react";

const persons = (props) =>
  props.persons.map((p, index) => {
    return (
      <AppError key={p.id}>
        <Person
          change={(event) => props.changed(event, p.id)}
          click={() => props.deleted(index)}
          name={p.name}
          age={p.age}
        ></Person>
      </AppError>
    );
  });

export default persons;
