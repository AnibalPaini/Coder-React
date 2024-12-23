import React from 'react'

function ItemListContainer(props) {
  return (
    <main className="container-xl">
        <h2>Productos</h2>
        <div className="container">
            <div className="row ">
                <div className="col-sm mb-3 bg-primary text-white text-center rounded p-3"><p>{props.producto}</p></div>
                <div className="col-sm mb-3 bg-secondary text-white text-center rounded p-3"><p>{props.producto}</p></div>
                <div className="col-sm mb-3 bg-primary text-white text-center rounded p-3"><p>{props.producto}</p></div>
            </div>
            <div className="row">
                <div className="col-sm mb-3 bg-secondary text-white text-center rounded p-3"><p>{props.producto}</p></div>
                <div className="col-sm mb-3 bg-primary text-white text-center rounded p-3"><p>{props.producto}</p></div>
                <div className="col-sm mb-3 bg-secondary text-white text-center rounded p-3"><p>{props.producto}</p></div>
            </div>
        </div>
    </main>

  )
}

export default ItemListContainer