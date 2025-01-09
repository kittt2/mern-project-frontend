import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    checkBackendStatus();
  }, []);

  const checkBackendStatus = async () => {
    const interval = setInterval(async () => {
      try {
        const { data } = await axios.get(`${apiUrl}`);
        if (data.status === 'ok') {
          clearInterval(interval);
          setIsLoading(false);
          toast.success("Backend is now running!");
        }
      } catch (error) {
        console.error('Error checking backend status:', error);
      }
    }, 600000); 
  };

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <h1 className="mt-3">Starting up...</h1>
          <p>Please wait while the backend is initializing.</p>
          <p>I am using free plan of render so its take 1 in to run backend please wait.</p>
        </div>
      </div>
    );
  }

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
