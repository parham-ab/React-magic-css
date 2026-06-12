// import { useEffect, useState } from "react";
// import { Grid, Box, Typography } from "@mui/material";
// import { SketchPicker } from "react-color";
// import { Container } from "@mui/system";
// import UseTitle from "../../hooks/useTitle";
// import CopyButton from "../../components/CopyButton";
// import COLOR_SWATCHES from "./constants/color-swatches";
// import HeaderTitle from "../../components/HeaderTitle";
// import { useCopy } from "../../hooks/useCopy";

// const ColorPicker = () => {
//   const [color, setColor] = useState({
//     hex: "#8b5cf6",
//     rgb: { r: 139, g: 92, b: 246, a: 1 },
//   });
//   const [finalSource, setFinalSource] = useState("");

//   const handleChange = (c) => setColor(c);

//   useEffect(() => {
//     const { r, g, b, a } = color.rgb;
//     setFinalSource(a < 1 ? `rgba(${r}, ${g}, ${b}, ${a})` : color.hex);
//   }, [color]);

//   UseTitle("Magic CSS - Color Picker");
//   const { copied, copy } = useCopy();
//   const handleCopy = () => copy(finalSource);

//   const { r, g, b, a } = color.rgb;
//   const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
//   const onColor =
//     luminance > 0.55 ? "rgba(0,0,0,0.75)" : "rgba(255,255,255,0.9)";

//   return (
//     <Container>
//       {/* Header */}
//       <HeaderTitle
//         title={"Color Picker"}
//         description={"Pick a color and copy its HEX/RGB/RGBA value"}
//       />
//       <Grid container spacing={4} alignItems="flex-start">
//         {/* LEFT — Picker */}
//         <Grid item xs={12} md={5}>
//           <Box
//             sx={{
//               background: "rgba(255,255,255,0.03)",
//               border: "1px solid rgba(255,255,255,0.07)",
//               borderRadius: "24px",
//               p: 1.5,
//               display: "flex",
//               flexDirection: "column",
//               gap: 2,
//             }}
//           >
//             <Typography
//               sx={{
//                 fontSize: "0.65rem",
//                 color: "rgba(255,255,255,0.25)",
//                 textTransform: "uppercase",
//               }}
//             >
//               Color Picker
//             </Typography>

//             <div className="color-picker-sketch">
//               <SketchPicker
//                 color={color.rgb}
//                 onChangeComplete={handleChange}
//                 presetColors={COLOR_SWATCHES}
//               />
//             </div>
//           </Box>
//         </Grid>

//         {/* RIGHT — Preview + Output */}
//         <Grid item xs={12} md={7}>
//           <Box
//             sx={{
//               background: "rgba(255,255,255,0.03)",
//               border: "1px solid rgba(255,255,255,0.07)",
//               borderRadius: "24px",
//               p: 1.5,
//               display: "flex",
//               flexDirection: "column",
//               gap: 2,
//             }}
//           >
//             <Typography
//               sx={{
//                 fontSize: "0.65rem",
//                 color: "rgba(255,255,255,0.25)",
//                 textTransform: "uppercase",
//               }}
//             >
//               Live Preview
//             </Typography>

//             {/* Large color swatch */}
//             <Box
//               sx={{
//                 height: 220,
//                 borderRadius: "16px",
//                 background: finalSource || color.hex,
//                 border: "1px solid rgba(255,255,255,0.07)",
//                 transition: "background 0.1s ease",
//                 display: "flex",
//                 alignItems: "flex-end",
//                 p: 2,
//               }}
//             >
//               <Typography
//                 sx={{
//                   fontSize: "1.6rem",
//                   fontWeight: 700,
//                   color: onColor,
//                   letterSpacing: "-0.02em",
//                   lineHeight: 1,
//                 }}
//               >
//                 {color.hex.toUpperCase()}
//               </Typography>
//             </Box>

//             {/* Color info row */}
//             <Box display="flex" gap={1.5}>
//               {[
//                 { label: "HEX", value: color.hex.toUpperCase() },
//                 { label: "R", value: r },
//                 { label: "G", value: g },
//                 { label: "B", value: b },
//                 ...(a < 1 ? [{ label: "A", value: a.toFixed(2) }] : []),
//               ].map(({ label, value }) => (
//                 <Box
//                   key={label}
//                   sx={{
//                     flex: 1,
//                     background: "rgba(255,255,255,0.04)",
//                     border: "1px solid rgba(255,255,255,0.07)",
//                     borderRadius: "10px",
//                     p: 1,
//                     textAlign: "center",
//                   }}
//                 >
//                   <Typography
//                     sx={{
//                       fontSize: "0.55rem",
//                       color: "rgba(255,255,255,0.3)",
//                       textTransform: "uppercase",
//                       mb: 0.3,
//                     }}
//                   >
//                     {label}
//                   </Typography>
//                   <Typography
//                     sx={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.85)" }}
//                   >
//                     {value}
//                   </Typography>
//                 </Box>
//               ))}
//             </Box>

//             {/* Tints row */}
//             <Box>
//               <Typography
//                 sx={{
//                   fontSize: "0.65rem",
//                   color: "rgba(255,255,255,0.25)",
//                   textTransform: "uppercase",
//                   mb: 1,
//                 }}
//               >
//                 Tints & Shades
//               </Typography>
//               <Box display="flex" gap={0.5}>
//                 {[0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1, 0.85, 0.7, 0.55].map(
//                   (factor, i) => {
//                     const isShade = i >= 6;
//                     const tr = isShade
//                       ? Math.round(r * (1 - (i - 6) * 0.15))
//                       : Math.round(r + (255 - r) * (1 - factor));
//                     const tg = isShade
//                       ? Math.round(g * (1 - (i - 6) * 0.15))
//                       : Math.round(g + (255 - g) * (1 - factor));
//                     const tb = isShade
//                       ? Math.round(b * (1 - (i - 6) * 0.15))
//                       : Math.round(b + (255 - b) * (1 - factor));
//                     return (
//                       <Box
//                         key={i}
//                         title={`rgb(${tr},${tg},${tb})`}
//                         onClick={() =>
//                           handleChange({
//                             hex: `#${[tr, tg, tb].map((v) => v.toString(16).padStart(2, "0")).join("")}`,
//                             rgb: { r: tr, g: tg, b: tb, a: 1 },
//                           })
//                         }
//                         sx={{
//                           flex: 1,
//                           height: 36,
//                           borderRadius: "6px",
//                           background: `rgb(${tr},${tg},${tb})`,
//                           cursor: "pointer",
//                           border: "1px solid rgba(255,255,255,0.06)",
//                           transition: "transform 0.15s",
//                           "&:hover": { transform: "scaleY(1.15)", zIndex: 1 },
//                         }}
//                       />
//                     );
//                   },
//                 )}
//               </Box>
//             </Box>

//             {/* CSS Output + Copy */}
//             <CopyButton
//               copied={copied}
//               finalSource={finalSource}
//               handleCopy={handleCopy}
//             />
//           </Box>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default ColorPicker;

import { useEffect, useState } from "react";
import { Grid, Box, Typography } from "@mui/material";
import { HexAlphaColorPicker } from "react-colorful";
import { Container } from "@mui/system";
import UseTitle from "../../hooks/useTitle";
import CopyButton from "../../components/CopyButton";
import COLOR_SWATCHES from "./constants/color-swatches";
import HeaderTitle from "../../components/HeaderTitle";
import { useCopy } from "../../hooks/useCopy";

// Convert hex (with optional alpha) to rgb object
const hexToRgb = (hex) => {
  const full = hex.replace("#", "");
  const hasAlpha = full.length === 8;
  const r = parseInt(full.slice(0, 2), 16);
  const g = parseInt(full.slice(2, 4), 16);
  const b = parseInt(full.slice(4, 6), 16);
  const a = hasAlpha
    ? Math.round((parseInt(full.slice(6, 8), 16) / 255) * 100) / 100
    : 1;
  return { r, g, b, a };
};

const ColorPicker = () => {
  const [hexA, setHexA] = useState("#8b5cf6ff");

  const rgb = hexToRgb(hexA);
  const { r, g, b, a } = rgb;
  const hex6 = "#" + hexA.replace("#", "").slice(0, 6);

  const finalSource = a < 1 ? `rgba(${r}, ${g}, ${b}, ${a})` : hex6;

  UseTitle("Magic CSS - Color Picker");
  const { copied, copy } = useCopy();
  const handleCopy = () => copy(finalSource);

  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  const onColor =
    luminance > 0.55 ? "rgba(0,0,0,0.75)" : "rgba(255,255,255,0.9)";

  const handleSwatchClick = (swatchHex) => {
    setHexA(swatchHex.length === 7 ? swatchHex + "ff" : swatchHex);
  };

  return (
    <Container>
      <HeaderTitle
        title={"Color Picker"}
        description={"Pick a color and copy its HEX/RGB/RGBA value"}
      />
      <Grid container spacing={4} alignItems="flex-start">
        {/* LEFT — Picker */}
        <Grid item xs={12} md={5}>
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
              Color Picker
            </Typography>

            <Box
              sx={{
                "& .react-colorful": { width: "100%", height: 220 },
                "& .react-colorful__saturation": {
                  borderRadius: "12px 12px 0 0",
                },
                "& .react-colorful__alpha, & .react-colorful__hue": {
                  borderRadius: 8,
                  height: 14,
                  margin: "8px 0",
                },
              }}
            >
              <HexAlphaColorPicker color={hexA} onChange={setHexA} />
            </Box>

            {/* Swatches */}
            <Box display="flex" flexWrap="wrap" gap={0.5}>
              {COLOR_SWATCHES.map((swatch, i) => {
                const s = typeof swatch === "string" ? swatch : swatch.color;
                return (
                  <Box
                    key={i}
                    title={s}
                    onClick={() => handleSwatchClick(s)}
                    sx={{
                      width: 20,
                      height: 20,
                      borderRadius: "4px",
                      background: s,
                      cursor: "pointer",
                      border: "1px solid rgba(255,255,255,0.1)",
                      "&:hover": { transform: "scale(1.2)", zIndex: 1 },
                      transition: "transform 0.15s",
                    }}
                  />
                );
              })}
            </Box>
          </Box>
        </Grid>

        {/* RIGHT — Preview + Output */}
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

            {/* Large color swatch */}
            <Box
              sx={{
                height: 220,
                borderRadius: "16px",
                background: finalSource || hex6,
                border: "1px solid rgba(255,255,255,0.07)",
                transition: "background 0.1s ease",
                display: "flex",
                alignItems: "flex-end",
                p: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.6rem",
                  fontWeight: 700,
                  color: onColor,
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                }}
              >
                {hex6.toUpperCase()}
              </Typography>
            </Box>

            {/* Color info row */}
            <Box display="flex" gap={1.5}>
              {[
                { label: "HEX", value: hex6.toUpperCase() },
                { label: "R", value: r },
                { label: "G", value: g },
                { label: "B", value: b },
                ...(a < 1 ? [{ label: "A", value: a.toFixed(2) }] : []),
              ].map(({ label, value }) => (
                <Box
                  key={label}
                  sx={{
                    flex: 1,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "10px",
                    p: 1,
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "0.55rem",
                      color: "rgba(255,255,255,0.3)",
                      textTransform: "uppercase",
                      mb: 0.3,
                    }}
                  >
                    {label}
                  </Typography>
                  <Typography
                    sx={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.85)" }}
                  >
                    {value}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Tints row */}
            <Box>
              <Typography
                sx={{
                  fontSize: "0.65rem",
                  color: "rgba(255,255,255,0.25)",
                  textTransform: "uppercase",
                  mb: 1,
                }}
              >
                Tints & Shades
              </Typography>
              <Box display="flex" gap={0.5}>
                {[0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1, 0.85, 0.7, 0.55].map(
                  (factor, i) => {
                    const isShade = i >= 6;
                    const tr = isShade
                      ? Math.round(r * (1 - (i - 6) * 0.15))
                      : Math.round(r + (255 - r) * (1 - factor));
                    const tg = isShade
                      ? Math.round(g * (1 - (i - 6) * 0.15))
                      : Math.round(g + (255 - g) * (1 - factor));
                    const tb = isShade
                      ? Math.round(b * (1 - (i - 6) * 0.15))
                      : Math.round(b + (255 - b) * (1 - factor));
                    return (
                      <Box
                        key={i}
                        title={`rgb(${tr},${tg},${tb})`}
                        onClick={() => {
                          const h = [tr, tg, tb]
                            .map((v) => v.toString(16).padStart(2, "0"))
                            .join("");
                          setHexA(`#${h}ff`);
                        }}
                        sx={{
                          flex: 1,
                          height: 36,
                          borderRadius: "6px",
                          background: `rgb(${tr},${tg},${tb})`,
                          cursor: "pointer",
                          border: "1px solid rgba(255,255,255,0.06)",
                          transition: "transform 0.15s",
                          "&:hover": { transform: "scaleY(1.15)", zIndex: 1 },
                        }}
                      />
                    );
                  },
                )}
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
      </Grid>
    </Container>
  );
};

export default ColorPicker;
