//creamos hook para leer el contexto
import { useContext } from "react";
import { CartContext } from "../context/cart";

export const useCart = ()=>{
    const context = useContext(CartContext)
    //buena practica revisar si el contexto es undefined
    //para ver si tenemos acceso a el
    if (context === undefined){
        throw new Error ('useCart must be used within a CartProvider')
    }
    return context
}