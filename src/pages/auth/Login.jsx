import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { json, useNavigate ,useLocation} from "react-router-dom";
import toast from "react-hot-toast";
import { useauth } from "../../context/Context";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth,setauth]=useauth();
  const apiUrl = import.meta.env.VITE_API_URL;

  const navigate = useNavigate();
const location=useLocation();
  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${apiUrl}/api/v1/auth/login`, {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setauth({...auth,user:res.data.user,token:res.data.token,})
        navigate(location.state||"/");
        localStorage.setItem('auth',JSON.stringify(res.data))
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("eror");
    }
  };
  return (
    
   <section>
  <div className="row" id="row">
    <div className="col-lg-6 d-flex align-items-center justify-content-center px-4 py-10 py-md-16 px-md-6 py-lg-24 px-lg-8">
      <div className="mx-auto w-100 w-md-75 w-lg-50"id="login1">
        <h2 className="text-center font-weight-bold">LOGIN</h2>
        <p className="mt-2 text-center fs-5">Don't have an account? <Link to="/register" className="font-semibold text-black">Create a free account</Link></p>
        <form onSubmit={handleSubmit} className="mt-8">
          <div className="space-y-5">
            <div>
             
              <div className="mt-2">
              <input className="form-control" type="email" value={email} placeholder="email" id="email" onChange={(e) => setEmail(e.target.value)} required />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
              
              </div>
              <div className="mt-2">
              <input className="form-control" type="password" value={password} placeholder="password" id="password" onChange={(e) => setPassword(e.target.value)} required />
               
              </div>
            </div>
            <div>
              <button id="btnid" type="submit" className="btn btn-primary d-inline-flex align-items-center justify-content-center">
                Login
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <line x1={5} y1={12} x2={19} y2={12} />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>
        </form>
        <div className="mt-3 space-y-3">
          <button type="button" className="btn btn-light d-inline-flex align-items-center justify-content-center" onClick={()=>navigate('/forget-password')}>
            <span className="me-2">forget password</span>
          </button>
          
        </div>
      </div>
    </div>
    <div className="col-lg-6" id="login12">
      <img className="mx-auto h-100 w-100 rounded-md" src="https://images.unsplash.com/photo-1630673245362-f69d2b93880e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt />
    </div>
  </div>
</section>



  );
};

export default Login;