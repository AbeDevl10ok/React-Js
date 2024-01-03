import { AddToCartIcon } from "./Icons";
import './Products.css'
export function Products({listProduct}) {

    return(
        <main>
        <section>
          <ul>
            { listProduct?.map((product) => (
              <li key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <div>
                  <strong>{product.title}: price ${product.price}</strong>
                </div>
                <button>
                  <AddToCartIcon />
                </button>
              </li>
            ))}
          </ul>
        </section>
      </main>
    )

}
