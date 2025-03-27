import { Button } from '@mui/material';
import { Contacts, PersonAddAlt1 } from '@mui/icons-material';
import { Outlet, useNavigate } from 'react-router';
import { PAGES } from './constants.js';

export const MainLayout = () => {
  const navigate = useNavigate();
  return (
    <>
      <Button variant="outlined" startIcon={<Contacts />} onClick={() => navigate(PAGES.LIST)}>
        Contacts List
      </Button>
      <Button variant="outlined" endIcon={<PersonAddAlt1 />} onClick={() => navigate(PAGES.ADD)}>
        Add Contact
      </Button>
      <Outlet />
    </>
  );
};
