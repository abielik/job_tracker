import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import { addApplication } from '../firebase/addApplication';
import ActionButton from './ActionButton';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFormControl-root': {
      margin: theme.spacing(1),
      width: '80%',
    },
  },
}));

export default function EditApplicationForm(props) {
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [jobLink, setJobLink] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Title: ', title, 'Compnay: ', company, 'JobLink: ', jobLink);
    addApplication(props.userId, title, company, jobLink);
    props.handleClose();
  };

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete='off'
      onSubmit={handleSubmit}
    >
      <Grid container>
        <Grid item xs={12}>
          <TextField
            required
            defaultValue={props.title}
            id='title'
            label='Title'
            variant='filled'
            color='primary'
            onChange={(event) => setTitle(event.target.value)}
          />
          <TextField
            required
            defaultValue={props.company}
            id='company'
            label='Company'
            variant='filled'
            color='primary'
            onChange={(event) => setCompany(event.target.value)}
          />
          <TextField
            required
            defaultValue={props.jobLink}
            id='jobLink'
            label='Job Link'
            variant='filled'
            color='primary'
            onChange={(event) => setJobLink(event.target.value)}
          />
        </Grid>
        <ActionButton text='Save' onClick={handleSubmit} />
      </Grid>
    </form>
  );
}
