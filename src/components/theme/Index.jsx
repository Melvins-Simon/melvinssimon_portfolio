import { useContext, useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { GlobalContext } from "../../utils/context/Index";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-1.5 md:py-1.5 transition-colors z-10";

const ThemeMode = () => {
  const { darkMode, setdarkMode } = useContext(GlobalContext);

  return (
    <div
      className={`px-1 transition-colors rounded-full bg-gradient-to-br bgGradient`}
    >
      <SliderToggle darkMode={darkMode} setdarkMode={setdarkMode} />
    </div>
  );
};

const SliderToggle = ({ darkMode, setdarkMode }) => {
  useEffect(() => {
    darkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [darkMode]);
  return (
    <div className="w-fit rounded-full">
      {!darkMode ? (
        <button
          className={`${TOGGLE_CLASSES} text-white`}
          onClick={() => {
            setdarkMode(true);
          }}
        >
          <FiMoon className="z-10 text-lg md:text-sm" />
          <span className="z-10">Dark</span>
        </button>
      ) : (
        <button
          className={`${TOGGLE_CLASSES} text-white`}
          onClick={() => {
            setdarkMode(false);
          }}
        >
          <FiSun className="z-10 text-lg md:text-sm" />
          <span className="z-10">Light</span>
        </button>
      )}
    </div>
  );
};

export default ThemeMode;
