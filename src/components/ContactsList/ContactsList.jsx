import './ContactsList.css';
import { Delete, Edit } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { PAGES } from '../../layouts/MainLayout/constants.js';
import { useNavigate } from 'react-router';
import { useContacts } from '../../contexts/ConstactsContext/index.js';
import { useEffect, useState } from 'react';
import { DeleteContactConfirmation } from '../DeleteContactConfirmation/DeleteContactConfirmation.jsx';

export const ContactsList = () => {
  const navigate = useNavigate();
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const { contacts, setSelectedContact } = useContacts();

  useEffect(() => {
    setSelectedContact(null);
  }, []);

  return (
    <>
      <div className="contacts-table">
        <div className="header-container">
          <p className="first-name">FIRST NAME</p>
          <p className="last-name">LAST NAME</p>
          <p className="phone">PHONE</p>
          <p className="actions">ACTIONS</p>
        </div>

        {contacts.map((contact) => (
          <div key={contact.id} className="contact table-row">
            <p className="first-name">{contact.firstName}</p>
            <p className="last-name">{contact.lastName}</p>
            <p className="phone">{contact.phone}</p>

            <p className="actions">
              <IconButton
                color="info"
                onClick={() => {
                  setSelectedContact(contact);
                  navigate(PAGES.ADD);
                }}
              >
                <Edit />
              </IconButton>

              <IconButton
                color="error"
                onClick={() => {
                  setSelectedContact(contact);
                  setConfirmationOpen(true);
                }}
              >
                <Delete />
              </IconButton>
            </p>
          </div>
        ))}
      </div>
      <DeleteContactConfirmation
        open={confirmationOpen}
        handleClose={() => setConfirmationOpen(false)}
      />
    </>
  );
};
