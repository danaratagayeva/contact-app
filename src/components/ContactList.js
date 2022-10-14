import React from "react";
import ContactCard from "./ContactCard.js";

const ContactList = (props) => {
  console.log(props);
  //const { contacts } = props;

  const deleteContactHandler

  const renderContactList = props.contacts.map((contact) => {
    return <ContactCard key={contact.id} contact={contact} clickHandler={deleteContactHandler} ></ContactCard>;
  });
  return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;
