//import React, { useState } from "react";
import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: 'max', age: 28 },
      { name: 'max', age: 28 },
      { name: 'max', age: 28 }
    ],
    otherState: 'some values',
    showPersons: false
  };
  switchNameHAndler = (newName) => {
    // console.log('clicked');
    this.setState({
      persons: [
        { name: newName, age: 54 },
        { name: 'TAxi', age: 55 },
        { name: 'sexy', age: 60 }
      ]
    });
  };

  nameChangehandler = (event) => {
    this.setState({
      persons: [
        { name: 'Dada', age: 54 },
        { name: event.target.value, age: 55 },
        { name: 'sexy', age: 60 }
      ]
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }


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
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHAndler.bind(this, 'REACT')} changed={this.nameChangehandler}

          >
            My Hobbies: Archery
    </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
        </div>

      );
    }
    return (
      <div className="App">
        <h1> OUR APPS </h1>
        <button style={style} onClick={() => this.togglePersonsHandler()}>Toggle</button>

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