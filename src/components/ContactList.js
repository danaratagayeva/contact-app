import React from "react";
import ContactCard from "./ContactCard.js";
import { Link } from "react-router-dom";

const ContactList = (props) => {
  const { contacts, clickHandler } = props;

  //   const deleteContactHandler = (id) => {
  //     props.getContactId(id);
  //   };

  const renderContactList = contacts.map((contact) => {
    return (
      <ContactCard
        key={contact.id}
        contact={contact}
        clickHandler={clickHandler}
      ></ContactCard>
    );
  });
  return (
    <div className="main">
      <h2>
        Contact List
        <Link to="/add" className="ui button blue right">
          Add Contact
        </Link>
      </h2>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
