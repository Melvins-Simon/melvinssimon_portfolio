import React, { useContext } from "react";
import { GlobalContext } from "../../utils/context/Index";
import HeroSec from "../../components/hero-sec/Index";

const Hero = () => {
  const { flagDarkMode } = useContext(GlobalContext);
  console.log(flagDarkMode);

  return (
    <main className="h-screen w-full bg-cover bg-center bg-no-repeat bg-back-image pt-20">
      <div className="container mx-auto h-full">
        <HeroSec />
      </div>
    </main>
  );
};

export default Hero;
