import React from "react";
import { useInitialState } from "../context";
import Addform from "./addform/addform";
import List from "./list/list";
import ToDo from "./todo/todo";

const App = () => {
  const { toDos, completed } = useInitialState();

  return (
    <>
      <Addform />
      <List name="To Do">
        {toDos.map((todo) => (
          <ToDo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            isCompleted={false}
          />
        ))}
      </List>
      <List name={completed.length > 0 ? "Completed" : ""}>
        {completed.map((todo) => (
          <ToDo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            isCompleted={true}
          />
        ))}
      </List>
    </>
  );
};

export default App;
