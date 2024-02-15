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
import { notify } from "../utils/toast";
import { Container } from "@mui/system";

const ColorPicker = () => {
  const [firstColor, setFirstColor] = useState("");
  const [finalSource, setFinalSource] = useState();
  const changeHandle = (e) => {
    setFirstColor(e.hex);
  };
  const copyToClipboard = () => {
    copy(finalSource);
    notify("success", "Copied to clipboard ✔");
  };
  useEffect(() => {
    setFinalSource(firstColor);
  }, [firstColor]);
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
    </Container>
  );
};

export default ColorPicker;
