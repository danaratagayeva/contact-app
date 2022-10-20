import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContactsCrud } from "../context/ContactsCrudContext";

const AddContact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  add = (event) => {
    event.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All the fields are mandotary!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
    this.props.history.push("/");
  };

  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={this.add}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <button className="ui button blue">Add</button>
        <Link to="/">Back</Link>
      </form>
    </div>
  );
};

// const AddContactList = () => {
//   return <div></div>;
// };

export default AddContact;
