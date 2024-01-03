//mock
// import {Search} from './mock/movies.json'
//hooks
import { useEffect,useId} from "react";
import { useInput } from "./hooks/useInput.js";
import { useMovies } from "./hooks/useMovies.js";
//componentes
import { Movies } from "./components/Movies.jsx";
//css
import "./app.css";
import { useSort } from "./hooks/useSort.js";

function App() {
  const {sort,handleSort} = useSort()
  const { inputVal, handleInput, error } = useInput();
  const { movies, getMovies, loading } = useMovies({ inputVal,sort });

  const checkId = useId()
  const handleSubmit = () => {
    event.preventDefault();
    getMovies({ inputVal });
  };


  //para cuando se ejecuta handleInput
  //debounce
  useEffect(() => {
    const handle = setTimeout(() => {
      getMovies({ inputVal });
    }, 500);
    return () => {
      clearTimeout(handle);
    };
  }, [inputVal]);

  return (
    <>
      <header>
        <h1>Movies: 📺</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleInput}
            type="text"
            name="movi"
            value={inputVal}
            placeholder="Avengers..."
          />{movies?<div>
            <label htmlFor={checkId}>Order</label>
            <input id={checkId} type="checkbox"onChange={handleSort} checked={sort} />
            </div>:''}
          <button type="submit">Search</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>
      <main>{loading ? <h4>Loading</h4> : <Movies movies={movies} />}</main>
    </>
  );
}

export default App;
