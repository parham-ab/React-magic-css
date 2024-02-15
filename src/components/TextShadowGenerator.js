import { useEffect, useState } from "react";
import {
  Button,
  Container,
  Grid,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { SketchPicker } from "react-color";
import UseTitle from "../hooks/useTitle";
import { copyToClipboard } from "../utils/copyToClipboard";

const TextShadowGenerator = () => {
  const [testText, setTestText] = useState("");
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [blur, setBlur] = useState(0);
  const [color, setColor] = useState("#000");
  const [finalSource, setFinalSource] = useState();

  useEffect(() => {
    setFinalSource(`${x}px ${y}px ${blur}px ${color}`);
  }, [x, y, blur, color]);
  UseTitle("Magic CSS - Text shadow");

  return (
    <Container>
      <Grid container sx={{ display: "flex", flexDirection: "column" }}>
        <Grid
          item
          alignItems="center"
          sx={{
            margin: "4rem auto 0",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextField
            size="small"
            label="Text"
            variant="filled"
            value={testText}
            onChange={(e) => setTestText(e.target.value)}
          />
          <Button
            onClick={() => copyToClipboard(finalSource)}
            sx={{ marginY: "10px", width: "40%" }}
            variant="contained"
            startIcon={<AssignmentIcon />}
          >
            Copy
          </Button>
        </Grid>

        <Grid
          item
          mt={5}
          sx={{ margin: "4rem auto" }}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Box
            component="div"
            className="custom-box"
            textAlign="center"
            padding={6}
            style={{
              height: testText && "auto",
            }}
          >
            <Typography
              variant="h5"
              color="initial"
              sx={{ textShadow: finalSource, wordBreak: "break-all" }}
            >
              {testText}
            </Typography>
          </Box>
        </Grid>

        <Grid item sx={{ margin: "0 auto" }}>
          <Typography variant="h5" color="text.secondary" textAlign="center">
            X
          </Typography>
          <Slider
            min={-40}
            max={40}
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
            min={-40}
            max={40}
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
            max={30}
            size="small"
            defaultValue={0}
            aria-label="Small"
            valueLabelDisplay="auto"
            sx={{ color: "#2764b0" }}
            value={blur}
            onChange={(e) => setBlur(e.target.value)}
          />
          <Typography variant="h5" color="text.secondary" textAlign="center">
            color
          </Typography>
          <SketchPicker
            width="180px"
            color={color}
            onChangeComplete={(e) => setColor(e.hex)}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default TextShadowGenerator;
