import { Contacts, PersonAddAlt1 } from '@mui/icons-material';
import { Outlet, useNavigate } from 'react-router';
import { PAGES } from './constants.js';
import { StyledButton } from './styledComponents.js';

export const MainLayout = () => {
  const navigate = useNavigate();
  return (
    <>
      <StyledButton
        variant="outlined"
        startIcon={<Contacts />}
        onClick={() => navigate(PAGES.LIST)}
      >
        Contacts List
      </StyledButton>
      <StyledButton
        variant="outlined"
        endIcon={<PersonAddAlt1 />}
        onClick={() => navigate(PAGES.ADD)}
      >
        Add Contact
      </StyledButton>
      <Outlet />
    </>
  );
};
