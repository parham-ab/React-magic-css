import { Box, Typography, Tooltip } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useState } from "react";
import rgbToHex from "../../utils/colorFormat";
import { copyToClipboard } from "../../utils/copyToClipboard";

const SingleColor = ({ rgb, weight }) => {
  const hex = rgbToHex(...rgb);
  const rgbString = `rgb(${rgb.join(", ")})`;
  // Decide text color based on perceived brightness
  const [r, g, b] = rgb;
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  const textColor =
    luminance > 0.55 ? "rgba(0,0,0,0.75)" : "rgba(255,255,255,0.85)";
  const subTextColor =
    luminance > 0.55 ? "rgba(0,0,0,0.45)" : "rgba(255,255,255,0.45)";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    copyToClipboard(`background-color: ${hex};`);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <Tooltip
      title={copied ? "Copied!" : `Click to copy ${hex}`}
      placement="top"
      arrow
      componentsProps={{
        tooltip: {
          sx: {
            bgcolor: "rgba(20,20,20,0.95)",
            color: "#fff",
            fontSize: "0.7rem",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "8px",
          },
        },
        arrow: {
          sx: { color: "rgba(20,20,20,0.95)" },
        },
      }}
    >
      <Box
        className="color-tile"
        onClick={handleCopy}
        sx={{
          backgroundColor: rgbString,
          borderRadius: "16px",
          height: "160px",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "14px",
          position: "relative",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.06)",
          boxShadow: `0 4px 20px rgba(${rgb.join(",")}, 0.3)`,
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          "&:hover": {
            transform: "translateY(-5px) scale(1.02)",
            boxShadow: `0 12px 30px rgba(${rgb.join(",")}, 0.45)`,
            "& .copy-icon": {
              opacity: 1,
              transform: "scale(1)",
            },
          },
        }}
      >
        {/* Copy icon top-right */}
        <ContentCopyIcon
          className="copy-icon"
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
            fontSize: "0.9rem",
            color: textColor,
            opacity: 0,
            transform: "scale(0.8)",
            transition: "opacity 0.2s ease, transform 0.2s ease",
          }}
        />

        {/* Weight badge */}
        {weight !== undefined && (
          <Typography
            sx={{
              position: "absolute",
              top: 12,
              left: 14,
              fontSize: "0.6rem",
              fontWeight: 700,
              color: subTextColor,
              textTransform: "uppercase",
            }}
          >
            {weight}%
          </Typography>
        )}

        {/* Hex label */}
        <Typography
          sx={{
            fontSize: "0.75rem",
            fontWeight: 700,
            color: textColor,
            letterSpacing: "0.04em",
            lineHeight: 1,
          }}
        >
          {hex}
        </Typography>

        {/* RGB label */}
        <Typography
          sx={{
            fontSize: "0.65rem",
            color: subTextColor,
            mt: 0.5,
            letterSpacing: "0.02em",
          }}
        >
          {rgbString}
        </Typography>
      </Box>
    </Tooltip>
  );
};

export default SingleColor;
