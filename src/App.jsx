import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Inicio from "./components/Inicio/Inicio";
import Nosotros from './components/Nosotros/Nosotros';
import Products from './components/Products/Products';
import Servicios from './components/Servicios/Servicios';
import Contactos from './components/Contactos/Contactos';
import ItemDetail from './components/ItemDetail/ItemDetail';
import Category from './components/Category/Category';
import Cart from './components/Cart/Cart';

export default function App() {
  return (
    <div className="bg-sky-950 flex flex-col min-h-screen">
      <BrowserRouter>
          <Header/>
          <div className="flex flex-col min-h-screen">
            <Routes>
              <Route path="/" element={<Inicio />}/>
              <Route path="/nosotros" element={<Nosotros />}/>
              <Route path="/products" element={<Products />}/>
              <Route path="/servicios" element={<Servicios />}/>
              <Route path="/contactos" element={<Contactos />}/>
              <Route path='/category/:categoryId' element={<Category />} />
              <Route path='/products/:productId' element={<ItemDetail />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </div>
          <Footer/>
      </BrowserRouter>       
    </div>
  )
}