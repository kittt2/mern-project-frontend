import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [cart, setCart] = useCart();
  const apiUrl = import.meta.env.VITE_API_URL;


  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `${apiUrl}/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
    } catch (error) {
      console.log(error);
    }
  };

  <Helmet>
    <title>Product detail</title>
    <meta name="description" content="Learn more about us" />
  </Helmet>;

  return (
    <div className="container py-5 my-5">
      <div className="card mb-3 shadow-sm border-0 rounded-5">
        <div className="row g-0">
          <div className="col-md-6">
            <img
              src={`${apiUrl}/api/v1/product/product-photo/${product._id}`}
              className="img-fluid rounded-start-5"
              alt={product.name}
              style={{ height: "400px", objectFit: "cover", width: "100%" }}
            />
          </div>
          <div className="col-md-6 d-flex align-items-center ">
            <div className="card-body text-center ">
              <h1 className="card-title h1  text-uppercase text-black mb-3">
                {product.name}
              </h1>
              <p className="card-text fs-1 text-muted lead">
                {product.description}
              </p>
              <div className="d-flex justify-content-center align-items-center my-4">
                <span className="h4 text-black">₹ {product.price}</span>
                <span className="mx-3 badge bg-success text-white">
                  In Stock
                </span>
              </div>
              <button
                className="btn btn-dark btn-lg px-5 py-3 mt-2 shadow-sm"
                onClick={() => {
                  setCart([...cart, product]);
                  localStorage.setItem(
                    "cart",
                    JSON.stringify([...cart, product])
                  );
                  toast.success("Item Added to cart");
                  navigate("/cart");
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
