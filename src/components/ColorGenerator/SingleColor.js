import { Box } from "@mui/system";
import rgbToHex from "../../utils/colorFormat";
import { Typography } from "@mui/material";
import { copyToClipboard } from "./../../utils/copyToClipboard";

const SingleColor = ({ rgb }) => {
  const hex = rgbToHex(...rgb);
  return (
    <Box
      sx={{
        backgroundColor: `rgb(${rgb.join(", ")})`,
        width: "180px",
        height: "180px",
        cursor: "pointer",
        m: "2px",
      }}
      onClick={() =>
        copyToClipboard(`background-color: rgb(${rgb.join(", ")})`)
      }
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
