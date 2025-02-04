import { createContext, useState } from "react";

export const ContextoCarrito= createContext({
    carrito:[],
    total:0,
    cantidadTotal:0
})

export const CarritoProvider=()=>{
    const [carrito, setCarrito]=useState([]);
    const[total, setTotal]=useState(0);
    const[cantidadTotal, setCantidadTotal]=useState(0);

    const agregarAlCarrito=(item, cantidad)=>{
        const productoExiste= carrito.find(p=>p.item.id===item.id)
        if(!productoExiste){
            setCarrito=(prev=>[...prev, {carrito, cantidad}])
            setCantidadTotal=(prev=>(prev+cantidad))
            setTotal=(prev=>prev(item.precio* cantidad))
        }
    }

}

//Creamos el contexto