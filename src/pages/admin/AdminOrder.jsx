import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import AdminMenu from "../../components/Adminmenu";
import { useauth } from "../../context/Context";
import moment from "moment";
import { Select, Pagination } from "antd";
const { Option } = Select;

const AdminOrders = () => {
  const [status, setStatus] = useState([
    "Not Process",
    "Processing",
    "Shipped",
    "Delivered",
    "Cancelled",
  ]);
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useauth();
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage] = useState(3); 
  const [loading, setloading] = useState(false)
  const apiUrl = import.meta.env.VITE_API_URL;


  const getOrders = async () => {
    try {
      setloading(true)
      const { data } = await axios.get(`${apiUrl}/api/v1/auth/all-orders`);
      const sortedOrders = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setOrders(sortedOrders);
      setloading(false)
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while fetching orders");
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);

  const handleChange = async (orderId, value) => {
    try {
      const { data } = await axios.put(`${apiUrl}/api/v1/auth/order-status/${orderId}`, {
        status: value,
      });
      getOrders();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while updating order status");
    }
  };

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container p-3 dashboard">
       <div>
        <img src="/img/banner/b1.jpg" className="d-block w-100 rounded-5 my-4" alt="Banner" />
      </div>
      <div className="row">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <h1 className="text-center mb-4 fw-bold" style={{ fontFamily: "Arial, sans-serif", color: "#343a40" }}>All Orders</h1>
          {loading?<div className="container  text-center" style={{height:"100vh"}}> <h1>please wait..</h1> </div>:   currentOrders?.map((o, i) => {
            return (
              <div key={o._id} className="card mb-4 shadow-sm border-0 rounded-3">
                <div className="card-body">
                  <h5 className="card-title">Order #{indexOfFirstOrder + i + 1}</h5>
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Status</th>
                        <th scope="col">Buyer</th>
                        <th scope="col">Date</th>
                        <th scope="col">Payment</th>
                        <th scope="col">Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{indexOfFirstOrder + i + 1}</td>
                        <td>
                          <Select
                            bordered={false}
                            onChange={(value) => handleChange(o._id, value)}
                            defaultValue={o?.status}
                          >
                            {status?.map((s, index) => (
                              <Option key={index} value={s}>
                                {s}
                              </Option>
                            ))}
                          </Select>
                        </td>
                        <td>{o?.buyer?.name}</td>
                        <td>{moment(o?.createdAt).fromNow()}</td>
                        <td>Success</td>
                        <td>{o?.products?.length}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="mt-3">
                    {o?.products?.map((p) => (
                      <div key={p._id} className="row mb-2 p-3 bg-light rounded-3 shadow-sm">
                        <div className="col-md-4">
                          <img
                            src={`${apiUrl}/api/v1/product/product-photo/${p._id}`}
                            className="img-fluid rounded"
                            alt={p.name}
                            style={{ height: '100px', objectFit: 'cover' }}
                          />
                        </div>
                        <div className="col-md-8">
                          <h5>{p.name}</h5>
                          <p>{p.description.substring(0, 30)}...</p>
                          <p>Price: ${p.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
          <Pagination
            current={currentPage}
            pageSize={ordersPerPage}
            total={orders.length}
            onChange={paginate}
            className="mt-3"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminOrders;
