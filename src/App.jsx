import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.css'
import Home from './components/Home/Home.jsx';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
