// mui components
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
// copy to clipboard button
import copy from "copy-to-clipboard";

const DonateCard = ({ data }) => {
  // copy to clipboard function
  const copyToClipboard = () => {
    copy();
  };

  return (
    <Card
      elevation={5}
      sx={{ maxWidth: { xs: "240px", sm: "300px" }, margin: "50px auto 0" }}
    >
      <CardMedia
        component="img"
        alt={data.walletTitle}
        image={data.walletImg}
        loading="lazy"
        sx={{ height: { xs: "240", sm: "300px" } }}
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
        <Button
          size="small"
          variant="contained"
          sx={{ width: "100%" }}
          onClick={() => copy(data.walletId)}
        >
          Copy
        </Button>
      </CardActions>
    </Card>
  );
};

export default DonateCard;
