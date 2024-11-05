import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="p-4">
            <ul className="flex flex-col sm:flex-row space-x-0 sm:space-x-6 justify-center">
                <li className="mb-2 sm:mb-0">
                    <Link to="/" className="text-white text-lg font-medium hover:text-blue-400 transition-colors duration-200">
                        Inicio
                    </Link>
                </li>
                <li className="mb-2 sm:mb-0">
                    <Link to="/about" className="text-white text-lg font-medium hover:text-blue-400 transition-colors duration-200">
                        Acerca
                    </Link>
                </li>
                <li className="mb-2 sm:mb-0">
                    <Link to="/products" className="text-white text-lg font-medium hover:text-blue-400 transition-colors duration-200">
                        Tienda
                    </Link>
                </li>
            </ul>
        </nav>
    );
}