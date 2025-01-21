import React from 'react'

const Item = ({id, titulo, descripcion, precio, imagenes}) => {
  return (
    <div className="col-12 col-sm-6 col-lg-4 mb-4" key={id}>
            <div className='card'>
                <img src={imagenes[0]} alt="" className='card-img-top img-fluid img-product'/>
                <div className='card-body'>
                <h5 className='card-title'>{titulo}</h5>
                <p className='card-text'>{descripcion}</p>
                <p className='card-text'>${precio}</p>
                <button className='btn btn-secondary w-100'>Agregar al carrito</button>
            </div>
        </div>
    </div>
  )
}

export default Item