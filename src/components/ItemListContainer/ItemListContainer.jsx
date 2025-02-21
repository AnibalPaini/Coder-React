import React, { useEffect, useState } from "react";
/* import { getProductos, getProductosByCategory } from '../../mock.js' */
import ItemList from "../ItemList/ItemList.jsx";
import { useParams } from "react-router-dom";
import NavbarFilter from "../NavbarFilter/NavbarFilter.jsx";
import { db } from "../../services/config.js";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import Loader from "../../Loader/Loader.jsx";

function ItemListContainer({}) {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();
  const [loading, setLoading]=useState(true)

  //Filtros
  const [precioMinimo, setPrecioMinimo] = useState();
  const [equipo, setEquipo] = useState("");
  const [orden, setOrden] = useState("Menor a Mayor");


  const [equipos, setEquipos] = useState([]);
  useEffect(() => {
    const fetchEquipos = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "productos"));
        const equiposUnicos = Array.from(
          new Set(querySnapshot.docs.map((doc) => doc.data().equipo))
        );
        setEquipos(equiposUnicos);
      } catch (error) {
        console.error("Error al obtener equipos:", error);
      }
    };
    fetchEquipos();
  }, []);

  useEffect(() => {
    setLoading(true)
    const fetchProductos = async () => {
      try {
        let filtros = collection(db, "productos");
        const condiciones = [];

        // Filtro por categoría
        if (idCategoria) {
          condiciones.push(where("idCat", "==", idCategoria));
        }

        // Filtro por precio mínimo
        if (precioMinimo) {
          condiciones.push(where("precio", ">=", precioMinimo));
        }

        // Filtro equipo
        if (equipo) {
          condiciones.push(where("equipo", "==", equipo));
        }

        // Ordenar según selección
        if (orden === "Menor a Mayor" || orden === "Mayor a Menor") {
          const ordenPrecio = orden === "Menor a Mayor" ? "asc" : "desc";
          condiciones.push(orderBy("precio", ordenPrecio));
        } else if (orden === "A-Z" || orden === "Z-A") {
          const ordenNombre = orden === "A-Z" ? "asc" : "desc";
          condiciones.push(orderBy("titulo", ordenNombre));
        }

        // Ejecutar consulta
        const consulta = query(filtros, ...condiciones);
        const res = await getDocs(consulta);
        let nuevosProductos = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        if (equipo) {
          nuevosProductos = nuevosProductos.filter((p) =>
            p.equipo.toLowerCase().includes(equipo.toLowerCase())
          );
        }

        setProductos(nuevosProductos);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }finally{
        setLoading(false)
      }
    };

    fetchProductos();
  }, [idCategoria, precioMinimo, equipo, orden]);

  return (
    <>
      <NavbarFilter />
      <main className="container-sm mt-5">
        <h2 className="fontP">Productos</h2>
        <div className="d-flex justify-content-between my-5">
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
            <select
              className="form-select"
              value={equipo}
              onChange={(e) => setEquipo(e.target.value)}
            >
              <option value="">Todos</option>
              {equipos.map((eq, index) => (
                <option key={index} value={eq}>
                  {eq}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              className="form-select"
              onChange={(e) => setOrden(e.target.value)}
            >
              <option value="Menor a Mayor">Menor a Mayor</option>
              <option value="Mayor a Menor">Mayor a Menor</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
            </select>
          </div>
        </div>
        <div className="container">
          {loading ? (
             <Loader/>
          ) : (
            <ItemList productos={productos} />
          )}
        </div>
      </main>
    </>
  );
}

export default ItemListContainer;
