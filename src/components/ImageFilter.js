import React, { useState } from "react";
// mui components
import {
  Box,
  Container,
  Grid,
  IconButton,
  Slider,
  Typography,
} from "@mui/material";
// icons
import PhotoCamera from "@mui/icons-material/PhotoCamera";
// custom hooks
import DynamicTitle from "../hooks/DynamicTitle";
// img
import car from "../assets/img/1.jpg";

const ImageFilter = () => {
  const [greyscaleVal, setGreyscaleVal] = useState(0);
  const [blurVal, setBlurVal] = useState(0);
  const [sepiaVal, setSepiaVal] = useState(0);
  const [saturateVal, setSaturateVal] = useState(0);
  const [opacityVal, setOpacityVal] = useState(0);
  const [brightnessVal, setBrightnessVal] = useState(0);
  const [contrastVal, setContrastVal] = useState(0);
  const [HueVal, setHueVal] = useState(0);
  const [invert, setInvertVal] = useState(0);
  // dynamic title
  DynamicTitle("Magic CSS - Image filter");

  return (
    <Container>
      <Grid container display="flex" justifyContent="space-around">
        <Grid item mt={20}>
          <Typography variant="h5" color="text.secondary" textAlign="center">
            Grayscale
          </Typography>
          <Slider
            min={0}
            max={100}
            size="small"
            defaultValue={50}
            aria-label="Small"
            valueLabelDisplay="auto"
            sx={{ color: "#2764b0" }}
            value={greyscaleVal}
            onChange={(e) => setGreyscaleVal(e.target.value)}
          />

          <Typography variant="h5" color="text.secondary" textAlign="center">
            Blur
          </Typography>
          <Slider
            min={0}
            max={30}
            size="small"
            defaultValue={0}
            aria-label="Small"
            valueLabelDisplay="auto"
            sx={{ color: "#2764b0" }}
            value={blurVal}
            onChange={(e) => setBlurVal(e.target.value)}
          />
        </Grid>
        <Grid item mt={20}>
          <Box component="div">
            <img
              src={car}
              alt="car"
              width="500px"
              style={{
                filter: `grayscale(${greyscaleVal}%) blur(${blurVal}px)`,
              }}
            />
          </Box>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input hidden accept="image/*" type="file" />
            <PhotoCamera />
          </IconButton>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ImageFilter;
