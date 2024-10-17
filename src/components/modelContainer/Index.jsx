import React from "react";
import CompModel from "../comp/Index";
import { Link } from "react-router-dom";
import { res } from "../../assets";
import { FaDownload } from "react-icons/fa";
import { Tilt } from "react-tilt";

const ModelContainer = () => {
  return (
    <div className="grid grid-rows-[1fr_1fr]">
      <div className="relative">
        <CompModel />
      </div>
      <div className="flex justify-center items-center">
        <div className=" flex flex-col gap-3 justify-center items-center">
          <div className="bg-gradient-to-r textGradient dark:text-white-100">
            <span className=" font-[800] text-xl">Download my Resume here</span>
          </div>
          <Tilt>
            <div className="h-48 w-48 bg-gradient-to-br bgGradient rounded-md">
              <Link className="flex flex-col justify-center items-center">
                <img className="h-40" src={res} />
                <FaDownload className="text-white text-lg" />
              </Link>
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default ModelContainer;
