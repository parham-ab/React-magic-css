import { useState } from "react";
import { Box } from "@mui/system";
import copy from "copy-to-clipboard";
import rgbToHex from "../../utils/colorFormat";
import { notify } from "../../utils/toast";
import { Typography } from "@mui/material";

const SingleColor = ({ rgb }) => {
  const [finalSource, setFinalSource] = useState();
  const hex = rgbToHex(...rgb);
  const copyToClipboard = () => {
    setFinalSource(`background-color: rgb(${rgb.join(", ")})`);
    copy(finalSource);
    notify("success", "Copied to clipboard ✔");
  };
  return (
    <Box
      sx={{
        backgroundColor: `rgb(${rgb.join(", ")})`,
        width: "180px",
        height: "180px",
        cursor: "pointer",
        m: "2px",
      }}
      onClick={copyToClipboard}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Typography
        variant="body2"
        component="p"
        sx={{
          background: "#e4e4e4",
          padding: "5px",
          borderRadius: "10px",
          boxShadow: 2,
        }}
      >
        {hex}
      </Typography>
    </Box>
  );
};

export default SingleColor;
