import { createContext } from 'react';

export const ContactsContext = createContext({
  contacts: [],
  selectedContact: null,
  setSelectedContact: () => null,
  deleteContact: () => null,
  saveContact: () => null,
});
