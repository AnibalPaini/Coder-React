import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductos } from '../../mock';

const ItemDetail = () => {
  const { id } = useParams(); 
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    getProductos()
      .then((productos) => {
        const productoEncontrado = productos.find(p => p.id === parseInt(id));
        setProducto(productoEncontrado);
      })
      .catch(error => console.log(error));
  }, [id]);

  if (!producto) return <p>Cargando...</p>;

  return (
    <div className="container mt-5">
      <h2>{producto.titulo}</h2>
      <img src={producto.imagenes[0]} alt={producto.titulo} className="img-fluid" />
      <p>{producto.descripcion}</p>
      <p>Precio: ${producto.precio}</p>
    </div>
  );
};

export default ItemDetail;

