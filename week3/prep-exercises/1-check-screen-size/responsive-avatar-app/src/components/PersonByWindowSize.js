import React from "react";
import RandomHead from "./RandomHead";
import useWithinWindowWidth from "../hooks/useWithinWindowWidth";

const POSSIBLE_STATES = {
  small: "Mikong",
  medium: "Diana",
  big: "Mithi",
};

function PersonByWindowSize() {
  const isBig = useWithinWindowWidth(1000, Infinity);
  const isMedium = useWithinWindowWidth(700, 999);
  const isSmall = useWithinWindowWidth(0, 699);

  let person = null;
  let state = null;

  if (isBig) {
    person = <RandomHead person={<div>{POSSIBLE_STATES.big}</div>} />;
    state = POSSIBLE_STATES.big;
  } else if (isMedium) {
    person = <RandomHead person={<div>{POSSIBLE_STATES.medium}</div>} />;
    state = POSSIBLE_STATES.medium;
  } else if (isSmall) {
    person = <RandomHead person={<div>{POSSIBLE_STATES.small}</div>} />;
    state = POSSIBLE_STATES.small;
  }

  return (
    <div>
      {person}
      <p>Currently displaying: {state}</p>
    </div>
  );
}

export default PersonByWindowSize;
