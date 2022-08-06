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
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
// icon
import AssignmentIcon from "@mui/icons-material/Assignment";
// react color picker
import { SketchPicker } from "react-color";

const TextShadowGenerator = () => {
  const [testText, setTestText] = useState("");

  return (
    <Container>
      <Grid container>
        <Grid item mt={5} sx={{ margin: "4rem auto" }}>
          <Box
            component="div"
            className="custom-box"
            textAlign="center"
            padding={6}
            style={{
              textShadow: "34px -22px 10px #ffff99",
              height: testText && "auto",
            }}
          >
            <Typography
              variant="h5"
              color="initial"
              sx={{ wordBreak: "break-all" }}
            >
              {testText}
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} alignItems="center">
          <TextField
            size="small"
            label="Text"
            variant="filled"
            value={testText}
            onChange={(e) => setTestText(e.target.value)}
          />
        </Grid>
      </Grid>
      <ToastContainer />
    </Container>
  );
};

export default TextShadowGenerator;
