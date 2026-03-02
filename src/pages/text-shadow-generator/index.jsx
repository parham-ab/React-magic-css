import { useEffect, useState } from "react";
import {
  Button,
  Grid,
  Slider,
  TextField,
  Typography,
  Box,
  Chip,
} from "@mui/material";
import { Container } from "@mui/system";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";
import { SketchPicker } from "react-color";
import UseTitle from "../../hooks/useTitle";
import { copyToClipboard } from "../../utils/copyToClipboard";
import CopyButton from "../../components/CopyButton";

const SliderControl = ({ label, min, max, value, onChange }) => (
  <Box mb={2.5}>
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb={0.5}
    >
      <Typography
        sx={{
          fontSize: "0.7rem",
          fontWeight: 700,
          letterSpacing: "0.12em",
          color: "rgba(255,255,255,0.45)",
          textTransform: "uppercase",
        }}
      >
        {label}
      </Typography>
      <Typography
        sx={{
          fontSize: "0.7rem",
          color: "rgba(255,200,100,0.85)",
        }}
      >
        {value}px
      </Typography>
    </Box>
    <Slider
      min={min}
      max={max}
      size="small"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      valueLabelDisplay="off"
      sx={{
        color: "rgba(255,200,100,0.75)",
        height: 3,
        "& .MuiSlider-thumb": {
          width: 14,
          height: 14,
          backgroundColor: "#ffc864",
          boxShadow: "0 0 0 3px rgba(255,200,100,0.2)",
          "&:hover": { boxShadow: "0 0 0 6px rgba(255,200,100,0.25)" },
        },
        "& .MuiSlider-track": { border: "none" },
        "& .MuiSlider-rail": { opacity: 0.2 },
      }}
    />
  </Box>
);

const PRESETS = [
  { label: "Glow", x: 0, y: 0, blur: 18, color: "rgba(130,100,255,0.95)" },
  { label: "Hard", x: 4, y: 4, blur: 0, color: "rgba(0,0,0,0.9)" },
  { label: "Neon", x: 0, y: 0, blur: 12, color: "rgba(0,255,180,0.95)" },
  { label: "Lift", x: 2, y: 6, blur: 10, color: "rgba(0,0,0,0.5)" },
  { label: "Fire", x: 0, y: 4, blur: 14, color: "rgba(255,100,20,0.9)" },
];

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
    <>
      <style>{`
        .text-input .MuiFilledInput-root {
          background: rgba(255,255,255,0.06) !important;
          border-radius: 12px !important;
          border: 1px solid rgba(255,255,255,0.1);
          transition: border-color 0.25s, background 0.25s;
        }
        .text-input .MuiFilledInput-root:hover {
          background: rgba(255,255,255,0.09) !important;
          border-color: rgba(255,255,255,0.2);
        }
        .text-input .MuiFilledInput-root.Mui-focused {
          background: rgba(255,255,255,0.1) !important;
          border-color: rgba(255,200,100,0.55);
        }
        .text-input .MuiFilledInput-root::before,
        .text-input .MuiFilledInput-root::after { display: none; }
        .text-input .MuiInputLabel-root {
          color: rgba(255,255,255,0.35);
          font-size: 0.85rem;
        }
        .text-input .MuiInputLabel-root.Mui-focused { color: rgba(255,200,100,0.85); }
        .text-input .MuiFilledInput-input {
          color: #fff;
          font-size: 0.95rem;
          letter-spacing: 0.04em;
        }
      `}</style>

      <Container>
        {/* Header */}
        <Box textAlign="center" pt={5} pb={3}>
          <Typography
            variant="h3"
            sx={{
              color: "#fff",
              fontWeight: 600,
              fontSize: { xs: "2rem", md: "2.8rem" },
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}
          >
            Text Shadow Generator
          </Typography>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.38)",
              fontSize: "0.95rem",
              fontWeight: 300,
            }}
          >
            Craft expressive text shadows — glows, lifts, neon effects & more
          </Typography>
        </Box>

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
                gap: 3,
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.14em",
                  color: "rgba(255,255,255,0.25)",
                  textTransform: "uppercase",
                }}
              >
                Live Preview
              </Typography>

              {/* Text preview area */}
              <Box
                sx={{
                  width: "100%",
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
                  {PRESETS.map((preset, idx) => (
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
    </>
  );
};

export default TextShadowGenerator;
