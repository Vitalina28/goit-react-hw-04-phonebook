import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

const userContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const storageContacts = localStorage.getItem('contacts');
    return storageContacts ? JSON.parse(storageContacts) : userContacts;
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addUserName = ({ name, number }) => {
    const user = {
      id: nanoid(),
      name,
      number,
    };

    console.log(user);
    setContacts(prevContacts => [user, ...prevContacts]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const getVisibleContact = () => {
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const visibleContacts = getVisibleContact();

  return (
    <div
      style={{
        width: '600px',
        height: 'auto',
        border: '1px solid black',
        marginRight: 'auto',
        marginLeft: 'auto',
        padding: '20px',
      }}
    >
      <h1 style={{ textAlign: 'center' }}>Phonebook</h1>
      <ContactForm contacts={contacts} addUserName={addUserName} />

      <h2>Contacts</h2>
      <Filter filter={filter} onChange={changeFilter} />

      <ContactList visibleContacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}
