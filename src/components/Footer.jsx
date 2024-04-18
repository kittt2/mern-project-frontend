import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="section-p1" id="sectionp41">
        <div className="col">
          <img src="img/Free_-removebg-preview.png" alt />
          <h4>contact</h4>
          <p> <strong>Address</strong>: noida sec-15,block -d,utttar pradesh</p>
          <p><strong>Phone</strong>:88-78-78-67-67</p>
          <div className="follow">
            <h4>follow us</h4>
            <div className="icon">
              <i className="fab fa-facebook-f" />
              <i className="fab fa-twitter" />
              <i className="fab fa-instagram" />
              <i className="fab fa-pinterest" />
              <i className="fab fa-youtube" />
            </div>
          </div>
        </div>
        <div className="col">
          <h4>about</h4>
         <Link to="#">about us</Link>
         <Link to="#">Delivery information</Link>
         <Link to="#">privacy policy</Link>
         <Link to="#">terms &amp; conditions</Link>
         <Link to="#">Contact us</Link>
        </div>
        <div className="col">
          <h4>My Account</h4>
         <Link to="#">sign in</Link>
         <Link to="#">view caert</Link>
         <Link to="#">my wishlist</Link>
         <Link to="#">track my order</Link>
         <Link to="#">help</Link>
        </div>
        <div className="colinstall">
          <h4>install app</h4>
          <p>From App Store Or Google Play</p>
          <div className="row">
           
          </div>
          <p>SECURED PAYTM GATEAWAYS</p>
          <img src="img/pay/pay.png" alt />
        </div>
        <div className="new">
          <span>©2023 Gashena. All rights reserve</span>
        </div>
      </footer>


    </>
  );
};

export default Footer;
