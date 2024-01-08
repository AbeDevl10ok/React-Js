import { FiltersContext } from "../context/filters.jsx";
import { useContext,useId } from "react";
export function Header() {
  const {filters,handleChangeCategory,handleChangeMinPrice} = useContext(FiltersContext);

  const categorId = useId();
  const priceId = useId();

  return (
    <header>
            <h1>Shoping Cart: 🛒</h1>
      <div>
        <label htmlFor={priceId}>Price: {filters.minPrice}</label>
        <input
          type="range"
          id={priceId}
          name="Price"
          min="0"
          max="1749"
          value={filters.minPrice}
          onChange={handleChangeMinPrice}
        />
      </div>
      <div>
        <label htmlFor={categorId}>Category : </label>
        <select
          name="category"
          id={categorId}
          value={filters.category}
          onChange={handleChangeCategory}
        >
          <option value="all">all</option>
          <option value="laptops">laptops</option>
          <option value="smartphones">smartphones</option>
        </select>
      </div>
    </header>
  );
}
