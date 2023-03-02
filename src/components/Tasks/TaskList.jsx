//hooks
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

//Components
import { Task } from "./Task";

export const TaskList = () => {
  const { tasks } = useContext(TaskContext);
  return (
    <div className="task__list">
      {tasks.map(({ id, title, description, date, done }) => (
        <Task
          key={id}
          id={id}
          title={title}
          description={description}
          date={date}
          done={done}
        />
      ))}
    </div>
  );
};
