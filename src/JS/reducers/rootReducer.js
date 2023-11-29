import { combineReducers } from "redux";
import { ADD_TASK } from "../constants/action-types";
import { TOGGLE_TASK } from "../constants/action-types";
import { EDIT_TASK } from "../constants/action-types";

const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case TOGGLE_TASK:
      return state.map((task) =>
        task.id === action.payload ? { ...task, isDone: !task.isDone } : task
      );
    case EDIT_TASK:
      return state.map((task) =>
        task.id === action.payload.taskId
          ? { ...task, description: action.payload.newDescription }
          : task
      );
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  tasks: tasksReducer,
});

export default rootReducer;
