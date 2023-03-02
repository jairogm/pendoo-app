import { useEffect, useReducer } from "react";
import { taskReducer } from "../reducers"
const init = () => {
  return JSON.parse(localStorage.getItem("tasks")) || [];
};
export const useTask = () => {

  const [tasks, dispatch] = useReducer(taskReducer, [], init)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const handleNewTask = (task) => {
    const action = {
      type: "ADD_TASK",
      payload: task,
    };

    dispatch(action);
  };

  const handleDeleteTask = (id) => {
    dispatch({
      type: "REMOVE_TASK",
      payload: id,
    });
  };

  const handleToggleTask = (id) => {
    dispatch({
      type: "TOGGLE_TASK",
      payload: id,
    });
  };

  const tasksCount = tasks.length
  const pendingTasksCount = tasks.filter((task) => !task.done).length

  return {
    tasks,
    tasksCount,
    pendingTasksCount,
    handleDeleteTask,
    handleNewTask,
    handleToggleTask,
  }
}

