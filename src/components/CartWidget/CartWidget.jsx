import React, { useContext } from 'react'
import "../../app.css"
import carritoImg from '../../utiles/img/carrito.png'
import { Link } from 'react-router-dom'
import { ContextoCarrito } from '../context/ContextoCarrito'

function CartWidget() {
  const {cantidadTotal, toggleCart}=useContext(ContextoCarrito)
    
  return (
    <div className='contenedor-carrito-img' onClick={toggleCart}>
      <img src={carritoImg} alt="Carrito Logo" className='img-carrito'/>
      <strong>{cantidadTotal}</strong>
    </div>
  )
}

export default CartWidget