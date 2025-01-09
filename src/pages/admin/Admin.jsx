import React from "react";
import AdminMenu from "../../components/Adminmenu";
import { useauth } from "../../context/Context";

function Admin() {
  const [auth] = useauth();
  return (
    <div className="container mt-3 p-3">
      <div>
        <img src="/img/banner/b1.jpg" className="d-block w-100 rounded-5 my-4" alt="Banner" />
      </div>
      <div className="row ">
        <div className="col-md-4">
          <AdminMenu />
        </div>
        <div className="col-md-6 mt-2 ">
          <div className="card mt-4 shadow-sm border-0 rounded-3 p-4">
            <h3 className="mb-2" style={{ fontFamily: "Arial, sans-serif", color: "#343a40" }}>
              Admin Dashboard
            </h3>
            <div className="mb-3">
              <div className="p-3 mb-2 rounded" style={{ backgroundColor: "#e9ecef" }}>
                <p><strong style={{ fontFamily: "Arial, sans-serif", color: "#6c757d" }}>Name:</strong> {auth?.user?.name}</p>
              </div>
              <div className="p-3 mb-2 rounded" style={{ backgroundColor: "#e9ecef" }}>
                <p><strong style={{ fontFamily: "Arial, sans-serif", color: "#6c757d" }}>Email:</strong> {auth?.user?.email}</p>
              </div>
              <div className="p-3 mb-2 rounded" style={{ backgroundColor: "#e9ecef" }}>
                <p><strong style={{ fontFamily: "Arial, sans-serif", color: "#6c757d" }}>Contact:</strong> {auth?.user?.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
