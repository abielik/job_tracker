import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function StatusSelector(props) {
  const classes = useStyles();
  const [status, setStatus] = React.useState(props.status);

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl} variant='filled'>
        <InputLabel id='demo-simple-select-helper-label'>Age</InputLabel>
        <Select
          labelId='demo-simple-select-helper-label'
          id='demo-simple-select-helper'
          value={status}
          onChange={handleChange}
        >
          <MenuItem value='applied'>Applied</MenuItem>
          <MenuItem value='interviewing'>Interviewing</MenuItem>
          <MenuItem value='rejected'>Rejected</MenuItem>
        </Select>
        <FormHelperText>Change Status</FormHelperText>
      </FormControl>
    </div>
  );
}
