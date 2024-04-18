import React from 'react'
import UserMenu from '../../components/UserMenu'
import { useauth } from '../../context/Context'

function Dashboard() {
  const [auth,setAuth] = useauth("")
  return (
    <div>
      <div className="container-flui m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div >
          <div className="col-md-9" >
            <div className="card w-75 p-3" id="userdash">
              <h3>{auth?.user?.name}</h3>
              <h3>{auth?.user?.email}</h3>
              <h3>{auth?.user?.adddress}</h3>
              <h3>{auth?.user?.phone}</h3>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
