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
      walletId: "1",
    },
    {
      id: 2,
      walletTitle: "ETH Wallet",
      walletImg: walletimg,
      walletId: "2",
    },
    {
      id: 3,
      walletTitle: "BNB Wallet",
      walletImg: walletimg,
      walletId: "3",
    },
    {
      id: 4,
      walletTitle: "DOGE Wallet",
      walletImg: walletimg,
      walletId: "4",
    },
    {
      id: 5,
      walletTitle: "UHW Wallet",
      walletImg: walletimg,
      walletId: "5",
    },
    {
      id: 6,
      walletTitle: "WWW Wallet",
      walletImg: walletimg,
      walletId: "6",
    },
    {
      id: 7,
      walletTitle: "BBC Wallet",
      walletImg: walletimg,
      walletId: "7",
    },
    {
      id: 8,
      walletTitle: "OOO Wallet",
      walletImg: walletimg,
      walletId: "8",
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
