import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetail from "./components/ItemDetail/ItemDetail.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./components/Home/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavbarFilter from "./components/NavbarFilter/NavbarFilter.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <NavbarFilter/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/productos/:id" element={<ItemDetail />} /> 
        <Route path="/productos/categoria/:idCategoria" element={<ItemListContainer />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
