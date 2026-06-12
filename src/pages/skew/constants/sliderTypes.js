export const getSkewSliders = (
  skewX,
  setSkewX,
  skewY,
  setSkewY,
  clearPreset,
) => [
  {
    label: "Skew X",
    min: -50,
    max: 50,
    value: skewX,
    onChange: (v) => {
      setSkewX(Number(v));
      clearPreset();
    },
  },
  {
    label: "Skew Y",
    min: -50,
    max: 50,
    value: skewY,
    onChange: (v) => {
      setSkewY(Number(v));
      clearPreset();
    },
  },
];
