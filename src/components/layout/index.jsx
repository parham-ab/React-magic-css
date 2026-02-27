import Header from "./Header";
import Footer from "./Footer";
import Box from "@mui/material/Box";

const LayOut = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 50%, #16213e 100%)",
      }}
    >
      <Header />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "30px",
          flex: 1,
          width: "calc(100% - 30px)",
        }}
      >
        <Box sx={{ width: "100%", maxWidth: "1200px", pb: 5 }}>{children}</Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default LayOut;
