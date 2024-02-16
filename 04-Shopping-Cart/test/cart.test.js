import {describe,it,expect}from 'vitest'
import {products} from '../src/mocks/products.json'
let product = {
    "id":30,
    "title":"Key Holder",
    "price":30,
    "category":"home-decoration",
    "thumbnail":"https://i.dummyjson.com/data/products/30/thumbnail.jpg",
 }
let cart = []

let filters = {
    category: "all",
    minPrice: 1400,
  };

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
        cart = newCart
    }
    //si no esta el producto lo agregamos
    cart = [
        ...cart,
        {
            ...product,
            quantity:1
        }
    ]
}

const removeFromCart = product =>{
    cart = cart.filter(item=>item.id !== product.id)
}

const filtersProducts=(products)=>{
    return products.filter(product=>{
        return(product.price >= filters.minPrice &&
         (
             filters.category === 'all' ||
             product.category === filters.category
             ))
         })
  }


describe("handle cart", () => { 
    it("addToCart", () => {
        addToCart(product)
        let prod = cart.find(item=>item.id === product.id)
        expect(prod.quantity).toBe(1)
        addToCart(product)
        prod = cart.find(item=>item.id === product.id)
        expect(prod.quantity).toBe(2)
    });
    
    it('removerToCart',()=>{
        removeFromCart(product)
        let res = cart.find(item =>item.id ===product.id)
        expect(res).toBeUndefined()
    })

    it('filterProduct',()=>{
        const filtered = filtersProducts(products)
        let res = (filtered.every(item=>(item.price >=filters.minPrice) &&( filters.category === 'all' ||
        item.category === filters.category) ))
        expect(res).toBeTruthy()

    })

  });