import { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets.js";
import { AppContext } from "../context/AppContext.jsx";
import toast from "react-hot-toast";
const Checkout = () => {
  const { cart, navigate, currency, getCartTotal } = useContext(AppContext);

  const [address, setAddress] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(address[0]);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  console.log("address", address);

  const placeOrder = async () => {
    toast.success("checkout successfully");
    navigate("/my-orders");
  };

  return (
    <div
      className="py-12 bg-[#0B482F]"
      style={{ backgroundImage: `url(${assets.footer_img})` }}
    >
      <h1 className="text-3xl font-bold text-white text-center">Checkout</h1>
      <div className="flex flex-col md:flex-row items-center justify-evenly gap-6">
        <div>
          <h1 className="text-3xl font-bold text-white text-center ">
            Cart Summary
          </h1>
          <div className="my-5 max-w-4xl w-full p-4 rounded-md border bg-white border-primary">
            {cart.map((item) => (
              <div
                key={item._id}
                className="w-full flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <img src={item.images[0]} alt="" className="w-20 h-20" />
                  <p>{item.name}</p>
                </div>
                <p>
                  {currency}
                  {item.offerPrice}
                </p>
              </div>
            ))}
            <p>
              Total: {currency}
              {getCartTotal()}
            </p>
          </div>
        </div>

        <div className="text-white flex flex-col gap-6">
          <h1 className="text-3xl font-bold">Order Summary </h1>
          <div className="flex flex-col gap-6">
            <label htmlFor="address">Select Address</label>
            <select
              className="w-full outline-none border border-primary p-2"
              value={selectedAddress}
              onChange={(e) => setSelectedAddress(e.target.value)}
            >
              {/* {address?.map((item) => (
                <option
                  className="text-gray-800"
                  key={item._id}
                  value={item._id}
                >
                  {item.name} - {item.email} - {item.city} - {item.country} -
                  {item.state} - {item.zipCode}
                </option>
              ))} */}
              <option>India</option>
              <option>USA</option>
            </select>

            <button
              onClick={() => navigate("/add-address")}
              className="bg-primary text-white cursor-pointer px-6 py-2 "
            >
              Add New Address
            </button>
          </div>

          <div className="flex flex-col gap-6">
            <label htmlFor="address">Select Payment Method</label>
            <select
              className="w-full outline-none border border-primary p-2"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value={"cod"} className="text-gray-800">
                COD
              </option>
              <option value={"online"} className="text-gray-800">
                ONLINE
              </option>
            </select>
          </div>
          <button
            type="submit"
            onClick={placeOrder}
            className="bg-primary text-white cursor-pointer px-6 py-2"
          >
            {paymentMethod === "cod" ? "Place Order" : "Pay Now"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
