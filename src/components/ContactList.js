import React from "react";
import ContactCard from "./ContactCard.js";

const ContactList = (props) => {
  console.log(props);
  //const { contacts } = props;

  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const contacts = [
    {
      id: "1",
      name: "Danara",
      email: "danara@gmail.com",
    },
  ];

  const renderContactList = contacts.map((contact) => {
    return (
      <ContactCard
        key={contact.id}
        contact={contact}
        clickHandler={deleteContactHandler}
      ></ContactCard>
    );
  });
  return (
    <div className="main">
      <h2>
        {" "}
        AContact List
        <button className="ui button blue right">Add Contact</button>
      </h2>
      <div className="ui celled list">{renderContactList}</div>;
    </div>
  );
};

export default ContactList;
