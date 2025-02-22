import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetail from "./components/ItemDetail/ItemDetail.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./components/Home/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { CarritoProvider } from "./components/context/ContextoCarrito.jsx";
import Contacto from "./components/Contacto/Contacto.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Checkout from "./components/Checkout/Checkout.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <BrowserRouter>
      <CarritoProvider>
        <Navbar />
        <Cart/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:id" element={<ItemDetail />} /> 
            <Route path="/productos/categoria/:idCategoria" element={<ItemListContainer />} /> 
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
      </CarritoProvider>
    </BrowserRouter>
  );
}

export default App;
