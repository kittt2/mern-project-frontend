import React from "react";
import { Helmet } from "react-helmet";

import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {

    const user = JSON.parse(localStorage.getItem('auth'))
    return (
        <>
            <Helmet>

                <title>contact | My Website</title>
                <meta name="description" content="Welcome to the Home Page" />

            </Helmet>
            <div>
                
                <section id="page-header">
                    <h2>Contact us</h2>
                    <p>send us a email for details</p>
                </section>
                <section id="prompt">
                    <h1>WELCOME {!user?"user":user.user.name} TO NEWS TRENDS OF WORLD</h1>
                </section>
                <section id="contact-details" className="section-p1">
                    <div className="details">
                        <span>GET IN TOUCH</span>
                        <h2>visit one of our branch or contact us through email</h2>
                        <h3>branch</h3>
                        <ul>
                            <li>
                                <i className="fal fa-map" />
                                <p>noida sec-16,block-a1</p>
                            </li>
                            <li>
                                <i className="fal fa-phone-alt" />
                                <p>01-01-01-11-01/contact@gmail.com</p>
                            </li>
                            <li>
                                <i className="fal fa-clock" />
                                <p>noida sec-16,block-a1</p>
                            </li>
                        </ul>
                    </div>
                    <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.697967993105!2d77.31476267535635!3d28.578830975694153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce45ba6481455%3A0xcd52ec8780a441f6!2sSector%2016%20Metro%20Station!5e0!3m2!1sen!2sin!4v1694790026163!5m2!1sen!2sin" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                </section>
            </div>










        </>

    );
};

export default Contact;
