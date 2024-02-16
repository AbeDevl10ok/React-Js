import "./Products.css";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons.jsx";
//hook
import {useCart} from '../hooks/useCart.js'
export function Products({ listProduct }) {
  const {addToCart,cart,removeFromCart} = useCart()

  //si el producto esta en el carrtio
  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }
  return (
    <main className="products">
      <ul>
        {listProduct.slice(0, 10).map((product) => {
          const isProductCart = checkProductInCart(product)
          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button style={{backgroundColor: isProductCart?'red':'#09f'}} onClick={()=>isProductCart
                  ?removeFromCart(product)
                  :addToCart(product)}>
                  {
                    isProductCart?
                    <RemoveFromCartIcon/>
                    :<AddToCartIcon />
                  }
                  
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
