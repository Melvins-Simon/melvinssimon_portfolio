import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Index";
import Footer from "../footer/Index";
import Sidebar from "../sidebar/Index";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
