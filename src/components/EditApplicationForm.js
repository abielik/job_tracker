import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import { updateApplication } from '../firebase/updateApplication';
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
  const [title, setTitle] = useState(props.title);
  const [company, setCompany] = useState(props.company);
  const [jobLink, setJobLink] = useState(props.jobLink);
  const [status, setStatus] = useState(props.status);
  const [description, setDescription] = useState(props.description || '');

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(
      'UPDATED::: Title: ',
      title,
      'Compnay: ',
      company,
      'JobLink: ',
      jobLink,
      'description: ',
      description,
      'status: ',
      status
    );
    updateApplication(
      props.userId,
      props.applicationId,
      title,
      company,
      status,
      jobLink,
      description
    );
    props.handleClose();
  };
  const statuses = ['Applied', 'Interviewing', 'Rejected'];
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
            defaultValue={title}
            id='title'
            label='Title'
            variant='filled'
            onChange={(event) => setTitle(event.target.value)}
          />
          <TextField
            required
            defaultValue={company}
            id='company'
            label='Company'
            variant='filled'
            onChange={(event) => setCompany(event.target.value)}
          />
          <TextField
            required
            defaultValue={jobLink}
            id='jobLink'
            label='Job Link'
            variant='filled'
            onChange={(event) => setJobLink(event.target.value)}
          />
          <TextField
            select
            id='status'
            label='Select'
            value={status}
            variant='filled'
            onChange={(event) => setStatus(event.target.value)}
          >
            {statuses.map((status) => (
              <MenuItem key={status.toLowerCase()} value={status.toLowerCase()}>
                {status}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            multiline
            variant='filled'
            id='description'
            label='Description'
            value={description}
            rows={4}
            onChange={(event) => setDescription(event.target.value)}
          />
        </Grid>
        <ActionButton text='Save' />
      </Grid>
    </form>
  );
}
