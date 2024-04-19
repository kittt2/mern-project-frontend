import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
const CategoryProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;
  useEffect(() => {
    if (params?.slug) getPrductsByCat();
  }, [params?.slug]);
  const getPrductsByCat = async () => {
    try {
      const loadingToast = toast.loading('Loading');
      const { data } = await axios.get(`${apiUrl}/api/v1/product/product-category/${params.slug}`);
      setProducts(data?.products);
      setCategory(data?.category);
      toast.dismiss(loadingToast)
    } catch (error) {
      console.log(error);
    }
  };

  return (
  
      <div className="container mt-3 category">
        <h4 className="text-center">Category - {category?.name}</h4>
        <h6 className="text-center">{products?.length} result found </h6>
        <div className="row">
          <section id="product1" className="section-p1">
          <div className="pro-container">
            {products?.map((p) => (
              
              <div className="pro" key={p._id}>
             
                <img
                  src={`${apiUrl}/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="des">
                      <span> Rs {p.price
                      }</span>
                      <h5>{p.name}</h5>
                      <div className="star">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <h4>  {p.description.substring(0, 60)}...</h4>
                    </div>
                    <button class="add-to-cart" id="icon" onClick={() => {
                        navigate(`/product/${p.slug}`)
                      }}>🛒</button>
                  </div>
               
            ))}
            </div>
            </section>
          
        </div>
      </div>
      
  
  );
};

export default CategoryProduct;
