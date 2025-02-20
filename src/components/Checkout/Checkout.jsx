import { useState, useContext } from "react";
import { ContextoCarrito } from "../context/ContextoCarrito";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";

const Checkout = () => {
  const { carrito, total, cantidadTotal, deleteItem, removeCart } =
    useContext(ContextoCarrito);

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [provincia, setProvincia] = useState("");
  const [localidad, setLocalidad] = useState("");
  const [codPostal, setCodPostal] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");

  const manejadorFormulario=(e)=>{
    e.preventDefault();

    //Validaciones
    if(!nombre || !apellido || !email || !emailConfirmacion || !telefono || !provincia || !localidad || !codPostal){
      setError("Completar todos los campos del formulario!")
      return
    }
    if(email !== emailConfirmacion){
      setError("Los campos del email no coinciden!")
      return
    }
    
    const orden = {
      items: carrito.map(producto => ({
        id: producto.item.id,
        titulo: producto.item.titulo,
        cantidad: producto.cantidad,
      })),
      total: total,
      fecha: new Date(),
      nombre,
      apellido,
      email,
      telefono,
      provincia,
      localidad,
      codPostal
    };
    

    addDoc(collection(db,"ordenes"), orden)
      .then(docRef=>{
        setOrdenId(docRef.id)
        removeCart();
      })
      .catch(error=>{
        console.log("Error al crear la orden: "+error)
        setError("Se produjo error al crear la orden!")
      })
  }

  return (
    <div>
      <h2>Finalizar compra</h2>
      <form className="container-sm border border-black rounded-3 mt-5 p-5 bg-secondary" onSubmit={manejadorFormulario}>
        {
          carrito.map(producto=>(
            <div key={producto.item.id}>
              <p>{producto.item.titulo}</p>
              <p>{producto.item.precio}</p>
            </div>
          ))
          
        }
        <div className="row mb-3">
          <div className="form-group col-md-6">
            <label htmlFor="">Nombre completo</label>
            <input type="text" placeholder="Juan" className="form-control"  onChange={(e)=>{setNombre(e.target.value)}}/>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="">Apellido</label>
            <input type="text" placeholder="Perez" className="form-control"  onChange={(e)=>{setApellido(e.target.value)}}/>
          </div>
        </div>
        <div className="row mb-3">
          <div className="form-group col">
            <label htmlFor="">Telefono - Celular</label>
            <input type="number" placeholder="123456789" className="form-control" onChange={(e)=>{setTelefono(e.target.value)}}/>
          </div>
        </div>
        <div className="row mb-3">
          <div className="form-group col-md-6">
            <label htmlFor="">Correo</label>
            <input
              type="email"
              className="form-control"
              placeholder="ejemplo@mail.com"
              onChange={(e)=>{setEmail(e.target.value)}}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="">Confirmar correo</label>
            <input
              type="email"
              className="form-control"
              placeholder="ejemplo@mail.com"
              onChange={(e)=>{setEmailConfirmacion(e.target.value)}}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="form-group col-md-6">
            <label htmlFor="">Provincia</label>
            <input
              type="text"
              className="form-control"
              placeholder="La Pampa"
              onChange={(e)=>{setProvincia(e.target.value)}}
            />
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="">Cod postal</label>
            <input type="text" className="form-control" placeholder="6300"  onChange={(e)=>{setCodPostal(e.target.value)}} />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="">Localidad</label>
            <input
              type="text"
              className="form-control"
              placeholder="Santa Rosa"
              onChange={(e)=>{setLocalidad(e.target.value)}}
            />
          </div>
        </div>
        {
          error&& <p className="text-warning">{error}</p>
        }
        <div className="row mb-3">
          <div className="col-md-3">
            <button type="submit" className="btn btn-dark">
              {" "}
              Confirmar compra
            </button>
          </div>
        </div>
        {
          ordenId &&(
            <strong className="text-info"> Gracias por tu compra! Numero compra: <span className="text-primary">{ordenId}</span></strong>
          )
        }
      </form>
    </div>
  );
};

export default Checkout;
