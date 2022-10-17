import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
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
    console.log(retrieveContacts);

    setContacts(retrieveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <Switch>
        <Route path="/add">
          <AddContact addContactHandler={addContactHandler} />
        </Route>
        <Route
          path="/"
          exact
          render={(props) => (
            <ContactList
              {...props}
              contacts={contacts}
              getContactId={removeContactHandler}
            />
          )}
        ></Route>
      </Switch>
      {/* <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
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
