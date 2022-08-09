import React from "react";
// mui components
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const DonateCard = ({ data }) => {
  return (
    <Card sx={{ maxWidth: "280px", margin: "50px auto 0" }}>
      <CardMedia
        component="img"
        alt={data.walletTitle}
        height="280"
        image={data.walletImg}
        loading="lazy"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          textAlign="center"
        >
          {data.walletTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.walletId}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" sx={{ width: "100%" }}>
          Copy
        </Button>
      </CardActions>
    </Card>
  );
};

export default DonateCard;
