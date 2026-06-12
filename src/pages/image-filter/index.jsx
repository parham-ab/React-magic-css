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
import SliderControl from "../../components/SliderControl";
import DEFAULTS from "./constants/defaults";
import PRESETS from "./constants/presets";
import { getFilterSliders } from "./constants/sliderTypes";
import HeaderTitle from "../../components/HeaderTitle";
import { useCopy } from "../../hooks/useCopy";
import ControlsContainer from "../../components/ControlsContainer";
import LivePreviewContainer from "../../components/LivePreviewContainer";

const ImageFilter = () => {
  const [vals, setVals] = useState({ ...DEFAULTS });
  const [img, setImg] = useState(null);
  const [finalSource, setFinalSource] = useState("");
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

  function onImageChange(e) {
    if (e.target.files[0]) setImg(URL.createObjectURL(e.target.files[0]));
  }

  UseTitle("Magic CSS - Image Filter");
  const { copied, copy } = useCopy();
  const handleCopy = () => copy(finalSource);

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
        <Grid item xs={12} md={5}>
          <ControlsContainer>
            {getFilterSliders(vals, set).map((slider) => (
              <SliderControl
                key={slider.label}
                label={slider.label}
                min={slider.min}
                max={slider.max}
                value={slider.value}
                unit={slider.unit}
                onChange={slider.onChange}
              />
            ))}
          </ControlsContainer>
        </Grid>

        <Grid item xs={12} md={7}>
          <LivePreviewContainer
            copied={copied}
            finalSource={finalSource}
            handleCopy={handleCopy}
          >
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
          </LivePreviewContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ImageFilter;
