import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Html from "./Html";

const Text = () => {
  const [inputVal, setInputVal] = useState("");

  return (
    <Grid container display="flex" justifyContent="space-around">
      <Grid item xs={12} md={6}>
        <Box display="flex" justifyContent="center" mt={5}>
          <textarea
            name="markdownInput"
            className="markdown-input"
            placeholder="Type Something..."
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          width: "400px",
          height: "600px",
          lineBreak: "anywhere",
        }}
      >
        <Box
          sx={{
            maxWidth: { xs: "270px", md: "370px" },
            height: "500px",
            overflow: "auto",
            background: "#e9e9e9",
            padding: "25px",
            borderRadius: "10px",
            margin: "40px auto 0",
            boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
          }}
        >
          <Html children={inputVal} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Text;
