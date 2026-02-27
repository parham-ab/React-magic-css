import { useEffect, useState } from "react";
import {
  Button,
  Grid,
  Slider,
  Typography,
  Box,
  Chip,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { Container } from "@mui/system";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";
import { SketchPicker } from "react-color";
import UseTitle from "../hooks/useTitle";
import { copyToClipboard } from "../utils/copyToClipboard";

const Gradient = () => {
  const [firstColor, setFirstColor] = useState("#ff6b6b");
  const [secondColor, setSecondColor] = useState("#845ef7");
  const [angle, setAngle] = useState(135);
  const [gradientType, setGradientType] = useState("linear");
  const [finalSource, setFinalSource] = useState("");
  const [copied, setCopied] = useState(false);
  const [activeColor, setActiveColor] = useState("first"); // which picker is active

  const gradientCSS =
    gradientType === "linear"
      ? `linear-gradient(${angle}deg, ${firstColor}, ${secondColor})`
      : `radial-gradient(circle, ${firstColor}, ${secondColor})`;

  useEffect(() => {
    setFinalSource(`background: ${gradientCSS};`);
  }, [firstColor, secondColor, angle, gradientType]);

  const handleCopy = () => {
    copyToClipboard(finalSource);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const handleColorComplete = (c) => {
    const value =
      c.rgb.a < 1 ? `rgba(${c.rgb.r},${c.rgb.g},${c.rgb.b},${c.rgb.a})` : c.hex;
    activeColor === "first" ? setFirstColor(value) : setSecondColor(value);
  };

  UseTitle("Magic CSS - Gradient Generator");

  return (
    <Container maxWidth="lg">
      {/* Header */}
      <Box textAlign="center" pt={5} pb={3}>
        <Typography
          variant="h3"
          sx={{
            color: "#fff",
            fontWeight: 600,
            fontSize: { xs: "2rem", md: "2.8rem" },
          }}
        >
          Gradient Generator
        </Typography>
        <Typography
          sx={{
            color: "rgba(255,255,255,0.38)",
            fontSize: "0.95rem",
            fontWeight: 300,
          }}
        >
          Build beautiful linear & radial gradients — live preview included
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
                color: "rgba(255,255,255,0.25)",
                textTransform: "uppercase",
              }}
            >
              Live Preview
            </Typography>

            {/* Gradient preview box */}
            <Box
              sx={{
                width: "100%",
                height: { xs: 220, md: 300 },
                borderRadius: "18px",
                background: gradientCSS,
                transition: "background 0.15s ease",
                border: "1px solid rgba(255,255,255,0.06)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
              }}
            />

            {/* Color stop indicators */}
            <Box display="flex" alignItems="center" gap={1.5}>
              <Box
                onClick={() => setActiveColor("first")}
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: "10px",
                  background: firstColor,
                  cursor: "pointer",
                  border:
                    activeColor === "first"
                      ? "2px solid #ffc864"
                      : "2px solid rgba(255,255,255,0.1)",
                  boxShadow:
                    activeColor === "first"
                      ? `0 0 0 3px rgba(255,200,100,0.25), 0 4px 12px ${firstColor}88`
                      : `0 4px 12px ${firstColor}55`,
                  transition: "border 0.2s, box-shadow 0.2s",
                  flexShrink: 0,
                }}
              />

              {/* Gradient bar showing stop positions */}
              <Box
                sx={{
                  flex: 1,
                  height: 12,
                  borderRadius: "6px",
                  background:
                    gradientType === "linear"
                      ? `linear-gradient(90deg, ${firstColor}, ${secondColor})`
                      : `radial-gradient(circle, ${firstColor}, ${secondColor})`,
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              />

              <Box
                onClick={() => setActiveColor("second")}
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: "10px",
                  background: secondColor,
                  cursor: "pointer",
                  border:
                    activeColor === "second"
                      ? "2px solid #ffc864"
                      : "2px solid rgba(255,255,255,0.1)",
                  boxShadow:
                    activeColor === "second"
                      ? `0 0 0 3px rgba(255,200,100,0.25), 0 4px 12px ${secondColor}88`
                      : `0 4px 12px ${secondColor}55`,
                  transition: "border 0.2s, box-shadow 0.2s",
                  flexShrink: 0,
                }}
              />
            </Box>

            <Typography
              sx={{
                fontSize: "0.75rem",
                color: "rgba(255,255,255,0.25)",
                textAlign: "center",
              }}
            >
              Click a color swatch to edit it
            </Typography>

            {/* CSS Output + Copy */}
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
              gap: 3,
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

            {/* Gradient Type Toggle */}
            <Box>
              <Typography
                sx={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  color: "rgba(255,255,255,0.35)",
                  textTransform: "uppercase",
                  mb: 1.2,
                }}
              >
                Type
              </Typography>
              <ToggleButtonGroup
                value={gradientType}
                exclusive
                onChange={(e, val) => val && setGradientType(val)}
                fullWidth
                sx={{
                  gap: 1,
                  "& .MuiToggleButtonGroup-grouped": {
                    border: "1px solid rgba(255,255,255,0.1) !important",
                    borderRadius: "10px !important",
                    fontSize: "0.72rem",
                    color: "rgba(255,255,255,0.4)",
                    py: 1,
                    textTransform: "none",
                    transition: "all 0.2s",
                    "&.Mui-selected": {
                      background: "rgba(255,200,100,0.12)",
                      borderColor: "rgba(255,200,100,0.4) !important",
                      color: "#ffc864",
                    },
                    "&:hover": {
                      background: "rgba(255,255,255,0.05)",
                    },
                  },
                }}
              >
                <ToggleButton value="linear">⟶ Linear</ToggleButton>
                <ToggleButton value="radial">◎ Radial</ToggleButton>
              </ToggleButtonGroup>
            </Box>

            {/* Angle slider — linear only */}
            {gradientType === "linear" && (
              <Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography
                    sx={{
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      color: "rgba(255,255,255,0.35)",
                      textTransform: "uppercase",
                    }}
                  >
                    Angle
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.7rem",
                      color: "rgba(255,200,100,0.85)",
                    }}
                  >
                    {angle}°
                  </Typography>
                </Box>
                <Slider
                  min={0}
                  max={360}
                  size="small"
                  value={angle}
                  onChange={(e) => setAngle(e.target.value)}
                  valueLabelDisplay="off"
                  sx={{
                    color: "rgba(255,200,100,0.75)",
                    height: 3,
                    "& .MuiSlider-thumb": {
                      width: 14,
                      height: 14,
                      backgroundColor: "#ffc864",
                      boxShadow: "0 0 0 3px rgba(255,200,100,0.2)",
                      "&:hover": {
                        boxShadow: "0 0 0 6px rgba(255,200,100,0.25)",
                      },
                    },
                    "& .MuiSlider-track": { border: "none" },
                    "& .MuiSlider-rail": { opacity: 0.2 },
                  }}
                />

                {/* Quick angle presets */}
                <Box display="flex" gap={1} flexWrap="wrap" mt={0.5}>
                  {[0, 45, 90, 135, 180].map((a) => (
                    <Chip
                      key={a}
                      label={`${a}°`}
                      size="small"
                      onClick={() => setAngle(a)}
                      sx={{
                        height: 22,
                        fontSize: "0.6rem",
                        cursor: "pointer",
                        bgcolor:
                          angle === a
                            ? "rgba(255,200,100,0.15)"
                            : "rgba(255,255,255,0.05)",
                        color:
                          angle === a ? "#ffc864" : "rgba(255,255,255,0.3)",
                        border:
                          angle === a
                            ? "1px solid rgba(255,200,100,0.3)"
                            : "1px solid rgba(255,255,255,0.07)",
                        "&:hover": { bgcolor: "rgba(255,200,100,0.1)" },
                      }}
                    />
                  ))}
                </Box>
              </Box>
            )}

            {/* Color picker — single shared picker */}
            <Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={1.5}
              >
                <Typography
                  sx={{
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.35)",
                    textTransform: "uppercase",
                  }}
                >
                  Color Stops
                </Typography>
                <Box display="flex" gap={1}>
                  {[
                    { id: "first", color: firstColor, label: "Start" },
                    { id: "second", color: secondColor, label: "End" },
                  ].map(({ id, color, label }) => (
                    <Box
                      key={id}
                      onClick={() => setActiveColor(id)}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.8,
                        px: 1.2,
                        py: 0.6,
                        borderRadius: "8px",
                        cursor: "pointer",
                        border:
                          activeColor === id
                            ? "1px solid rgba(255,200,100,0.4)"
                            : "1px solid rgba(255,255,255,0.08)",
                        background:
                          activeColor === id
                            ? "rgba(255,200,100,0.08)"
                            : "rgba(255,255,255,0.03)",
                        transition: "all 0.2s",
                      }}
                    >
                      <Box
                        sx={{
                          width: 10,
                          height: 10,
                          borderRadius: "3px",
                          background: color,
                          border: "1px solid rgba(255,255,255,0.15)",
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: "0.6rem",
                          color:
                            activeColor === id
                              ? "#ffc864"
                              : "rgba(255,255,255,0.3)",
                        }}
                      >
                        {label}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              <SketchPicker
                color={activeColor === "first" ? firstColor : secondColor}
                onChangeComplete={handleColorComplete}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Gradient;
