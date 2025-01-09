import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaUser, FaClipboardList } from "react-icons/fa";

const UserMenu = () => {
  const navigate = useNavigate();
  return (
    <div className="card shadow-sm border-0 rounded-4  ">
      <div className="card-body p-4">
        <h4 className="text-center mb-4">Dashboard</h4>

        <div className="list-group">
          <button
            onClick={() => navigate("/dashboard/user")}
            className="list-group-item  list-group-item-action d-flex align-items-center"
            activeClassName="active "
          >
            <FaUser className="me-3" />
            Profile
          </button>
          <button
            onClick={() => navigate("/dashboard/user/profile")}
            className="list-group-item list-group-item-action d-flex align-items-center"
            activeClassName="active"
          >
            <FaUser className="me-3" />
            Profile edit
          </button>
          <button
            onClick={() => navigate("/dashboard/user/orders")}
            className="list-group-item list-group-item-action d-flex align-items-center"
            activeClassName="active"
          >
            <FaClipboardList className="me-3" />
            Orders
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
