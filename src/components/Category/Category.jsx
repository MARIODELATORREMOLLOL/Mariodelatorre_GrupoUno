import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { getProductByCategory } from "../../data/asyncMock";
import Loading from "../Loading/Loading";

export default function CategoryPage() {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        getProductByCategory(categoryId)
            .then((data) => setProducts(data))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }, [categoryId]);

    return (
        <div className="container mx-auto">
            {loading ? (
                <Loading />
            ) : products.length === 0 ? (
                <div>No hay productos en esta categoría.</div>
            ) : (
                <ItemList products={products} />
            )}
        </div>
    );
}
