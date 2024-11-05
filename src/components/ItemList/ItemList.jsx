import { getProducts } from "../../data/asyncMock";
import { useEffect, useState } from "react";
import Item from "../Item/Item";
import Loading from "../Loading/Loading";

export default function ItemList({ products: initialProducts }) {
    const [products, setProducts] = useState(initialProducts || []);
    const [loading, setLoading] = useState(!initialProducts);

    useEffect(() => {
        if (!initialProducts) {
            getProducts().then((data) => {
                setProducts(data);
                setLoading(false);
            });
        } else {
            setLoading(false);
        }
    }, [initialProducts]);

    return (
        <>
            {loading ? (
                <div>
                    <Loading />
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 ">
                    {products.map((prod) => (
                        <Item key={prod.id} {...prod} />
                    ))}
                </div>
            )}
        </>
    );
}