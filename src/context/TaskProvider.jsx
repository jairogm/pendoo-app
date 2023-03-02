import React, { useState } from "react";
import { useTask } from "../hooks/useTask";
import { TaskContext } from "./TaskContext";

export const TaskProvider = ({ children }) => {
  const {
    tasks,
    tasksCount,
    pendingTasksCount,
    handleDeleteTask,
    handleNewTask,
    handleToggleTask,
  } = useTask();

  const [formOpen, setFormOpen] = useState(false)

  const closeForm = () => setFormOpen(false)
  const openForm = () => setFormOpen(true)
  let formOpen2 = true
  const value = {
    tasks,
    tasksCount,
    pendingTasksCount,
    handleDeleteTask,
    handleNewTask,
    handleToggleTask,
    formOpen,
    formOpen2,
    closeForm,
    openForm
  };
  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
