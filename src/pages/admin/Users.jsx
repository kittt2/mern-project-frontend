import React, { useEffect, useState } from "react";
import AdminMenu from "../../components/Adminmenu.jsx";
import toast from "react-hot-toast";
import axios from "axios";
import { Pagination } from "antd";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);
  const apiUrl = import.meta.env.VITE_API_URL;


  const getAllUsers = async () => {
    try {
      const { data } = await axios.get(`${apiUrl}/api/v1/auth/all-users`);
      setUsers(data.users);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container  p-3 dashboard">
      <div>
        <img src="/img/banner/b1.jpg" className="d-block w-100 rounded-5 my-4" alt="Banner" />
      </div>
      <div className="row">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <h1 className="mb-4 fw-bold" style={{ fontFamily: "Arial, sans-serif", color: "#343a40" }}>All Users</h1>
          <div className="table-responsive rounded-5">
            <table className="table table-hover table-bordered">
              <thead className="thead-light">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                </tr>
              </thead>
              <tbody>
                {currentUsers?.map((user, index) => (
                  <tr key={user._id}>
                    <th scope="row">{indexOfFirstUser + index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Pagination
            current={currentPage}
            pageSize={usersPerPage}
            total={users.length}
            onChange={paginate}
            className="mt-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Users;
