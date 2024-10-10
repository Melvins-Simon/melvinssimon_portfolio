import React from "react";
import ModelContainer from "../modelContainer/Index";
import SweetLine from "../sweetline/Index";
import { Typewriter } from "react-simple-typewriter";

const HeroSec = () => {
  const MyWords = ["ReactJS", "NextJS", "React Native", "Tailwind CSS"];
  return (
    <div className="grid grid-cols-2 h-full w-full">
      <div className="relative py-6 pl-6">
        <SweetLine />
        <div className="pl-8 h-full">
          <div className="w-full flex justify-start">
            <span className="text-5xl font-[800] bg-gradient-to-r from-indigo-600 to-white text-transparent bg-clip-text">
              Hi, I'm Melvins
            </span>
          </div>
          <p className="mt-3 w-[80%]">
            <span className="text-lg font-semibold">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
              ad delectus ut incidunt dolor fugit itaque cum aliquid in natus
              nemo, quaerat soluta cumque repellendus sunt deserunt ullam.
              Dolores nisi, delectus reprehenderit incidunt atque minima
              suscipit ipsam, nihil repellendus aut fugit quae mollitia ratione,
              doloribus sint expedita quidem. Exercitationem, ipsam!
            </span>
          </p>
          <div className="mt-4">
            <div className="flex justify-center w-[80%]">
              <span className="font-[800] text-xl">
                Let's Connect for tech Trends
              </span>
              <Typewriter
                words={MyWords}
                loop
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={70}
                delaySpeed={1000}
              />
            </div>
          </div>
        </div>
      </div>
      <ModelContainer />
    </div>
  );
};

export default HeroSec;
