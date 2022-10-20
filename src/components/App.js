import React, { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import api from "../api/contacts";
import "./App.css";
import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";
import ContactDetail from "./ContactDetail";
import UpdateContact from "./UpdateContact";
import { ContactsCrudContextProvider } from "../context/ContactsCrudContext";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

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
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <ContactsCrudContextProvider>
          <Routes>
            <Route
              path="/"
              exact
              element={<ContactList />}
              // render={(props) => (
              //   <ContactList
              //     {...props}
              //     contacts={searchTerm.length < 1 ? contacts : searchResults}
              //     onDelete={removeContactHandler}
              //     term={searchTerm}
              //     searchKeyword={searchHandler}
              //   />
              // )}
            />

            <Route
              path="/add"
              element={<AddContact />}
              // render={(props) => (
              //   <AddContact {...props} addContactHandler={addContactHandler} />
              // )}
            />

            <Route
              path="/edit"
              element={<UpdateContact />}
              // render={(props) => (
              //   <UpdateContact
              //     {...props}
              //     updateContactHandler={updateContactHandler}
              //   />
              // )}
            />

            <Route path="/contact/:id" element={<ContactDetail />} />
          </Routes>
        </ContactsCrudContextProvider>
        {/* <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
