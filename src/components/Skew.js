import { useEffect, useState } from "react";
import { Button, Container, Grid, Slider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AssignmentIcon from "@mui/icons-material/Assignment";
import UseTitle from "../hooks/useTitle";
import { copyToClipboard } from "../utils/copyToClipboard";

const Skew = () => {
  const [SkewX, setSkewX] = useState(0);
  const [SkewY, setSkewY] = useState(0);
  const [finalSource, setFinalSource] = useState("");

  useEffect(() => {
    setFinalSource(`transform: skew(${SkewX}deg, ${SkewY}deg);`);
  }, [SkewX, SkewY]);

  UseTitle("Magic CSS - Skew");

  return (
    <Container>
      <Grid
        container
        display="flex"
        alignItems="center"
        sx={{ flexDirection: { xs: "column", sm: "row" }, minHeight: "80vh" }}
      >
        <Grid item mt={5} sx={{ margin: "4rem auto" }} xs={4} md={3}>
          <Typography variant="h5" color="text.secondary" textAlign="center">
            Skew-X
          </Typography>
          <Slider
            min={-50}
            max={50}
            size="small"
            defaultValue={0}
            aria-label="Small"
            valueLabelDisplay="auto"
            sx={{ color: "#2764b0" }}
            value={SkewX}
            onChange={(e) => setSkewX(e.target.value)}
          />

          <Typography variant="h5" color="text.secondary" textAlign="center">
            Skew-Y
          </Typography>
          <Slider
            min={-50}
            max={50}
            size="small"
            defaultValue={0}
            aria-label="Small"
            valueLabelDisplay="auto"
            sx={{ color: "#2764b0" }}
            value={SkewY}
            onChange={(e) => setSkewY(e.target.value)}
          />

          <Button
            size="small"
            variant="contained"
            sx={{ width: "100%" }}
            onClick={() => copyToClipboard(finalSource)}
            startIcon={<AssignmentIcon />}
          >
            Copy
          </Button>
        </Grid>

        <Grid item mt={5} xs={5} md={5}>
          <Box
            sx={{
              width: "100px",
              height: "100px",
              backgroundColor: "rgb(168, 168, 168)",
              transform: `skew(${SkewX}deg, ${SkewY}deg)`,
            }}
          ></Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Skew;
