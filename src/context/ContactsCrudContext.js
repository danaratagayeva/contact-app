import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import api from "../api/contacts";

const ContactsCrudContext = createContext();

export function ContactsCrudContextProvider({ children }) {
  const [contacts, setContacts] = useState([]);

  //RetrieveContacts
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    if (response.data) setContacts(response.data);
  };

  //Delete contact
  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };
  //Add contacts
  const addContactHandler = async (contact) => {
    const request = {
      id: uuidv4(),
      ...contact,
    };
    const response = await api.post("/contacts", request);
    console.log(contact);
    setContacts([...contacts, response.data]);
  };

  const value = {
    contacts,
    retrieveContacts,
    removeContactHandler,
    addContactHandler,
  };
  return (
    <ContactsCrudContext.Provider value={value}>
      {children}
    </ContactsCrudContext.Provider>
  );
}

export function useContactsCrud() {
  return useContext(ContactsCrudContext);
}
