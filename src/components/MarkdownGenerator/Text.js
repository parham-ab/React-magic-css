import { Grid } from "@mui/material";
import React, { useState } from "react";
import Html from "./Html";

const Text = () => {
  const [inputVal, setInputVal] = useState("");

  return (
    <Grid container>
      <Grid item>
        <textarea
          name="markdownInput"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
      </Grid>
      <Grid item>
        <Html children={inputVal} />
      </Grid>
    </Grid>
  );
};

export default Text;
