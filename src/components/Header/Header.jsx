import { useCartStore } from '../../Store/Store';
import Navbar from "../Navbar/Navbar";
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const Logo = '/logo.png';
  const cart = useCartStore((state) => state.cart);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="top-0 left-0 w-full bg-black text-yellow-500 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex items-center">
          <Link to="/">
            <img src={Logo} alt="Logo Principal" className="w-36 transform hover:scale-105 transition-all duration-300" />
          </Link>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden flex items-center text-yellow-500 focus:outline-none"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            ></path>
          </svg>
        </button>
        <div className={`flex items-center gap-8 sm:flex ${isMenuOpen ? 'block' : 'hidden'} sm:block`}>
          <nav>
            <ul className="flex space-x-8 text-lg font-medium">
              <li>
                <Link to="/" className="hover:text-yellow-400 transition-all duration-300">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-yellow-400 transition-all duration-300">
                  Tienda
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="hover:text-yellow-400 transition-all duration-300">
                  Nuestros Servicios
                </Link>
              </li>
              <li>
                <Link to="/contactos" className="hover:text-yellow-400 transition-all duration-300">
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
          <Link to="/cart" className="relative">
            <img
              src="/carrito.png"
              alt="Carrito de compras"
              className="w-8 h-8 transform hover:scale-110 transition-all duration-300"
            />
            {totalItems > 0 && (
              <div className="absolute top-0 right-0 bg-yellow-500 text-xs text-white rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </div>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
