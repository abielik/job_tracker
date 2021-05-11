import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Modal from '@material-ui/core/Modal';
//import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import AddApplicationForm from './AddApplicationForm';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    margin: theme.spacing(1),
  },
  paper: {
    width: 400,
    margin: 'auto',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Navbar() {
  const classes = useStyles();
  const [openApplicationForm, setOpenApplicationForm] = useState(false);

  const handleOpenApplicationForm = () => {
    setOpenApplicationForm(true);
  };

  const handleCloseApplicationForm = () => {
    setOpenApplicationForm(false);
  };

  const body = (
    <div className={classes.paper}>
      <AddApplicationForm closeForm={handleCloseApplicationForm} />
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>

          {/* <Button
            className={classes.title}
            variant='contained'
            color='inherit'
            onClick={handleOpenApplicationForm}
          >
            Add Application
          </Button> */}
          <Modal
            open={openApplicationForm}
            onClose={handleCloseApplicationForm}
          >
            {body}
          </Modal>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
