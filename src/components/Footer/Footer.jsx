import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok, FaPinterest } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-yellow-500 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Navegación</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="hover:text-yellow-300 transition-colors duration-200"
                >Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/nosotros"
                  className="hover:text-yellow-300 transition-colors duration-200"
                >Acerca de Nosotros
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-yellow-300 transition-colors duration-200"
                >Tienda
                </Link>
              </li>
              <li>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h2 className="text-xl font-semibold mb-4">Redes Sociales</h2>
            <div className="flex justify-center sm:justify-start space-x-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-yellow-500 text-2xl hover:text-yellow-300 transition-colors duration-200" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-yellow-500 text-2xl hover:text-yellow-300 transition-colors duration-200" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-yellow-500 text-2xl hover:text-yellow-300 transition-colors duration-200" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                <FaTiktok className="text-yellow-500 text-2xl hover:text-yellow-300 transition-colors duration-200" />
              </a>
              <a href="https://cl.pinterest.com/" target="_blank" rel="noopener noreferrer">
                <FaPinterest className="text-yellow-500 text-2xl hover:text-yellow-300 transition-colors duration-200" />
              </a>
            </div>
          </div>

        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">&copy; 2024 Barranca Zonda. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
