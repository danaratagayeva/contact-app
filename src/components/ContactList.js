import React, { useEffect } from "react";
import ContactCard from "./ContactCard.js";
import { Link } from "react-router-dom";
import { useContactsCrud } from "../context/ContactsCrudContext.js";

const ContactList = (props) => {
  const {
    contacts,
    retrieveContacts,
    searchTerm,
    searchResults,
    searchHandler,
  } = useContactsCrud();
  //const { onDelete, term } = props;

  useEffect(() => {
    retrieveContacts();
  }, []);

  const renderContactList = (
    searchTerm.length < 1 ? contacts : searchResults
  ).map((contact) => {
    return (
      <ContactCard
        key={contact.id}
        contact={contact}
        //onDelete={onDelete}
      ></ContactCard>
    );
  });

  const onUserSearch = (event) => {
    searchHandler(event.target.value);
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
            placeholder="Search Contact"
            className="prompt"
            value={searchTerm}
            onChange={(event) => onUserSearch(event)}
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
