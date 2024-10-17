import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {
  const [darkMode, setdarkMode] = useState("");
  useEffect(() => {
    setdarkMode(true);
  }, []);
  return (
    <GlobalContext.Provider value={{ darkMode, setdarkMode }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
