import React from 'react';

const person = (props) => {
  return (
    <div>
      <p onClick={props.click}>
        I am {props.name} and I am {props.age} {props.children}
        <input type="text" onChange={props.changed} value={props.name} />
      </p>
    </div>
  );
}
export default person;
