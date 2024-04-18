import React from "react";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>

        <title>about | My Website</title>
        <meta name="description" content="Welcome to the Home Page" />

      </Helmet>

      <section id="video" className="section-P1">
        <video id="myVideo" loop autoPlay muted>
          <source src="img/v1.mp4" type="video/mp4" />
        </video>
      </section>

      <div>
        <section id="about-head">
          <div className="about-main">
            <div>
              <img src="https://stylenandaen.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/428fda3a2fb98278c5a4506d7519ea4f.jpg" alt />
            </div>
            <div>
              <h2>who we are?</h2>
              <p>
                Join Us on the Fashion Journey
                We invite you to explore our collection, discover new brands, and express your unique style with KoStyle.
                Whether you're a trendsetter, a conscious consumer, or simply someone who loves to look
                their best, we're here to make your fashion dreams a reality.
                Thank you for choosing KoStyle as your fashion destination. We can't wait to be a part of your
                fashion journey!
              </p>
            </div>
          </div>
        </section>
        <section id="about-app">
          <h1>Download our app</h1>
          <div className="video">
            <video autoPlay muted loop src="img/about/1.mp4" />
          </div>
        </section>
        <section id="feature" className="section-p1 ">
          <div className="fe-box">
            <img src="img/features/f1.png" alt />
            <h6>easy access</h6>
          </div>
          <div className="fe-box">
            <img src="img/features/f2.png" alt />
            <h6>free shiping</h6>
          </div>
          <div className="fe-box">
            <img src="img/features/f3.png" alt />
            <h6>more savings</h6>
          </div>
          <div className="fe-box">
            <img src="img/features/f4.png" alt />
            <h6>fast delivery</h6>
          </div>
          <div className="fe-box">
            <img src="img/features/f5.png" alt />
            <h6>customer care</h6>
          </div>
          <div className="fe-box">
            <img src="img/features/f6.png" alt />
            <h6>24/7 support</h6>
          </div>
        </section>
      </div>

    </>
  );
};

export default About;
