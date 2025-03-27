import { ContactsContext } from './context.jsx';
import { useEffect, useState } from 'react';
import { PAGES } from '../../layouts/MainLayout/constants.js';
import { useNavigate } from 'react-router';

export const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const navigate = useNavigate();

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const saveContact = (formValue) => {
    const invalidKeys = Object.keys(formValue).filter((key) => !formValue[key]);

    if (invalidKeys.length > 0) {
      return invalidKeys;
    }

    if (selectedContact) {
      setContacts(
        contacts.reduce((acc, contact) => {
          if (contact.id !== selectedContact.id) {
            acc.push(contact);
          } else {
            acc.push({
              id: contact.id,
              ...formValue,
            });
          }
          return acc;
        }, []),
      );
      navigate(PAGES.LIST);
      return;
    }

    setContacts([
      ...contacts,
      {
        id: contacts.at(-1).id + 1,
        firstName: formValue.firstName,
        lastName: formValue.lastName,
        phone: formValue.phone,
      },
    ]);

    navigate(PAGES.LIST);
  };

  useEffect(() => {
    const contactsFromLocalStorage = localStorage.getItem('contacts');

    if (contactsFromLocalStorage) {
      setContacts(JSON.parse(contactsFromLocalStorage));
      localStorage.removeItem('contacts');
    } else {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => {
          setContacts(
            data.map((el) => ({
              id: el.id,
              firstName: el.name.split(' ')[0],
              lastName: el.name.split(' ')[1],
              phone: el.phone,
            })),
          );
        });
    }

    return () => {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    };
  }, []);

  useEffect(() => {
    if (!contacts.length) return;

    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <ContactsContext.Provider
      value={{
        contacts,
        selectedContact,
        setSelectedContact,
        deleteContact,
        saveContact,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};
