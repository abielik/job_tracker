import React from 'react';

import Button from '@material-ui/core/Button';

export default function AuthenticationButton(props) {
  const { onClick, text, color, variant } = props;
  return (
    <Button type='submit' color={color} variant={variant} onClick={onClick}>
      {text}
    </Button>
  );
}
