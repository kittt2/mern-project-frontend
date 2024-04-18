import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

const Pagenotfound = () => {
    return (
        <>
            <Helmet>
                <div>
                    <title>error | My Website</title>
                    <meta name="description" content="Welcome to the Home Page" />
                </div>
            </Helmet>
            <div className="pnf">
                <h1 className="pnf-title">404</h1>
                <h2 className="pnf-heading">Oops ! Page Not Found</h2>
                <Link to="/" className="pnf-btn">
                    Go Back
                </Link>
            </div>
        </>
    );
};

export default Pagenotfound;
