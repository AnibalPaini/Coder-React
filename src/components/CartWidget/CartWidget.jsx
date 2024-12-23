import React from 'react'
import "../../app.css"
import carritoImg from '../../utiles/img/carrito.png'

function CartWidget() {
    
  return (
    <div className='contenedor-carrito-img'>
        <img src={carritoImg} alt="Carrito Logo" className='img-carrito'/>
        <strong>2</strong>
    </div>
  )
}

export default CartWidget