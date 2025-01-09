import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Homepage = () => {
  const Navigate = useNavigate();
  const products = [
    {
      id: 1,
      image: "f1.jpg",
      title: "Trendy Shirt",
      description: "A timeless  that goes well with any outfit.",
      buttonText: "Shop Now",
    },
    {
      id: 2,
      image: "f2.jpg",
      title: "Casual  Shirt",
      description: "A casual  shirt perfect for a relaxed look.",
      buttonText: "Shop Now",
    },
    {
      id: 3,
      image: "f3.jpg",
      title: "Pattern Shirt",
      description: "A new pattern shirt ideal for any occasions.",
      buttonText: "Shop Now",
    },
  ];
  const category = [
    {
      id: "1",
      img: "c3.jpg",
      type: "women's Clothing",
    },
    {
      id: "2",
      img: "m1.jpg",
      type: "Men's Clothing",
    },
    {
      id: "3",
      img: "img/banner/b19.jpg",
      type: "Seasonal collections",
    },
  ];

  return (
    <div className="container  pt-4 ">
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Learn more about us" />
      </Helmet>
      <div
        id="carouselExampleIndicators"
        style={{ height: "80vh" }}
        className="carousel slide   "
        data-bs-ride="carousel"
        data-bs-interval="5000"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner rounded-5 border-1 border border-black ">
          <div className="carousel-item active">
            <img
              src="c2.jpg"
              className="d-block w-100 img-fluid"
              alt="..."
              style={{ objectFit: "cover", height: "80vh" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="c1.jpg"
              className="d-block w-100 img-fluid"
              alt="..."
              style={{ objectFit: "cover", height: "80vh" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="c5.jpg"
              className="d-block w-100 img-fluid"
              alt="..."
              style={{ objectFit: "fit", height: "80vh" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <section className="py-5 mt-5">
        <div className="container">
          <h2 className="text-center fw-bold fs-1 mb-4">Featured Products</h2>
          <div className="row">
            {products.map((product, index) => (
              <div className="col-md-4 mb-4 rounded-5" key={index}>
                <div className="card rounded-5 ">
                  <img
                    src={`img/products/${product.image}`}
                    className="card-img-top rounded-top-5"
                    alt={`Product ${index + 1}`}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">
                      {product.title}
                      {index + 1}
                    </h5>
                    <p className="card-text">{product.description}</p>
                    <button
                      onClick={() => Navigate("/shop")}
                      className="btn "
                      style={{ backgroundColor: "black", color: "white" }}
                    >
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="mt-5">
        <img
          src="/img/banner/b1.jpg"
          className="w-100 d-block rounded-5"
          alt=""
        />
      </div>
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4 fs-1 fw-bold">Top Categories</h2>
          <div className="row">
            {category.map((category, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card">
                  <img
                    src={`${category.img}`}
                    className="card-img-top"
                    alt={`Category ${index + 1}`}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{category.type} </h5>
                    <button
                      onClick={() => Navigate("/shop")}
                      className="btn "
                      style={{ backgroundColor: "black", color: "white" }}
                    >
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="conatiner text-center mb-5  text-capitalize">
        <div>
          <img
            src="/img/banner/b2.jpg"
            className="w-100 d-block rounded-5"
            alt=""
          />
        </div>
        <h1 className=" text-capitalize fw-bold my-5">trending style</h1>
        <div className="row">
          <div className="col-6 text-center ">
            <div className="card rounded-5 ">
              <img
                onClick={() => Navigate("/shop")}
                style={{ cursor: "pointer" }}
                src="orange.jpg"
                alt=""
                className=" rounded-4"
              />
            </div>
          </div>
          <div className=" col-6">
            <div className="card rounded-5 ">
              <img
                onClick={() => Navigate("/shop")}
                style={{ cursor: "pointer" }}
                src="gray.jpg"
                className="w-100 h-100 rounded-4"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
