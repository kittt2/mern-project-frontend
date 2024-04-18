import React from "react";
import { Helmet } from "react-helmet";
import { useauth } from "../context/Context";
import { json } from "react-router-dom";

const HomePage = () => {

    const [auth, setauth] = useauth([]);
    const user = JSON.parse(localStorage.getItem('auth'))

    return (
        <>
            <Helmet>
                <div>
                    <title>Home | My Website</title>
                    <meta name="description" content="Welcome to the Home Page" />
                </div>
            </Helmet>
            <div>
                
                <section id="hero">
                    <h4>trade-in-offer</h4>
                    <h2>super value deals</h2>
                    <h1>on all products</h1>
                    <p>save more with coupons </p>
                    <button>shop now</button>
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

            <div>
                <section id="sm-banner" className="section-p1">
                    <div className="banner-box">
                        <h4>crazy deals</h4>
                        <h3>buy 1 get 10%    off</h3>
                        <button className="white">learn more</button>
                    </div>
                    <div className="banner-box banner-box2">
                        <h4>spring/summer</h4>
                        <h3>buy 1 get 10%   off</h3>
                        <button className="white">collections</button>
                    </div>
                </section>
                <section id="banner3" className="section-p1">
                    <div className="banner-box ban2">
                        <h2>seasonal sale</h2>
                        <h3>buy 1 get 10% off</h3>
                    </div>
                    <div className="banner-box ban1">
                        <h2>spring/summer</h2>
                        <h3>buy 1 get 10% off</h3>
                    </div>
                    <div className="banner-box ban3">
                        <h2>spring/summer</h2>
                        <h3>buy 1 get 10% off</h3>
                    </div>
                </section>
            </div>



        </>

    );
};

export default HomePage;
