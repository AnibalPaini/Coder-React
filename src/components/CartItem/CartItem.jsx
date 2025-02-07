import React, { useContext } from "react";
import { ContextoCarrito } from "../context/ContextoCarrito";
import "../../App.css";

const CartItem = ({ item, cantidad }) => {
  const { deleteItem } = useContext(ContextoCarrito);
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
          <button className="btn btn-outline-secondary d-flex justify-content-center align-items-center p-0 botones-carrito">
            -
          </button>
          <p className="m-0">{cantidad}</p>
          <button className="btn btn-outline-secondary d-flex justify-content-center align-items-center p-0 botones-carrito">
            +
          </button>
        </div>
        <div className="d-flex flex-column ">
          <div>
            <p>${item.precio * cantidad}</p>
          </div>
          <div className="d-flex justify-content-end">
            <i
              class="bi bi-trash3 incon-trash"
              onClick={() => deleteItem(item.id)}
            ></i>
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
