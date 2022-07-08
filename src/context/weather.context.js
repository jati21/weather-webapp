import React, { useContext, createContext, useState } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [result, setResult] = useState();

  return (
    <WeatherContext.Provider value={{ result, setResult }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
