import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [cart, setCart] = useCart();

  //initalp details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);
  //getProduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <>
    
     <section className="overflow-hidden"> 
  <div className="container-xl px-5 py-24" id="cont">
    <div className="row justify-content-center">
      <div className="col-lg-6">
      <img
            src={`/api/v1/product/product-photo/${product._id}`}
            className="card-img-top"
            alt={product.name}
            height="300"
            width={"350px"}
          />
      </div>
      <div className="col-lg-6 mt-6 mt-lg-0 pl-lg-10" id="cont2">
        <h2 className="text-uppercase mb-4 font-weight-bold text-gray-500">
          {product.name}
        </h2>
        <h1 className="my-4 text-3xl font-weight-bold text-black">Nike Air Max 21A</h1>
        <div className="my-4 d-flex align-items-center">
          <span className="d-flex align-items-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            {/* Repeat the star SVGs for ratings */}
            <span className="ml-3 font-weight-semibold">4 Reviews</span>
          </span>
        </div>
        <p className="lead">
         {product.description}
        </p>
        <div className="mb-5 mt-6 d-flex align-items-center border-bottom border-gray-100 pb-5">
          <div className="d-flex align-items-center">
           
            <button className="h-6 w-6 rounded-full border-2 border-gray-300 focus-outline-none" />
            {/* Add buttons for other colors */}
          </div>
          <div className="ml-auto d-flex align-items-center">
            <span className="mr-3 font-weight-semibold">QUANTITY</span>
            <div className="relative">
              <select className="form-select rounded border border-gray-300 py-2 pl-3 pr-10 text-sm focus-border-black focus-outline-none focus-ring-2 focus-ring-black">
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <span className="position-absolute right-0 top-0 d-flex h-full w-10 align-items-center justify-content-center text-center text-gray-600 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <span className="text-xl font-weight-bold text-gray-900">
          ₹ {product.price} 
          </span>
          <button type="button"  onClick={() => {
                        setCart([...cart, product]);
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, product])
                          
                        );
                        toast.success("Item Added to cart");
                        navigate("/cart");
                        
                      }} className="btn btn-dark rounded-md px-3 py-2 text-sm font-semibold shadow-sm hover-bg-black focus-visible-outline focus-visible-outline-2 focus-visible-outline-offset-2 focus-visible-outline-black">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</section>




    
  </>
  );
};

export default ProductDetails;
