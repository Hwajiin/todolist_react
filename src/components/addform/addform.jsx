import React, { useState } from "react";
import { ADD, EDIT } from "../../action";
import { useDispatch } from "../../context";
import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  padding: ${(props) => (props.private ? "15px" : "5px")};
  background-color: ${(props) =>
    props.private ? "rgba(255, 255, 255, 0.1);" : "transparent"};
  box-shadow: ${(props) =>
    props.private
      ? `rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;`
      : ""};
  border-radius: 5px;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
`;

const Addform = ({ isEdit, id, setEdit, isPrivate }) => {
  const [newToDo, setNewToDo] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (newToDo === "") return;
    dispatch({ type: ADD, payload: newToDo });
    setNewToDo("");
  };

  const editText = (e) => {
    e.preventDefault();
    dispatch({ type: EDIT, text: newToDo, payload: id });
    setEdit(false);
  };

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setNewToDo(value);
  };
  return (
    <Form onSubmit={isEdit ? editText : onSubmit} private={isPrivate}>
      <Input
        type="text"
        placeholder="✏️ Write to do"
        value={newToDo}
        onChange={onChange}
      />
    </Form>
  );
};

export default Addform;
