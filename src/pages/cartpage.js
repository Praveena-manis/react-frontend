import React,{useState,useEffect} from "react";
import Layout from "../components/Layout/Layout";
import { useCart } from "../context/cart";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../config";
import DropIn from "braintree-web-drop-in-react";
import axios from 'axios';
import {toast} from 'react-toastify';
const CartPage = () => {
  //eslint-disable-next-line
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();//used 
  const [clientToken, setClientToken] = useState("");
  const [instance, setInstance] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  //used increment and decrement the quantity
const handleIncrement=(_id)=>{
  setCart(cart=>cart.map((item)=>_id===item.id? {...item,quantity:item.quantity+(item.quantity<10?1:0)}:item))
}
const handleDecrement=(_id)=>{
  setCart(cart=>cart.map((item)=>_id===item.id? {...item,quantity:item.quantity-(item.quantity>1?1:0)}:item)) 
}
  //total price
  const totalPrice = () => {
    try {
      let total = 0;
      // eslint-disable-next-line array-callback-return
      cart.map((item) => {
        total = total + item.price*item.quantity;
      });
      //return total amount in INR
      return total.toLocaleString("en-IN", {
        style: "currency",
        currency: "INR",
      });
    } catch (error) {
      console.log(error);
    }
  };
  //delete item 
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
  //get client token for payment method used paypal braintree
  const getToken=async()=>{
    try{
      const {data}=await axios.get(`${BASE_URL}/api/v1/product/braintree/token`);
      setClientToken(data?.clientToken);
    }catch(error){
      console.log(error);
    }
  };
  useEffect(()=>{
    getToken();
  },[auth?.token]);
  //used nonce and data for payment using axios and post method
  const handlePayment = async () => {
    try {
      setLoading(true);
      const  {nonce} = await instance.requestPaymentMethod();
      //eslint-disable-next-line
      const {data}  =await axios.post(`${BASE_URL}/api/v1/product/braintree/payment`, {
        nonce,
        cart
      });
      setLoading(false);
      localStorage.removeItem("cart");
      //after remove the item from cart set the cart to zero
      setCart([]);
      navigate("/dashboard/user/orders");
      toast.success("Payment Completed Successfully ");
    } catch (error) { 
      console.log(error);
      setLoading(false);
      toast.error('Payment Failed. Please try again.');
    }
  };
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center bg-light p-2 mb-1">
              {/*get user token and user name or allow guest */}
            {!auth.user
                ? "Hello Guest"
                : `Hello  ${auth.token && auth.user.name}`}
            </h1>
            <h4 className="text-center">
              {/*if user is guest after login only allowed to place order*/}
              {cart.length
                ? `You Have ${cart.length} items in your cart ${
                    auth.token ? "" : "please login to checkout"
                  }`
                : " Your Cart Is Empty"}
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            {/*used map function for getting the product */}
            {cart.map((p) => (
              <div className="row mb-2 p-3 card flex-row"key={p._id}>
                <div className="col-md-4">
                  <img
                  src={`${BASE_URL}/api/v1/product/download/${p.image}`}
                    className="card-img-top"
                    alt={p.name}
                    width="100px"
                    height={"100px"}
                  />
                </div>
                <div className="col-md-6">
                  <p>{p.name}</p>
                  <p>{p.description.substring(0, 30)}</p>
                  <p>Price : {p.price}</p>
                  {/*used button with onClick event for increment and decrement the quantity*/}
                  <div className="input-group">
                  <button type="button" onClick={()=>handleIncrement(p.id)}>+</button>
                 <div className="form-control text-center">{p.quantity}</div>
        <button type="button" onClick={()=>handleDecrement(p.id)}>-</button> 
                 </div>
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
          <div className="col-md-4 text-center">
            <h2>Cart Summary</h2>
            <p>Total | Checkout | Payment</p>
            <hr />
            {/*for checkout need to update the address*/}
            <h4>Total : {totalPrice()} </h4>
            {auth?.user?.address ? (
              <>
                <div className="mb-3">
                  <h4>Current Address</h4>
                  <h5>{auth.user.address}</h5>
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
                        state: "/cartpage",
                      })
                    }
                  >

                    {/*visit as guest before checkout login is mandatory*/}
                    Please Login to checkout
                  </button>
                )}
              </div>
            )}
             <div className="mt-2">
              {!clientToken||!auth.token || !cart.length ? (
                ""
              ) : (
                <>
                {/*used dropin for payment used card and paypal account*/}
                  <DropIn
                    options={{
                      authorization: clientToken,
                      paypal: {
                        flow: "vault",
                      },
                    }}
                    onInstance={(instance) => setInstance(instance)}
                  />

                  <button
                    className="btn btn-primary"
                    onClick={handlePayment}
                    disabled={loading || !instance || !auth?.user?.address}
                  >
                    {loading ? "Processing ...." : "Make Payment"}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;