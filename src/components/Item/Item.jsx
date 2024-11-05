import { Link } from "react-router-dom";

export default function Item({ id, name, price, img }) {
    return (
        <div className="bg-gray-800 text-white p-4 shadow-md border border-gray-700  h-full">
            <Link to={`/products/${id}`}>
                <img src={img} alt={name} className="w-full h-50 object-cover mb-4" />
                <h2 className="text-lg font-semibold mb-2">{name}</h2>
                <p className="text-xl font-bold mb-4">${price}</p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded">
                    Agregar al carrito
                </button>
            </Link>
        </div>
    );
}