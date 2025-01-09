import React from "react";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About</title>
        <meta name="description" content="Learn more about us" />
      </Helmet>

      <div className="container ">
        <section className="mb-1">
          <div className="container d-flex justify-content-center align-items-center" style={{ height: "50vh" }}>
          <div>
        <img src="/img/banner/b1.jpg" className="d-block w-100 rounded-5 my-4" alt="Banner" />
      </div>
          </div>
        </section>

        <section className="mb-5">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <img
              src="m1.jpg"
                className="img-fluid rounded-5 shadow-sm"
                alt="About Us"
              />
            </div>
            <div className="col-md-6">
              <h2>Who We Are</h2>
              <p className="lead">
                Join Us on the Fashion Journey
                <br />
                We invite you to explore our collection, discover new brands,
                and express your unique style with KoStyle. Whether you're a
                trendsetter, a conscious consumer, or simply someone who loves
                to look their best, we're here to make your fashion dreams a
                reality. Thank you for choosing KoStyle as your fashion
                destination. We can't wait to be a part of your fashion
                journey!
              </p>
            </div>
          </div>
        </section>

        <section className="section-p1">
          <div className="row text-center ">
            <div className="col-md-2 mb-4 ">
              <img
                src="img/features/f1.png"
                className="img-fluid mb-2 "
                alt="Feature 1"
              />
              <h6>Easy Access</h6>
            </div>
            <div className="col-md-2 mb-4">
              <img
                src="img/features/f2.png"
                className="img-fluid mb-2"
                alt="Feature 2"
              />
              <h6>Free Shipping</h6>
            </div>
            <div className="col-md-2 mb-4">
              <img
                src="img/features/f3.png"
                className="img-fluid mb-2"
                alt="Feature 3"
              />
              <h6>More Savings</h6>
            </div>
            <div className="col-md-2 mb-4">
              <img
                src="img/features/f4.png"
                className="img-fluid mb-2"
                alt="Feature 4"
              />
              <h6>Fast Delivery</h6>
            </div>
            <div className="col-md-2 mb-4">
              <img
                src="img/features/f5.png"
                className="img-fluid mb-2"
                alt="Feature 5"
              />
              <h6>Customer Care</h6>
            </div>
            <div className="col-md-2 mb-4">
              <img
                src="img/features/f6.png"
                className="img-fluid mb-2"
                alt="Feature 6"
              />
              <h6>24/7 Support</h6>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
