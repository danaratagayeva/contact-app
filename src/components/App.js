import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import api from "../api/contacts";
import "./App.css";
import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";
import ContactDetail from "./ContactDetail";
import UpdateContact from "./UpdateContact";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  //RetrieveContacts
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  const addContactHandler = async (contact) => {
    const request = {
      id: uuidv4(),
      ...contact,
    };
    const response = await api.post("/contacts", request);
    console.log(contact);
    setContacts([...contacts, response.data]);
  };

  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    console.log(response);
    const { id, name, email } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newContactList);
    } else {
      setSearchResults(contacts);
    }
  };

  useEffect(() => {
    const getAllContacts = async (id) => {
      //await api.delete(`/contacts/${id}`);
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts);
    };
    // const retrieveContacts = JSON.parse(
    //   localStorage.getItem(LOCAL_STORAGE_KEY)
    // );
    // console.log(retrieveContacts);
    // setContacts(retrieveContacts);
    getAllContacts();
  }, []);

  useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <Switch>
        <Route
          path="/add"
          render={(props) => (
            <AddContact {...props} addContactHandler={addContactHandler} />
          )}
        />
        <Route
          path="/edit"
          render={(props) => (
            <UpdateContact
              {...props}
              updateContactHandler={updateContactHandler}
            />
          )}
        />
        <Route
          path="/"
          exact
          render={(props) => (
            <ContactList
              {...props}
              contacts={searchTerm.length < 1 ? contacts : searchResults}
              onDelete={removeContactHandler}
              term={searchTerm}
              searchKeyword={searchHandler}
            />
          )}
        />
        <Route path="/contact/:id" component={ContactDetail} />
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
