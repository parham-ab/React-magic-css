import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import DonateCard from "./DonateCard";
import UseTitle from "../../hooks/useTitle";
import { walletCards } from "../../constants/walletCards";

const Donation = () => {
  UseTitle("Magic CSS - Donation");
  return (
    <Container>
      <Grid container>
        {walletCards.map((item) => (
          <Grid item xs={12} sm={6} key={item.id}>
            <DonateCard data={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default Donation;
