import React, { useState } from "react";
import { COMPLETE, DEL, UNCOMPLETE } from "../../action";
import { useDispatch, useEdit } from "../../context";
import Addform from "../addform/addform";
import Edit from "../edit/edit";
import styled from "styled-components";

const Item = styled.li`
  width: 100%;
  min-height: 50px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
`;

const Text = styled.span`
  width: 60%;
`;

const Buttons = styled.div``;

const ToDo = ({ id, text, isCompleted }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);

  return (
    <Item key={id}>
      {edit ? (
        <Addform isEdit={edit} id={id} setEdit={setEdit} isPrivate={false} />
      ) : (
        <>
          <Text>{text}</Text>
          <Buttons>
            <button
              onClick={() =>
                dispatch({
                  type: isCompleted ? UNCOMPLETE : COMPLETE,
                  payload: id,
                })
              }
            >
              {isCompleted ? "🅿️" : "✅"}
            </button>
            <Edit isEdit={edit} setEdit={setEdit} id={id} />
            <button onClick={() => dispatch({ type: DEL, payload: id })}>
              ❌
            </button>
          </Buttons>
        </>
      )}
    </Item>
  );
};

export default ToDo;
