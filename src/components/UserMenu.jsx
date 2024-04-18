import React from "react";
import { NavLink } from "react-router-dom";
const UserMenu = () => {
  return (
    <div>
      <div className="text-center dashboard-menu " id="usermenu">
        <div className="list-group" id="group"  >
          <h3>Dashboard</h3>
          <NavLink
            to="/dashboard/user/profile"
            
            id="navlinkid"
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/user/orders"
            
            id="navlinkid"
          >
            Orders
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
