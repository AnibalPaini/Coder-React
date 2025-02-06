import React, { useContext, useState } from "react";
import { ContextoCarrito } from "../context/ContextoCarrito";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem.jsx";
import "../../App.css";

const Cart = () => {
  const {
    carrito,
    total,
    cantidadTotal,
    deleteItem,
    removeCart,
    toggleCart,
    isCartOpen,
  } = useContext(ContextoCarrito);

  return (
    <div className={`cart-container h-100 position-fixed top-0 overflow-auto ${isCartOpen ? "open" : ""}`}>
      <button className="close-button" onClick={toggleCart}>
        X
      </button>

      {cantidadTotal === 0 ? (
        <div className="empty-cart">
          <h3>Aún no has agregado ningún producto!</h3>
          <Link to="/productos" onClick={toggleCart}>
            Ver productos
          </Link>
        </div>
      ) : (
        <>
          {carrito.map((producto) => (
            <CartItem key={producto.item.id} {...producto} />
          ))}
          <h4>Total: ${total}</h4>
          <button onClick={removeCart}>Eliminar carrito</button>
        </>
      )}
    </div>
  );
};

export default Cart;
