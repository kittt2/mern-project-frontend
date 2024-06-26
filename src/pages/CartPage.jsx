import React, { useState, useEffect } from "react";
import { useCart } from "../context/cart.jsx";
import { useauth } from "../context/Context.jsx";
import { useNavigate } from "react-router-dom";
import { AiFillWarning } from "react-icons/ai";
import axios from "axios";
import toast from "react-hot-toast";

const CartPage = () => {
  const [auth, setAuth] = useauth();
  const [cart, setCart] = useCart();
  const [clientToken, setClientToken] = useState("");
  const [instance, setInstance] = useState("");
  const [total1, settotal] = useState("")
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [amount, setamount] = useState('');
  const [loading, setLoading] = useState(false);
  const apiUrl = import.meta.env.VITE_API_URL;
  const handle_Payment = async (event) => {
    event.preventDefault();
    if (cvv.length !== 3 || cardNumber.length !== 16 || expirationDate.length !== 4) {
      toast.error("Please fill the correct details");
      
      return;
     
    }
    else if(parseFloat(amount) !== parseFloat(total1)){
      toast.error('Hi,enter the correct amount will you!');
    }

    else {
      setLoading(true);
      const paymentData = {
        nonce: 'fake-nonce', 
        cart: cart, 

      };

      try {
        const response = await axios.post(`${apiUrl}/api/v1/product/process-payment`, paymentData);
        console.log(response.data); 
        setLoading(true);
        setLoading(false);
        localStorage.removeItem("cart");
        setCart([]);
        navigate("/dashboard/user/orders");
        toast.success("Payment Completed Successfully ");
      } catch (error) {
        console.error('Error:', error);
        setLoading(false);

      } finally {
        setLoading(false);
      }
    }
  }

  

  //total price
  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => {
        total = total + item.price;

      });
      
      return total

    } catch (error) {
      console.log(error);
    }
  };
   
  useEffect(() => {
      const total= totalPrice();
         settotal(total)
  }, [cart])
  


  //detele item
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
    <>
      <div className=" cart-page">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center bg-light p-2 mb-1">
              <br />
              {!auth?.user
                ? "Hello Guest"
                : `Hello  ${auth?.token && auth?.user?.name}`}
              <p className="text-center">
                {cart?.length
                  ? `You Have ${cart.length} items in your cart ${auth?.token ? "" : "please login to checkout !"
                  }`
                  : " Your Cart Is Empty"}
              </p>
            </h1>
          </div>
        </div>
        <div className="container ">
          <div className="row ">
            <div className="col-md-7  p-0 m-0">
              {cart?.map((p) => (
                <div className="row card flex-row" key={p._id} id="cartpro">
                  <div className="col-md-4">
                    <img
                      src={`${apiUrl}/api/v1/product/product-photo/${p._id}`}
                      className="card-img-top"
                      alt={p.name}
                      width="100%"
                      height={"130px"}
                    />
                  </div>
                  <div className="col-md-4">
                    <p>{p.name}</p>
                    <p>{p.description.substring(0, 30)}</p>
                    <p>Price : {p.price}</p>
                  </div>
                  <div className="col-md-4 cart-remove-btn">
                    <button
                      className="btn btn-danger"
                      onClick={() => removeCartItem(p._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-md-5 cart-summary ">
              <h2>Cart details</h2>
              <p>Total | Checkout | Payment</p>
              <hr />
              <h4>Total : Rs {total1} </h4>
              {auth?.user?.address ? (
                <>
                  <div className="mb-3">
                    <h4>Current Address</h4>
                    <h5>{auth?.user?.address}</h5>
                    <button
                      className="btn btn-outline-warning"
                      onClick={() => navigate("/dashboard/user/profile")}
                    >
                      Update Address
                    </button>
                  </div>
                </>
              ) : (
                <div className="mb-3">
                  {auth?.token ? (
                    <button
                      className="btn btn-outline-warning"
                      onClick={() => navigate("/dashboard/user/profile")}
                    >
                      Update Address
                    </button>
                  ) : (
                    <button
                      className="btn btn-outline-warning"
                      onClick={() =>
                        navigate("/login", {
                          state: "/cart",
                        })
                      }
                    >
                      Plase Login to checkout
                    </button>
                  )}
                </div>
              )}
              <div className="mt-2">
                {!auth?.token || !cart?.length ? (
                  ""
                ) : (
                  <>
                    <div className="form">
                      <h1> Card Payment</h1>
                      <form onSubmit={handle_Payment}>
                        <label htmlFor="cardNumber">Card Number:</label>
                        <input
                          type="text"
                          id="cardNumber must be 16 digit"
                          value={cardNumber}
                          onChange={(e) => setCardNumber(e.target.value)}
                          required
                          className="input"
                        />
                        <br />
                        <label htmlFor="expirationDate">Expiration Date:</label>
                        <input
                          type="text"
                          id="expirationDate"
                          value={expirationDate}
                          onChange={(e) => setExpirationDate(e.target.value)}
                          placeholder="4 digit expiry date "
                          required
                          className="input"
                        />
                        <br />
                        <label htmlFor="cvv">CVV:</label>
                        <input
                          type="text"
                          id="cvv"
                          value={cvv}
                          onChange={(e) => setCvv(e.target.value)}
                          required
                          className="input"
                        />
                        <br />
                        <label htmlFor="Amount">Amount:</label>
                        <input
                          type="number"
                          id="amount"
                          value={amount}
                          onChange={(e) => setamount(e.target.value)}
                          required
                          className="input"
                        />
                        <br />
                        <button type="submit" disabled={loading} className="btn">
                          {loading ? 'Processing...' : 'Pay Now'}
                        </button>
                      </form>
                    </div>

                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>







    </>


  );
};

export default CartPage;
