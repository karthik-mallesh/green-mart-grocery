import { Link } from "react-router-dom";
import { assets } from "../assets/assets.js";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="
      relative
      text-white
      mt-16"
      style={{
        backgroundImage: `url(${assets.footer_img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#155136]/90"></div>

      <div
        className="
        relative
        max-w-7xl
        mx-auto
        px-6
        py-16
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-5
        gap-10"
      >
        <div className="flex flex-col gap-4">
          <img src={assets.logo} alt="logo" className="w-28" />

          <p className="text-sm text-gray-200 leading-relaxed">
            Fresh groceries delivered to your doorstep. Quality organic products
            at the best prices.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-xl font-semibold mb-2">Useful Pages</h1>

          <Link to="/" className="hover:text-yellow-300 transition">
            Home
          </Link>

          <Link to="/shop" className="hover:text-yellow-300 transition">
            Shop
          </Link>

          <Link to="/about" className="hover:text-yellow-300 transition">
            About
          </Link>

          <Link to="/contact" className="hover:text-yellow-300 transition">
            Contact
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-xl font-semibold mb-2">Help Center</h1>

          <Link to="" className="hover:text-yellow-300 transition">
            Payment
          </Link>

          <Link to="" className="hover:text-yellow-300 transition">
            Shipping
          </Link>

          <Link to="" className="hover:text-yellow-300 transition">
            Product Returns
          </Link>

          <Link to="" className="hover:text-yellow-300 transition">
            Checkout
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-xl font-semibold mb-2">Contact Us</h1>

          <div className="flex items-center gap-2 text-sm">
            <MapPin size={16} />
            <span>Sathyamangalam, Tamil Nadu</span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <Phone size={16} />
            <span>+91 987654321</span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <Mail size={16} />
            <span>support@nala-porul.com</span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-xl font-semibold mb-2">Download Ap</h1>

          <img
            src={assets.app_store}
            alt="app-store"
            className="
            w-40
            cursor-pointer
            hover:scale-105
            transition"
          />

          <img
            src={assets.play_store}
            alt="play-store"
            className="
            w-40
            cursor-pointer
            hover:scale-105
            transition"
          />
        </div>
      </div>

      <div
        className="
        relative
        border-t
        border-white/20
        text-center
        py-4
        text-sm
        text-gray-200"
      >
        © {new Date().getFullYear()} Nala Porul 🛒 All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
