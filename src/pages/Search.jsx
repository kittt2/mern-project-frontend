import React from "react";
import { useSearch } from "../context/search";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Search = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();
  return (
    
      <div className="container">
        <div className="text-center">
          <h1>Search Resuts</h1>
          <h6>
            {values?.results.length < 1
              ? "No Products Found"
              : `Found ${values?.results.length}`}
          </h6>
          <div className="d-flex flex-wrap mt-4">
            {values?.results.map((p) => (
              <div className="card m-2" id="cardpro" >
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                  style={{width:"100%",objectFit:"cover",height:"200px", overflow:"hidden"}}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">
                    {p.description.substring(0, 30)}...
                  </p>
                  <p className="card-text"> rs {p.price}</p>
                  <button class="btn " style={{margin:"20px"}}  key={p._id} onClick={() => navigate(`/product/${p.slug}`)}>
                    
                    More Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    
  );
};

export default Search;
