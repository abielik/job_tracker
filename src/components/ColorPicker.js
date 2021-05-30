import React, { useState } from 'react';
import { CirclePicker } from 'react-color';

export default function ColorPicker(props) {
  const [cardColor, setCardColor] = useState('#ccc');

  return (
    <CirclePicker
      color={cardColor}
      onChangeComplete={(color) => setCardColor(color.hex)}
    />
  );
}
