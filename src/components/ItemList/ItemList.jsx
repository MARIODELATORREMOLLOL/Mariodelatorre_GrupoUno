import Item from "../Item/Item";
import { getProducts } from "../../data/asyncMock";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";

export default function ItemList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
        const uniqueCategories = [
          "all",
          ...new Set(data.map((product) => product.category)),
        ];
        setCategories(uniqueCategories);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener productos:", error);
        setLoading(false);
      });
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div>
          <div className="mb-6 flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-6 py-3 text-sm rounded-lg font-semibold shadow-lg transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white border-transparent"
                    : "bg-gray-100 border-gray-300 text-gray-800 hover:bg-gray-200 hover:scale-105"
                }`}
              >
                {category === "all" ? "Todas" : category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {filteredProducts.map((prod) => (
              <Item {...prod} key={prod.id} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}