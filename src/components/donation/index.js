import React, { useState } from "react";
import DonateCard from "./DonateCard";
// img
import walletimg from "../../assets/img/TRX.webp";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";

const Donation = () => {
  const [walletCard, setWalletCard] = useState([
    {
      id: 1,
      walletTitle: "BTC Wallet",
      walletImg: walletimg,
      walletId: "ieurhfs8945gh89ejhf95809wruwe90uj3r09",
    },
    {
      id: 2,
      walletTitle: "ETH Wallet",
      walletImg: walletimg,
      walletId: "ieurhfs8945gh89ejhf95809wruwe90uj3r09",
    },
    {
      id: 3,
      walletTitle: "BNB Wallet",
      walletImg: walletimg,
      walletId: "ieurhfs8945gh89ejhf95809wruwe90uj3r09",
    },
    {
      id: 4,
      walletTitle: "DOGE Wallet",
      walletImg: walletimg,
      walletId: "ieurhfs8945gh89ejhf95809wruwe90uj3r09",
    },
    {
      id: 5,
      walletTitle: "UHW Wallet",
      walletImg: walletimg,
      walletId: "ieurhfs8945gh89ejhf95809wruwe90uj3r09",
    },
    {
      id: 6,
      walletTitle: "WWW Wallet",
      walletImg: walletimg,
      walletId: "ieurhfs8945gh89ejhf95809wruwe90uj3r09",
    },
    {
      id: 7,
      walletTitle: "BBC Wallet",
      walletImg: walletimg,
      walletId: "ieurhfs8945gh89ejhf95809wruwe90uj3r09",
    },
    {
      id: 8,
      walletTitle: "OOO Wallet",
      walletImg: walletimg,
      walletId: "ieurhfs8945gh89ejhf95809wruwe90uj3r09",
    },
  ]);

  return (
    <Container>
      <Grid container>
        {walletCard.map((item) => (
          <Grid item xs={12} sm={6} key={item.id}>
            <DonateCard data={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Donation;
