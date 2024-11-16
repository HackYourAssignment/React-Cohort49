import React from "react";

const Person = ({ person }) => {
  if (!person) return <p>Loading...</p>;

  return (
    <ul>
      <li>First name: {person.firstName}</li>
      <li>Last name: {person.lastName}</li>
      <li>Email: {person.email}</li>
    </ul>
  );
};

export default Person;
