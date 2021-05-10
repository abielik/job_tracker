import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export function AddApplicationForm(props) {
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Title: ', title, 'Compnay: ', company);
    props.closeForm();
  };

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete='off'
      onSubmit={handleSubmit}
    >
      <TextField
        required
        id='title'
        label='Title'
        variant='filled'
        color='primary'
        onChange={(event) => setTitle(event.target.value)}
      />
      <TextField
        required
        id='company'
        label='Company'
        variant='filled'
        color='primary'
        onChange={(event) => setCompany(event.target.value)}
      />
      <Fab type='submit' color='primary' aria-label='add'>
        <AddIcon />
      </Fab>
    </form>
  );
}

export default AddApplicationForm;
