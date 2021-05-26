import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
//import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Link from '@material-ui/core/Link';
import Tooltip from '@material-ui/core/Tooltip';

import LinkIcon from '@material-ui/icons/Link';

import EditJobCardDialogBox from './EditJobCardDialogBox';
import LogoAvatar from './LogoAvatar';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '300px',

    // display: 'flex',
    // height: '100%',
    // width: '100%',
  },
  // details: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   justifyContent: 'flex-start',
  // },
  // content: {},
  // logo: {
  //   display: 'flex',
  //   flexDirection: 'column',
  // },
  // buttons: {
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'space-around',
  //   paddingLeft: theme.spacing(1),
  //   paddingBottom: theme.spacing(1),
  // },
  // root: {
  //   height: '280px',
  //   width: '300px',
  //   backgroundColor: 'lightGray',
  // },

  content: {
    textAlign: 'left',
  },
  // title: {
  //   fontWeight: 'bold',
  // },

  // company: {
  //   marginBottom: 12,
  //   lineHeight: 1.8,
  // },
}));

function JobCard(props) {
  const classes = useStyles();
  const {
    title,
    company,
    dateApplied,
    jobLink,
    status,
    description,
    location,
    salary,
    userId,
    applicationId,
  } = props;

  const handleLinkClick = () => {
    window.open(jobLink, '_blank');
  };

  return (
    <Card className={classes.root} variant='outlined'>
      <CardHeader
        avatar={<LogoAvatar company={company} />}
        title={title}
        subheader={company}
      />

      <CardContent className={classes.content}>
        <Typography variant='body2' component='p'>
          {dateApplied}
        </Typography>
      </CardContent>
      <CardActions>
        <EditJobCardDialogBox
          title={title}
          company={company}
          jobLink={jobLink}
          status={status}
          description={description}
          location={location}
          salary={salary}
          userId={userId}
          applicationId={applicationId}
        />

        <Tooltip title='Go to Job Post'>
          <Chip
            label={<LinkIcon />}
            onClick={handleLinkClick}
            color='primary'
            clickable
            // variant='outlined'
          />
        </Tooltip>
      </CardActions>
    </Card>
  );
}

export default JobCard;
