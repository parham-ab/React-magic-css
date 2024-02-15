import React, { useEffect, useState } from "react";
import { Button, Grid } from "@mui/material";
import { SketchPicker } from "react-color";
import UseTitle from "../hooks/useTitle";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Container } from "@mui/system";
import { copyToClipboard } from './../utils/copyToClipboard';

const ColorPicker = () => {
  const [firstColor, setFirstColor] = useState("");
  const [finalSource, setFinalSource] = useState();
  const changeHandle = (e) => {
    setFirstColor(e.hex);
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
            onClick={() => copyToClipboard(finalSource)}
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
