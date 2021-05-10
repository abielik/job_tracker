import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export function AddApplicationForm() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete='off'>
      <TextField
        required
        id='title'
        label='Title'
        variant='filled'
        color='primary'
      />
      <TextField
        required
        id='company'
        label='Company'
        variant='filled'
        color='primary'
      />
    </form>
  );
}

export default AddApplicationForm;
