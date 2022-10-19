import React, { useRef } from "react";
import ContactCard from "./ContactCard.js";
import { Link } from "react-router-dom";

const ContactList = (props) => {
  const inputEl = useRef("");
  const { contacts, onDelete, term } = props;

  //   const deleteContactHandler = (id) => {
  //     props.getContactId(id);
  //   };

  const renderContactList =
    contacts !== undefined &&
    contacts.map((contact) => {
      return (
        <ContactCard
          key={contact.id}
          contact={contact}
          onDelete={onDelete}
        ></ContactCard>
      );
    });

  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value);
  };

  return (
    <div className="main">
      <h2>
        Contact List
        <Link to="/add" className="ui button blue right">
          Add Contact
        </Link>
      </h2>
      <div className="ui search">
        <div className="ui icon input">
          <input
            type="text"
            ref={inputEl}
            placeholder="Search Contact"
            className="prompt"
            value={term}
            onChange={getSearchTerm}
          />
          <i className="search icon"></i>
        </div>
      </div>
      <div className="ui celled list">
        {renderContactList.length > 0 ? renderContactList : "No contacts"}
      </div>
    </div>
  );
};

export default ContactList;
