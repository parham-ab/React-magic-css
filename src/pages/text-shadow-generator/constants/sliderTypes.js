export const getTextShadowSliders = (x, setX, y, setY, blur, setBlur) => [
  { label: "Offset X", min: -40, max: 40, value: x, onChange: setX },
  { label: "Offset Y", min: -40, max: 40, value: y, onChange: setY },
  { label: "Blur", min: 0, max: 60, value: blur, onChange: setBlur },
];
