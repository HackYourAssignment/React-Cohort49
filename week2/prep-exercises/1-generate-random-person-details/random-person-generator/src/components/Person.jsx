import React from "react";

const Person = ({ person }) => {
  if (!person) return <p>Loading...</p>;

  return (
    <ul>
      {person.map((p, index) => (
        <li key={index}>
          <p>First name: {p.firstName}</p>
          <p>Last name: {p.lastName}</p>
          <p>Email: {p.email}</p>
        </li>
      ))}
    </ul>
  );
};

export default Person;

