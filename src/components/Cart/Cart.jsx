import React from 'react';
import { useCartStore } from '../../Store/Store';
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart, updateCartItem } = useCartStore();
  const CartEmpty = "/Carrito_vacio.png";

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-yellow-500">
        <img src={CartEmpty} alt="Carrito vacío" className="w-48 h-auto mb-6" />

        <h1 className="text-2xl font-bold">Tu carrito está vacío</h1>
        <p className="mt-2 text-sm text-yellow-300">Agrega ropa para iniciar la compra</p>

        <Link to="/products" className="mt-6 px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-black rounded-md shadow-md transition">
          Explorar tienda
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center py-10 bg-gray-900">
      <div className="max-w-4xl w-full bg-gray-800 rounded-lg shadow-lg overflow-hidden p-6">
        <h2 className="text-2xl font-semibold text-center text-yellow-500">Carrito de Compras</h2>
        <div className="mt-6">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between py-3 border-b border-yellow-700">
              <img src={item.img} alt={item.name} className="w-20 h-20 object-cover" />
              <div className="flex-1 ml-4">
                <p className="font-semibold text-yellow-500">{item.name}</p>
                <p className="text-sm text-yellow-300">${item.price}</p>
              </div>
              <div className="flex items-center">
                <button onClick={() => updateCartItem(item.id, item.quantity - 1)} className="bg-yellow-500 text-black px-2 py-1 rounded">
                  -
                </button>
                <span className="mx-2 text-yellow-500">{item.quantity}</span>
                <button onClick={() => updateCartItem(item.id, item.quantity + 1)} className="bg-yellow-500 text-black px-2 py-1 rounded">
                  +
                </button>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="ml-4 bg-red-600 text-white px-2 py-1 rounded">
                Eliminar
              </button>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-between items-center">
          <p className="text-lg font-semibold text-yellow-500">
            Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}
          </p>
          <button className="bg-yellow-500 text-black px-6 py-2 rounded hover:bg-yellow-600 transition">
            COMPRAR
          </button>
        </div>
      </div>
    </div>
  );
}
