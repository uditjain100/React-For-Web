import logo from "./logo.svg";
import React, { Component, useState } from "react";
import "./App.css";
import Radium from "radium";
import Person from "./Person/Person";

//  * ************ Functional Components

// const App = () => {
//   const [personState, setPersonState] = useState({
//     persons: [{ name: "A" }, { name: "B" }, { name: "C" }],
//   });

//   const switchNameHandler = () => {
//     //  * It replaces (not merges) the previous state of object with the specified state
//     setPersonState({
//       persons: [{ name: "AA" }, { name: "AB" }, { name: "AC" }],
//     });
//   };

//   return (
//     // * It is not HTMl because it is JSX (JavaScript XML)
//     <div className="App">
//       <header className="App-header">
//         <h1> Hey there, Ceased Meteor this Side </h1>
//         <button onClick={switchNameHandler}>Switch</button>
//         <Person name={personState.persons[0].name}>Nothing Much</Person>
//         <Person name={personState.persons[1].name} />
//         <Person name={personState.persons[2].name} />
//       </header>
//     </div>
//   );
// };

// export default App;

//  * ************ Class Based Components

class App extends Component {
  state = {
    persons: [
      { name: "A", id: "asdflkj" },
      { name: "B", id: "qwerpoiu" },
      { name: "C", id: "zxcvmn" },
    ],
    showPersons: false,
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [{ name: newName }, { name: "AB" }, { name: "AC" }],
    });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => p.id === id);
    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  toggleHandler = () => {
    const currentState = this.state.showPersons;
    this.setState({ showPersons: !currentState });
  };

  deleteHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  render() {
    const style = {
      backgroundColor: "yellow",
      color: "white",
      border: "2px white solid",
      ":hover": {
        backgroundColor: "green",
      },
    };

    var persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((p, index) => {
            return (
              <Person
                change={(event) => this.nameChangeHandler(event, p.id)}
                click={() => this.deleteHandler(index)}
                name={p.name}
                age={p.age}
                key={p.id}
              ></Person>
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "blue",
      };
    }

    const classes = [];
    if (this.state.persons.length >= 2) classes.push("red");
    if (this.state.persons.length >= 1) classes.push("bold");

    return (
      // It is not HTMl because it is JSX (JavaScript XML)
      <div className="App">
        <header className={classes}>
          <h1> Hey there, Ceased Meteor this Side </h1>
          <button onClick={this.toggleHandler} style={style}>
            Toggle
          </button>
          {persons}
        </header>
      </div>
    );
  }
  // This upper code converts into the following code
  // render() {
  //   return React.createElement(
  //     "div",
  //     { className: "App" },
  //     React.createElement(
  //       "header",
  //       { className: "App-header" },
  //       React.createElement("h1", null, "Hey there, Ceased Meteor this Side")
  //     )
  //   );
  // }
}
export default Radium(App);
