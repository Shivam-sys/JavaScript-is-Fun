import { createContext, useState } from "react";
import horoscopeObj from "../data/horoscopes.js";
export const HoroscopeContext = createContext();

export const HoroscopeProvider = (props) => {
  const [currentSign, setCurrentSign] = useState("Leo");
  const sign = horoscopeObj[currentSign];
  console.log(sign);
  return (
    <HoroscopeContext.Provider value={{ sign, setCurrentSign }}>
      {props.children}
    </HoroscopeContext.Provider>
  );
};
