import React, { useState, useEffect } from "react";
import { getProducts } from "../../data/asyncMock";
import ItemList from "../ItemList/ItemList";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
      setFilteredProducts(data);
    });
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <div className="container mx-auto max-w-screen-xl py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Nuestra Tienda</h1>
        <ItemList products={filteredProducts} />
      </div>
    </div>
  );
}
