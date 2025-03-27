import { useContext } from 'react';
import { ContactsContext } from './context.jsx';

export const useContacts = () => useContext(ContactsContext);
