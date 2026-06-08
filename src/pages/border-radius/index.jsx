import { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Chip,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { Container } from "@mui/system";
import UseTitle from "../../hooks/useTitle";
import { copyToClipboard } from "../../utils/copyToClipboard";
import CopyButton from "../../components/CopyButton";
import HeaderTitle from "../../components/HeaderTitle";
import SliderControl from "../../components/SliderControl";

const PRESETS = [
  { label: "Sharp", values: [0, 0, 0, 0] },
  { label: "Soft", values: [12, 12, 12, 12] },
  { label: "Pill", values: [50, 50, 50, 50] },
  { label: "Circle", values: [50, 50, 50, 50], unit: "%" },
  { label: "Squircle", values: [30, 30, 30, 30] },
  { label: "Leaf", values: [80, 8, 80, 8] },
  { label: "Scallop", values: [50, 0, 50, 0] },
];

const BorderRadius = () => {
  const [mode, setMode] = useState("same"); // "same" | "different"
  const [allRadius, setAllRadius] = useState(20);
  const [unit, setUnit] = useState("px");
  const [topLeft, setTopLeft] = useState(20);
  const [topRight, setTopRight] = useState(20);
  const [bottomRight, setBottomRight] = useState(20);
  const [bottomLeft, setBottomLeft] = useState(20);
  const [finalSource, setFinalSource] = useState("");
  const [copied, setCopied] = useState(false);
  const [activePreset, setActivePreset] = useState(null);

  const borderRadiusValue =
    mode === "same"
      ? `${allRadius}${unit}`
      : `${topLeft}${unit} ${topRight}${unit} ${bottomRight}${unit} ${bottomLeft}${unit}`;

  useEffect(() => {
    setFinalSource(`border-radius: ${borderRadiusValue};`);
  }, [mode, allRadius, unit, topLeft, topRight, bottomRight, bottomLeft]);

  UseTitle("Magic CSS - Border Radius");

  const handleCopy = () => {
    copyToClipboard(finalSource);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const applyPreset = (preset, idx) => {
    const u = preset.unit || "px";
    setUnit(u);
    const [tl, tr, br, bl] = preset.values;
    if (tl === tr && tr === br && br === bl) {
      setMode("same");
      setAllRadius(tl);
    } else {
      setMode("different");
      setTopLeft(tl);
      setTopRight(tr);
      setBottomRight(br);
      setBottomLeft(bl);
    }
    setActivePreset(idx);
  };

  const maxVal = unit === "%" ? 50 : 100;

  return (
    <Container maxWidth="lg">
      {/* Header */}
      <HeaderTitle
        title={"Border Radius Generator"}
        description={"Shape any element — from sharp to circle, pill to leaf"}
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
                minHeight: 280,
                borderRadius: "18px",
                background:
                  "repeating-conic-gradient(rgba(255,255,255,0.03) 0% 25%, transparent 0% 50%) 0 0 / 24px 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <Box
                sx={{
                  width: 180,
                  height: 180,
                  background:
                    "linear-gradient(135deg, rgba(255,200,100,0.25), rgba(130,100,255,0.25))",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: borderRadiusValue,
                  transition: "border-radius 0.15s ease",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "0.6rem",
                    color: "rgba(255,255,255,0.3)",
                    textAlign: "center",
                    px: 1,
                  }}
                >
                  {borderRadiusValue}
                </Typography>
              </Box>
            </Box>

            {/* Presets */}
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
                    }}
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
              display: "flex",
              flexDirection: "column",
              gap: 0,
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

            {/* Mode toggle */}
            <Box>
              <Typography
                sx={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  color: "rgba(255,255,255,0.35)",
                  textTransform: "uppercase",
                  mb: 0.5,
                }}
              >
                Mode
              </Typography>
              <ToggleButtonGroup
                value={mode}
                exclusive
                onChange={(e, val) => {
                  if (val) {
                    setMode(val);
                    setActivePreset(null);
                  }
                }}
                fullWidth
                sx={{
                  gap: 1,
                  "& .MuiToggleButtonGroup-grouped": {
                    border: "1px solid rgba(255,255,255,0.1) !important",
                    borderRadius: "10px !important",
                    fontSize: "0.68rem",
                    color: "rgba(255,255,255,0.4)",
                    py: 1,
                    mb: 2,
                    textTransform: "none",
                    letterSpacing: "0.04em",
                    transition: "all 0.2s",
                    "&.Mui-selected": {
                      background: "rgba(255,200,100,0.12)",
                      borderColor: "rgba(255,200,100,0.4) !important",
                      color: "#ffc864",
                    },
                    "&:hover": { background: "rgba(255,255,255,0.05)" },
                  },
                }}
              >
                <ToggleButton value="same">⬜ Uniform</ToggleButton>
                <ToggleButton value="different">⊡ Per Corner</ToggleButton>
              </ToggleButtonGroup>
            </Box>

            {/* Unit toggle */}
            <Box>
              <Typography
                sx={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  color: "rgba(255,255,255,0.35)",
                  textTransform: "uppercase",
                  mb: 0.5,
                }}
              >
                Unit
              </Typography>
              <ToggleButtonGroup
                value={unit}
                exclusive
                onChange={(e, val) => {
                  if (val) {
                    setUnit(val);
                    setActivePreset(null);
                  }
                }}
                sx={{
                  gap: 1,
                  "& .MuiToggleButtonGroup-grouped": {
                    border: "1px solid rgba(255,255,255,0.1) !important",
                    borderRadius: "10px !important",
                    fontSize: "0.68rem",
                    color: "rgba(255,255,255,0.4)",
                    px: 3,
                    py: 0.8,
                    textTransform: "none",
                    transition: "all 0.2s",
                    "&.Mui-selected": {
                      background: "rgba(255,200,100,0.12)",
                      borderColor: "rgba(255,200,100,0.4) !important",
                      color: "#ffc864",
                    },
                    "&:hover": { background: "rgba(255,255,255,0.05)" },
                    mb: 3,
                  },
                }}
              >
                <ToggleButton value="px">px</ToggleButton>
                <ToggleButton value="%">%</ToggleButton>
              </ToggleButtonGroup>
            </Box>

            {/* Sliders */}
            {mode === "same" ? (
              <SliderControl
                label="Radius"
                min={0}
                max={maxVal}
                value={allRadius}
                unit={unit}
                onChange={(v) => {
                  setAllRadius(Number(v));
                  setActivePreset(null);
                }}
              />
            ) : (
              <>
                <SliderControl
                  label="Top Left"
                  min={0}
                  max={maxVal}
                  value={topLeft}
                  unit={unit}
                  onChange={(v) => {
                    setTopLeft(Number(v));
                    setActivePreset(null);
                  }}
                />
                <SliderControl
                  label="Top Right"
                  min={0}
                  max={maxVal}
                  value={topRight}
                  unit={unit}
                  onChange={(v) => {
                    setTopRight(Number(v));
                    setActivePreset(null);
                  }}
                />
                <SliderControl
                  label="Bottom Right"
                  min={0}
                  max={maxVal}
                  value={bottomRight}
                  unit={unit}
                  onChange={(v) => {
                    setBottomRight(Number(v));
                    setActivePreset(null);
                  }}
                />
                <SliderControl
                  label="Bottom Left"
                  min={0}
                  max={maxVal}
                  value={bottomLeft}
                  unit={unit}
                  onChange={(v) => {
                    setBottomLeft(Number(v));
                    setActivePreset(null);
                  }}
                />
              </>
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BorderRadius;
