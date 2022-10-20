import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContactsCrud } from "../context/ContactsCrudContext";

const UpdateContact = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id, name, email } = location.state.contact;
  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);
  const { updateContactHandler } = useContactsCrud();

  const update = (event) => {
    event.preventDefault();
    if (newName === "" || newEmail === "") {
      alert("All the fields are mandotary!");
      return;
    }
    updateContactHandler({ name: newName, email: newEmail });
    setNewName("");
    setNewEmail("");
    navigate("/");
  };

  return (
    <div className="ui main">
      <h2>Edit Contact</h2>
      <form className="ui form" onSubmit={update}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newName}
            onChange={(event) => setNewName(event.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={newEmail}
            onChange={(event) => setNewEmail(event.target.value)}
          />
        </div>
        <button className="ui button blue" type="submit">
          Update
        </button>
        <Link to="/">Back</Link>
      </form>
    </div>
  );
};

// const AddContactList = () => {
//   return <div></div>;
// };

export default UpdateContact;
