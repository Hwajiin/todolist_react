import { v4 as uuidv4 } from "uuid";
import { ADD, DEL, COMPLETE, UNCOMPLETE, EDIT } from "./action";

const TODO = "todo";
const COMPLETED = "completed";

export const initialState = {
  toDos:
    JSON.parse(localStorage.getItem(TODO)) == null
      ? []
      : JSON.parse(localStorage.getItem(TODO)),
  completed:
    JSON.parse(localStorage.getItem(COMPLETED)) == null
      ? []
      : JSON.parse(localStorage.getItem(COMPLETED)),
};

// export const initialState = {
//   toDos: [],
//   completed: [],
// };

// export const initializer = (initialState) => {
//   JSON.parse(localStorage.getItem(initialState.toDos));
// };

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        toDos: [...state.toDos, { text: action.payload, id: uuidv4() }],
      };
    case DEL:
      return {
        ...state,
        toDos: state.toDos.filter((todo) => todo.id !== action.payload),
        completed: state.completed.filter((todo) => todo.id !== action.payload),
      };
    case COMPLETE:
      const target = state.toDos.find((todo) => todo.id === action.payload);
      return {
        ...state,
        toDos: state.toDos.filter((todo) => todo.id !== action.payload),
        completed: [...state.completed, { ...target }],
      };
    case UNCOMPLETE:
      const uTarget = state.completed.find(
        (todo) => todo.id === action.payload
      );
      return {
        ...state,
        completed: state.completed.filter((todo) => todo.id !== action.payload),
        toDos: [...state.toDos, { ...uTarget }],
      };
    case EDIT:
      const eTarget =
        state.toDos.find((todo) => todo.id === action.payload) ||
        state.completed.find((todo) => todo.id === action.payload);
      eTarget.text = action.text;
      if (state.toDos.includes(eTarget)) {
        return {
          ...state,
          toDos: state.toDos.map((todo) => ({
            ...todo,
          })),
        };
      } else {
        return {
          ...state,
          completed: state.completed.map((todo) => ({
            ...todo,
          })),
        };
      }

    default:
      throw new Error("error");
  }
};

export default reducer;
