import React, { useEffect, useState } from 'react'
import { getProductos } from '../../mock.js'
import ItemList from '../ItemList/ItemList.jsx'


function ItemListContainer({}) {
  const[productos, setProductos]=useState([])

  useEffect(()=>{
    getProductos()
    .then(respuesta=>setProductos(respuesta))
    .catch(error=>console.log(error))
  },[])


  return (
    <main className="container-sm mt-5">
        <h2 className='fontP'>Productos</h2>
        <div className="container">
            {productos.length>0 ? <ItemList productos={productos}/> : <p>Cargando productos...</p>}
        </div>
    </main>

  )
}

export default ItemListContainer