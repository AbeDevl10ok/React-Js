import { useState } from "react";
import { TiInputChecked, TiInputCheckedOutline } from "react-icons/ti";
import { MdDeleteForever } from "react-icons/md";


export function TaskItem({ task, removeTask, handleFilled }) {
  const [check, setcheck] = useState(task.state);
  const handleClick = () => {
    setcheck(!check);
    handleFilled(task);
  };
  return (
    <li>
      {task.name}
      <span>

        {check ? <TiInputCheckedOutline color="green" fontSize="25px" onClick={handleClick}/> : <TiInputChecked color="red" fontSize="25px" onClick={handleClick} />}
        <MdDeleteForever color="red" fontSize="25px" onClick={() => removeTask(task)} />
      </span>
    </li>
  );
}
