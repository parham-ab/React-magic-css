import { useEffect, useState } from "react";
import { SketchPicker } from "react-color";
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
import AssignmentIcon from "@mui/icons-material/Assignment";
import UseTitle from "../hooks/useTitle";
import { copyToClipboard } from "../utils/copyToClipboard";

const ShadowGenerator = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [blur, setBlur] = useState(0);
  const [spread, setSpread] = useState(0);
  const [insetStatus, setInsetStatus] = useState(false);
  const [color, setColor] = useState("#000");
  const [finalSource, setFinalSource] = useState();

  useEffect(() => {
    insetStatus
      ? setFinalSource(
          `box-shadow:inset ${x}px ${y}px ${blur}px ${spread}px ${color}`
        )
      : setFinalSource(
          `box-shadow:${x}px ${y}px ${blur}px ${spread}px ${color}`
        );
  }, [x, y, blur, spread, insetStatus, color]);

  UseTitle("Magic CSS - shadow generator");
  return (
    <Container>
      <Grid container className="boxshadow-container">
        <Grid item mt={5} className="boxshadow-item ">
          <div
            style={{
              width: "130px",
              height: "130px",
              backgroundColor: "#c9c9c9",
              boxShadow: insetStatus
                ? `inset ${x}px ${y}px ${blur}px ${spread}px ${color}`
                : `${x}px ${y}px ${blur}px ${spread}px ${color}`,
            }}
          ></div>
        </Grid>
        <Grid item xs={12} sx={{ margin: " auto" }}>
          <Typography variant="h5" color="text.secondary" textAlign="center">
            X
          </Typography>
          <Slider
            min={-130}
            max={130}
            size="small"
            defaultValue={0}
            aria-label="Small"
            valueLabelDisplay="auto"
            sx={{ color: "#2764b0" }}
            value={x}
            onChange={(e) => setX(e.target.value)}
          />
          <Typography variant="h5" color="text.secondary" textAlign="center">
            Y
          </Typography>
          <Slider
            min={-130}
            max={130}
            size="small"
            defaultValue={0}
            aria-label="Small"
            valueLabelDisplay="auto"
            sx={{ color: "#2764b0" }}
            value={y}
            onChange={(e) => setY(e.target.value)}
          />
          <Typography variant="h5" color="text.secondary" textAlign="center">
            Blur
          </Typography>
          <Slider
            min={0}
            max={130}
            size="small"
            defaultValue={0}
            aria-label="Small"
            valueLabelDisplay="auto"
            sx={{ color: "#2764b0" }}
            value={blur}
            onChange={(e) => setBlur(e.target.value)}
          />
          <Typography variant="h5" color="text.secondary" textAlign="center">
            Spread
          </Typography>
          <Slider
            min={-50}
            max={50}
            size="small"
            defaultValue={0}
            aria-label="Small"
            valueLabelDisplay="auto"
            sx={{ color: "#2764b0" }}
            value={spread}
            onChange={(e) => setSpread(e.target.value)}
          />
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={insetStatus}
                  onChange={() => setInsetStatus(!insetStatus)}
                  color="success"
                />
              }
              label="Inset"
            />
          </FormGroup>
          <Typography variant="h5" color="text.secondary" textAlign="center">
            Color
          </Typography>
          <SketchPicker
            width="180px"
            color={color}
            onChangeComplete={(e) => setColor(e.hex)}
          />
          <Button
            onClick={() => copyToClipboard(finalSource)}
            sx={{ marginY: "50px", width: "100%" }}
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

export default ShadowGenerator;
