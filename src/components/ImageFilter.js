import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Slider,
  Typography,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import AssignmentIcon from "@mui/icons-material/Assignment";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import UseTitle from "../hooks/useTitle";
import { copyToClipboard } from './../utils/copyToClipboard';

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
  const [img, setImg] = useState();
  const [finalSource, setFinalSource] = useState("");

  useEffect(() => {
    setFinalSource(
      `filter: grayscale(${greyscaleVal}%) blur(${blurVal}px) sepia(${sepiaVal}) saturate(${saturateVal}) opacity(${opacityVal}) brightness(${brightnessVal}%) contrast(${contrastVal}%) hue-rotate(${hueVal}deg) invert(${invertVal}%)`
    );
  }, [
    greyscaleVal,
    blurVal,
    sepiaVal,
    saturateVal,
    opacityVal,
    brightnessVal,
    contrastVal,
    hueVal,
    invertVal,
  ]);
  // upload image
  function onImageChange(e) {
    setImg(URL.createObjectURL(e.target.files[0]));
  }
  const resetBtn = () => {
    setGreyscaleVal(0);
    setBlurVal(0);
    setSepiaVal(0);
    setSaturateVal(1);
    setOpacityVal(1);
    setBrightnessVal(100);
    setContrastVal(100);
    setHueVal(0);
    setInvertVal(0);
  };
  UseTitle("Magic CSS - Image filter");
  return (
    <Container>
      <Grid
        container
        display="flex"
        justifyContent="space-around"
        className="filterimage-container"
      >
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
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input
              hidden
              accept="image/*"
              type="file"
              onChange={onImageChange}
            />
            <PhotoCamera />
          </IconButton>
          <IconButton color="error" component="button" onClick={resetBtn}>
            <RestartAltIcon />
          </IconButton>

          <Button
            onClick={() => copyToClipboard(finalSource)}
            sx={{ marginY: "50px" }}
            variant="contained"
            startIcon={<AssignmentIcon />}
            size="small"
          >
            Copy
          </Button>
        </Grid>
        <Grid item mt={20}>
          <Box component="div">
            <img
              src={img}
              alt="Upload an img please!"
              className="filter-img"
              width="450px"
              style={{
                filter: `grayscale(${greyscaleVal}%) blur(${blurVal}px) sepia(${sepiaVal}) saturate(${saturateVal}) opacity(${opacityVal}) brightness(${brightnessVal}%) contrast(${contrastVal}%) hue-rotate(${hueVal}deg) invert(${invertVal}%)`,
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ImageFilter;
