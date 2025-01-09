import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <div className="container-fluid bg-black">
      <div className="container  justify-content-between  align-center bg-black  text-capitalize text-white ">
        <div className="row ">
          <div className="col-lg-4 col-sm-12  text-sm-center text-lg-start">
            <h1>Emart</h1>
          </div>
        

        <div className="col-lg-8 col-sm-12 justify-content-sm-center d-flex  justify-content-lg-end gap-4 align-center align-items-center">
          <p className="fs-6">About</p>
          <p>sign up</p>
          <p>sign in</p>
          <p>products</p>
          <p>home</p>
        </div>
        </div>
      </div>
      <div
        className="container-fluid text-center py-2  "
        style={{ backgroundColor: "black", color: "white" }}
      >
        <h4 className="fs-6 ">nitin @2024. All rights reserved.</h4>
      </div>
      </div>
    </>
  );
};

export default Footer;
