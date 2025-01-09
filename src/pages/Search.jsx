import React from "react";
import { useSearch } from "../context/search";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;

  return (
    <div
      className="container my-5 "
      style={
        values.results.length < 5 ? { height: "70vh" } : { height: "auto" }
      }
    >
      {!values ? (
        <div>
          <h1>"Loading...</h1>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="mb-4">Search Results</h1>
          <h6 className="mb-5">
            {values?.results.length < 1
              ? "No Products Found"
              : `Found ${values?.results.length} product(s)`}
          </h6>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {values?.results.map((p) => (
              <div
                className="card border-0 rounded-5 shadow-sm"
                style={{ width: "18rem" }}
                key={p._id}
              >
                <img
                  src={`${apiUrl}/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top rounded-top-5"
                  alt={p.name}
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "10px 10px 0 0",
                  }}
                />
                <div className="card-body ">
                  <h5 className="card-title text-truncate">{p.name}</h5>
                  <p className="card-text text-muted text-truncate">
                    {p.description}
                  </p>
                  <p className="card-text text-black">₹ {p.price}</p>
                  <button
                    className="btn btn-dark w-100 mt-2"
                    onClick={() => navigate(`/product/${p.slug}`)}
                  >
                    More Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
