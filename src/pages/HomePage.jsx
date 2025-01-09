import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineReload } from "react-icons/ai";
import axios from "axios";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
import { useCart } from "../context/cart";
import { BiCart } from "react-icons/bi";

const HomePage = () => {
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;


  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAllProducts();
    getTotal();
  }, []);

  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${apiUrl}/api/v1/product/get-product`);
      setProducts(data.products);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getTotal = async () => {
    try {
      const { data } = await axios.get(`${apiUrl}/api/v1/product/product-count`);
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);

  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${apiUrl}/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Shop</title>
        <meta name="description" content="Learn more about us" />
      </Helmet>
      
      <div
        className="container py-4"
        style={products?.length < 1 ? { height: "80vh" } : { height: "auto" }}
      >
        <img
          src="/img/banner/b1.jpg"
          className="img-fluid rounded-5 mb-4"
          alt="Banner"
        />
        {loading && (
          <div className="text-center container">
            <h1>please wait</h1>
          </div>
        )}
        <div className="row">
          {products?.map((p) => (
            <div
              className="col-md-4 mb-4"
              key={p._id}
              onClick={() => navigate(`/product/${p.slug}`)}
            >
              <div
                style={{ cursor: "pointer" }}
                className="card h-100 shadow-sm border-0 rounded-5"
              >
                <img
                  src={`${apiUrl}/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top img-fluid rounded-top-5"
                  alt={p.name}
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title text-truncate fs-2">{p.name}</h5>
                  <p className="card-text text-muted text-truncate">
                    {p.description.substring(0, 60)}...
                  </p>
                  <p className="card-text text-black">₹ {p.price}</p>
                  <button
                    style={{ hover: "background-color" }}
                    className="btn btn-dark px-5  border-0 mt-2"
                    onClick={() => navigate(`/product/${p.slug}`)}
                  >
                    <BiCart className="h-100 fs-6" /> Buy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center m-2 p-3">
          {products && products.length < total && (
            <button
              className="btn btn-primary bg-black border-0"
              onClick={(e) => {
                e.preventDefault();
                setPage(page + 1);
              }}
            >
              {loading ? (
                "Loading more"
              ) : (
                <>
                  Load more <AiOutlineReload />
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
