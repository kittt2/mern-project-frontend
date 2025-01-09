import React from "react";
import { Helmet } from "react-helmet";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  const user = JSON.parse(localStorage.getItem('auth'));
  return (
    <>
      <Helmet>
        <title>Contact </title>
        <meta name="description" content="Contact us for more information" />
      </Helmet>
      <div className="container py-2">
      <div>
        <img src="/img/banner/b2.jpg" className="d-block w-100 rounded-5 my-4" alt="Banner" />
      </div>
        <section className="text-center mb-5">
          <h2>Contact Us</h2>
          <p>Send us an email for more details</p>
        </section>
        <section className="text-center  text-capitalize mb-5">
          <h1>WELCOME {user ? user.user.name : "User"} TO NEW TRENDS OF WORLD</h1>
        </section>
        <section className="row">
          <div className="col-lg-6 mb-4">
            <div className="card border-0 rounded-5 shadow-sm p-4 h-100">
              <h3 className="card-title mb-3">Get in Touch</h3>
              <p className="card-text">Visit one of our branches or contact us through email.</p>
              <ul className="list-unstyled">
                <li className="mb-3 d-flex align-items-center">
                  <i className="bi bi-geo-alt-fill me-3"></i>
                  <span > <BiSupport className="me-3"/> 
                     Noida Sec-16, Block-A1</span>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <BiPhoneCall className="me-3" />
                  <span>01-01-01-11-01/contact@gmail.com</span>
                </li>
                <li className="d-flex align-items-center">
                  <i className="bi bi-clock-fill me-3"></i>
                  <span> Monday - Friday: 9:00 AM - 5:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card border-0 rounded-5 shadow-sm">
              <iframe
              className="rounded-5 "
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.697967993105!2d77.31476267535635!3d28.578830975694153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce45ba6481455%3A0xcd52ec8780a441f6!2sSector%2016%20Metro%20Station!5e0!3m2!1sen!2sin!4v1694790026163!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
