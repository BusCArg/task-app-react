import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { useState, useEffect } from "react";
function App() {
  return (
    <main className="bg-slate-300">
      <div className="container mx-auto max-w-full max-h-full p-10 bg-slate-300">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
