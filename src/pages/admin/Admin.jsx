import React from 'react'
import AdminMenu from '../../components/Adminmenu.jsx';
import { useauth } from '../../context/Context.jsx'

function Admin() {
  const [auth]=useauth();
  return (
    <div>
       <div className="container-fluid m-3 p-3 dashboard" >
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9" >
            <div className="card w-75 p-3" id='aside'>
              <h3> Admin Name : {auth?.user?.name}</h3>
              <h3> Admin Email : {auth?.user?.email}</h3>
              <h3> Admin Contact : {auth?.user?.phone}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin
