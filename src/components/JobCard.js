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
import Button from '@material-ui/core/Button';

import LinkIcon from '@material-ui/icons/Link';

import EditJobCardDialogBox from './EditJobCardDialogBox';
import LogoAvatar from './LogoAvatar';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '350px',
    backgroundColor: 'lightgray',
  },
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
        title={
          <Typography variant='h6' noWrap align='left'>
            {title}
          </Typography>
        }
        subheader={
          <Typography variant='body2' noWrap align='left'>
            {company}
          </Typography>
        }
      />

      {/* <CardContent className={classes.content}></CardContent> */}
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
          <Button onClick={handleLinkClick}>
            <LinkIcon />
          </Button>

          {/* <Chip
            label={<LinkIcon />}
            onClick={handleLinkClick}
            color='inherit'
            clickable
            variant='outlined'
          /> */}
        </Tooltip>
        <Typography variant='body2' component='p'>
          {dateApplied}
        </Typography>
      </CardActions>
    </Card>
  );
}

export default JobCard;
