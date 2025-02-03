import React, { useEffect, useState } from 'react'
import { getProductos, getProductosByCategory } from '../../mock.js'
import ItemList from '../ItemList/ItemList.jsx'
import { useParams } from 'react-router-dom'


function ItemListContainer({}) {
  const[productos, setProductos]=useState([])
  const {idCategoria}=useParams();

  // Estado para filtros
  const [precioMinimo, setPrecioMinimo] = useState(0);
  const [equipo, setEquipo] = useState("");

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const productosData = idCategoria
          ? await getProductosByCategory(idCategoria, precioMinimo, equipo)
          : await getProductos(precioMinimo, equipo);
  
        console.log("Productos obtenidos:", productosData); 
        setProductos(productosData);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };
  
    fetchProductos();
  }, [idCategoria, precioMinimo, equipo]);
  

  return (
    <main className="container-sm mt-5">
        <h2 className='fontP'>Productos</h2>


        <div className="mb-3">
          <label>Precio mínimo:</label>
          <input
            type="number"
            value={precioMinimo}
            onChange={(e) => setPrecioMinimo(Number(e.target.value))}
          />

          <label>Equipo:</label>
          <input
            type="text"
            value={equipo}
            onChange={(e) => setEquipo(e.target.value)}
          />
        </div>

        <div className="container">
            {productos.length>0 ? <ItemList productos={productos}/> : <p>Cargando productos...</p>}
        </div>
    </main>

  )
}

export default ItemListContainer