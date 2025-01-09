import React from "react";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet style={{ minHeight: "70vh" }} />
      <Toaster />
      <Footer />
    </div>
  );
};

export default Layout;
