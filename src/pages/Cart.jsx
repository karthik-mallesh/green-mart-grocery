import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { CircleX, Plus, Minus, ShoppingCart } from "lucide-react";

const Cart = () => {
  const {
    cart,
    currency,
    navigate,
    removeFromCart,
    updateQuantity,
    getCartTotal,
  } = useContext(AppContext);

  if (cart.length === 0) {
    return (
      <div className="py-20 flex flex-col items-center justify-center text-center">
        <ShoppingCart size={60} className="text-gray-400 mb-4" />
        <h2 className="text-2xl font-bold text-gray-700">
          Your Cart is Empty
        </h2>

        <p className="text-gray-500 mt-2">
          Looks like you haven't added anything yet.
        </p>

        <button
          onClick={() => navigate("/shop")}
          className="
          mt-6
          px-6
          py-3
          bg-secondary
          text-white
          rounded-xl
          hover:bg-primary
          transition"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-secondary">
        My Cart 
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          {cart.map((item) => (
            <div
              key={item._id}
              className="
              flex
              items-center
              gap-6
              bg-white
              p-5
              rounded-2xl
              shadow-sm
              border"
            >
              <img
                src={item.images[0]}
                alt={item.name}
                className="
                w-24
                h-24
                object-cover
                rounded-xl"
              />

              <div className="flex-1">
                <h2 className="font-semibold text-lg">{item.name}</h2>
                <p className="text-secondary font-bold mt-1">
                  {currency}
                  {item.offerPrice}
                </p>

                <div className="flex items-center gap-3 mt-3">
                  <button
                    onClick={() => updateQuantity(item._id, item.quantity - 1)}
                    className="
                    p-2
                    border
                    rounded-lg
                    hover:bg-gray-100"
                  >
                    <Minus size={16} />
                  </button>

                  <span className="px-3">{item.quantity}</span>

                  <button
                    onClick={() => updateQuantity(item._id, item.quantity + 1)}
                    className="
                    p-2
                    border
                    rounded-lg
                    hover:bg-gray-100"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              <div className="text-right">
                <p className="font-semibold text-lg">
                  {currency}
                  {item.quantity * item.offerPrice}
                </p>

                <button
                  onClick={() => removeFromCart(item._id)}
                  className="
                  text-red-500
                  mt-2
                  hover:text-red-700"
                >
                  <CircleX />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div
          className="
          bg-gray-50
          p-6
          rounded-2xl
          shadow-sm
          border
          h-fit"
        >
          <h2 className="text-xl font-semibold mb-5">Order Summary</h2>

          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>
                {currency}
                {getCartTotal()}
              </span>
            </div>

            <div className="flex justify-between text-gray-500">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <hr />

            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>
                {currency}
                {getCartTotal()}
              </span>
            </div>
          </div>

          <button
            onClick={() => navigate("/checkout")}
            className="
            mt-6
            w-full
            py-3
            bg-secondary
            text-white
            rounded-xl
            font-medium
            hover:bg-primary
            transition"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
