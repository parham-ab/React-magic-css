import { Box, Slider, Typography } from "@mui/material";

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
export default SliderControl;
