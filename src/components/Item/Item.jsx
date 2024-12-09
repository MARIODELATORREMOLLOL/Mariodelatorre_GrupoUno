import { Link } from "react-router-dom";
import { useCartStore } from "../../Store/Store";

export default function Item({ id, name, price, img }) {
    const addToCart = useCartStore((state) => state.addToCart);

    const handleAddToCart = () => {
        const product = {
            id,
            name,
            price,
            img,
            quantity: 1, 
        };
        addToCart(product);
        alert(`${name} añadido al carrito.`);
    };

    return (
        <div className="bg-gray-800 text-white p-4 shadow-md border border-gray-700 h-full">
            <Link to={`/products/${id}`}>
                <img src={img} alt={name} className="w-full h-50 object-cover mb-4" />
                <h2 className="text-lg font-semibold mb-2">{name}</h2>
                <p className="text-xl font-bold mb-4">${price}</p>
            </Link>
            <button
                onClick={handleAddToCart}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded mt-2"
            >
                Agregar al carrito
            </button>
        </div>
    );
}
