import React from "react";

interface PersonProps {
  people: PersonType[] | null;
}

interface PersonType {
  firstName: string;
  lastName: string;
  email: string;
}

const Person: React.FC<PersonProps> = ({ people }) => {
  if (!people) return <p>Loading...</p>;

  return (
    <ul>
      {people.map((p, index) => (
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
