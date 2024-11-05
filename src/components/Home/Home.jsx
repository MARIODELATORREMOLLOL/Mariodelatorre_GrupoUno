import { Link } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

export default function HomePage() {
    const backgroundImage = '/img_fondo.jpg';
    const logo = '/logo.png';

    return (
        <div className="min-h-screen">

            <header className="container mx-auto flex h-10 items-center justify-between">
                <img src={logo} alt="Logo" className="h-10" />
                <nav>
                <ul className="flex">
                        <li className="mx-4">
                            <Link to="/" className="text-[#2d3a4b] hover:text-[#ffe115] uppercase">Home</Link>
                        </li>
                        <li className="mx-4">
                            <Link to="/products" className="text-[#2d3a4b] hover:text-[#ffe115] uppercase">Tienda</Link>
                        </li>
                        <li className="mx-4">
                            <Link to="/about" className="text-[#2d3a4b] hover:text-[#ffe115] uppercase">About Us</Link>
                        </li>
                        <li className="mx-4">
                            <Link to="/contact" className="text-[#2d3a4b] hover:text-[#ffe115] uppercase">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <div
                className="w-full h-[900px] bg-cover bg-center"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="container mx-auto max-w-[1170px] flex flex-col h-full justify-center text-center">
                    <h2 className="text-white font-bold text-[90px] leading-[90px] uppercase">
                        Barranca Zonda
                    </h2>
                    <Link to="/products" className="bg-[#2d3a4b] px-[50px] py-[10px] text-[22px] uppercase flex items-center justify-center w-[210px] text-center text-white mt-[30px] mx-auto rounded">
                        Tienda
                    </Link>
                </div>
            </div>

            <div className="container mx-auto max-w-[1170px] my-[50px]">
                <ItemList />
            </div>
        </div>
    );
}
