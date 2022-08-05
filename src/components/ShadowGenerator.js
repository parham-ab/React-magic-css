import { useEffect, useState } from "react";
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
  IconButton,
  Slider,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
// icon
import AssignmentIcon from "@mui/icons-material/Assignment";

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
      ? setFinalSource(`inset ${x}px ${y}px ${blur}px ${spread}px ${color}`)
      : setFinalSource(`${x}px ${y}px ${blur}px ${spread}px ${color}`);
  }, [x, y, blur, spread, insetStatus, color]);
  // copy to clipboard button
  const copyToClipboard = () => {
    copy(finalSource);
    alert(`You have copied "${finalSource}"`);
  };

  return (
    <Container>
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Grid item mt={5} xs={7} md={5} className="griddd">
          <Typography variant="h5" color="text.secondary">
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
          <Typography variant="h5" color="text.secondary">
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
          <Typography variant="h5" color="text.secondary">
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
          <Typography variant="h5" color="text.secondary">
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
                  onChange={(e) => setInsetStatus(!insetStatus)}
                />
              }
              label="Inset"
            />
          </FormGroup>
          <Typography variant="h5" color="text.secondary">
            Color
          </Typography>
          <SketchPicker
            width="180px"
            color={color}
            onChangeComplete={(e) => setColor(e.hex)}
          />
          <Button
            onClick={copyToClipboard}
            sx={{ marginY: "50px" }}
            variant="contained"
            startIcon={<AssignmentIcon />}
          >
            Copy SourceCode
          </Button>
        </Grid>
        <Grid item mt={5} xs={12} md={3}>
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
      </Grid>
    </Container>
  );
};

export default ShadowGenerator;
