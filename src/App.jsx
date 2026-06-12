import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./utils/ScrollTotop";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./utils/theme";
import { routes } from "./routes";
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
          <Route path="/*" element={<Navigate to="/shadow-generator" />} />
        </Routes>
        <ScrollToTop />
      </Layout>

      <Toaster position="top-center" reverseOrder={false} />
    </ThemeProvider>
  );
};
export default App;
