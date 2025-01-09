import React, { useState } from "react";
import { useCart } from "../context/cart.jsx";
import { useauth } from "../context/Context.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { AiFillWarning } from "react-icons/ai";
import { Helmet } from "react-helmet";

const CartPage = () => {
  const [auth, setAuth] = useauth();
  const apiUrl = import.meta.env.VITE_API_URL;

  const [cart, setCart] = useCart();
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handlePayment = async (event) => {
    event.preventDefault();
    if (
      cvv.length !== 3 ||
      cardNumber.length !== 16 ||
      expirationDate.length !== 4
    ) {
      toast.error("Please fill in the correct details");
      return;
    } else {
      setLoading(true);

      const paymentData = {
        nonce: "fake-nonce",
        cart: cart,
      };

      try {
        const response = await axios.post(
          `${apiUrl}/api/v1/product/process-payment`,
          paymentData
        );
        setLoading(false);
        localStorage.removeItem("cart");
        setCart([]);
        navigate("/dashboard/user/orders");
        toast.success("Payment Completed Successfully");
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }
  };

  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => {
        total = total + item.price;
      });
      return `₹ ${total}`;
    } catch (error) {
      console.log(error);
    }
  };

  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container my-4">
      <Helmet>
        <title>Cart</title>
        <meta name="description" content="Learn more about us" />
      </Helmet>

      <div>
        <img
          src="/img/banner/b1.jpg"
          className="d-block w-100 rounded-5 my-4"
          alt="Banner"
        />
      </div>
      <div className="text-center mb-4">
        <h1 className="bg-light p-3 rounded">
          {!auth?.user ? "Hello User" : `Hello ${auth?.user?.name}`}
        </h1>
        <p className="fs-4">
          {cart?.length
            ? `You have ${cart.length} items in your cart. ${
                auth?.token ? "" : "Please login to checkout!"
              }`
            : "Your Cart is Empty"}
        </p>
      </div>
      <div className="row">
        <div className="col-md-8">
          {cart?.map((p) => (
            <div className="card mb-3 border-0 shadow-sm rounded-3" key={p._id}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={`${apiUrl}/api/v1/product/product-photo/${p._id}`}
                    className="img-fluid rounded-start"
                    alt={p.name}
                    style={{ height: "130px", objectFit: "cover" }}
                  />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                  <h5 className="card-title text-dark">{p.name}</h5>
                  <p className="card-text text-muted">
                    {p.description.substring(0, 50)}...
                  </p>
                  <p className="card-text text-primary fw-bold">
                    Price: ₹ {p.price}
                  </p>
                </div>
                <div className="col-md-2 d-flex align-items-center justify-content-center">
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => removeCartItem(p._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-4">
          <div className="card p-4 border-0 shadow-sm rounded-3">
            <h2>Cart Details</h2>
            <hr />
            <h4>Total: {totalPrice()}</h4>
            {auth?.user?.address ? (
              <div className="mb-3">
                <h5>Current Address</h5>
                <p>{auth?.user?.address}</p>
                <button
                  className="btn btn-outline-warning w-100"
                  onClick={() => navigate("/dashboard/user/profile")}
                >
                  Update Address
                </button>
              </div>
            ) : (
              <div className="mb-3">
                {auth?.token ? (
                  <button
                    className="btn btn-outline-warning w-100"
                    onClick={() => navigate("/dashboard/user/profile")}
                  >
                    Update Address
                  </button>
                ) : (
                  <button
                    className="btn btn-outline-warning w-100"
                    onClick={() =>
                      navigate("/login", {
                        state: "/cart",
                      })
                    }
                  >
                    Please Login to Checkout
                  </button>
                )}
              </div>
            )}
            {auth?.token && cart?.length ? (
              <form onSubmit={handlePayment}>
                <h4>Card Payment</h4>
                <div className="mb-3">
                  <label htmlFor="cardNumber" className="form-label">
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="expirationDate" className="form-label">
                    Expiration Date
                  </label>
                  <input
                    type="text"
                    id="expirationDate"
                    value={expirationDate}
                    onChange={(e) => setExpirationDate(e.target.value)}
                    className="form-control"
                    placeholder="MMYY"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="cvv" className="form-label">
                    CVV
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary btn-dark w-100"
                >
                  {loading ? "Processing..." : "Pay Now"}
                </button>
              </form>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
