import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const CategoryProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const[loading,setloading]=useState(false)
  const apiUrl = import.meta.env.VITE_API_URL;


  useEffect(() => {
    const getProductsByCat = async () => {
      try {
        setloading(true)
        const { data } = await axios.get(`${apiUrl}/api/v1/product/product-category/${params.slug}`);
        setProducts(data?.products);
        setCategory(data?.category);
        setloading(false)
      } catch (error) {
        toast.error("Error loading products");
        console.log(error);
      }
    };
    if (params?.slug) getProductsByCat();
  }, [params?.slug]);
  

  return (
    <div     
    style={products?.length <1 ? { height: "70vh" } : { height: "auto" }}    
 className="container mt-5">
      <h4 className="text-center fw-bold fs-1 mb-4">Category - {category?.name}</h4>
      <h6 className="text-center mb-4">{products?.length} result{products?.length !== 1 && 's'} found</h6>
      <div className="row">
        {loading? <div className="container text-center " style={{height:"100vh"}}>
          <h1>please wait..</h1>
        </div>: products?.map((product) => (
          <div className="col-md-4 mb-4 rounded-5" key={product._id}>
            <div className="card rounded-5" style={{ height: "100%" }}>
              <img
                src={`${apiUrl}/api/v1/product/product-photo/${product._id}`}
                className="card-img-top rounded-top-5 img-fluid"
                alt={product.name}
                style={{ height: "40vh", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description.substring(0, 60)}...</p>
                <p className="card-text text-dark">₹ {product.price}</p>
                <button
                  onClick={() => navigate(`/product/${product.slug}`)}
                  className="btn btn-dark"
                >
                  Explore
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProduct;
