import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import Slide from '@material-ui/core/Slide';
import Tooltip from '@material-ui/core/Tooltip';

import EditApplicationForm from './EditApplicationForm';
import LogoAvatar from './LogoAvatar';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function EditJobCardDialogBox(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    console.log('PROPS: ', props);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const {
    title,
    company,
    jobLink,
    status,
    description,
    userId,
    applicationId,
    location,
    salary,
  } = props;

  return (
    <div>
      <Tooltip title='Edit Applitcation'>
        <Button
          fullWidth
          // variant='outlined'
          color='primary'
          onClick={handleClickOpen}
        >
          <EditIcon />
        </Button>
      </Tooltip>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <LogoAvatar company={company} />
            <Typography variant='h6' className={classes.title}>
              {`${title} @ ${company}`}
            </Typography>
            <Typography variant='body1' className={classes.title}>
              {`Current application status: ${status}`}
            </Typography>
            <Button autoFocus color='inherit' onClick={handleClose}>
              <IconButton
                edge='start'
                color='inherit'
                onClick={handleClose}
                aria-label='close'
              >
                <CloseIcon />
              </IconButton>
            </Button>
          </Toolbar>
        </AppBar>
        <EditApplicationForm
          title={title}
          company={company}
          jobLink={jobLink}
          userId={userId}
          applicationId={applicationId}
          status={status}
          description={description}
          location={location}
          salary={salary}
          handleClose={handleClose}
        />
      </Dialog>
    </div>
  );
}
