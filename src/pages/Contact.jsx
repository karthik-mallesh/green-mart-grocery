import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="py-14">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-secondary">
          Contact Us 📞
        </h1>

        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          We'd love to hear from you! Whether you have a question about
          products, pricing, or delivery — feel free to reach out.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <form
          onSubmit={handleSubmit}
          className="
          bg-white
          p-8
          rounded-3xl
          shadow-md
          hover:shadow-lg
          transition-all duration-300"
        >
          <h2 className="text-xl font-semibold mb-6">Send us a Message</h2>

          <div className="mb-5">
            <label className="block mb-2 font-medium">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              className="
              w-full
              px-4 py-3
              border
              border-gray-300
              rounded-xl
              outline-none
              focus:ring-2
              focus:ring-secondary
              transition"
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 font-medium">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email address"
              className="
              w-full
              px-4 py-3
              border
              border-gray-300
              rounded-xl
              outline-none
              focus:ring-2
              focus:ring-secondary
              transition"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-medium">Your Message</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write your message here..."
              className="
              w-full
              px-4 py-3
              border
              border-gray-300
              rounded-xl
              outline-none
              focus:ring-2
              focus:ring-secondary
              transition"
            ></textarea>
          </div>

          <button
            type="submit"
            className="
            w-full
            flex
            items-center
            justify-center
            gap-2
            bg-secondary
            text-white
            py-3
            rounded-xl
            font-medium
            hover:bg-primary
            transition-all duration-300"
          >
            <Send size={18} />
            Send Message
          </button>
        </form>

        <div
          className="
          bg-gray-50
          p-8
          rounded-3xl
          shadow-md
          flex
          flex-col
          gap-6"
        >
          <h2 className="text-xl font-semibold">Get in Touch</h2>
          <p className="text-gray-600">
            Have questions about our products or services? Reach out to us using
            the contact details below.
          </p>

          <div className="flex items-start gap-3">
            <MapPin className="text-secondary" size={20} />
            <p className="text-gray-700">
              Sathyamangalam, Erode, Tamil Nadu 638401
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="text-secondary" size={20} />
            <p className="text-gray-700">+91 1234567890</p>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="text-secondary" size={20} />
            <p className="text-gray-700">support@nalaporul.com</p>
          </div>
        </div>
      </div>

      <div className="mt-16 rounded-3xl overflow-hidden shadow-md">
        <iframe
          title="location-map"
          src="https://maps.google.com/maps?q=Erode%20Tamil%20Nadu&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-[350px] border-0"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
