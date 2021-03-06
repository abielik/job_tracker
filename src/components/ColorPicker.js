import React, { useState } from 'react';
import { CirclePicker } from 'react-color';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'inline-block',
    alignItems: 'center',
    //borderRadius: '20px',
    padding: '22px 31px',
    marginTop: '25px',
    color: 'white',
  },
}));

export default function ColorPicker(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <ClickAwayListener onClickAway={handleClose}>
        <Tooltip title='Change Card Color'>
          <Button
            className={classes.button}
            fullWidth
            size='large'
            style={{
              backgroundColor: props.cardColor || '#3f51b5',
            }}
            onClick={handleClickOpen}
          >
            Card Color
          </Button>
        </Tooltip>
      </ClickAwayListener>
      <div>
        {open ? (
          <CirclePicker
            color={props.cardColor}
            onChangeComplete={(color) => props.setCardColor(color.hex)}
          />
        ) : null}
      </div>
    </React.Fragment>
  );
}
