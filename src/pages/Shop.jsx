import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import ProductCard from "../components/ProductCard";
import { Search } from "lucide-react";

const Shop = () => {
  const { productsData } = useContext(AppContext);
  const [input, setInput] = useState("");
  const [filteredProdcuts, setFilteredProdcuts] = useState(productsData);
  const handleSearch = () => {
    const query = input.toLowerCase().trim();
    if (query === "") {
      setFilteredProdcuts(productsData);
    } else {
      const result = productsData.filter((product) =>
        product.name.toLowerCase().includes(query),
      );
      setFilteredProdcuts(result);
    }
  };
  useEffect(() => {
    handleSearch();
  }, [input, productsData]);
  return (
    <div className="py-12 px-4 md:px-8 lg:px-16">
      <div className="flex items-center justify-center mt-12 px-4">

  <div
    className="
    flex items-center
    w-full
    max-w-2xl
    bg-white
    border border-gray-200
    rounded-full
    shadow-sm
    hover:shadow-md
    transition-all duration-300
    overflow-hidden"
  >

    {/* Search Icon */}
    <Search
      size={20}
      className="ml-4 text-gray-400"
    />

    {/* Input */}
    <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Search for fresh fruits, vegetables..."
      className="
      w-full
      px-3
      py-3
      outline-none
      text-sm
      placeholder-gray-400
      bg-transparent"
    />

    {/* Search Button */}
    <button
      className="
      hidden md:flex
      items-center
      gap-2
      px-6
      py-3
      bg-primary
      text-white
      font-medium
      hover:bg-secondary
      transition-all duration-300"
    >
      <Search size={18} />
      Search
    </button>

  </div>

</div>
      <h1 className="mt-4 text-secondary font-extrabold text-3xl">
        Explore All Products
      </h1>
      <div className="mt-6 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center justify-center gap-4">
        {filteredProdcuts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};
export default Shop;
