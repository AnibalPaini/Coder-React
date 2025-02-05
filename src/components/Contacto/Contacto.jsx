import React from "react";
import "../../App";

const Contacto = () => {
  return (
    <main>
      <form className="container-sm border border-black rounded-3 mt-5 p-5 bg-secondary">
        <div className="row mb-3">
          <div className="form-group col-md-6">
            <label htmlFor="">Nombre completo</label>
            <input type="text" placeholder="Juan" className="form-control" />
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="">Cod. Área</label>
            <input type="number" placeholder="2954" className="form-control" />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="">Telefono / Cel</label>
            <input
              type="number"
              placeholder="123456"
              className="form-control"
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="form-group col">
            <label htmlFor="">Correo</label>
            <input
              type="email"
              className="form-control"
              placeholder="ejemplo@mail.com"
            />
          </div>
        </div>
        <div className="row h-75">
            <textarea name="" className="form-control" id=""></textarea>
        </div>
      </form>
    </main>
  );
};

export default Contacto;
