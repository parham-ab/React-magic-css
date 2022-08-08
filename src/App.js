// react router dom
import { Route, Routes, Navigate } from "react-router-dom";
// components
import LayOut from "./components/layout";
import ShadowGenerator from "./components/ShadowGenerator";
import Gradient from "./components/Gradient";
import TextShadowGenerator from "./components/TextShadowGenerator";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BorderRadius from "./components/BorderRadius";
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
          <Route path="/*" element={<Navigate to="/shadowGenerator" />} />
        </Routes>
      </LayOut>
    </ThemeProvider>
  );
};

export default App;
