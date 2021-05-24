import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteIcon from '@material-ui/icons/Delete';

import { deleteApplication } from '../firebase/deleteApplication';

export default function DeleteApplicationDialogBox(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (event) => {
    deleteApplication(props.userId, props.applicationId);
  };

  return (
    <div>
      <Button variant='outlined' color='secondary' onClick={handleClickOpen}>
        Delete
        <DeleteIcon />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          Are you sure you want to delete this application?
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleDelete} color='secondary' variant='contained'>
            DELETE
          </Button>
          <Button onClick={handleClose} color='primary'>
            CANCEL
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
