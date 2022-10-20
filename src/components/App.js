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
  const [searchResults, setSearchResults] = useState([]);

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
