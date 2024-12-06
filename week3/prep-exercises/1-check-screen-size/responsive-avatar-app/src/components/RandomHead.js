import { createRandomBigHead } from "@bigheads/core";
import React from "react";

function RandomHead({ person }) {
  const randomProps = {
    hat: Math.random() > 0.5 ? "beanie" : "none",
    hatColor: Math.random() > 0.5 ? "blue" : "red",
    accessory: Math.random() > 0.5 ? "glasses" : "none",
    clothing: "shirt",
    clothingColor: Math.random() > 0.5 ? "green" : "orange",
    graphic: Math.random() > 0.5 ? "react" : "none",
  };

  return <div>{React.cloneElement(person, randomProps)}</div>;
}

export default RandomHead;
