import { useState, createContext } from "react";

export const ColorContext = createContext({});

export const ColorContextProvider = ({ children }) => {
  const [currColor, setCurrColor] = useState({
    color: "#9BB5CE",
    text: "Sierra Blue",
    rgba: "155, 181, 206",
  });
  return (
    <ColorContext.Provider
      value={{
        currColor,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};
