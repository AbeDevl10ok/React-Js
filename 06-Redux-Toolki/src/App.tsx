import { useState } from 'react';
import { Toaster } from 'sonner';
import './App.css';
import { CrearNewUser } from './components/CrearNewUser';
import { ListOfUsers } from './components/ListOfUsers';
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <ListOfUsers></ListOfUsers>
      <CrearNewUser></CrearNewUser>
      <Toaster richColors></Toaster>
    </>
  );
}

export default App;
