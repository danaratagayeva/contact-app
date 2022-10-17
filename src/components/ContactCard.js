import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";
import DeleteModal from "./DeleteModal";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  const { onDelete } = props;

  const [showModal, setShowModal] = useState(false);

  function toggleModel() {
    setShowModal((prevState) => !prevState);
  }

  console.log(showModal);
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <Link
          to={{ pathname: `contact/${id}`, state: { contact: props.contact } }}
        >
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>

      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={toggleModel}
      ></i>

      <div>
        {showModal && (
          <DeleteModal
            id={id}
            name={name}
            onDelete={onDelete}
            toggleModel={toggleModel}
          />
        )}
      </div>
    </div>
  );
};

export default ContactCard;
