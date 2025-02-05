import React, { useState } from 'react'
import { ContextoCarrito } from '../context/ContextoCarrito';
import { useContext } from 'react';
import "../../app.css"

const Count = ({producto}) => {
    const [cantidad, setCantidad]=useState(1)
    const {addToCart}= useContext(ContextoCarrito)

    const countSum=()=>{if(cantidad<producto.stock){setCantidad(cantidad+1)}}
    const countRes=()=>{if(cantidad>1){setCantidad(cantidad-1)}}
    const agregarCarrito = () => {
        const item = {
            id: producto.id,
            titulo: producto.titulo,
            precio: producto.precio
        };

        addToCart(item, cantidad); 
        setCantidad(1); 
    };


  return (
    <>
        <div className='d-flex justify-content-start align-items-center gap-2'>
            <button onClick={countRes} className='btn btn-secondary'>-</button>
            <p className='m-0'>{cantidad}</p>
            <button onClick={countSum} className='btn btn-secondary'>+</button>
        </div>
        <div className='mt-3'>
            <div className='mb-3'>
                <button onClick={agregarCarrito} className='btn btn-secondary'>Agregar al carrito</button>
            </div>
            <div>
                <p>${producto.precio*cantidad}</p>
            </div>
        </div>
    </>
  )
}

export default Count