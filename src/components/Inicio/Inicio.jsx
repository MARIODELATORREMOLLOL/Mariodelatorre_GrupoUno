import { Link } from "react-router-dom";

export default function Inicio() {
  return (
    <div className="relative">
      <video autoPlay loop muted className="absolute w-full h-full object-cover z-0">
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 container mx-auto flex flex-col items-center justify-center min-h-screen text-yellow-500 text-center space-y-6">
        <h1 className="text-6xl font-bold">Explora todo nuestro Catálogo</h1>
        <p className="text-xl">
          Descubre cada ropa y accesorios que te interesen, ya que dispone de gran variedad.
        </p>
        <Link
          to="/products"
          className="bg-yellow-500 text-black py-3 px-8 rounded-full shadow-lg hover:bg-yellow-600 transform hover:scale-105 transition-all duration-300"
        >
          Explorar Tienda
        </Link>
      </div>
      <div className="container mx-auto mt-24 flex justify-center">
        <div className="w-full max-w-4xl">
          <div className="carousel">
          </div>
        </div>
      </div>
    </div>
  );
}
