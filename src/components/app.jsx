import React from "react";
import { useInitialState } from "../context";
import Addform from "./addform/addform";
import List from "./list/list";
import ToDo from "./todo/todo";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(200deg, pink, coral);
`;

const Box = styled.div`
  width: 90%;
`;

const ListContainer = styled.div`
  height: 70%;
  display: flex;
  margin-bottom: 10px;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const App = () => {
  const { toDos, completed } = useInitialState();

  return (
    <Container>
      <Box>
        <ListContainer>
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
          <List name="Completed">
            {completed.map((todo) => (
              <ToDo
                key={todo.id}
                id={todo.id}
                text={todo.text}
                isCompleted={true}
              />
            ))}
          </List>
        </ListContainer>
        <Addform isPrivate={true} />
      </Box>
    </Container>
  );
};

export default App;
