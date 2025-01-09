import React, { useState, useEffect } from "react";
import UserMenu from "../../components/UserMenu";
import axios from "axios";
import moment from "moment";
import { useauth } from "../../context/Context";
import { Helmet } from "react-helmet";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useauth();
  const apiUrl = import.meta.env.VITE_API_URL;

    const [loading, setLoading] = useState(false);
  

  const getOrders = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get(`${apiUrl}/api/v1/auth/orders`);
      const sortedOrders = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setOrders(sortedOrders);
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);
   

  return (
    <div className="container">
      <div>
        <img src="/img/banner/b1.jpg" className="d-block w-100 rounded-5 my-4" alt="Banner" />
      </div>
      <div className="row">
        <div className="col-md-3">
          <UserMenu />
        </div>
        <div className="col-md-9 "
                  style={orders.length <1  ? { height: "80vh" } : { height: "auto" }}    

        >
          <h1 className="text-center mb-4 rounded-3 py-2" style={{border: '1px solid #ddd', backgroundColor: '#f9f9f9'}}>Orders</h1>
          {loading?<div className="text-center container" ><h1>please wait..</h1></div>:orders?.map((order, index) => (
            <div className="order-card mb-4 p-3 rounded shadow-sm" key={order._id} style={{border: '1px solid #ddd', backgroundColor: '#f9f9f9'}}>
              <div className="order-header mb-3 d-flex justify-content-between align-items-center">
                <h5>Order #{index + 1}</h5>
                <span><strong>Date:</strong> {moment(order.createdAt).fromNow()}</span>
              </div>
              <div className="order-details mb-3 d-md-flex gap-4">
                <p><strong>Status:</strong> {order.status}</p>
                <p><strong>Buyer:</strong> {order.buyer?.name}</p>
                <p><strong>Payment:</strong> Success</p>
                <p><strong>Quantity:</strong> {order.products?.length}</p>
              </div>
              <div className="order-products">
                <h5 className="mb-3">Products</h5>
                <div className="row row-cols-1 row-cols-md-3 g-3">
                  {order.products?.map((product) => (
                    <div className="col" key={product._id}>
                      <div className="product-item p-2 rounded border h-100" style={{backgroundColor: '#fff'}}>
                        <img
                          src={`${apiUrl}/api/v1/product/product-photo/${product._id}`}
                          className="img-fluid rounded mb-2"
                          alt={product.name}
                          style={{ width: "100%", height: "150px", objectFit: "cover" }}
                        />
                        <div>
                          <p className="mb-1"><strong>{product.name}</strong></p>
                          <p className="mb-1">{product.description.substring(0, 30)}</p>
                          <p className="mb-0"><strong>Price:</strong> ₹ {product.price}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
