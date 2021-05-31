import React, { useState } from 'react';
import { CirclePicker } from 'react-color';
import Paper from '@material-ui/core/Paper';

export default function ColorPicker(props) {
  return (
    <Paper style={{ backgroundColor: props.cardColor }}>
      <CirclePicker
        color={props.cardColor}
        onChangeComplete={(color) => props.setCardColor(color.hex)}
      />
    </Paper>
  );
}
