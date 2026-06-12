export const SHADOW_SLIDER_TYPES = (state) => [
  {
    label: "Offset X",
    min: -130,
    max: 130,
    value: state.x,
    onChange: state.setX,
  },
  {
    label: "Offset Y",
    min: -130,
    max: 130,
    value: state.y,
    onChange: state.setY,
  },
  {
    label: "Blur",
    min: 0,
    max: 130,
    value: state.blur,
    onChange: state.setBlur,
  },
  {
    label: "Spread",
    min: -50,
    max: 50,
    value: state.spread,
    onChange: state.setSpread,
  },
];
