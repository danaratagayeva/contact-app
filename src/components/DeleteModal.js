import React from "react";

import styles from "./deletemodal.module.css";

const DeleteModal = (props) => {
  const { id, name, onDelete, toggleModel } = props;
  console.log(props);

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div>Are you sure you want to delete {name}?</div>
        <div>
          <button onClick={() => onDelete(id)}>yes</button>
          <button onClick={toggleModel}>no</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
