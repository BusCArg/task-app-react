import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
  const { tasks } = useContext(TaskContext);
  console.log(tasks)

  if (tasks.length === 0) {
    return (
      <div className="">
        <h1 className="text-3xl text-center text-bold">No Hay tareas Aun</h1>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task, i) => (
        <div key={i}>
          <TaskCard task={task} />
        </div>
      ))}
    </div>
  );
}

export default TaskList;
