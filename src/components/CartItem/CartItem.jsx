import React, { useContext } from 'react'
import { ContextoCarrito } from '../context/ContextoCarrito'
import "../../App.css"

const CartItem = ({item, cantidad}) => {
    const {deleteItem}= useContext(ContextoCarrito)
  return (
    <div className='d-flex justify-content-center align-items-center w-100 gap-5'>
        <div className='d-flex flex-column'>
            <img src={item.img[0]} alt="Img camiseta" className='img-fluid img-cart'/>
            <p>{item.titulo}</p>
        </div>
        <div className='d-flex'>
            <button className=' botones-carrito'>-</button>
            <p>{cantidad}</p>
            <button className=' botones-carrito'>+</button>
        </div>
        <div className='d-flex flex-column'>
            <p>{item.precio}</p>
            <button onClick={()=>deleteItem(item.id)}>Eliminar</button>
        </div>
    </div>
  )
}

export default CartItem