import React from 'react'
import "../../App.css"
import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import logo from "../../utiles/img/camisetasMD-LOGO.png"

function Footer() {
  return (
    <footer className='container-fluid d-flex justify-content-between align-items-center px-5 py-3 border-top border-secondary mt-10 footer'>
        <img src={logo} alt="Camisetas MD LOGO" className='img-logo'/>
        <div className='d-flex gap-3 align-items-center'>
            <a href="#" className='iconos'><i class="bi bi-instagram"></i></a>
            <a href="#" className='iconos'><i class="bi bi-facebook"></i></a>
            <a href="#" className='iconos'><i class="bi bi-whatsapp"></i></a>
        </div>
    </footer>
  )
}
export default Footer