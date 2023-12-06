import { Form } from "./components/Form.jsx";
import { TaskList } from "./components/TaskList.jsx";
import { useEffect } from "react";
import { useApp } from "./hooks/useApp.js";
function App() {
  const {
    list,
    categoria,
    addTask,
    removeTask,
    handleCategory,
    handleFilled,
    filteredTask,
  } = useApp();
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(filteredTask()));
  }, [list]);

  return (
    <>
      <header>
        <h1>Lista de tareas: 📒</h1>
        <hr />
      </header>
      <Form
        addTask={addTask}
        handleCategory={handleCategory}
        categoria={categoria}
      />
      <TaskList
        filteredTask={filteredTask}
        removeTask={removeTask}
        categoria={categoria}
        handleFilled={handleFilled}
      />
    </>
  );
}

export default App;
