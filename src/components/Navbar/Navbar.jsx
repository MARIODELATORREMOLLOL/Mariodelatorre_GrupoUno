import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="p-4 sm:p-0">
      <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
        <li>
          <Link
            to="/"
            className="text-white text-lg font-medium hover:text-blue-400 transition-colors duration-200"
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            to="/nosotros"
            className="text-white text-lg font-medium hover:text-red-600	 transition-colors duration-200"
          >
            Acerca de nosotros
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className="text-white text-lg font-medium hover:text-blue-400 transition-colors duration-200"
          >
            Tienda
          </Link>
        </li>
      </ul>
    </nav>
  );
}