import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Typography,
  Chip,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import UseTitle from "../../hooks/useTitle";
import CopyButton from "../../components/CopyButton";
import { copyToClipboard } from "../../utils/copyToClipboard";
import SliderControl from "../../components/SliderControl";
import DEFAULTS from "./constants/defaults";
import PRESETS from "./constants/presets";
import HeaderTitle from "../../components/HeaderTitle";

const ImageFilter = () => {
  const [vals, setVals] = useState({ ...DEFAULTS });
  const [img, setImg] = useState(null);
  const [finalSource, setFinalSource] = useState("");
  const [copied, setCopied] = useState(false);
  const [activePreset, setActivePreset] = useState(0);

  const {
    greyscale,
    blur,
    sepia,
    saturate,
    opacity,
    brightness,
    contrast,
    hue,
    invert,
  } = vals;

  const filterString = `grayscale(${greyscale}%) blur(${blur}px) sepia(${sepia}%) saturate(${saturate}%) opacity(${opacity}%) brightness(${brightness}%) contrast(${contrast}%) hue-rotate(${hue}deg) invert(${invert}%)`;

  useEffect(() => {
    setFinalSource(`filter: ${filterString};`);
  }, [filterString]);

  const set = (key) => (v) => {
    setVals((prev) => ({ ...prev, [key]: Number(v) }));
    setActivePreset(null);
  };

  const applyPreset = (preset, idx) => {
    setVals({ ...preset.values });
    setActivePreset(idx);
  };

  const resetAll = () => {
    setVals({ ...DEFAULTS });
    setActivePreset(0);
  };

  const handleCopy = () => {
    copyToClipboard(finalSource);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  function onImageChange(e) {
    if (e.target.files[0]) setImg(URL.createObjectURL(e.target.files[0]));
  }

  UseTitle("Magic CSS - Image Filter");

  return (
    <Container>
      {/* Header */}
      <HeaderTitle
        title={"Image Filter"}
        description={
          "Apply CSS filters to images with live preview and presets"
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

            {/* Image area */}
            <Box
              sx={{
                width: "100%",
                minHeight: 320,
                borderRadius: "16px",
                background:
                  "repeating-conic-gradient(rgba(255,255,255,0.03) 0% 25%, transparent 0% 50%) 0 0 / 24px 24px",
                border: "1px solid rgba(255,255,255,0.05)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                position: "relative",
              }}
            >
              {img ? (
                <img
                  src={img}
                  alt="Preview"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "400px",
                    objectFit: "contain",
                    filter: filterString,
                    transition: "filter 0.1s ease",
                    borderRadius: "12px",
                  }}
                />
              ) : (
                <Box textAlign="center" sx={{ opacity: 0.4 }}>
                  <PhotoCamera
                    sx={{ fontSize: 48, color: "rgba(255,255,255,0.3)" }}
                  />
                  <Typography
                    sx={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)" }}
                  >
                    Upload an image to get started
                  </Typography>
                </Box>
              )}
            </Box>

            {/* Upload + Reset row */}
            <Box display="flex" alignItems="center" gap={1.5}>
              <IconButton
                color="primary"
                component="label"
                sx={{
                  background: "rgba(255,200,100,0.1)",
                  border: "1px solid rgba(255,200,100,0.25)",
                  borderRadius: "10px",
                  px: 2,
                  py: 0.8,
                  gap: 1,
                  color: "#ffc864",
                  "&:hover": { background: "rgba(255,200,100,0.18)" },
                }}
              >
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={onImageChange}
                />
                <PhotoCamera fontSize="small" />
                <Typography sx={{ fontSize: "0.72rem", color: "#ffc864" }}>
                  Upload Image
                </Typography>
              </IconButton>

              <IconButton
                onClick={resetAll}
                sx={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "10px",
                  px: 2,
                  py: 0.8,
                  gap: 1,
                  color: "rgba(255,255,255,0.4)",
                  "&:hover": {
                    background: "rgba(255,255,255,0.09)",
                    color: "rgba(255,255,255,0.7)",
                  },
                }}
              >
                <RestartAltIcon fontSize="small" />
                <Typography sx={{ fontSize: "0.72rem", color: "inherit" }}>
                  Reset
                </Typography>
              </IconButton>
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
              <Box display="flex" flexWrap="wrap" gap={0.8}>
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
              gap: 1,
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
              label="Grayscale"
              min={0}
              max={100}
              value={greyscale}
              unit="%"
              onChange={set("greyscale")}
            />
            <SliderControl
              label="Blur"
              min={0}
              max={30}
              value={blur}
              unit="px"
              onChange={set("blur")}
            />
            <SliderControl
              label="Sepia"
              min={0}
              max={100}
              value={sepia}
              unit="%"
              onChange={set("sepia")}
            />
            <SliderControl
              label="Saturate"
              min={0}
              max={300}
              value={saturate}
              unit="%"
              onChange={set("saturate")}
            />
            <SliderControl
              label="Opacity"
              min={0}
              max={100}
              value={opacity}
              unit="%"
              onChange={set("opacity")}
            />
            <SliderControl
              label="Brightness"
              min={0}
              max={200}
              value={brightness}
              unit="%"
              onChange={set("brightness")}
            />
            <SliderControl
              label="Contrast"
              min={0}
              max={200}
              value={contrast}
              unit="%"
              onChange={set("contrast")}
            />
            <SliderControl
              label="Hue Rotate"
              min={0}
              max={360}
              value={hue}
              unit="°"
              onChange={set("hue")}
            />
            <SliderControl
              label="Invert"
              min={0}
              max={100}
              value={invert}
              unit="%"
              onChange={set("invert")}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ImageFilter;
