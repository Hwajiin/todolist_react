import { v4 as uuidv4 } from "uuid";
import { ADD, DEL, COMPLETE, UNCOMPLETE, EDIT } from "./action";

export const initialState = {
  toDos: [],
  completed: [],
};

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
          toDos: state.toDos.map((todo) => ({
            ...todo,
          })),
        };
      }

    default:
      throw new Error("error");
  }
};

export default reducer;
