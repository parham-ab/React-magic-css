import { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Slider,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import AssignmentIcon from "@mui/icons-material/Assignment";
import UseTitle from "../hooks/useTitle";
import { copyToClipboard } from './../utils/copyToClipboard';

const BorderRadius = () => {
  const [type, setType] = useState("Same on all sides");
  const [allRadius, setAllRadius] = useState(0);
  const [unit, setUnit] = useState("px");
  const [topLeft, setTopLeft] = useState(0);
  const [topRight, setTopRight] = useState(0);
  const [bottomRight, setBottomRight] = useState(0);
  const [bottomLeft, setBottomLeft] = useState(0);
  const [finalSource, setFinalSource] = useState("");

  useEffect(() => {
    // -----Same on all sides-----
    if (type === "Same on all sides" && unit === "%") {
      setFinalSource(`border-radius:${allRadius}%`);
    } else if (type === "Same on all sides" && unit === "px") {
      setFinalSource(`border-radius:${allRadius}px`);
    }
    // -----Different on all Sides-----
    if (type === "Different on all Sides" && unit === "px") {
      setFinalSource(
        `border-radius:${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`
      );
    } else if (type === "Different on all Sides" && unit === "%") {
      setFinalSource(
        `border-radius:${topLeft}% ${topRight}% ${bottomRight}% ${bottomLeft}%`
      );
    }
  }, [type, allRadius, unit, topLeft, topRight, bottomRight, bottomLeft]);
  UseTitle("Magic CSS - Border radius");

  return (
    <Container>
      <Grid
        container
        display="flex"
        justifyContent="space-around"
        minHeight="90vh"
      >
        <Grid item mt={20}>
          <FormControl fullWidth>
            <InputLabel id="type">Type</InputLabel>
            <Select
              labelId="type"
              id="type"
              value={type}
              label="Type"
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem value={"Different on all Sides"}>
                Different on all Sides
              </MenuItem>
              <MenuItem value={"Same on all sides"}>Same on all sides</MenuItem>
            </Select>
          </FormControl>
          {/* same on all sides */}
          {type === "Same on all sides" ? (
            <>
              <Typography
                variant="h6"
                fontWeight="bold"
                color="text.secondary"
                textAlign="center"
              >
                Radius
              </Typography>
              <Slider
                min={0}
                max={unit === "px" ? 100 : 50}
                size="small"
                defaultValue={0}
                aria-label="Small"
                valueLabelDisplay="auto"
                sx={{ color: "#2764b0" }}
                value={allRadius}
                onChange={(e) => setAllRadius(e.target.value)}
              />

              <FormControl>
                <FormLabel id="unit" color="success">
                  Unit
                </FormLabel>
                <RadioGroup
                  name="unit"
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                >
                  <FormControlLabel
                    value="px"
                    control={<Radio color="success" size="small" />}
                    label="PX"
                  />
                  <FormControlLabel
                    value="%"
                    control={<Radio color="success" size="small" />}
                    label="%"
                  />
                </RadioGroup>
              </FormControl>
            </>
          ) : (
            <>
              <Typography
                variant="h6"
                fontWeight="bold"
                color="text.secondary"
                textAlign="center"
              >
                Top-left
              </Typography>
              <Slider
                min={0}
                max={100}
                size="small"
                defaultValue={0}
                aria-label="Small"
                valueLabelDisplay="auto"
                sx={{ color: "#2764b0" }}
                value={topLeft}
                onChange={(e) => setTopLeft(e.target.value)}
              />
              <Typography
                variant="h6"
                fontWeight="bold"
                color="text.secondary"
                textAlign="center"
              >
                Top-right
              </Typography>
              <Slider
                min={0}
                max={100}
                size="small"
                defaultValue={0}
                aria-label="Small"
                valueLabelDisplay="auto"
                sx={{ color: "#2764b0" }}
                value={topRight}
                onChange={(e) => setTopRight(e.target.value)}
              />
              <Typography
                variant="h6"
                fontWeight="bold"
                color="text.secondary"
                textAlign="center"
              >
                Bottom-right
              </Typography>
              <Slider
                min={0}
                max={100}
                size="small"
                defaultValue={0}
                aria-label="Small"
                valueLabelDisplay="auto"
                sx={{ color: "#2764b0" }}
                value={bottomRight}
                onChange={(e) => setBottomRight(e.target.value)}
              />
              <Typography
                variant="h6"
                fontWeight="bold"
                color="text.secondary"
                textAlign="center"
              >
                Bottom-left
              </Typography>
              <Slider
                min={0}
                max={100}
                size="small"
                defaultValue={0}
                aria-label="Small"
                valueLabelDisplay="auto"
                sx={{ color: "#2764b0" }}
                value={bottomLeft}
                onChange={(e) => setBottomLeft(e.target.value)}
              />

              <FormControl>
                <FormLabel id="unit" color="success">
                  Unit
                </FormLabel>
                <RadioGroup
                  name="unit"
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                >
                  <FormControlLabel
                    value="px"
                    control={<Radio color="success" size="small" />}
                    label="PX"
                  />
                  <FormControlLabel
                    value="%"
                    control={<Radio color="success" size="small" />}
                    label="%"
                  />
                </RadioGroup>
              </FormControl>
            </>
          )}
        </Grid>
        {/* results */}
        <Grid item mt={20}>
          <Box
            component="div"
            className="radiusbox"
            sx={{
              borderRadius:
                type === "Same on all sides" && unit === "px"
                  ? `${allRadius}px`
                  : type === "Same on all sides" && unit === "%"
                  ? `${allRadius}%`
                  : type === "Different on all Sides" && unit === "px"
                  ? `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`
                  : type === "Different on all Sides" && unit === "%"
                  ? `${topLeft}% ${topRight}% ${bottomRight}% ${bottomLeft}%`
                  : "",
            }}
          ></Box>
          <Button
            onClick={() => copyToClipboard(finalSource)}
            sx={{ marginY: "50px", alignItems: "center" }}
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

export default BorderRadius;
