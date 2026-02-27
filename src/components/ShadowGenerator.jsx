import { useEffect, useState } from "react";
import { SketchPicker } from "react-color";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Slider,
  Typography,
  Box,
  Chip,
} from "@mui/material";
import { Container } from "@mui/system";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";
import UseTitle from "../hooks/useTitle";
import { copyToClipboard } from "../utils/copyToClipboard";

const SliderControl = ({ label, min, max, value, onChange }) => (
  <>
    <Box display="flex" justifyContent="space-between" alignItems="center">
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
  </>
);

const ShadowGenerator = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(10);
  const [blur, setBlur] = useState(30);
  const [spread, setSpread] = useState(0);
  const [insetStatus, setInsetStatus] = useState(false);
  const [color, setColor] = useState("rgba(0,0,0,0.5)");
  const [finalSource, setFinalSource] = useState("");
  const [copied, setCopied] = useState(false);

  const shadowValue = insetStatus
    ? `inset ${x}px ${y}px ${blur}px ${spread}px ${color}`
    : `${x}px ${y}px ${blur}px ${spread}px ${color}`;

  useEffect(() => {
    setFinalSource(`box-shadow: ${shadowValue};`);
  }, [x, y, blur, spread, insetStatus, color]);

  const handleCopy = () => {
    copyToClipboard(finalSource);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  UseTitle("Magic CSS - Shadow Generator");

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
          Shadow Generator
        </Typography>
        <Typography
          sx={{
            color: "rgba(255,255,255,0.38)",
            fontSize: "0.95rem",
            fontWeight: 300,
          }}
        >
          Craft the perfect box-shadow — visually, in real time
        </Typography>
      </Box>

      <Grid container spacing={4} alignItems="flex-start">
        {/* LEFT — Preview */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "24px",
              p: 1.5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              height: "100%",
            }}
          >
            {/* Preview label */}
            <Typography
              sx={{
                fontSize: "0.65rem",
                color: "rgba(255,255,255,0.25)",
                textTransform: "uppercase",
                alignSelf: "flex-start",
              }}
            >
              Live Preview
            </Typography>

            {/* Preview Box */}
            <Box
              sx={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                minHeight: 280,
                background:
                  "repeating-conic-gradient(rgba(255,255,255,0.03) 0% 25%, transparent 0% 50%) 0 0 / 24px 24px",
                borderRadius: "16px",
              }}
            >
              <Box
                sx={{
                  width: 140,
                  height: 140,
                  borderRadius: "18px",
                  background: "linear-gradient(135deg, #2a2a3e, #3a3a55)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow: shadowValue,
                  transition: "box-shadow 0.1s ease",
                }}
              />
            </Box>

            {/* CSS Output */}
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
        <Grid item xs={12} md={6}>
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
                color: "rgba(255,255,255,0.25)",
                textTransform: "uppercase",
                mb: 3,
              }}
            >
              Controls
            </Typography>

            <SliderControl
              label="Offset X"
              min={-130}
              max={130}
              value={x}
              onChange={setX}
            />
            <SliderControl
              label="Offset Y"
              min={-130}
              max={130}
              value={y}
              onChange={setY}
            />
            <SliderControl
              label="Blur"
              min={0}
              max={130}
              value={blur}
              onChange={setBlur}
            />
            <SliderControl
              label="Spread"
              min={-50}
              max={50}
              value={spread}
              onChange={setSpread}
            />

            {/* Inset Toggle */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "12px",
                p: 0.5,
                mb: 3,
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.12em",
                  color: "white",
                  textTransform: "uppercase",
                }}
              >
                Inset
              </Typography>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={insetStatus}
                    onChange={() => setInsetStatus(!insetStatus)}
                    sx={{
                      color: "rgba(255,255,255,0.2)",
                      "&.Mui-checked": { color: "#ffc864" },
                      p: 0.5,
                    }}
                  />
                }
                label={
                  insetStatus ? (
                    <Chip
                      label="ON"
                      size="small"
                      sx={{
                        height: 20,
                        fontSize: "0.6rem",
                        bgcolor: "rgba(255,200,100,0.15)",
                        color: "#ffc864",
                        border: "1px solid rgba(255,200,100,0.3)",
                      }}
                    />
                  ) : (
                    <Chip
                      label="OFF"
                      size="small"
                      sx={{
                        height: 20,
                        fontSize: "0.6rem",
                        bgcolor: "rgba(255,255,255,0.05)",
                        color: "#fff",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    />
                  )
                }
                labelPlacement="start"
                sx={{ m: 0, gap: 1 }}
              />
            </Box>

            {/* Color Picker */}
            <Typography
              sx={{
                fontSize: "0.65rem",
                color: "rgba(255,255,255,0.25)",
                textTransform: "uppercase",
                mb: 1.5,
              }}
            >
              Shadow Color
            </Typography>
            <SketchPicker
              color={color}
              onChangeComplete={(c) =>
                setColor(
                  c.rgb.a < 1
                    ? `rgba(${c.rgb.r},${c.rgb.g},${c.rgb.b},${c.rgb.a})`
                    : c.hex,
                )
              }
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ShadowGenerator;
