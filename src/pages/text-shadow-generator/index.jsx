import { useEffect, useState } from "react";
import { Grid, TextField, Typography, Box, Chip } from "@mui/material";
import { Container } from "@mui/system";
import { SketchPicker } from "react-color";
import UseTitle from "../../hooks/useTitle";
import { copyToClipboard } from "../../utils/copyToClipboard";
import CopyButton from "../../components/CopyButton";
import HeaderTitle from "../../components/HeaderTitle";
import PRESETS from "./constants/presets";
import SliderControl from "../../components/SliderControl";

const TextShadowGenerator = () => {
  const [testText, setTestText] = useState("Magic CSS");
  const [x, setX] = useState(2);
  const [y, setY] = useState(4);
  const [blur, setBlur] = useState(14);
  const [color, setColor] = useState("rgba(130,100,255,0.9)");
  const [finalSource, setFinalSource] = useState("");
  const [copied, setCopied] = useState(false);
  const [activePreset, setActivePreset] = useState(null);

  useEffect(() => {
    setFinalSource(`text-shadow: ${x}px ${y}px ${blur}px ${color};`);
  }, [x, y, blur, color]);

  UseTitle("Magic CSS - Text Shadow Generator");

  const handleCopy = () => {
    copyToClipboard(finalSource);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const applyPreset = (preset, idx) => {
    setX(preset.x);
    setY(preset.y);
    setBlur(preset.blur);
    setColor(preset.color);
    setActivePreset(idx);
  };

  const handleColorComplete = (c) => {
    const value =
      c.rgb.a < 1 ? `rgba(${c.rgb.r},${c.rgb.g},${c.rgb.b},${c.rgb.a})` : c.hex;
    setColor(value);
    setActivePreset(null);
  };

  const shadowValue = `${x}px ${y}px ${blur}px ${color}`;

  return (
    <Container>
      {/* Header */}
      <HeaderTitle
        title={"Text Shadow Generator"}
        description={
          "Craft expressive text shadows — glows, lifts, neon effects & more"
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

            {/* Text preview area */}
            <Box
              sx={{
                minHeight: 220,
                borderRadius: "18px",
                background:
                  "repeating-conic-gradient(rgba(255,255,255,0.03) 0% 25%, transparent 0% 50%) 0 0 / 24px 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: 4,
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "2.2rem", md: "3.2rem" },
                  color: "#fff",
                  textShadow: shadowValue,
                  wordBreak: "break-all",
                  textAlign: "center",
                  lineHeight: 1.2,
                  transition: "text-shadow 0.1s ease",
                  letterSpacing: "-0.02em",
                }}
              >
                {testText || "Type something…"}
              </Typography>
            </Box>

            {/* Text input */}
            <TextField
              className="text-input"
              size="small"
              label="Preview text"
              variant="filled"
              fullWidth
              value={testText}
              onChange={(e) => setTestText(e.target.value)}
              placeholder="Magic CSS"
            />

            {/* Presets */}
            <Box>
              <Typography
                sx={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.14em",
                  color: "rgba(255,255,255,0.22)",
                  textTransform: "uppercase",
                  mb: 1,
                }}
              >
                Presets
              </Typography>
              <Box display="flex" gap={1} flexWrap="wrap">
                {PRESETS?.map((preset, idx) => (
                  <Chip
                    key={preset.label}
                    label={preset.label}
                    size="small"
                    onClick={() => applyPreset(preset, idx)}
                    sx={{
                      height: 26,
                      fontSize: "0.65rem",
                      cursor: "pointer",
                      bgcolor:
                        activePreset === idx
                          ? "rgba(255,200,100,0.15)"
                          : "rgba(255,255,255,0.05)",
                      color:
                        activePreset === idx
                          ? "#ffc864"
                          : "rgba(255,255,255,0.4)",
                      border:
                        activePreset === idx
                          ? "1px solid rgba(255,200,100,0.35)"
                          : "1px solid rgba(255,255,255,0.07)",
                      "&:hover": { bgcolor: "rgba(255,200,100,0.1)" },
                      // small color dot before label
                      "& .MuiChip-label": { px: 1.5 },
                    }}
                    avatar={
                      <Box
                        component="span"
                        sx={{
                          width: "8px !important",
                          height: "8px !important",
                          borderRadius: "50%",
                          background: preset.color,
                          ml: "6px !important",
                          flexShrink: 0,
                          border: "1px solid rgba(255,255,255,0.15)",
                        }}
                      />
                    }
                  />
                ))}
              </Box>
            </Box>

            {/* CSS Output + Copy */}
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
            }}
          >
            <Typography
              sx={{
                fontSize: "0.65rem",
                letterSpacing: "0.14em",
                color: "rgba(255,255,255,0.25)",
                textTransform: "uppercase",
                mb: 3,
              }}
            >
              Controls
            </Typography>

            <SliderControl
              label="Offset X"
              min={-40}
              max={40}
              value={x}
              onChange={setX}
            />
            <SliderControl
              label="Offset Y"
              min={-40}
              max={40}
              value={y}
              onChange={setY}
            />
            <SliderControl
              label="Blur"
              min={0}
              max={60}
              value={blur}
              onChange={setBlur}
            />

            <Typography
              sx={{
                fontSize: "0.65rem",
                letterSpacing: "0.14em",
                color: "rgba(255,255,255,0.25)",
                textTransform: "uppercase",
                mb: 1.5,
                mt: 1,
              }}
            >
              Shadow Color
            </Typography>
            <SketchPicker
              color={color}
              onChangeComplete={handleColorComplete}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TextShadowGenerator;
