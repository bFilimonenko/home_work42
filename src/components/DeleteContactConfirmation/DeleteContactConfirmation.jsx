import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useContacts } from '../../contexts/ConstactsContext/index.js';

export const DeleteContactConfirmation = ({ open, handleClose }) => {
  const { deleteContact, selectedContact } = useContacts();

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{'Are you sure you want to delete this contact?'}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {selectedContact && `Contact: '${selectedContact.firstName}'`}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          onClick={() => {
            deleteContact();
            handleClose();
          }}
          autoFocus
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};
