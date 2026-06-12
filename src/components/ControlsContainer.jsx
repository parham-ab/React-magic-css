import { Box, Typography } from "@mui/material";

const ControlsContainer = ({ children }) => {
  return (
    <Box
      sx={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "24px",
        p: 1.5,
        display: "flex",
        flexDirection: "column",
        gap: 0.5,
      }}
    >
      <Typography
        sx={{
          fontSize: "0.65rem",
          color: "rgba(255,255,255,0.25)",
          textTransform: "uppercase",
          mb: 3,
        }}
      >
        Controls
      </Typography>
      {children}
    </Box>
  );
};

export default ControlsContainer;
