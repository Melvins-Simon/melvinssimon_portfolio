import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {
  const [flagDarkMode, setflagDarkMode] = useState("");
  useEffect(() => {
    setflagDarkMode(true);
  }, []);
  return (
    <GlobalContext.Provider value={{ flagDarkMode, setflagDarkMode }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
