//mook
import { products as initialProduct } from "./mocks/products.json";
//components
import { Products } from "./components/Products.jsx";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
//hooks
import { useFilters } from "./hooks/useFilters.js";
import { Cart } from "./components/Cart.jsx";
//context
import {CartProvider} from './context/cart.jsx'
function App() {
  const { filtersProducts } = useFilters();
  const listProduct = filtersProducts(initialProduct);

  return (
    <CartProvider>
      <Header/>
      <Cart/>
      <Products listProduct={listProduct} />
      <Footer/>
    </CartProvider>
  );
}

export default App;
