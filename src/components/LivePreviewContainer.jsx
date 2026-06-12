import { Box, Typography } from "@mui/material";
import CopyButton from "./CopyButton";

const LivePreviewContainer = ({
  children,
  copied,
  finalSource,
  handleCopy,
}) => {
  return (
    <Box
      sx={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "24px",
        p: 1.5,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography
        sx={{
          fontSize: "0.65rem",
          color: "rgba(255,255,255,0.25)",
          textTransform: "uppercase",
        }}
      >
        Live Preview
      </Typography>
      {children}

      <CopyButton
        copied={copied}
        finalSource={finalSource}
        handleCopy={handleCopy}
      />
    </Box>
  );
};

export default LivePreviewContainer;
