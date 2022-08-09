import React, { useState } from "react";
import DonateCard from "./DonateCard";
// img
import walletimg from "../../assets/img/TRX.webp";

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
    <>
      {walletCard.map((item) => (
        <DonateCard key={item.id} data={item} />
      ))}
    </>
  );
};

export default Donation;
