//import React, { useState } from "react";
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '1564', name: 'max', age: 28 },
      { id: 'dddd', name: 'max', age: 28 },
      { id: 'ggg', name: 'max', age: 28 }
    ],
    otherState: 'some values',
    showPersons: false
  };

  nameChangehandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangehandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1> OUR APPS </h1>
        <button style={style} onClick={() => this.togglePersonsHandler()}>
          Toggle
        </button>

        {persons}
      </div>
    );
  }
}

export default App;

// const App = props => {
//   const [personsState, setPersonState] = useState({
//     persons: [
//       { name: "max", age: 28 },
//       { name: "max", age: 28 },
//       { name: "max", age: 28 }
//     ],
//     otherState: 'some other value'
//   });
//   // const [otherState, setOtherState] = useState('some other value');
//   const switchNameHAndler = () => {
//     setPersonState({
//       persons: [
//         { name: 'messi', age: 28 },
//         { name: 'jack', age: 30 },
//         { name: 'Bertoli', age: 29 },
//       ]

//     });

//   };
//   return (
//     <div className="App">
//       <h1> OUR APPS </h1>
//       <button onClick={switchNameHAndler}>Switch Name</button>
//       <Person
//         name={personsState.persons[0].name}
//         age={personsState.persons[0].age}
//       />
//       <Person
//         name={personsState.persons[1].name}
//         age={personsState.persons[1].age}
//       >
//         My Hobbies: Archery
//       </Person>
//       <Person
//         name={personsState.persons[2].name}
//         age={personsState.persons[2].age}
//       />
//     </div>
//   );
// };
// export default App;

//ternary  operation for toggle
// {this.state.showPersons ? <div>
//   <Person
//     name={this.state.persons[0].name}
//     age={this.state.persons[0].age}
//   />
//   <Person
//     name={this.state.persons[1].name}
//     age={this.state.persons[1].age}
//     click={this.switchNameHAndler.bind(this, 'REACT')} changed={this.nameChangehandler}

//   >
//     My Hobbies: Archery
// </Person>
//   <Person
//     name={this.state.persons[2].name}
//     age={this.state.persons[2].age}
//   />
// </div> : null}
