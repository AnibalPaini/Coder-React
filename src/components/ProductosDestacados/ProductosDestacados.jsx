import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../services/config.js";
import "../../App.css";
import { collection, getDocs, query, where, orderBy, limit } from "firebase/firestore";

const ProductosDestacados = () => {
  const [productos, setProductos] = useState([]);

  useEffect(()=>{
    const fetchProductos = async () => {
      try {
        let productosMasVendidos = collection(db, "productos");
        const consulta = query(productosMasVendidos, orderBy("ventas", "desc"), limit(4));
        const listaProd= await getDocs(consulta)

        const listaPrdodMasVendidos= listaProd.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductos(listaPrdodMasVendidos)
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    fetchProductos();
  },[])

  return (
    <main className="container-sm mt-5">
      <h2>Productos destacados</h2>
      <div className="row mt-5">
        {productos.map((p) => (
          <div className="col-12 col-sm-6 col-lg-3 mb-4" key={p.id}>
            <div className="card h-100">
              <img
                src={p.imagenes[0] }
                alt={p.titulo}
                className="card-img-top img-fluid img-product"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{p.titulo}</h5>
                <p className="card-text">{p.descripcion}</p>
                <p className="card-text">${p.precio.toLocaleString()}</p>
                <Link 
                  to={`/productos/${p.id}`}
                  className="btn btn-secondary w-100 mt-auto"
                >
                  Ver detalles
                </Link>
                
              </div>
            </div>
          </div>
        ))}
        {
          productos.length===0 ?
          <p>Cargando productos...</p>
          : 
          <div className="d-flex justify-content-center">
          <Link 
            to={`/productos`}
            className="btn btn-dark w-sm-50  mt-4"
          >
            Ver todos los productos
          </Link>
          </div>
        }
      </div>
    </main>
  );
};

export default ProductosDestacados;
