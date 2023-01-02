import { Grid } from "@mui/material";
import React, { useState } from "react";
import Html from "./Html";

const Text = () => {
  const [inputVal, setInputVal] = useState("");

  return (
    <Grid container display="flex" justifyContent="space-around">
      <Grid item>
        <textarea
          name="markdownInput"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          style={{ width: "400px", height: "600px" }}
        />
      </Grid>
      <Grid
        item
        sx={{
          width: "400px",
          height: "600px",
          lineBreak: "anywhere",
        }}
      >
        <Html children={inputVal} />
      </Grid>
    </Grid>
  );
};

export default Text;
