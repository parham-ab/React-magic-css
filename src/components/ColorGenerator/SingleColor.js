import { useState } from "react";
// MUI components
import { Box } from "@mui/system";
// copy to clipboard button
import copy from "copy-to-clipboard";
// react toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../functions/toast";

const SingleColor = ({ weight, rgb, id }) => {
  const [finalSource, setFinalSource] = useState();

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
      }}
      onClick={copyToClipboard}
    >
      {weight}%
      <ToastContainer />
    </Box>
  );
};

export default SingleColor;
