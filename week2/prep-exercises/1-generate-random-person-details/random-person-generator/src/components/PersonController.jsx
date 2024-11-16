import React, { useState, useEffect } from "react";
import Person from "./Person";

const PersonController = () => {
  const [person, setPerson] = useState(null);

 
  const getPerson = async () => {
    try {
      const response = await fetch("https://www.randomuser.me/api?results=1");
      const data = await response.json();

      setPerson({
        firstName: data.results[0].name.first,
        lastName: data.results[0].name.last,
        email: data.results[0].email,
      });
    } catch (error) {
      console.error("Error fetching person:", error);
    }
  };

  useEffect(() => {
    getPerson();
  }, []);

  return (
    <div>
      <Person person={person} />
      <button onClick={getPerson}>Fetch New Person</button>
    </div>
  );
};

export default PersonController;
