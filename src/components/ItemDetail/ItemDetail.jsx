import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../data/asyncMock";
import Loading from "../Loading/Loading";

export default function ItemDetail() {
    const { productId } = useParams();
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        getProducts().then((data) => {
            const foundItem = data.find((prod) => prod.id === parseInt(productId));
            setItem(foundItem);
            setLoading(false);
        });
    }, [productId]);

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    const incrementQuantity = () => {
        if (quantity < item.stock) {
            setQuantity(quantity + 1);
        }
    };

    const totalPrice = item.price * quantity;

    if (loading) {
        return <Loading />;
    }
    if (!item) {
        return <div>Item not found</div>;
    }

    return (
        <div className='container mx-auto'>
            <div className="grid grid-cols-2 pt-10 pb-24">
                <div className="pr-8">
                    <img src={item.img} alt={item.name} className='w-full rounded-lg' />
                </div>
                <div>
                    <h1 className='text-4xl font-semibold'>{item.name}</h1>
                    <p className='text-lg my-4'>{item.description}</p>
                    <div>
                        <h3>Available Sizes:</h3>
                        <ul className='flex'>
                            {item.size.map((size, index) => (
                                <li key={index} className='border p-2 mx-2'>{size}</li>
                            ))}
                        </ul>
                    </div>
                    <p>Stock: {item.stock}</p>
                    <div className='flex'>
                        <button onClick={decrementQuantity}>-</button>
                        <span>{quantity}</span>
                        <button onClick={incrementQuantity}>+</button>
                    </div>
                    <p>Price: ${item.price} each</p>
                    <p>Total: ${totalPrice}</p>
                    <button className='bg-black text-white'>Buy Now</button>
                </div>
            </div>
        </div>
    );
}