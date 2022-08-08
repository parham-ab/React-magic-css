import { useState } from "react";
// mui components
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";

const BorderRadius = () => {
  const [type, setType] = useState("Same on all sides");
  const [allRadius, setAllRadius] = useState(0);

  return (
    <Container>
      <Grid container display="flex" justifyContent="space-around">
        <Grid item mt={3}>
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
            max={100}
            size="small"
            defaultValue={0}
            aria-label="Small"
            valueLabelDisplay="auto"
            sx={{ color: "#2764b0" }}
            value={allRadius}
            onChange={(e) => setAllRadius(e.target.value)}
          />
        </Grid>
        {/* same on all sides */}
        {/* <Grid item></Grid> */}
        {/* different on all sides */}
        {/* <Grid item></Grid> */}

        {/* results */}
        <Grid item mt={3}>
          <Box
            component="div"
            className="radiusbox"
            sx={{ borderRadius: `${allRadius}px` }}
          ></Box>
          {console.log(allRadius)}
        </Grid>
      </Grid>
    </Container>
  );
};

export default BorderRadius;
