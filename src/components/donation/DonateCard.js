import React from "react";
// mui components
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";

const DonateCard = ({ data }) => {
  return (
    <Container>
      <Grid container>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt={data.walletTitle}
            height="140"
            image={data.walletImg}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.walletTitle}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.walletId}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="contained">
              Copy
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Container>
  );
};

export default DonateCard;
