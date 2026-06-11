import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./utils/ScrollTotop";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./utils/theme";
import { routes } from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./layout";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes>
          {routes?.map((item) => (
            <Route
              key={item?.title}
              path={item?.path}
              element={<item.component />}
            />
          ))}
          {/* <Route path="/*" element={<Navigate to="/shadow-generator" />} /> */}
        </Routes>
        <ScrollToTop />
      </Layout>
      <ToastContainer
        style={{
          fontSize: "12px",
        }}
      />
    </ThemeProvider>
  );
};
export default App;
