import { useContext, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import { Form, TaskList, Header } from "./components";
import { TaskContext } from "./context/TaskContext";
function App() {
  const { formOpen, closeForm, openForm } = useContext(TaskContext);
  useEffect(() => {
    localStorage.setItem(
      "tasks",
      JSON.stringify([
        {
          id: 2,
          title: "Finish Project",
          description: "Task 3 and 4",
          done: false,
          date: "2021-03-04",
        },
        {
          id: 3,
          title: "Go for a run",
          description: "5km in under 30 minutes",
          done: false,
          date: "2023-03-29",
        },
      ])
    );
  }, []);

  return (
    <div className="app">
      <button
        className="btn"
        onClick={() => (formOpen ? closeForm() : openForm())}
      >
        New Task
      </button>

      <Header />
      <TaskList />
      <AnimatePresence>{formOpen && <Form />}</AnimatePresence>
    </div>
  );
}

export default App;
