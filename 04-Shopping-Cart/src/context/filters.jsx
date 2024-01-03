import { createContext, useState } from 'react'
// Este es el que tenemos que consumir
export const FiltersContext = createContext()

// Este es el que nos provee de acceso al contexto
export function FiltersProvider ({ children }) {
    const [filters, setFilters] = useState(
      {
      category: 'all',
      minPrice: 0
    })

    const handleChangeMinPrice = (event) => {
      setFilters(prevState => ({
        ...prevState,
        minPrice: event.target.value
      }))
    }

    const handleChangeCategory = (event) => {
      setFilters(prevState => ({
        ...prevState,
        category: event.target.value
      }))
    }
  
    return (
      <FiltersContext.Provider value={{
        filters,
        handleChangeCategory,
        handleChangeMinPrice
      }}
      >
        {children}
      </FiltersContext.Provider>
    )
  }
  