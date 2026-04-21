import { useContext, useState, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import toast from "react-hot-toast";
import { myOrders } from "../../assets/assets";

const Orders = () => {
  const { currency } = useContext(AppContext);
  
  return (
    <div className="py-12">
      <h1 className="text-3xl font-bold">My Orders</h1>
      <div className="border border-gray-400 max-w-5xl mx-auto p-3">
        <div className="grid grid-cols-4 font-semibold text-gray-700">
          <div>Date</div>
          <div>Total Amount</div>
          <div>Payment Method</div>
          <div>Status</div>
        </div>
        <hr className="w-full my-4 text-gray-200" />
        <ul className="space-y-3">
          {myOrders.map((item) => (
            <li key={item._id}>
              <div className="grid grid-cols-4 items-center text-gray-800">
                 <p className="text-sm">
                  {new Date().toLocaleDateString()}
                </p>

                {/* Total Amount */}
                <p className="font-semibold">
                  {currency}
                  {item.totalAmount}
                </p>

                {/* Payment Method */}
                <p className="capitalize">{item.paymentMethod}</p>

                {/* Status with color badge */}
                <select
                  name="status"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2"
                >
                  <option value="Pending">Pending</option>
                  <option value="Processing">Processing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>
              <hr className="w-full mt-3 text-gray-200" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Orders;
