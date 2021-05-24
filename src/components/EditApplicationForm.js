import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import AddIcon from '@material-ui/icons/Add';

import { updateApplication } from '../firebase/updateApplication';
import { deleteApplication } from '../firebase/deleteApplication';
// import ActionButton from './ActionButton';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFormControl-root': {
      margin: theme.spacing(2),
      width: '85%',
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
  const [location, setLocation] = useState(props.location || '');
  const [salary, setSalary] = useState(props.salary || '');

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
      description,
      location,
      salary
    );
    props.handleClose();
  };

  const handleDelete = (event) => {
    deleteApplication(props.userId, props.applicationId);
  };
  const statuses = ['Applied', 'Interviewing', 'Rejected'];
  return (
    <form
      className={classes.root}
      noValidate
      autoComplete='off'
      onSubmit={handleSubmit}
    >
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField
            required
            defaultValue={title}
            id='title'
            label='Title'
            variant='filled'
            onChange={(event) => setTitle(event.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            required
            defaultValue={company}
            id='company'
            label='Company'
            variant='filled'
            onChange={(event) => setCompany(event.target.value)}
          />
        </Grid>
        <Grid item xs={2}>
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
        </Grid>
        <Grid item xs={4}>
          <TextField
            required
            defaultValue={jobLink}
            id='jobLink'
            label='Job Link'
            variant='filled'
            onChange={(event) => setJobLink(event.target.value)}
          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            defaultValue={location}
            id='location'
            label='Location'
            variant='filled'
            onChange={(event) => setLocation(event.target.value)}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            defaultValue={salary}
            id='salary'
            label='Salary'
            variant='filled'
            onChange={(event) => setSalary(event.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
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
        <Grid item xs={10}>
          <Button fullWidth variant='contained' color='primary' type='submit'>
            Save <AddIcon />
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant='contained' onClick={handleDelete}>
            DELETE
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
