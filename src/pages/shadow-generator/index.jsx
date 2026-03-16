import { useEffect, useState } from "react";
import { SketchPicker } from "react-color";
import {
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
  Box,
  Chip,
} from "@mui/material";
import { Container } from "@mui/system";
import { copyToClipboard } from "../../utils/copyToClipboard";
import UseTitle from "../../hooks/useTitle";
import HeaderTitle from "../../components/HeaderTitle";
import SliderControl from "../../components/SliderControl";
import CopyButton from "../../components/CopyButton";

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
  }, [x, y, blur, spread, insetStatus, color, shadowValue]);

  const handleCopy = () => {
    copyToClipboard(finalSource);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  UseTitle("Magic CSS - Shadow Generator");

  return (
    <Container>
      {/* Header */}
      <HeaderTitle
        title={"Shadow Generator"}
        description={"Craft the perfect box-shadow — visually, in real time"}
      />

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
            <CopyButton
              copied={copied}
              finalSource={finalSource}
              handleCopy={handleCopy}
            />
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

            {/* {sliderTypes?.map((item) => (
              <SliderControl
                label={item?.label}
                min={item?.min}
                max={item?.max}
                value={item?.value}
                onChange={item?.onChange}
              />
            ))} */}

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
