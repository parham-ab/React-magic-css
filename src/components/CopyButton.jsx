import { Box, Button, Typography } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";

const CopyButton = ({ finalSource, copied, handleCopy }) => {
  return (
    <Box
      sx={{
        background: "rgba(0,0,0,0.35)",
        borderRadius: "12px",
        border: "1px solid rgba(255,255,255,0.07)",
        p: 1.5,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
      }}
    >
      <Typography
        sx={{
          fontSize: "0.7rem",
          color: "rgba(255,200,100,0.85)",
          wordBreak: "break-all",
          flex: 1,
          lineHeight: 1.6,
        }}
      >
        {finalSource}
      </Typography>
      <Button
        onClick={handleCopy}
        variant="contained"
        size="small"
        startIcon={copied ? <CheckIcon /> : <ContentCopyIcon />}
        sx={{
          flexShrink: 0,
          fontWeight: 600,
          fontSize: "0.72rem",
          textTransform: "none",
          borderRadius: "10px",
          px: 2,
          py: 1,
          background: copied
            ? "rgba(100,200,100,0.15)"
            : "rgba(255,200,100,0.12)",
          border: copied
            ? "1px solid rgba(100,200,100,0.35)"
            : "1px solid rgba(255,200,100,0.3)",
          color: copied ? "#80e080" : "#ffc864",
          boxShadow: "none",
          "&:hover": {
            background: copied
              ? "rgba(100,200,100,0.2)"
              : "rgba(255,200,100,0.2)",
            boxShadow: "none",
          },
          transition: "all 0.3s ease",
        }}
      >
        {copied ? "Copied!" : "Copy"}
      </Button>
    </Box>
  );
};

export default CopyButton;
