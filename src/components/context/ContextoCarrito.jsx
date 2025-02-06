import { createContext, useState, useEffect } from "react";

export const ContextoCarrito= createContext({
    carrito:[],
    total:0,
    cantidadTotal:0,
    isOpen:false,
    toggleCart: () => {},
    img:""
})

export const CarritoProvider=({children})=>{
    //Inicializamos los estados
    const [carrito, setCarrito]=useState([]);
    const[total, setTotal]=useState(0);
    const[cantidadTotal, setCantidadTotal]=useState(0);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const addToCart=(item, cantidad, img)=>{ //Le pasamos el item y la cantidad
        const productoExiste= carrito.find(p=>p.item.id===item.id) //Busca si existe el producto 
        if(!productoExiste){//Si no existe los seteamos
            setCarrito(prev=>[...prev, {item, cantidad}])
            setCantidadTotal(prev=>prev+cantidad)
            setTotal(prev=>prev+(item.precio* cantidad))
        }else{
            const actualizarCarrito=carrito.map(p=>{//Si no existe, hace un map del carrito y si el producto ya esta, aumenta su cantidad, sino retorna el producto
                if(p.item.id===item.id){
                    return{...p, cantidad:p.cantidad+cantidad}
                }else{ return p }
            })
            setCarrito(actualizarCarrito)//Actualizamos el carrito y seteamos cantidad y total
            setCantidadTotal(prev=>prev+cantidad)
            setTotal(prev=>prev+(item.precio* cantidad))
        }
        console.log(img);
        
    }

    /* 
    buscamos si el id existe
    a ese filtro lo guardamos en una variable
    y a esa variable la guardamos en el setCarrito
    */

    const deleteItem=(id)=>{
        const eliminarProducto=carrito.find(p=>p.item.id===id)
        const actualizarCarrito=carrito.filter(p=>p.item.id!==id)
        setCarrito(actualizarCarrito)
        setCantidadTotal(prev=>prev-eliminarProducto.cantidad)
        setTotal(prev=>prev-(eliminarProducto.item.precio* eliminarProducto.cantidad))
    }

    const removeCart=()=>{
        setCarrito([])
        setTotal(0)
        setCantidadTotal(0)
    }

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    return(
        <ContextoCarrito.Provider value={{carrito, total, cantidadTotal,addToCart,deleteItem,removeCart, isCartOpen, toggleCart}}>
            {children}
        </ContextoCarrito.Provider>
    )
}

//Creamos el contexto