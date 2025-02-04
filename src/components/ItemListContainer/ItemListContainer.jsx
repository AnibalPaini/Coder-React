import React, { useEffect, useState } from 'react'
import { getProductos, getProductosByCategory } from '../../mock.js'
import ItemList from '../ItemList/ItemList.jsx'
import { useParams } from 'react-router-dom'
import NavbarFilter from "../NavbarFilter/NavbarFilter.jsx";

function ItemListContainer({}) {
  const[productos, setProductos]=useState([])
  const {idCategoria}=useParams();

  //Filtros
  const [precioMinimo, setPrecioMinimo] = useState();
  const [equipo, setEquipo] = useState("");
  const [orden, setOrden] = useState("Menor a Mayor");

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const productosData = idCategoria
          ? await getProductosByCategory(idCategoria, precioMinimo, equipo, orden)
          : await getProductos(precioMinimo, equipo, orden);
  
        console.log("Productos obtenidos:", productosData); 
        setProductos(productosData);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };
  
    fetchProductos();
  }, [idCategoria, precioMinimo, equipo, orden]);
  

  return (
    <>
      <NavbarFilter/>
      <main className="container-sm mt-5">
        <h2 className='fontP'>Productos</h2>
        <div className='d-flex justify-content-between my-5'>
          <div>
            <label>Precio mínimo:</label>
            <input
              type="number"
              value={precioMinimo}
              onChange={(e) => setPrecioMinimo(Number(e.target.value))}
            />
          </div>
          <div>
            <label>Equipo:</label>
              <input
                type="text"
                value={equipo}
                onChange={(e) => setEquipo(e.target.value)}
              />
          </div>
          <div>
            <select className='form-select' onChange={(e) => setOrden(e.target.value)}>
              <option value="Menor a Mayor">Menor a Mayor</option>
              <option value="Mayor a Menor">Mayor a Menor</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
            </select>
          </div>
        </div>
        <div className="container">
            {productos.length>0 ? <ItemList productos={productos}/> : <p>Cargando productos...</p>}
        </div>
      </main>
    </>
  )
}

export default ItemListContainer