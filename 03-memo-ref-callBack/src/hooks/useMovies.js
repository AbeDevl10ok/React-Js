import { useState, useRef, useMemo,useCallback} from "react";
import { searchMovies } from "../service/movies.js";

export function useMovies({ inputVal,sort }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  //guardamos para poder verificar si es la misma busqueda
  const prevInput = useRef({ inputVal });

  //se guarda la funcion y solo se renderiza la primera ves []
  const getMovies =useCallback(async ({ inputVal }) => {
    //en caso de ser misma busqueda no la hacemos
    if (prevInput.current === inputVal) return;
    try {
      setLoading(true);
      prevInput.current = inputVal;
      const newMovies = await searchMovies({ inputVal });
      setMovies(newMovies);
    } catch (e) {
      console.log(e.message);
    } finally {
      setLoading(false);
    }
  },[]);


  //memoriza el retorno de la funcion y solo se ejecuta con las dependencias
  const sortedMovies = useMemo(()=>{
    return sort?
    [...movies].sort((a,b)=>a.Title.localeCompare(b.Title))
    :movies
  },[movies,sort])

  return {
    movies: sortedMovies,
    getMovies,
    loading,
  };
}
