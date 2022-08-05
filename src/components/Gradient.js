import { Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { SketchPicker } from "react-color";

const Gradient = () => {
  const [firstColor, setFirstColor] = useState("");
  const [secondColor, setSecondColor] = useState("");

  return (
    <div>
      <Container>
        <Grid container>
          <Grid item mt={5} sx={{ margin: "4rem auto" }}>
            <Box
              component="div"
              className="gradient-box"
              textAlign="center"
              style={{
                background: `linear-gradient(${firstColor},${secondColor})`,
              }}
            ></Box>

            <Box component="div" display="flex">
              <SketchPicker
                width="180px"
                color={firstColor}
                onChangeComplete={(e) => setFirstColor(e.hex)}
              />
              <SketchPicker
                width="180px"
                color={secondColor}
                onChangeComplete={(e) => setSecondColor(e.hex)}
              />
            </Box>
          </Grid>
        </Grid>
        {/* <ToastContainer /> */}
      </Container>
    </div>
  );
};

export default Gradient;
