import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Home } from "./pages/Home";
import { Admin } from "./pages/Admin";
import { Analytics } from "./pages/Analytics";
import { DashBoard } from "./pages/DashBoard";
import { ProtectedRoute } from "./components/ProtectedRoute";

import "./App.css";
import { useState } from "react";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Landing</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">DashBoard</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
        <li>
          <Link to="/analytics">Analytics</Link>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({
      id: 1,
      name: "abel",
      permission: ['analytic'],
      role: ['admin']
    });
  };

  const logOut = () => {
    setUser(null);
  };

  return (
    <>
      <BrowserRouter>
        <header>
          <h1>Rutas Protegidas</h1>
          <Navigation />
        </header>
        {user ? (
          <button onClick={logOut}>Logout</button>
        ) : (
          <button onClick={login}>Login</button>
        )}
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/landing" element={<Landing />} />
          {/* {protego varias rutas} */}
          <Route element={<ProtectedRoute isAllowed={!!user}/>}>
            <Route path="/home"element={<Home />}/>
            <Route path="/dashboard" element={<DashBoard />} />
          </Route>
          {/* {protego solo una ruta} */}
          <Route path="/analytics" element={
          <ProtectedRoute isAllowed={!!user && user.permission.includes('analytic')} redirectTo="/home">
            <Analytics />
          </ProtectedRoute>
          } />
          <Route path="/admin" element={
          <ProtectedRoute isAllowed={!!user && user.role.includes('admin')} redirectTo="/home">
            <Admin />
          </ProtectedRoute>
          } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
