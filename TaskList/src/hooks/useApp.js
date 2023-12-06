import { useState } from "react";
export function useApp () {
    const [list, setList] = useState(
        JSON.parse(localStorage.getItem("list")) || []
      );
      const [categoria, setCategoria] = useState("all");
      const addTask = (task) => {
        const newList = [...list, { name: task, state: false, categoria: "all" }];
        setList(newList);
      };
      const removeTask = (task) => {
        const newList = list.filter((t) => t.name !== task.name);
        setList(newList);
      };
      const handleCategory = (categ) => {
        setCategoria(categ);
      };
      //Cuando el boton hace click en completar
      const handleFilled = (task) => {
        list.map(function (t) {
          if (t.name == task.name) t.state = !t.state;
          console.log(t);
        });
        localStorage.setItem("list", JSON.stringify(filteredTask()));
      };
    
      const filteredTask = () => {
        if (categoria == "completed") {
          return list.filter((task) => task.state == true);
        }
        if (categoria == "incomplet") {
          return list.filter((task) => task.state == false);
        } else {
          return list;
        }
      };
  return {
    list,
    categoria,
    addTask,
    removeTask,
    handleCategory,
    handleFilled,
    filteredTask
  }
}
