//mook
import {products as initialProduct}   from './mocks/products.json'
//components
import { Products } from './components/Products.jsx'
import { Filters } from './components/Filters.jsx'
//hooks
import { useFilters } from './hooks/useFilters.js'

function App() {
  const {filtersProducts} = useFilters()
  const listProduct = filtersProducts(initialProduct)

  return (
    <>
      <h1>Shoping Cart: 🛒</h1>
      <Filters/>
      <Products listProduct={listProduct} />
    </>
  )
}

export default App
