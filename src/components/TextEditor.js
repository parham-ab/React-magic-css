import { useEffect, useState } from "react";
// react toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// copy to clipboard button
import copy from "copy-to-clipboard";
// color picker
import { SketchPicker } from "react-color";
// mui components
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Slider,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
// icon
import AssignmentIcon from "@mui/icons-material/Assignment";
// react toastify
import { notify } from "./functions/toast";
// custom hooks
import UseTitle from "../hooks/useTitle";

const TextEditor = () => {


  useEffect(() => {}, []);
  // copy to clipboard button
//   const copyToClipboard = () => {
//     copy(finalSource);
//     notify("success", "Copied to clipboard ✔");
//   };
  // dynamic title
  UseTitle("Magic CSS - Text Editor");

  return (
    <Container>
      <Grid container>
        
      </Grid>
      <ToastContainer />
    </Container>
  );
};

export default TextEditor;
