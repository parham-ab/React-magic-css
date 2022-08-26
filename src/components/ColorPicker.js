import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ChromePicker, SketchPicker } from "react-color";
// icon
import AssignmentIcon from "@mui/icons-material/Assignment";
// copy to clipboard button
import copy from "copy-to-clipboard";

const ColorPicker = () => {
  const [firstColor, setFirstColor] = useState("");
  const [finalSource, setFinalSource] = useState();
  // change hanlder
  const changeHandle = (e) => {
    setFirstColor(e.hex);
  };
  // copy to clipboard function
  const copyToClipboard = () => {
    copy(finalSource);
  };
  useEffect(() => {
    setFinalSource(firstColor);
  }, [firstColor]);

  return (
    <div>
      <SketchPicker color={firstColor} onChangeComplete={changeHandle} />
      <Button
        onClick={copyToClipboard}
        sx={{ marginY: "50px" }}
        variant="contained"
        startIcon={<AssignmentIcon />}
      >
        Copy
      </Button>
    </div>
  );
};

export default ColorPicker;
