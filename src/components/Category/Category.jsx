import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductByCategory } from "../../data/asyncMock";
import Loading from "../Loading/Loading";
import ItemList from "../ItemList/ItemList";

export default function Category() {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
 
        if (categoryId === 'Todos') {
            setFilteredProducts(products); 
            setLoading(false);
        } else {
            getProductByCategory(categoryId)
                .then((data) => {
                    setProducts(data);
                    setFilteredProducts(data); 
                })
                .catch((err) => console.log(err))
                .finally(() => setLoading(false));
        }
    }, [categoryId, products]); 

 
    const handleCategoryClick = (category) => {
        if (category === "Todos") {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter((product) => product.category === category);
            setFilteredProducts(filtered); 
        }
    };

    return (
        <div className="container mx-auto max-w-[1200px] my-[50px]">
            <div className="flex gap-4 mb-6">
                <button
                    className="px-4 py-2 bg-blue-600 text-white rounded"
                    onClick={() => handleCategoryClick("Todos")}
                >Todos
                </button>
                <button
                    className="px-4 py-2 bg-blue-600 text-white rounded"
                    onClick={() => handleCategoryClick("Categoria1")}
                >Categoría 1
                </button>
                <button
                    className="px-4 py-2 bg-blue-600 text-white rounded"
                    onClick={() => handleCategoryClick("Categoria2")}
                >Categoría 2
                </button>
            </div>

            {loading ? (
                <Loading />
            ) : (
                <ItemList products={filteredProducts} />
            )}
        </div>
    );
}