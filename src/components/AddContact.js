import React, { Component } from "react";
import { Link } from "react-router-dom";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
  };

  add = (event) => {
    event.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All the fields are mandotary!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
  };

  render() {
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
              value={this.state.name}
              onChange={(event) => {
                this.setState({ name: event.target.value });
              }}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(event) => {
                this.setState({ email: event.target.value });
              }}
            />
          </div>
          <button className="ui button blue">Add</button>
          <Link to="/">Back</Link>
        </form>
      </div>
    );
  }
}

// const AddContactList = () => {
//   return <div></div>;
// };

export default AddContact;
