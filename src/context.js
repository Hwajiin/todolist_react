import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import reducer, { initialState } from "./reducer";

const TODO = "todo";
const COMPLETED = "completed";

const ToDosContext = createContext();

const ToDosProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem(TODO, JSON.stringify(state.toDos));
  }, [state.toDos]);

  useEffect(() => {
    localStorage.setItem(COMPLETED, JSON.stringify(state.completed));
  }, [state.completed]);

  return (
    <ToDosContext.Provider value={{ state, dispatch }}>
      {children}
    </ToDosContext.Provider>
  );
};

export const useInitialState = () => {
  const { state } = useContext(ToDosContext);
  return state;
};

export const useDispatch = () => {
  const { dispatch } = useContext(ToDosContext);
  return dispatch;
};

export default ToDosProvider;
