// react router dom
import { Route, Routes, Navigate } from "react-router-dom";
// components
import LayOut from "./components/layout";
import ShadowGenerator from "./components/ShadowGenerator";
import Gradient from "./components/Gradient";
import TextShadowGenerator from "./components/TextShadowGenerator";
import BorderRadius from "./components/BorderRadius";
import ImageFilter from "./components/ImageFilter";
import Donate from "./components/donation";
import Skew from "./components/Skew";
import ColorPicker from "./components/ColorPicker";
import ScrollToTop from "./components/functions/ScrollTotop";
// mui
import { createTheme, ThemeProvider } from "@mui/material/styles";
// font customizing
const theme = createTheme({
  typography: {
    fontFamily: ["Quicksand"].join(","),
    fontSize: 14,
    fontWeightLight: 400,
    fontWeightMedium: 500,
    fontWeightRegular: 600,
    fontWeightBold: 700,
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <LayOut>
        <Routes>
          <Route path="/shadowGenerator" element={<ShadowGenerator />} />
          <Route path="/gradient" element={<Gradient />} />
          <Route
            path="/textShadowGenerator"
            element={<TextShadowGenerator />}
          />
          <Route path="/border-radius" element={<BorderRadius />} />
          <Route path="/image-filter" element={<ImageFilter />} />
          <Route path="/skew" element={<Skew />} />
          <Route path="/color-picker" element={<ColorPicker />} />
          <Route path="/donation" element={<Donate />} />
          <Route path="/*" element={<Navigate to="/shadowGenerator" />} />
        </Routes>
        <ScrollToTop />
      </LayOut>
    </ThemeProvider>
  );
};

export default App;
