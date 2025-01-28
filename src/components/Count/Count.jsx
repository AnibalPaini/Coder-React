import React, { useState } from 'react'

const Count = ({producto}) => {
    const [count, setCount]=useState(1)
    const countSum=()=>{if(count<producto.stock){setCount(count+1)}}
    const countRes=()=>{if(count>1){setCount(count-1)}}
    const agregarCarrito=()=>{setCount(1)}

  return (
    <>
        <div className='d-flex justify-content-start align-items-center text-items-center gap-2'>
            <button onClick={countRes} className='btn btn-secondary'>-</button>
            <p>{count}</p>
            <button onClick={countSum} className='btn btn-secondary'>+</button>
        </div>
        <div className='mt-3'>
            <div className='mb-3'>
                <button onClick={agregarCarrito} className='btn btn-secondary'>Agregar al carrito</button>
            </div>
            <div>
                <p>${producto.precio*count}</p>
            </div>
        </div>
    </>
  )
}

export default Count