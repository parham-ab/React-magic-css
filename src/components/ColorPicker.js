import React, { useEffect, useState } from "react";
// mui components
import { Button, Grid } from "@mui/material";
// react color picker
import { SketchPicker } from "react-color";
// custom hooks
import UseTitle from "../hooks/useTitle";
// icon
import AssignmentIcon from "@mui/icons-material/Assignment";
// copy to clipboard button
import copy from "copy-to-clipboard";
// react toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./functions/toast";
import { Container } from "@mui/system";

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
  UseTitle("Magic CSS - Color Picker");

  return (
    <Container>
      <Grid container>
        <Grid item sx={{ margin: "80px auto" }}>
          <SketchPicker color={firstColor} onChangeComplete={changeHandle} />
          <Button
            onClick={copyToClipboard}
            sx={{ marginY: "50px", width: "220px" }}
            variant="contained"
            startIcon={<AssignmentIcon />}
          >
            Copy
          </Button>
        </Grid>
      </Grid>
      <ToastContainer />
    </Container>
  );
};

export default ColorPicker;
