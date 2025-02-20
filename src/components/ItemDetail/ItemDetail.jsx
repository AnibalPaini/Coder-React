import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
/* import { getProductos } from '../../mock'; */
import Count from '../Count/Count';
import "../../app.css";
import { ContextoCarrito } from '../context/ContextoCarrito';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import {db} from "../../services/config.js"
import {getDoc, doc} from "firebase/firestore";

const ItemDetail = () => {
  const { id } = useParams(); 
  const [producto, setProducto] = useState(null);

  const {addToCart}= useContext(ContextoCarrito)
  
  useEffect(()=>{
    const nuevoDoc = doc(db,"productos",id)
    getDoc(nuevoDoc)
      .then(res=>{
        const data=res.data();
        const nuevoProducto={id: res.id, ...data}
        setProducto(nuevoProducto);
      })
      .catch(error=>console.log(error))
  },[id])

/*useEffect(() => {
    getProductos()
    .then((productos) => {
      const productoEncontrado = productos.find(p => p.id === parseInt(id));
      setProducto(productoEncontrado);
    })
    .catch(error => console.log(error));
  }, [id]); */

  if (!producto) return <p>Cargando...</p>; 

  return (
    <div className="container mt-5">
      <Link to="/productos"
        className='link'
      >
        <i class="bi bi-arrow-left-square back"></i>
      </Link>
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-md-5 text-center">
          <img 
            src={producto.imagenes[0]} 
            alt={producto.titulo} 
            className="img-fluid img-detail rounded shadow-sm" 
          />
        </div>
        <div className="col-md-6 mt-0">
          <h2 className="mb-4 text-dark fw-bold">{producto.titulo}</h2>
          <p className="text-secondary mb-3">{producto.descripcion}</p>
          <p className="mb-4 h5">
            <strong>Precio:</strong> ${producto.precio}
          </p>
          <div className="justify-content-start align-items-center">
            <Count producto={producto}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

