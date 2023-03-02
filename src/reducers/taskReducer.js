export const taskReducer = (initialState = [], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      const newTask = {
        id: Date.now() * 3,
        done: false,
        ...action.payload
      }
      return [...initialState, newTask]
    case 'REMOVE_TASK':
      return initialState.filter(tasks => tasks.id !== action.payload)
    case "TOGGLE_TASK":
      return initialState.map(task => {
        if (task.id === action.payload) { //id
          return {
            ...task,
            done: !task.done
          }
        }
        return task
      })
    default:
      return initialState;
  }
}