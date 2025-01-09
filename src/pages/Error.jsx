import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

const Pagenotfound = () => {
    return (
        <>
            <Helmet>
                <div>
                    <title>error</title>
                    <meta name="description" content="Welcome to the Home Page" />
                </div>
            </Helmet>
            <div className="container text-capitalize text-center align-content-center " style={{height:"100vh"}}>
                <h1 className="text-center fs-3">404</h1>
                <h2 className="text-center fs-1"> Page Not Found</h2>
                <Link to="/" className="btn btn-dark">
                    Go Back
                </Link>
            </div>
        </>
    );
};

export default Pagenotfound;
