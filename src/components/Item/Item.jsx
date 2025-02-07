import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, titulo, descripcion, precio, imagenes }) => {
  return (
    <div className="col-12 col-sm-6 col-lg-4 mb-4" key={id}>
      <div className="card h-100">
        <img
          src={imagenes[0]}
          alt=""
          className="card-img-top img-fluid img-product"
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">{descripcion}</p>
          <p className="card-text">${precio}</p>
          <Link
            to={`/productos/${id}`}
            className="btn btn-secondary w-100 mt-auto"
          >
            Ver detalles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
