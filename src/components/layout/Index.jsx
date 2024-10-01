import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Index";
import Footer from "../footer/Index";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
