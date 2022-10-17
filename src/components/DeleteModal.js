import React from "react";

const DeleteModal = (props) => {
  const { id, name, clickHandler } = props.contact;
  console.log(props);

  return (
    <div>
      <h3>Are you sure you want to delete {name}?</h3>
      <div>
        <button onClick={() => clickHandler(id)}>Yes</button>
        <button>No</button>
      </div>
    </div>
  );
};

export default DeleteModal;
