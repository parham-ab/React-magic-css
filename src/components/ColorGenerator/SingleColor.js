import { useState } from "react";
// MUI components
import { Box } from "@mui/system";
// copy to clipboard button
import copy from "copy-to-clipboard";
// rgb to hex function
import rgbToHex from "../../helper/colorFormat";
// react toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../functions/toast";
import { Typography } from "@mui/material";

const SingleColor = ({ weight, rgb }) => {
  const [finalSource, setFinalSource] = useState();
  const hex = rgbToHex(...rgb);

  // copy to clipboard function
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
      <ToastContainer />
    </Box>
  );
};

export default SingleColor;
