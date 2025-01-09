import React from 'react';
import UserMenu from '../../components/UserMenu';
import { useauth } from '../../context/Context';

function Dashboard() {
  const [auth, setAuth] = useauth();

  return (
    <div className="container mt-4">
       <div className=''>
          <img src="/img/banner/b1.jpg " className='d-block w-100 rounded-5 my-4' alt="" />
        </div>
      <div className="row">
        <div className="col-md-3">
          <UserMenu />
        </div>
        <div className="col-md-9 rounded-5  mb-4">
          <div className="card shadow-sm rounded-5 p-4">
            <div className="card-body">
              <h2 className="card-title mb-4 text-center">User Dashboard</h2>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="card border-0 bg-light h-100">
                    <div className="card-body">
                      <h5 className="card-title">Name</h5>
                      <p className="card-text">{auth?.user?.name}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="card border-0 bg-light h-100">
                    <div className="card-body">
                      <h5 className="card-title">Email</h5>
                      <p className="card-text">{auth?.user?.email}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="card border-0 bg-light h-100">
                    <div className="card-body">
                      <h5 className="card-title">Address</h5>
                      <p className="card-text">{auth?.user?.address}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="card border-0 bg-light h-100">
                    <div className="card-body">
                      <h5 className="card-title">Phone</h5>
                      <p className="card-text">{auth?.user?.phone}</p>
                    </div>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
