import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div>
      <span>404:This page does not existl</span>
      <br />
      <Link to={"/"}>Go to Home Page</Link>
    </div>
  );
};

export default Notfound;
