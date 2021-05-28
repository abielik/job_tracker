import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

export default function ColorPicker(props) {
  const [cardColor, setCardColor] = useState('');

  return (
    <SketchPicker
      color={cardColor}
      onChange={(event) => setCardColor(event.target.value)}
    />
  );
}
