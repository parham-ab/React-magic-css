import { useEffect, useState } from "react";
// copy to clipboard button
import copy from "copy-to-clipboard";
// react toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./functions/toast";
// mui components
import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Slider,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
// icon
import AssignmentIcon from "@mui/icons-material/Assignment";
// react color picker
import { SketchPicker } from "react-color";

const Gradient = () => {
  const [firstColor, setFirstColor] = useState("");
  const [secondColor, setSecondColor] = useState("");
  const [angle, setAngle] = useState(0);
  const [gradientType, setGradientType] = useState("Linear");
  const [finalSource, setFinalSource] = useState();
  // copy to clipboard button
  useEffect(() => {
    gradientType === "Linear"
      ? setFinalSource(
          `linear-gradient(${angle}deg,${firstColor},${secondColor})`
        )
      : setFinalSource(`radial-gradient(circle,${firstColor},${secondColor})`);
  }, [firstColor, secondColor, angle, gradientType]);

  const copyToClipboard = () => {
    copy(finalSource);
    notify("success", "Copied to clipboard ✔");
  };

  return (
    <Container>
      <Grid container>
        <Grid item mt={5} sx={{ margin: "4rem auto" }}>
          <Box
            component="div"
            className="custom-box"
            textAlign="center"
            style={{
              background:
                gradientType === "Linear"
                  ? `linear-gradient(${angle}deg,${firstColor},${secondColor})`
                  : `radial-gradient(circle,${firstColor},${secondColor})`,
            }}
          ></Box>

          <Box component="div">
            <Grid
              item
              component="div"
              sm={12}
              xs={5}
              sx={{ margin: "24px auto" }}
              display="flex"
              flexDirection="column"
            >
              <FormControl>
                <FormLabel id="type" color="success">
                  Type
                </FormLabel>
                <RadioGroup
                  name="type"
                  value={gradientType}
                  onChange={(e) => setGradientType(e.target.value)}
                >
                  <FormControlLabel
                    value="Linear"
                    control={<Radio color="success" />}
                    label="Linear"
                  />
                  <FormControlLabel
                    value="Radial"
                    control={<Radio color="success" />}
                    label="Radial"
                  />
                </RadioGroup>
              </FormControl>
              {gradientType === "Linear" && (
                <Box component="div">
                  <Typography
                    variant="h5"
                    color="text.secondary"
                    textAlign="center"
                  >
                    Angle
                  </Typography>
                  <Slider
                    min={0}
                    max={360}
                    size="small"
                    defaultValue={0}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    sx={{ color: "#2764b0" }}
                    value={angle}
                    onChange={(e) => setAngle(e.target.value)}
                  />
                </Box>
              )}
              <Button
                onClick={copyToClipboard}
                sx={{ marginY: "50px" }}
                variant="contained"
                startIcon={<AssignmentIcon />}
              >
                Copy
              </Button>
            </Grid>

            <Grid container display="flex" justifyContent="space-around">
              <Grid item mt={3}>
                <SketchPicker
                  width="170px"
                  xs={12}
                  color={firstColor}
                  onChangeComplete={(e) => setFirstColor(e.hex)}
                />
              </Grid>
              <Grid item mt={3}>
                <SketchPicker
                  width="170px"
                  xs={12}
                  color={secondColor}
                  onChangeComplete={(e) => setSecondColor(e.hex)}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <ToastContainer />
    </Container>
  );
};

export default Gradient;
