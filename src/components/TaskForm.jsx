import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-600 p-3 mb-3">
        <h1 className="text-center text-2xl text-amber-300 font-bold p-3">Crea tu tarea</h1>
        <input
          type="text"
          placeholder="Titulo tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          className=" bg-slate-200 p-3 w-full mb-2"
          autoFocus
        />
        <textarea
          cols="30"
          rows="10"
          placeholder="Detalles de tarea"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          className=" bg-slate-200 p-3 w-full mb-2"
          value={description}
        ></textarea>
        <button className="bg-green-300 rounded p-2 hover:bg-green-400 hover:text-gren-900">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
