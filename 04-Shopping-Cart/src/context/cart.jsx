import { createContext,useState } from "react";

//1 crear contexto

export const CartContext = createContext()

//2 crear provider

export function CartProvider({children}){
    const [cart, setCart] = useState([])

    const addToCart = product =>{
        //forma de aprendiendo
        //sprite opereitor no hace una copia profunda
        // setCart([...cart,product])

        const productInCart = cart.findIndex(item=>item.id === product.id)

        if(productInCart>=0){
            //otra forma
            //copia nueva ya que no podemos mutar un estado
            const newCart = structuredClone(cart)
            newCart[productInCart].quantity +=1
            return setCart(newCart)
        }
        //si no esta el producto lo agregamos
        setCart(prevState=>([
            ...prevState,
            {
                ...product,
                quantity:1
            }
        ]))
    }

    const removeFromCart = product =>{
        setCart(prevState => prevState.filter(item=>item.id !== product.id))
    }

    function clearCart (){
        setCart([])
    }

    return(
        <CartContext.Provider value={{
            cart,
            addToCart,
            clearCart,
            removeFromCart
        }}
        >
            {children}
        </CartContext.Provider>
    )
}