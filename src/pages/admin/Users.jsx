import React, { useEffect } from "react";
import AdminMenu from "../../components/Adminmenu.jsx";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import moment from "moment";

const Users = () => {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    try {
      const { data } = await axios.get("/api/v1/auth/all-users");
      setUsers(data.users);
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  // Lifecycle method
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>All Users</h1>
            {users.map((user) => (
              <div key={user._id} className="card rounded-lg bg-white text-dark shadow-sm" id="aside2">
                <div className="card-body">
                  <h5 className="card-title mb-2 text-xl font-weight-bold">{user.name}</h5>
                  <p className="card-text text-base">
                    {user.email}
                  </p>
                  <p>{user.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
