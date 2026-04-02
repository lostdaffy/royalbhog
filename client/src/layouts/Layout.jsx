import React from "react";
import Navbar from "../components/global/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/global/Footer";

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
