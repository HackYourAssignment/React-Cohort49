import React, { useState, useEffect } from "react";
import axios from "axios";
import Person from "../components/Person";

const API = "https://randomuser.me/api/";

function PersonController() {
  const [person, setPerson] = useState(null);

  const fetchNewPerson = () => {
    axios
      .get(API)
      .then((response) => {
        setPerson(response.data.results[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchNewPerson();
  }, []);

  return (
    <div>
      <Person person={person} onNewPerson={fetchNewPerson} />
    </div>
  );
}

export default PersonController;
