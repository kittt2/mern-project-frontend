import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation, Link } from "react-router-dom";
import toast from "react-hot-toast";

const Forgetpassword = () => {
  const [email, setEmail] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");
  const apiUrl = import.meta.env.VITE_API_URL;


  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${apiUrl}/api/v1/auth/forgot-password`, {
        email,
        newpassword,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data.message);
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
    <section className="m-5">
      <div className="container ">
      <div>
        <img src="/img/banner/b2.jpg" className="d-block w-100 rounded-5 my-4" alt="Banner" />
      </div>
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-6 col-md-8">
            <div className="card shadow-sm border-0 rounded-5">
              <div className="card-body p-5">
                <h2 className="text-center mb-4 font-weight-bold">Reset Password</h2>
                <p className="text-center fs-5">
                  Don't have an account? <Link to="/register" className="text-decoration-none fw-bold">Create a free account</Link>
                </p>
                <form onSubmit={handleSubmit} className="mt-4">
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="newpassword"
                      placeholder="New Password"
                      value={newpassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                    />
                    <label htmlFor="newpassword">New Password</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="answer"
                      placeholder="What is your old password"
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                      required
                    />
                    <label htmlFor="answer">What is your old password</label>
                  </div>
                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-dark btn-lg">
                      Reset Password
                      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="ms-2">
                        <line x1={5} y1={12} x2={19} y2={12} />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-none d-lg-block">
            <img src="https://images.unsplash.com/photo-1630673245362-f69d2b93880e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" className="img-fluid rounded-5 shadow-sm" alt="Reset Password Banner" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forgetpassword;
