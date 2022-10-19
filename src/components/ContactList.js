import React, { useRef, useEffect } from "react";
import ContactCard from "./ContactCard.js";
import { Link } from "react-router-dom";
import { useContactsCrud } from "../context/ContactsCrudContext.js";

const ContactList = (props) => {
  const { contacts, retrieveContacts } = useContactsCrud();
  const inputEl = useRef("");
  //const { onDelete, term } = props;

  //   const deleteContactHandler = (id) => {
  //     props.getContactId(id);
  //   };

  useEffect(() => {
    retrieveContacts();
  }, []);

  const renderContactList =
    // contacts !== undefined &&
    contacts.map((contact) => {
      return (
        <ContactCard
          key={contact.id}
          contact={contact}
          //onDelete={onDelete}
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
            // value={term}
            // onChange={getSearchTerm}
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
