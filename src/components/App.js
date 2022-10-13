import React from 'react';
import './App.css';
import Header from './Header';
import ContactList from './ContactList';
import AddContact from './AddContact';

function App() {
  const contacts = [
    {
      id: '1',
      name: 'Danara',
      email: 'danara.tagayeva@gmail.com',
    },
    {
      id: '2',
      name: 'Sandibek',
      email: 'sandibek@gmail.com',
    },
    {
      id: '3',
      name: 'Ismail',
      email: 'ismail.ibraimov@gmail.com',
    },
    {
      id: '4',
      name: 'Ilyas',
      email: 'ilyas.ibraimov@gmail.com',
    },
    {
      id: '5',
      name: 'Muhammad',
      email: 'muhammad.ibraimov@gmail.com',
    },
  ];

  return (
    <div className='ui container'>
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
