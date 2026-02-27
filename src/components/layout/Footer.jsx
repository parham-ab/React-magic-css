import { Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Grid
      container
      sx={{
        backgroundColor: "#1c2442",
        marginTop: "50px",
        flexFlow: "column",
      }}
    >
      <Grid item sx={{ margin: "15px auto" }} xs={8} sm={6} md={4} lg={3}>
        <Typography
          variant="body1"
          color="#fff"
          fontWeight={700}
          fontSize={"15px"}
        >
          Made with
          <span style={{ color: "rgb(211, 0, 0)" }}> ❤ </span>
          by
          <a
            href="https://parham-ab.netlify.app/"
            target={"_blank"}
            rel="noreferrer"
          >
            {" "}
            Parham Abolghasemi
          </a>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
