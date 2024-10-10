import React from "react";
import { BiSolidEnvelope, BiText } from "react-icons/bi";
import { BsGithub, BsWhatsapp } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { GrLinkedin } from "react-icons/gr";

const Sidebar = () => {
  return (
    <div className="fixed right-0 top-0 bottom-0 my-auto bg-gradient-to-br from-grape to-indigo-600 h-20 w-20 p-1 rounded-l-xl grid grid-cols-3 place-content-center gap-2">
      <div className="contactIcons hover:bg-slate-900">
        <BsGithub className=" cursor-pointer" />
      </div>
      <div className="contactIcons">
        <GrLinkedin className=" cursor-pointer hover:bg-blue-400" />
      </div>
      <div className="contactIcons hover:bg-amber-600">
        <BiSolidEnvelope className=" cursor-pointer" />
      </div>
      <div className="contactIcons hover:bg-red-600">
        <FiPhone className=" cursor-pointer" />
      </div>
      <div className="contactIcons hover:bg-green-600">
        <BsWhatsapp className=" cursor-pointer" />
      </div>
      <div className="contactIcons hover:bg-blue-600">
        <FaTelegram className=" cursor-pointer" />
      </div>
    </div>
  );
};

export default Sidebar;
