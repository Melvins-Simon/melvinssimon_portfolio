import React, { useContext } from "react";
import { GlobalContext } from "../../utils/context/Index";
import HeroSec from "../../components/hero-sec/Index";
import About from "../about/Index";

const Hero = () => {
  const { darkMode } = useContext(GlobalContext);

  return (
    <>
      <main
        className={`h-screen w-full bg-cover bg-center bg-no-repeat  ${
          darkMode ? "bg-back-image" : "bg-white-bg"
        } pt-16`}
      >
        <div className="container mx-auto h-full relative">
          <HeroSec />
          <div className="h-14 w-7 p-[0.1rem] rounded-full absolute bottom-1 right-0 left-0 mx-auto dark:bg-white bg-primary cursor-pointer">
            <div className="w-full h-full bg-white dark:bg-primary rounded-full relative">
              <span className="h-3 w-3 rounded-full bg-primary dark:bg-white absolute right-0 left-0 mx-auto top-2"></span>
            </div>
          </div>
        </div>
      </main>
      <About />
    </>
  );
};

export default Hero;
