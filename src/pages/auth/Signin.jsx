import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Signin() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [answer, setAnswer] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          
            const res = await axios.post("/api/v1/auth/register", {
                name,
                email,
                password,
                phone,
                address,
                answer
            });
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                navigate("/login");
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="row" id="row">
                    <div className="col-md-6 d-flex align-items-center justify-content-center px-4 py-10 py-md-16 px-md-6 py-lg-24 px-lg-8">
                        <div className="mx-auto w-100 w-md-75 w-lg-50" id="login1">
                            <h2 className="text-center font-weight-bold">Sign up</h2>
                            <p className="mt-2 text-center fs-5">Already have an account? <Link to="/login" className="font-medium text-black">Sign In</Link></p>
                            <div className="space-y-5">
                                <div>
                                    <div className="mt-2">
                                        <input className="form-control" type="text" value={name} placeholder="Full Name" id="name" onChange={(e) => setName(e.target.value)} required />
                                    </div>
                                </div>
                                <div>
                                    <div className="mt-2">
                                        <input className="form-control" type="email" value={email} placeholder="Email" id="email" onChange={(e) => setEmail(e.target.value)} required />
                                    </div>
                                </div>
                                <div>
                                    <div className="mt-2">
                                        <input className="form-control" type="password" value={password} placeholder="Password" id="password" onChange={(e) => setPassword(e.target.value)} required />
                                    </div>
                                </div>
                                <div>
                                    <div className="mt-2">
                                        <input className="form-control" type="text" value={answer} placeholder="confirm password" id="password" onChange={(e) => setAnswer(e.target.value)} required />
                                    </div>
                                </div>
                                <div>
                                    <div className="mt-2">
                                        <input className="form-control" type="text" value={phone} placeholder="Phone Number" id="phone" onChange={(e) => setPhone(e.target.value)} required />
                                    </div>
                                </div>
                                <div>
                                    <div className="mt-2">
                                        <input className="form-control" type="text" value={address} placeholder="Address" id="address" onChange={(e) => setAddress(e.target.value)} required />
                                    </div>
                                </div>
                                <div>
                                    <button id="btnid" type="submit" className="btn btn-primary d-inline-flex align-items-center justify-content-center">
                                        Create Account
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                                            <line x1={5} y1={12} x2={19} y2={12} />
                                            <polyline points="12 5 19 12 12 19" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    <div className="col-md-6" id="login12">
                        <img className="mx-auto h-100 w-100 rounded-md" src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80" alt="signup" />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Signin;
