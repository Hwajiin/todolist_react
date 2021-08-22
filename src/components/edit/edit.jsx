import React from "react";

const Edit = ({ id, isEdit, setEdit }) => {
  const handleEdit = () => {
    setEdit(true);
  };

  const handleSubmit = () => {
    setEdit(false);
  };

  return (
    <>
      {isEdit ? (
        ""
      ) : (
        <button id={id} onClick={isEdit ? handleSubmit : handleEdit}>
          {isEdit ? "DONE" : "EDIT"}
        </button>
      )}
    </>
  );
};

export default Edit;
