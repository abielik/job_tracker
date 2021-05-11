import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { addApplication } from '../firebase/addApplication';

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
  const [jobLink, setJobLink] = useState('');
  //const [dateApplied, setDateApplied] = useState('');

  const todaysDate = new Date();
  const dateApplied = `Applied ${
    todaysDate.getMonth() + 1
  }/${todaysDate.getDate()}/${todaysDate.getFullYear()}`;

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(
      'Title: ',
      title,
      'Compnay: ',
      company,
      'JobLink: ',
      jobLink,
      'dateApplied: ',
      dateApplied
    );
    addApplication(
      'X7piePx0YhziBYpEVsEf',
      title,
      company,
      dateApplied,
      'applied',
      jobLink
    );
    //getApplied('X7piePx0YhziBYpEVsEf');
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
      <TextField
        required
        id='jobLink'
        label='Job Link'
        variant='filled'
        color='primary'
        onChange={(event) => setJobLink(event.target.value)}
      />
      <Button
        type='submit'
        color='primary'
        variant='contained'
        aria-label='add'
      >
        Save <AddIcon />
      </Button>
    </form>
  );
}

export default AddApplicationForm;
