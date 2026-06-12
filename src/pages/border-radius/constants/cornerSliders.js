export const getCornerSliders = (
  topLeft,
  setTopLeft,
  topRight,
  setTopRight,
  bottomRight,
  setBottomRight,
  bottomLeft,
  setBottomLeft,
) => [
  { label: "Top Left", state: topLeft, setState: setTopLeft },
  { label: "Top Right", state: topRight, setState: setTopRight },
  { label: "Bottom Right", state: bottomRight, setState: setBottomRight },
  { label: "Bottom Left", state: bottomLeft, setState: setBottomLeft },
];
