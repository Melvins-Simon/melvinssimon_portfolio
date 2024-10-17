import React from "react";
import ModelContainer from "../modelContainer/Index";
import SweetLine from "../sweetline/Index";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import { Tilt } from "react-tilt";
import { connect } from "../../config";

const HeroSec = () => {
  const MyWords = [
    "ReactJS",
    "NextJS",
    "React Native",
    "Tailwind CSS",
    "NodeJS",
  ];
  return (
    <div className="grid grid-cols-2 h-full w-full">
      <div className="relative py-6 pl-6">
        <SweetLine />
        <div className="pl-8 h-full">
          <div className="w-full flex justify-start">
            <span className="text-4xl font-[800] textGradient">
              Hi, I'm Melvins Simon,
            </span>
          </div>
          <p className="mt-3 w-[100%]">
            <span className="text-lg font-semibold text-tertiary dark:text-white-100">
              An aspiring IT student passionate about technology and innovation.
              With a keen interest in software development and network security,
              I thrive on solving complex problems and creating efficient
              solutions. My goal is to continuously learn and grow in the tech
              field, contributing to projects that make a difference. Welcome to
              my portfolio!
            </span>
          </p>

          <div className="h-[15rem] w-[100%] flex flex-col items-center mt-4 gap-3">
            <div className="h-48 w-48 bg-white rounded-full overflow-hidden">
              <img src="/melvins.jpeg" />
            </div>
            <div className="textGradient font-semibold">
              {/* <Typewriter
                words={MyWords}
                loop
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={70}
                delaySpeed={1000}
              /> */}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex justify-center w-[100%] textGradient dark:text-white-100">
              <span className="font-[800] text-xl ">
                Let's Connect for tech Trends
              </span>
            </div>
            <div className=" mt-10 h-fit grid grid-cols-3 gap-4 w-[100%]">
              {connect.map(({ src, label, id }) => (
                <Tilt key={id}>
                  <div className="bg-gradient-to-br bgGradient h-40 rounded-md p-[0.08rem]">
                    <div className="h-full w-full rounded-md bg-secondary bg-opacity-50 dark:bg-tertiary flex justify-center items-center">
                      <Link className="flex flex-col justify-center items-center gap-1">
                        <img className="w-20 h-20" src={src} />
                        <span className="z-10 text-white font-[500]">
                          {label}
                        </span>
                      </Link>
                    </div>
                  </div>
                </Tilt>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ModelContainer />
    </div>
  );
};

export default HeroSec;
