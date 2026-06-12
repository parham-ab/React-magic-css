import { useEffect, useState } from "react";
import { Button, Grid, Typography, Chip, Box } from "@mui/material";
import { Container } from "@mui/system";
import { copyToClipboard } from "../../utils/copyToClipboard";
import UseTitle from "../../hooks/useTitle";
import HeaderTitle from "../../components/HeaderTitle";
import SliderControl from "../../components/SliderControl";
import CopyButton from "../../components/CopyButton";
import PRESETS from "./constants/presets";

const Skew = () => {
  const [skewX, setSkewX] = useState(0);
  const [skewY, setSkewY] = useState(0);
  const [finalSource, setFinalSource] = useState("");
  const [copied, setCopied] = useState(false);
  const [activePreset, setActivePreset] = useState(0);

  useEffect(() => {
    setFinalSource(`transform: skew(${skewX}deg, ${skewY}deg);`);
  }, [skewX, skewY]);

  UseTitle("Magic CSS - Skew");

  const handleCopy = () => {
    copyToClipboard(finalSource);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const applyPreset = (preset, idx) => {
    setSkewX(preset.x);
    setSkewY(preset.y);
    setActivePreset(idx);
  };

  const clearPreset = () => setActivePreset(null);

  return (
    <Container>
      {/* Header */}
      <HeaderTitle
        title={"Skew Generator"}
        description={"Tilt and distort elements along the X and Y axes"}
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
                minHeight: 300,
                borderRadius: "18px",
                background:
                  "repeating-conic-gradient(rgba(255,255,255,0.03) 0% 25%, transparent 0% 50%) 0 0 / 24px 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(255,255,255,0.05)",
                overflow: "hidden",
              }}
            >
              {/* Axis guides */}
              <Box sx={{ position: "relative", width: 200, height: 200 }}>
                {/* Crosshair */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: 0,
                    right: 0,
                    height: "1px",
                    background: "rgba(255,255,255,0.08)",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    left: "50%",
                    top: 0,
                    bottom: 0,
                    width: "1px",
                    background: "rgba(255,255,255,0.08)",
                  }}
                />

                {/* Skewed element */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: `translate(-50%, -50%) skew(${skewX}deg, ${skewY}deg)`,
                    transition: "transform 0.1s ease",
                    width: 120,
                    height: 120,
                    background:
                      "linear-gradient(135deg, rgba(255,200,100,0.3), rgba(130,100,255,0.3))",
                    border: "1px solid rgba(255,255,255,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "0.55rem",
                      color: "rgba(255,255,255,0.4)",
                      textAlign: "center",
                      transform: `skew(${-skewX}deg, ${-skewY}deg)`,
                      transition: "transform 0.1s ease",
                    }}
                  >
                    {skewX}°, {skewY}°
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Presets */}
            <Box>
              <Typography
                sx={{
                  fontSize: "0.65rem",
                  color: "rgba(255,255,255,0.25)",
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

            <SliderControl
              label="Skew X"
              min={-50}
              max={50}
              value={skewX}
              onChange={(v) => {
                setSkewX(Number(v));
                clearPreset();
              }}
            />
            <SliderControl
              label="Skew Y"
              min={-50}
              max={50}
              value={skewY}
              onChange={(v) => {
                setSkewY(Number(v));
                clearPreset();
              }}
            />

            {/* Reset */}
            <Button
              onClick={() => {
                setSkewX(0);
                setSkewY(0);
                setActivePreset(0);
              }}
              variant="text"
              size="small"
              sx={{
                fontSize: "0.65rem",
                color: "rgba(255,255,255,0.25)",
                textTransform: "none",
                letterSpacing: "0.06em",
                alignSelf: "flex-start",
                "&:hover": {
                  color: "rgba(255, 255, 255, 0.574)",
                  background: "none",
                },
              }}
            >
              Reset to flat
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Skew;
