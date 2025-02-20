import React, { useContext, useEffect, useState } from "react";
import { ContextoCarrito } from "../context/ContextoCarrito";
import { Link } from "react-router-dom";
import "../../App.css";

const CartItem = ({ item, cantidad }) => {
  const { deleteItem, actualizarCantidad } = useContext(ContextoCarrito);
  const [cantidadActual, setCantidadActual] = useState(cantidad);

  // Sincroniza la cantidad actual con la cantidad anterior
  useEffect(() => {
    setCantidadActual(cantidad);
  }, [cantidad]);

  const handleMas = () => {
    const nuevaCantidad = cantidadActual + 1;
    setCantidadActual(nuevaCantidad);
    actualizarCantidad(item.id, nuevaCantidad);
  };

  const handleMenos = () => {
    if (cantidadActual > 1) {
      const nuevaCantidad = cantidadActual - 1;
      setCantidadActual(nuevaCantidad);
      actualizarCantidad(item.id, nuevaCantidad);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center w-100 gap-5">
        <div className="d-flex flex-column">
          <img
            src={item.img[0]}
            alt="Img camiseta"
            className="img-fluid img-cart"
          />
        </div>
        <div className="d-flex justify-content-center align-items-center gap-2">
          <button
            className="btn btn-outline-secondary d-flex justify-content-center align-items-center p-0 botones-carrito"
            onClick={handleMenos}
          >
            -
          </button>
          <p className="m-0">{cantidadActual}</p>
          <button
            className="btn btn-outline-secondary d-flex justify-content-center align-items-center p-0 botones-carrito"
            onClick={handleMas}
          >
            +
          </button>
        </div>
        <div className="d-flex flex-column">
          <div>
            <p>${item.precio * cantidadActual}</p>
          </div>
          <div className="d-flex justify-content-end">
            <i
              className="bi bi-trash3 incon-trash"
              onClick={() => deleteItem(item.id)}
            ></i>
          </div>
          <div>
          </div>
        </div>
      </div>
      <div className="mt-1 mb-3 border-bottom border-secondary">
        <p>{item.titulo}</p>
      </div>
    </>
  );
};

export default CartItem;
