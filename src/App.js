import { Route, Routes, Navigate } from "react-router-dom";
import LayOut from "./components/layout";
import ScrollToTop from "./utils/ScrollTotop";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./utils/theme";
import { routes } from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <LayOut>
        <Routes>
          {routes.map((item) => (
            <Route
              key={item.title}
              path={item.path}
              element={<item.component />}
            />
          ))}
          <Route path="/*" element={<Navigate to="/shadowGenerator" />} />
        </Routes>
        <ScrollToTop />
      </LayOut>
      <ToastContainer />
    </ThemeProvider>
  );
};
export default App;
