import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuidv4(), ...contacts }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  useEffect(() => {
    const retrieveContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
}

export default App;

// const contacts = [
//   {
//     id: "1",
//     name: "Danara",
//     email: "danara.tagayeva@gmail.com",
//   },
//   {
//     id: "2",
//     name: "Sandibek",
//     email: "sandibek@gmail.com",
//   },
//   {
//     id: "3",
//     name: "Ismail",
//     email: "ismail.ibraimov@gmail.com",
//   },
//   {
//     id: "4",
//     name: "Ilyas",
//     email: "ilyas.ibraimov@gmail.com",
//   },
//   {
//     id: "5",
//     name: "Muhammad",
//     email: "muhammad.ibraimov@gmail.com",
//   },
// ];
