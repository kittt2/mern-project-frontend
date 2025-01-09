import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Adminmenu";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { Pagination } from "antd";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);
  const [loading, setLoading] = useState(false);
  const apiUrl = import.meta.env.VITE_API_URL;

  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${apiUrl}/api/v1/product/get-product`);
      setProducts(data.products);
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

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
          <h1 className="text-center mb-4 fw-bold" style={{ fontFamily: "Arial, sans-serif", color: "#343a40" }}>All Products List</h1>
          <div className="row">
            {loading?<div className="container  text-center" style={{height:"100vh"}}> <h1>please wait..</h1> </div>:currentProducts?.map((p) => (
              <div key={p._id} className="col-lg-4 col-md-6 mb-4">
                <Link to={`/dashboard/admin/product/${p.slug}`} className="text-decoration-none">
                  <div className="card h-100 shadow-sm rounded-3">
                    <img
                      src={`${apiUrl}/api/v1/product/product-photo/${p._id}`}
                      className="card-img-top rounded-top"
                      alt={p.name}
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <div className="card-body">
                      <h5 className="card-title text-dark fw-bold">{p.name}</h5>
                      <p className="card-text text-secondary">{p.description}</p>
                      <p className="card-text text-muted"><small>{p.price}</small></p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <Pagination
            current={currentPage}
            pageSize={productsPerPage}
            total={products.length}
            onChange={paginate}
            className="mt-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
