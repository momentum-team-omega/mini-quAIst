import React, { createContext, useContext, useState } from "react";

const CharContext = createContext();

const CharProvider = ({ children }) => {
  const initialAttributes = {
    health: 10,
    strength: 10,
    strengthMod: 0,
    dexterity: 10,
    dexterityMod: 0,
    constitution: 10,
    constitutionMod: 0,
    intelligence: 10,
    intelligenceMod: 0,
    wisdom: 10,
    wisdomMod: 0,
    name: "Default Name",
    gender: "Male",
    petName: "No Pet",
  };

  const [characterAttributes, setCharacterAttributes] =
    useState(initialAttributes);

  const updateCharacterAttributes = (newAttributes) => {
    setCharacterAttributes({ ...characterAttributes, ...newAttributes });
  };

  return (
    <CharContext.Provider
      value={{ characterAttributes, updateCharacterAttributes }}
    >
      {children}
    </CharContext.Provider>
  );
};

export { CharProvider };
