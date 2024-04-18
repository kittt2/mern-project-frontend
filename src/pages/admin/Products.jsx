import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Adminmenu";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = useState([]);

  //getall products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div className="row dashboard">
      <div className="col-md-3">
        <AdminMenu />
      </div>
      <div className="col-md-9 " >
        <h1 className="text-center">All Products List</h1>
       
          <section className="section-p12">
            {products?.map((p) => (
              
              <Link
                key={p._id}
                to={`/dashboard/admin/product/${p.slug}`}
                className="product-link"
              >


                <div className="pro-container1">
                  <div className="pro2">
                    <img
                      src={`/api/v1/product/product-photo/${p._id}`}

                      alt={p.name}
                    />
                    <div className="des1">
                      <span>adidas</span>
                      <h5>{p.name}</h5>
                      <div className="star">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <h4>{p.description}</h4>
                    </div>

                  </div>

                </div>
              </Link>
            ))}
          </section>
        </div>
      </div>
  


  );
};

export default Products;

