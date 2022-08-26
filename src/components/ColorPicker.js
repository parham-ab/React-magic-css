import React, { useEffect, useState } from "react";
// mui components
import { Button } from "@mui/material";
// react color picker
import { SketchPicker } from "react-color";
// custom hooks
import DynamicTitle from "../hooks/DynamicTitle";
// icon
import AssignmentIcon from "@mui/icons-material/Assignment";
// copy to clipboard button
import copy from "copy-to-clipboard";
// react toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./functions/toast";

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
    notify("success", "Copied to clipboard ✔");
  };
  useEffect(() => {
    setFinalSource(firstColor);
  }, [firstColor]);
  // dynamic title
  DynamicTitle("Magic CSS - Color Picker");

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
      <ToastContainer />
    </div>
  );
};

export default ColorPicker;
