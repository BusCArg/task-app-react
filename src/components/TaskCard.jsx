import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  return (
    <div className="bg-gray-700 text-white p-2 rounded-md grid grid-cols-1">
      <ul className="p-3 m-1">
        <li className="font-bold capitalize">{task.title}</li>
        <li className="capitalize">{task.description}</li>
      </ul>
      <button
        className="bg-red-400 p-1 text-center text-stone-800 rounded hover:bg-red-700"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar Tarea
      </button>
    </div>
  );
}

export default TaskCard;
