import React from 'react'

function ItemListContainer(props) {
  return (
    <main className="container-sm mt-5">
        <h2 className='fontP'>Productos</h2>
        <div className="container">
            <div className="row gap-1">
                <div className="col-sm mb-3 bg-primary text-white text-center rounded p-3"><p>{props.producto}</p></div>
                <div className="col-sm mb-3 bg-secondary text-white text-center rounded p-3"><p>{props.producto}</p></div>
                <div className="col-sm mb-3 bg-primary text-white text-center rounded p-3"><p>{props.producto}</p></div>
            </div>
        </div>
    </main>

  )
}

export default ItemListContainer