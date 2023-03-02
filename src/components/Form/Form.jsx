import { motion} from "framer-motion";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import { useForm } from "../../hooks/useForm";
import Backdrop from "../Backdrop/Backdrop";

import "./Form.styles.css";

export function Form() {
  const InitialValue = {
    title: "",
    description: "",
    date: "",
  };
  const { handleNewTask, closeForm } = useContext(TaskContext);

  const { title, description, date, formState, onInputChange, onResetForm } =
    useForm(InitialValue);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleNewTask(formState);
    onResetForm();
    closeForm()
  };

  const dropIn= {
    hidden: {
        y: "100vh",
        opacity: 0,
    },
    visible: {
      y:0,
      opacity: 1,
      transition: {
        duration: 0.1,
        type: 'spring',
        damping: 50,
        stiffness: 950,
      }
    },

    exit: {
      y: "100vh",
      opacity: 0,
    }

  }
  return (
    <Backdrop onClick={closeForm}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="pop-form"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <form className="new__form" onSubmit={handleSubmit}>
          <div className="form__item">
            <label htmlFor="title" className="form__label">
              Task Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Add Task Title..."
              className="form__input"
              required
              value={title}
              onChange={onInputChange}
            />
          </div>
          <div className="form__item">
            <label htmlFor="description" className="form__label">
              Description
            </label>
            <textarea
              type="text"
              name="description"
              id="description"
              placeholder="Add Task Description..."
              className="form__textarea"
              value={description}
              onChange={onInputChange}
            />
          </div>
          <div className="form__item">
            <label htmlFor="date" className="form__label">
              Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              placeholder="dd/mm/yy"
              className="form__input"
              required
              value={date}
              onChange={onInputChange}
            />
          </div>
          <div className="form__buttons">
            <button className="form__btn form__btn-outline">Cancel</button>
            <button type="submit" className="form__btn">
              Create
            </button>
          </div>
        </form>
      </motion.div>
    </Backdrop>
  );
}
