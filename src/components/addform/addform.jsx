import React, { useState } from "react";
import { ADD, EDIT } from "../../action";
import { useDispatch } from "../../context";

const Addform = ({ isEdit, id, setEdit }) => {
  const [newToDo, setNewToDo] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
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
    <form onSubmit={isEdit ? editText : onSubmit}>
      <input
        type="text"
        placeholder="Write to do"
        value={newToDo}
        onChange={onChange}
      />
    </form>
  );
};

export default Addform;
