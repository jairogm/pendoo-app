//React
import React, { useContext } from "react";

//Context
import { TaskContext } from "../../context/TaskContext";

//styles
import "./Task.styles.css";

//Icons
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

//Framer-Motion
import { motion, AnimatePresence } from "framer-motion";

export function Task({ id, title, description, date, done }) {
  const { handleToggleTask, handleDeleteTask } = useContext(TaskContext);

  return (
    <AnimatePresence>
      <motion.div
        className="task"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, height: 0, transition: { duration: 0.2 } }}
        key={id}
      >
        <div className="task__row-1">
          <div className="task__col-1">
            <span className={`${done && "task__title-check"} task__title`}>
              {title}
            </span>
            <span className="task__description">{description}</span>
          </div>
          <div className="task__col-2">
            <input
              type="checkbox"
              id="checkbox"
              className="task__checkbox"
              checked={done}
              onChange={() => handleToggleTask(id)}
            />
          </div>
        </div>
        <hr className="task__divider" />
        <div className="task__row-2">
          <div className="task__date">
            <span>{date}</span>
          </div>
          <div className="task__buttons">
            <button onClick={() => handleDeleteTask(id)} className="task__btn">
              <DeleteOutlineIcon />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
