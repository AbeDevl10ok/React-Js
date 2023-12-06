export function Form({ addTask, handleCategory }) {
  const handleForm = () => {
    event.preventDefault();
    addTask(event.target.task.value);
    event.target.task.value="";
  };

  return (
    <section className="section-form">
      <form onSubmit={handleForm}>
        <input type="text" name="task" placeholder="Ingresa tarea.." />
        <button type="submit">+</button>
      </form>
      <select name="categoria" onChange={()=>handleCategory(event.target.value)}>
        <option value="all">todas</option>
        <option value="completed">Terminadas</option>
        <option value="incomplet">Incompletas</option>
      </select>
    </section>
  );
}
