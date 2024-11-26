import React, { useState, useEffect } from "react";
import Person from "./Person";

interface PersonType {
  firstName: string;
  lastName: string;
  email: string;
}

const PersonController: React.FC = () => {
  const [people, setPeople] = useState<PersonType[] | null>(null);

  const getPerson = async () => {
    try {
      const response = await fetch("https://www.randomuser.me/api?results=10");
      const data = await response.json();
      setPeople(
        data.results.map((result: any) => ({
          firstName: result.name.first,
          lastName: result.name.last,
          email: result.email,
        }))
      );
    } catch (error) {
      console.error("Error fetching person:", error);
    }
  };

  useEffect(() => {
    getPerson();
  }, []);

  return (
    <div>
      <Person people={people} />
      <button onClick={getPerson}>Fetch New People</button>
    </div>
  );
};

export default PersonController;
