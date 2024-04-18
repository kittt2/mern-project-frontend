import React from 'react'
import { NavLink } from 'react-router-dom'

function AdminMenu() {
    return (
      <div>
  
  <aside className="d-flex flex-column border-end bg-white px-5 py-8" id="aside" style={{width: '16rem', padding:"20px", boxShadow:"box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",margin:"30px" } }>

    <nav className="space-y-6">
      <div className="space-y-3">
        <span className="px-3 text-xs font-semibold text-gray-900" style={{fontSize:"bolder"}}>Admin</span>
        <ul>
          <li>
        <NavLink to="/dashboard/admin/create-category" id="linknav" className="d-flex align-items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover-bg-gray-100 hover-text-gray-700" >
          <span className="ms-2 text-sm font-medium"  id="linknav" >Create category</span>
        </NavLink>
        </li>
        <li>
        <NavLink to='/dashboard/admin/create-product'id="linknav"  className="d-flex align-items-center rounded-lg px-3 py-2 text-gray-600 transition-colors ">
          <span className="ms-2 text-sm font-medium" id="linknav">create product</span>
        </NavLink>
        </li>
        <li>
        <NavLink to="/dashboard/admin/users" id="linknav"  className="d-flex align-items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover-bg-gray-100 hover-text-gray-700">
          <span className="ms-2 text-sm font-medium" id="linknav">all users</span>
        </NavLink>
        </li>
        <li>
        <NavLink to="/dashboard/admin/products" id="linknav"  className="d-flex align-items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover-bg-gray-100 hover-text-gray-700">
          <span className="ms-2 text-sm font-medium " id="linknav">Products</span>
        </NavLink>
     </li>
     <li>
        <NavLink to="/dashboard/admin/orders" id="linknav"  className="d-flex align-items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover-bg-gray-100 hover-text-gray-700">
          <span className="ms-2 text-sm font-medium " id="linknav">Orders</span>
        </NavLink>
     </li>
      </ul>
      </div>
    </nav>
  </aside>
</div>

    )
}

export default AdminMenu
