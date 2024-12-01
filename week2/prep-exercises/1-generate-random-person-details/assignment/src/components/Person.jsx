import React from "react";

function Person({ person, onNewPerson }) {
  console.log(person);
    return (
      //new req when click to div
    <div onClick={onNewPerson}>
      {person ? (
        <ul>
          <li>
            <strong>First Name:</strong> {person.name.first}
          </li>
          <li>
            <strong>Last Name:</strong> {person.name.last}
          </li>
          <li>
            <strong>Email:</strong> {person.email}
          </li>
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Person;
