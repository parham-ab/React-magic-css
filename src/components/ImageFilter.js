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
  const [saturateVal, setSaturateVal] = useState(1);
  const [opacityVal, setOpacityVal] = useState(1);
  const [brightnessVal, setBrightnessVal] = useState(100);
  const [contrastVal, setContrastVal] = useState(100);
  const [hueVal, setHueVal] = useState(0);
  const [invertVal, setInvertVal] = useState(0);
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
            defaultValue={0}
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

          <Typography variant="h5" color="text.secondary" textAlign="center">
            Sepia
          </Typography>
          <Slider
            min={0}
            max={1}
            step={0.1}
            size="small"
            defaultValue={0}
            aria-label="Small"
            valueLabelDisplay="auto"
            sx={{ color: "#2764b0" }}
            value={sepiaVal}
            onChange={(e) => setSepiaVal(e.target.value)}
          />

          <Typography variant="h5" color="text.secondary" textAlign="center">
            Saturate
          </Typography>
          <Slider
            min={0}
            max={1}
            step={0.1}
            size="small"
            defaultValue={1}
            aria-label="Small"
            valueLabelDisplay="auto"
            sx={{ color: "#2764b0" }}
            value={saturateVal}
            onChange={(e) => setSaturateVal(e.target.value)}
          />

          <Typography variant="h5" color="text.secondary" textAlign="center">
            Opacity
          </Typography>
          <Slider
            min={0}
            max={1}
            step={0.1}
            size="small"
            defaultValue={1}
            aria-label="Small"
            valueLabelDisplay="auto"
            sx={{ color: "#2764b0" }}
            value={opacityVal}
            onChange={(e) => setOpacityVal(e.target.value)}
          />

          <Typography variant="h5" color="text.secondary" textAlign="center">
            Brightness
          </Typography>
          <Slider
            min={0}
            max={200}
            size="small"
            defaultValue={100}
            aria-label="Small"
            valueLabelDisplay="auto"
            sx={{ color: "#2764b0" }}
            value={brightnessVal}
            onChange={(e) => setBrightnessVal(e.target.value)}
          />

          <Typography variant="h5" color="text.secondary" textAlign="center">
            Contrast
          </Typography>
          <Slider
            min={0}
            max={200}
            size="small"
            defaultValue={100}
            aria-label="Small"
            valueLabelDisplay="auto"
            sx={{ color: "#2764b0" }}
            value={contrastVal}
            onChange={(e) => setContrastVal(e.target.value)}
          />

          <Typography variant="h5" color="text.secondary" textAlign="center">
            Hue-rotate
          </Typography>
          <Slider
            min={0}
            max={360}
            size="small"
            defaultValue={0}
            aria-label="Small"
            valueLabelDisplay="auto"
            sx={{ color: "#2764b0" }}
            value={hueVal}
            onChange={(e) => setHueVal(e.target.value)}
          />

          <Typography variant="h5" color="text.secondary" textAlign="center">
            Invert
          </Typography>
          <Slider
            min={0}
            max={200}
            size="small"
            defaultValue={0}
            aria-label="Small"
            valueLabelDisplay="auto"
            sx={{ color: "#2764b0" }}
            value={invertVal}
            onChange={(e) => setInvertVal(e.target.value)}
          />
        </Grid>
        <Grid item mt={20}>
          <Box component="div">
            {console.log(sepiaVal)}
            <img
              src={car}
              alt="car"
              width="500px"
              style={{
                filter: `grayscale(${greyscaleVal}%) blur(${blurVal}px) sepia(${sepiaVal}) saturate(${saturateVal}) opacity(${opacityVal}) brightness(${opacityVal}%) contrast(${contrastVal}%) hue-rotate(${hueVal}deg) invert(${invertVal}%)`,
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
