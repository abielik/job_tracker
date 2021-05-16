import React from 'react';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

export default function ActionButton(props) {
  const { text, onClick } = props;
  return (
    <Button
      type='submit'
      color='primary'
      variant='contained'
      aria-label='add'
      onClick={onClick}
    >
      {text} <AddIcon />
    </Button>
  );
}
