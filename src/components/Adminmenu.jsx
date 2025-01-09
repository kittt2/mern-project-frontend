import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaPlus, FaBox, FaUsers, FaList, FaClipboardList } from 'react-icons/fa';
import { BiUser } from 'react-icons/bi';

function AdminMenu() {
  return (
    <div className="container ">
      <aside className="bg-white  w-100 rounded-4 px-4 py-5 rounded shadow-sm " >
        <h4 className="text-center mb-4">Admin Dashboard</h4>
        <nav className=" ">
        <NavLink to="/dashboard/admin" className="btn btn-outline-secondary d-flex align-items-center mb-2">
            <BiUser className="me-3" />
            <span>Profile</span>
          </NavLink>
          <NavLink to="/dashboard/admin/create-category" className="btn btn-outline-secondary d-flex align-items-center mb-2">
            <FaPlus className="me-3" />
            <span>Create Category</span>
          </NavLink>
          <NavLink to='/dashboard/admin/create-product' className="btn btn-outline-secondary d-flex align-items-center mb-2">
            <FaBox className="me-3" />
            <span>Create Product</span>
          </NavLink>
          <NavLink to="/dashboard/admin/users" className="btn btn-outline-secondary d-flex align-items-center mb-2">
            <FaUsers className="me-3" />
            <span>All Users</span>
          </NavLink>
          <NavLink to="/dashboard/admin/products" className="btn btn-outline-secondary d-flex align-items-center mb-2">
            <FaList className="me-3" />
            <span>Products</span>
          </NavLink>
          <NavLink to="/dashboard/admin/orders" className="btn btn-outline-secondary d-flex align-items-center">
            <FaClipboardList className="me-3" />
            <span>Orders Processing</span>
          </NavLink>
        </nav>
      </aside>
    </div>
  );
}

export default AdminMenu;
