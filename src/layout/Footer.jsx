import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: "rgba(15,15,20,0.92)",
        backdropFilter: "blur(16px)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        py: 2,
        px: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: "0.78rem",
          color: "rgba(255,255,255,0.3)",
          letterSpacing: "0.02em",
        }}
      >
        Made with{" "}
        <Box component="span" sx={{ color: "rgb(211,0,0)" }}>
          ❤
        </Box>{" "}
        by{" "}
        <Box
          component="a"
          href="https://parham-ab.netlify.app/"
          target="_blank"
          rel="noreferrer"
          sx={{
            color: "rgba(255,200,100,0.75)",
            textDecoration: "none",
            transition: "color 0.2s",
            "&:hover": { color: "#ffc864" },
          }}
        >
          Parham Abolghasemi
        </Box>
      </Typography>
    </Box>
  );
};

export default Footer;
