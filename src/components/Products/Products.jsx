import { useState, useEffect } from "react";
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
        <div className="bg-black p-4 min-h-screen text-yellow-500">
            <div className="container mx-auto max-w-screen-lg">
                <h1 className="text-3xl font-bold text-center mb-6">Productos</h1>
                <ItemList products={filteredProducts} />
            </div>
        </div>
    );
}
