// import { useEffect, useState } from "react";
// import { SketchPicker } from "react-color";
// import {
//   Checkbox,
//   FormControlLabel,
//   Grid,
//   Typography,
//   Box,
//   Chip,
// } from "@mui/material";
// import { Container } from "@mui/system";
// import UseTitle from "../../hooks/useTitle";
// import HeaderTitle from "../../components/HeaderTitle";
// import SliderControl from "../../components/SliderControl";
// import CopyButton from "../../components/CopyButton";
// import { useCopy } from "../../hooks/useCopy";
// import { SHADOW_SLIDER_TYPES } from "./constants/slider-types";
// import ControlsContainer from "../../components/ControlsContainer";

// const ShadowGenerator = () => {
//   const [x, setX] = useState(0);
//   const [y, setY] = useState(10);
//   const [blur, setBlur] = useState(30);
//   const [spread, setSpread] = useState(0);
//   const [insetStatus, setInsetStatus] = useState(false);
//   const [color, setColor] = useState("rgba(0,0,0,0.5)");
//   const [finalSource, setFinalSource] = useState("");

//   const shadowValue = insetStatus
//     ? `inset ${x}px ${y}px ${blur}px ${spread}px ${color}`
//     : `${x}px ${y}px ${blur}px ${spread}px ${color}`;

//   useEffect(() => {
//     setFinalSource(`box-shadow: ${shadowValue};`);
//   }, [x, y, blur, spread, insetStatus, color, shadowValue]);

//   UseTitle("Magic CSS - Shadow Generator");
//   const { copied, copy } = useCopy();
//   const handleCopy = () => copy(finalSource);

//   return (
//     <Container>
//       {/* Header */}
//       <HeaderTitle
//         title={"Shadow Generator"}
//         description={"Craft the perfect box-shadow — visually, in real time"}
//       />

//       <Grid container spacing={4} alignItems="flex-start">
//         {/* LEFT — Preview */}
//         <Grid item xs={12} md={6}>
//           <Box
//             sx={{
//               background: "rgba(255,255,255,0.03)",
//               border: "1px solid rgba(255,255,255,0.07)",
//               borderRadius: "24px",
//               p: 1.5,
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               gap: 2,
//               height: "100%",
//             }}
//           >
//             {/* Preview label */}
//             <Typography
//               sx={{
//                 fontSize: "0.65rem",
//                 color: "rgba(255,255,255,0.25)",
//                 textTransform: "uppercase",
//                 alignSelf: "flex-start",
//               }}
//             >
//               Live Preview
//             </Typography>

//             {/* Preview Box */}
//             <Box
//               sx={{
//                 flex: 1,
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 width: "100%",
//                 minHeight: 280,
//                 background:
//                   "repeating-conic-gradient(rgba(255,255,255,0.03) 0% 25%, transparent 0% 50%) 0 0 / 24px 24px",
//                 borderRadius: "16px",
//               }}
//             >
//               <Box
//                 sx={{
//                   width: 140,
//                   height: 140,
//                   borderRadius: "18px",
//                   background: "linear-gradient(135deg, #2a2a3e, #3a3a55)",
//                   border: "1px solid rgba(255,255,255,0.1)",
//                   boxShadow: shadowValue,
//                   transition: "box-shadow 0.1s ease",
//                 }}
//               />
//             </Box>

//             {/* CSS Output */}
//             <CopyButton
//               copied={copied}
//               finalSource={finalSource}
//               handleCopy={handleCopy}
//             />
//           </Box>
//         </Grid>

//         {/* RIGHT — Controls */}
//         <Grid item xs={12} md={6}>
//           <ControlsContainer>
//             {SHADOW_SLIDER_TYPES({
//               x,
//               y,
//               blur,
//               spread,
//               setX,
//               setY,
//               setBlur,
//               setSpread,
//             })?.map((item) => (
//               <SliderControl
//                 key={item.label}
//                 label={item.label}
//                 min={item.min}
//                 max={item.max}
//                 value={item.value}
//                 onChange={item.onChange}
//               />
//             ))}

//             {/* Inset Toggle */}
//             <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//                 background: "rgba(255,255,255,0.04)",
//                 border: "1px solid rgba(255,255,255,0.07)",
//                 borderRadius: "12px",
//                 p: 0.5,
//                 mb: 3,
//               }}
//             >
//               <Typography
//                 sx={{
//                   fontSize: "0.7rem",
//                   letterSpacing: "0.12em",
//                   color: "white",
//                   textTransform: "uppercase",
//                 }}
//               >
//                 Inset
//               </Typography>
//               <FormControlLabel
//                 control={
//                   <Checkbox
//                     checked={insetStatus}
//                     onChange={() => setInsetStatus(!insetStatus)}
//                     sx={{
//                       color: "rgba(255,255,255,0.2)",
//                       "&.Mui-checked": { color: "#ffc864" },
//                       p: 0.5,
//                     }}
//                   />
//                 }
//                 label={
//                   insetStatus ? (
//                     <Chip
//                       label="ON"
//                       size="small"
//                       sx={{
//                         height: 20,
//                         fontSize: "0.6rem",
//                         bgcolor: "rgba(255,200,100,0.15)",
//                         color: "#ffc864",
//                         border: "1px solid rgba(255,200,100,0.3)",
//                       }}
//                     />
//                   ) : (
//                     <Chip
//                       label="OFF"
//                       size="small"
//                       sx={{
//                         height: 20,
//                         fontSize: "0.6rem",
//                         bgcolor: "rgba(255,255,255,0.05)",
//                         color: "#fff",
//                         border: "1px solid rgba(255,255,255,0.08)",
//                       }}
//                     />
//                   )
//                 }
//                 labelPlacement="start"
//                 sx={{ m: 0, gap: 1 }}
//               />
//             </Box>

//             {/* Color Picker */}
//             <Typography
//               sx={{
//                 fontSize: "0.65rem",
//                 color: "rgba(255,255,255,0.25)",
//                 textTransform: "uppercase",
//                 mb: 1.5,
//               }}
//             >
//               Shadow Color
//             </Typography>
//             <SketchPicker
//               color={color}
//               onChangeComplete={(c) =>
//                 setColor(
//                   c.rgb.a < 1
//                     ? `rgba(${c.rgb.r},${c.rgb.g},${c.rgb.b},${c.rgb.a})`
//                     : c.hex,
//                 )
//               }
//             />
//           </ControlsContainer>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default ShadowGenerator;

import { useEffect, useState } from "react";
import { RgbaStringColorPicker } from "react-colorful";
import {
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
  Box,
  Chip,
} from "@mui/material";
import { Container } from "@mui/system";
import UseTitle from "../../hooks/useTitle";
import HeaderTitle from "../../components/HeaderTitle";
import SliderControl from "../../components/SliderControl";
import CopyButton from "../../components/CopyButton";
import { useCopy } from "../../hooks/useCopy";
import { SHADOW_SLIDER_TYPES } from "./constants/slider-types";
import ControlsContainer from "../../components/ControlsContainer";

const ShadowGenerator = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(10);
  const [blur, setBlur] = useState(30);
  const [spread, setSpread] = useState(0);
  const [insetStatus, setInsetStatus] = useState(false);
  const [color, setColor] = useState("rgba(0,0,0,0.5)");
  const [finalSource, setFinalSource] = useState("");

  const shadowValue = insetStatus
    ? `inset ${x}px ${y}px ${blur}px ${spread}px ${color}`
    : `${x}px ${y}px ${blur}px ${spread}px ${color}`;

  useEffect(() => {
    setFinalSource(`box-shadow: ${shadowValue};`);
  }, [x, y, blur, spread, insetStatus, color, shadowValue]);

  UseTitle("Magic CSS - Shadow Generator");
  const { copied, copy } = useCopy();
  const handleCopy = () => copy(finalSource);

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
          <ControlsContainer>
            {SHADOW_SLIDER_TYPES({
              x,
              y,
              blur,
              spread,
              setX,
              setY,
              setBlur,
              setSpread,
            })?.map((item) => (
              <SliderControl
                key={item.label}
                label={item.label}
                min={item.min}
                max={item.max}
                value={item.value}
                onChange={item.onChange}
              />
            ))}

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
            <section className="custom-pointers">
              <RgbaStringColorPicker color={color} onChange={setColor} />
            </section>
          </ControlsContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ShadowGenerator;
