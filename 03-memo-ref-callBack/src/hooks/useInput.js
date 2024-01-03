import { useState, useEffect, useRef } from "react";

export function useInput() {
  const [inputVal, setInputVal] = useState("");
  const [error, setError] = useState(null);
  const inputInitial = useRef(true);

  const handleInput = () => {
    const newVal = event.target.value;
    setInputVal(newVal);
  };


  useEffect(() => {
    //para que al cargar por primera vez no muestre error
    if (inputInitial.current) {
      inputInitial.current = inputVal === "";
      return;
    }
    if (inputVal.length < 3) {
      setError("No se puede buscar con menos de 3 caracteres");
      return;
    }
    if (inputVal === "") {
      setError("No se puede buscar peliculla vacia");
      return;
    }
    if (inputVal.match(/^\d+$/)) {
      setError("No se puede ingresar numeros");
      return;
    }
    setError(null);
  }, [inputVal]);

  return {
    inputVal,
    handleInput,
    error,
  };
}
