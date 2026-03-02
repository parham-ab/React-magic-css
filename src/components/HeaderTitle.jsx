import { Box, Typography } from "@mui/material";

const HeaderTitle = ({ title, description }) => {
  return (
    <Box textAlign="center" pt={5} pb={3}>
      <Typography
        variant="h3"
        sx={{
          color: "#fff",
          fontWeight: 600,
          fontSize: { xs: "2rem", md: "2.8rem" },
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          color: "rgba(255,255,255,0.38)",
          fontSize: "0.95rem",
          fontWeight: 300,
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default HeaderTitle;
