import { TaskItem } from "./TaskItem";

export function TaskList({
  filteredTask,
  removeTask,
  handleFilled,
}) {
  const list = filteredTask();
  return (
    <main>
      <ul>
        {list.map((task) => (
          <TaskItem
            key={task.name}
            task={task}
            removeTask={removeTask}
            handleFilled={handleFilled}
          />
        ))}
      </ul>
    </main>
  );
}
