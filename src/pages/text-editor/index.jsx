import { useEffect, useState } from "react";
import {
  Grid,
  TextField,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  Box,
  Divider,
} from "@mui/material";
import { Container } from "@mui/system";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import UseTitle from "../../hooks/useTitle";
import { copyToClipboard } from "../../utils/copyToClipboard";
import CopyButton from "../../components/CopyButton";
import HeaderTitle from "../../components/HeaderTitle";

const toggleSx = {
  gap: 0.5,
  "& .MuiToggleButtonGroup-grouped": {
    border: "1px solid rgba(255,255,255,0.1) !important",
    borderRadius: "10px !important",
    color: "rgba(255,255,255,0.35)",
    transition: "all 0.2s",
    "&.Mui-selected": {
      background: "rgba(255,200,100,0.12)",
      borderColor: "rgba(255,200,100,0.4) !important",
      color: "#ffc864",
    },
    "&:hover": { background: "rgba(255,255,255,0.05)" },
  },
};

const TextEditor = () => {
  const [inputVal, setInputVal] = useState("Magic CSS");
  const [alignment, setAlignment] = useState("left");
  const [formats, setFormats] = useState([]);
  const [finalSource, setFinalSource] = useState("");
  const [copied, setCopied] = useState(false);

  const isBold = formats.includes("bold");
  const isItalic = formats.includes("italic");
  const isUnderlined = formats.includes("underlined");

  useEffect(() => {
    const props = [`text-align: ${alignment};`];
    if (isBold) props.push("font-weight: bold;");
    if (isItalic) props.push("font-style: italic;");
    if (isUnderlined) props.push("text-decoration: underline;");
    setFinalSource(props.join("\n"));
  }, [alignment, formats]);

  const handleCopy = () => {
    copyToClipboard(finalSource);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  UseTitle("Magic CSS - Text Editor");

  return (
    <Container>
      {/* Header */}
      <HeaderTitle
        title={"Rich Text Editor"}
        description={
          "Align and format text with bold, italic, and underline options."
        }
      />
      <Grid container spacing={4} alignItems="flex-start">
        {/* LEFT — Preview */}
        <Grid item xs={12} md={7}>
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

            {/* Preview area */}
            <Box
              sx={{
                width: "100%",
                minHeight: 200,
                borderRadius: "16px",
                background:
                  "repeating-conic-gradient(rgba(255,255,255,0.03) 0% 25%, transparent 0% 50%) 0 0 / 24px 24px",
                border: "1px solid rgba(255,255,255,0.05)",
                display: "flex",
                alignItems: "center",
                p: 4,
              }}
            >
              <Typography
                sx={{
                  width: "100%",
                  fontSize: "2rem",
                  fontWeight: isBold ? 700 : 400,
                  fontStyle: isItalic ? "italic" : "normal",
                  textDecoration: isUnderlined ? "underline" : "none",
                  textAlign: alignment,
                  color: "#fff",
                  wordBreak: "break-all",
                  lineHeight: 1.3,
                  transition: "all 0.15s ease",
                  minHeight: 48,
                }}
              >
                {inputVal || (
                  <span style={{ opacity: 0.2 }}>Type something…</span>
                )}
              </Typography>
            </Box>

            {/* Text input */}
            <TextField
              size="small"
              label="Preview text"
              variant="filled"
              fullWidth
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              sx={{
                "& .MuiFilledInput-root": {
                  background: "rgba(255,255,255,0.06)",
                  borderRadius: "12px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  "&:hover": { background: "rgba(255,255,255,0.09)" },
                  "&.Mui-focused": {
                    background: "rgba(255,255,255,0.1)",
                    borderColor: "rgba(255,200,100,0.55)",
                  },
                  "&::before, &::after": { display: "none" },
                },
                "& .MuiInputLabel-root": {
                  color: "rgba(255,255,255,0.35)",
                  fontSize: "0.85rem",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "rgba(255,200,100,0.85)",
                },
                "& .MuiFilledInput-input": {
                  color: "#fff",
                  fontSize: "0.95rem",
                  pt: "20px",
                  pb: "10px",
                },
              }}
            />

            <CopyButton
              copied={copied}
              finalSource={finalSource}
              handleCopy={handleCopy}
            />
          </Box>
        </Grid>

        {/* RIGHT — Controls */}
        <Grid item xs={12} md={5}>
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
              Controls
            </Typography>

            {/* Alignment */}
            <Box>
              <Typography
                sx={{
                  fontSize: "0.65rem",
                  color: "rgba(255,255,255,0.25)",
                  textTransform: "uppercase",
                  mb: 1,
                }}
              >
                Alignment
              </Typography>
              <ToggleButtonGroup
                size="small"
                value={alignment}
                exclusive
                onChange={(e, val) => val && setAlignment(val)}
                fullWidth
                sx={toggleSx}
              >
                <ToggleButton value="left">
                  <FormatAlignLeftIcon fontSize="small" />
                </ToggleButton>
                <ToggleButton value="center">
                  <FormatAlignCenterIcon fontSize="small" />
                </ToggleButton>
                <ToggleButton value="right">
                  <FormatAlignRightIcon fontSize="small" />
                </ToggleButton>
                <ToggleButton value="justify">
                  <FormatAlignJustifyIcon fontSize="small" />
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>

            <Divider sx={{ borderColor: "rgba(255,255,255,0.06)" }} />

            {/* Format */}
            <Box>
              <Typography
                sx={{
                  fontSize: "0.65rem",
                  color: "rgba(255,255,255,0.25)",
                  textTransform: "uppercase",
                  mb: 1,
                }}
              >
                Format
              </Typography>
              <ToggleButtonGroup
                size="small"
                value={formats}
                onChange={(e, val) => setFormats(val)}
                sx={toggleSx}
              >
                <ToggleButton value="bold">
                  <FormatBoldIcon fontSize="small" />
                </ToggleButton>
                <ToggleButton value="italic">
                  <FormatItalicIcon fontSize="small" />
                </ToggleButton>
                <ToggleButton value="underlined">
                  <FormatUnderlinedIcon fontSize="small" />
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TextEditor;
