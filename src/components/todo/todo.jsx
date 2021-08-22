import React, { useState } from "react";
import { COMPLETE, DEL, UNCOMPLETE } from "../../action";
import { useDispatch, useEdit } from "../../context";
import Addform from "../addform/addform";
import Edit from "../edit/edit";

const ToDo = ({ id, text, isCompleted }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);

  return (
    <li key={id}>
      {edit ? (
        <Addform isEdit={edit} id={id} setEdit={setEdit} />
      ) : (
        <div>
          <span>{text}</span>
          <button onClick={() => dispatch({ type: DEL, payload: id })}>
            ❌
          </button>
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
        </div>
      )}

      <Edit isEdit={edit} setEdit={setEdit} id={id} />
    </li>
  );
};

export default ToDo;
