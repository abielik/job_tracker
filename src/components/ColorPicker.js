import React, { useState } from 'react';
import { CirclePicker } from 'react-color';

export default function ColorPicker(props) {
  const [cardColor, setCardColor] = useState('');

  return (
    <CirclePicker
      color={cardColor}
      onChange={(event) => setCardColor(event.target.value)}
    />
  );
}
