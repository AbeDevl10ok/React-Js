import { ReactElement } from "react";
import { Routes,Route,Link,useParams,Outlet,Navigate } from "react-router-dom";
import { NavLink } from "./NavLink.tsx";
import "./App.css";

const Home = (): ReactElement => <h3>Home</h3>;
const SearchPage = (): ReactElement => {
  const tacos = [
    'quesadilla',
    'chil',
    'carnita'
  ]
  return (
    <div>
      <h1>Search</h1>
    {tacos.map(taco=>(
      <li key={taco}> <Link to={`/tacos/${taco}`}>{taco}</Link></li>
      ))}
    </div>
  )
}
const Tacos = (): ReactElement=>{
  const {taco} = useParams()
  
  return (
    <div>
      <h1>Tacos</h1>
      <h3>{taco}</h3>
      <Link to='details'>Ir a los detalles</Link>
      {/* {muestra rutas anidadas} */}
      <Outlet/>
    </div>
  )
}
const TacosDetails = (): ReactElement=>{
  const {taco} = useParams()
  
  return (
    <div>
      <h1>Details{taco}</h1>
      {/* {Redirecciona la ruta pude servir para loguearse} */}
      {/* <Navigate to='/'/> */}
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <header>
        <h1>React-Router</h1>
        <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/search-page">Search</NavLink></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/search-page" element={<SearchPage/>} />
        <Route path="/tacos/:taco" element={<Tacos/>}>
          <Route path="details" element={<TacosDetails/>}/>
        </Route>
        {/* {404 desde el cliente (devuelve 200)} */}
        <Route path="*" element={<h1>Not found</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
