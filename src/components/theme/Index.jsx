import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-1.5 md:py-1.5 transition-colors z-10";

const ThemeMode = () => {
  const [darkMode, setdarkMode] = useState(true);
  return (
    <div
      className={`px-1 transition-colors rounded-full bg-gradient-to-r from-grape to-indigo-600`}
    >
      <SliderToggle darkMode={darkMode} setdarkMode={setdarkMode} />
    </div>
  );
};

const SliderToggle = ({ darkMode, setdarkMode }) => {
  return (
    <div className="w-fit rounded-full">
      {!darkMode ? (
        <button
          className={`${TOGGLE_CLASSES}text-slate-300`}
          onClick={() => {
            setdarkMode(true);
          }}
        >
          <FiMoon className="z-10 text-lg md:text-sm" />
          <span className="z-10">Light</span>
        </button>
      ) : (
        <button
          className={`${TOGGLE_CLASSES} text-white`}
          onClick={() => {
            setdarkMode(false);
          }}
        >
          <FiSun className="z-10 text-lg md:text-sm" />
          <span className="z-10">Dark</span>
        </button>
      )}
    </div>
  );
};

export default ThemeMode;
