import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function LogoAvatar(props) {
  const classes = useStyles();

  const removeSpacesFromCompanyName = (company) => {
    return company.split(' ').join('');
  };

  return (
    <div className={classes.root}>
      <Avatar
        alt={props.company}
        src={`https://logo.clearbit.com/${removeSpacesFromCompanyName(
          props.company
        )}.com`}
      />
    </div>
  );
}
