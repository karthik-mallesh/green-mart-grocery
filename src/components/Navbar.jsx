import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { assets } from "../assets/assets.js";
import { Heart, ShoppingBag, Search, Menu, X } from "lucide-react";

import { AppContext } from "../context/AppContext.jsx";
import toast from "react-hot-toast";

const Navbar = () => {
  const { navigate, user, setUser, cart, favorite, axios } =
    useContext(AppContext);

  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Active Link Style
  const isActive = (path) => {
    return location.pathname === path
      ? "text-secondary font-semibold"
      : "text-gray-600";
  };

  // Logout
  const logout = async () => {
    try {
      const { data } = await axios.get("/api/auth/logout");

      if (data.success) {
        toast.success(data.message);
        setUser(false);
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <nav
      className="
      sticky top-0 z-50
      flex items-center justify-between
      px-6 md:px-12 lg:px-20
      py-3
      bg-white
      shadow-sm"
    >
      {/* Logo */}
      <Link to="/">
        <img src={assets.logo} alt="logo" className="w-36 md:w-40" />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6">
        <Link to="/" className={isActive("/")}>
          Home
        </Link>

        <Link to="/shop" className={isActive("/shop")}>
          Shop
        </Link>

        <Link to="/about" className={isActive("/about")}>
          About
        </Link>

        <Link to="/contact" className={isActive("/contact")}>
          Contact
        </Link>
      </div>

      {/* Search Bar */}
      <div className="hidden lg:flex items-center relative w-[350px]">
        <Search className="absolute left-3 w-4 h-4 text-gray-400" />

        <input
          type="text"
          placeholder="Search products..."
          className="
          w-full
          pl-10 pr-4 py-2
          border border-gray-300
          rounded-full
          focus:outline-none
          focus:border-primary"
        />
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-6">
        {/* Wishlist */}
        <div
          onClick={() => navigate("/wishlist")}
          className="relative cursor-pointer"
        >
          <Heart className="w-6 h-6 text-gray-700 hover:text-red-500 transition" />

          <span
            className="
            absolute -top-2 -right-2
            bg-red-500
            text-white
            text-xs
            w-5 h-5
            flex items-center justify-center
            rounded-full"
          >
            {favorite?.length || 0}
          </span>
        </div>

        {/* Cart */}
        <div
          onClick={() => navigate("/cart")}
          className="relative cursor-pointer"
        >
          <ShoppingBag className="w-6 h-6 text-gray-700 hover:text-primary transition" />

          <span
            className="
            absolute -top-2 -right-2
            bg-primary
            text-white
            text-xs
            w-5 h-5
            flex items-center justify-center
            rounded-full"
          >
            {cart?.length || 0}
          </span>
        </div>

        {/* User */}
        {user ? (
          <div className="relative group">
            <img
              src={assets.profile_pic}
              alt="profile"
              className="
              w-9 h-9
              rounded-full
              cursor-pointer
              border"
            />

            {/* Dropdown */}
            <div
              className="
              absolute right-0 mt-3
              w-40
              bg-white
              shadow-lg
              rounded-xl
              opacity-0
              invisible
              group-hover:opacity-100
              group-hover:visible
              transition duration-300"
            >
              <ul className="text-gray-700 text-sm">
                <li
                  onClick={() => navigate("/my-orders")}
                  className="
                  px-4 py-2
                  hover:bg-gray-100
                  cursor-pointer"
                >
                  My Orders
                </li>

                <li
                  onClick={logout}
                  className="
                  px-4 py-2
                  hover:bg-gray-100
                  cursor-pointer text-red-500"
                >
                  Logout
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="
            hidden md:block
            px-6 py-2
            bg-primary
            text-white
            rounded-full
            hover:bg-secondary
            transition"
          >
            Login
          </button>
        )}

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
        md:hidden
        absolute
        top-full left-0
        w-full
        bg-white
        shadow-md
        flex flex-col
        gap-4
        px-6 py-4
        transition
        ${open ? "block" : "hidden"}
        `}
      >
        <Link to="/" onClick={() => setOpen(false)}>
          Home
        </Link>

        <Link to="/shop" onClick={() => setOpen(false)}>
          Shop
        </Link>

        <Link to="/about" onClick={() => setOpen(false)}>
          About
        </Link>

        <Link to="/contact" onClick={() => setOpen(false)}>
          Contact
        </Link>

        {user ? (
          <>
            <button
              onClick={() => navigate("/my-orders")}
              className="text-left"
            >
              My Orders
            </button>

            <button onClick={logout} className="text-left text-red-500">
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="
            px-6 py-2
            bg-primary
            text-white
            rounded-full"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
