import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

// class App extends Component {
//   state = {
//     persons: [
//       { name: 'max', age: 28 },
//       { name: 'max', age: 28 },
//       { name: 'max', age: 28 }
//     ],
//     otherState: 'some values'
//   };
//   switchNameHAndler = () => {
//     // console.log('clicked');
//     this.setState({
//       persons: [
//         { name: 'MAxi', age: 54 },
//         { name: 'TAxi', age: 55 },
//         { name: 'sexy', age: 60 }
//       ]
//     });
//   };
//   render() {
//     return (
//       <div className="App">
//         <h1> OUR APPS </h1>
//         <button onClick={this.switchNameHAndler}>Switch Name</button>
//         <Person
//           name={this.state.persons[0].name}
//           age={this.state.persons[0].age}
//         />
//         <Person
//           name={this.state.persons[1].name}
//           age={this.state.persons[1].age}
//         >
//           My Hobbies: Archery
//         </Person>
//         <Person
//           name={this.state.persons[2].name}
//           age={this.state.persons[2].age}
//         />
//       </div>
//     );
//   }
// }  

// export default App;

const App = props => {
  const [personsState, setPersonState] = useState({
    persons: [
      { name: "max", age: 28 },
      { name: "max", age: 28 },
      { name: "max", age: 28 }
    ]
  });
  const switchNameHAndler = () => {
    setPersonState({
      persons: [
        { name: 'messi', age: 28 },
        { name: 'jack', age: 30 },
        { name: 'Bertoli', age: 29 },
      ]
    });
  };
  return (
    <div className="App">
      <h1> OUR APPS </h1>
      <button onClick={switchNameHAndler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My Hobbies: Archery
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};
export default App;