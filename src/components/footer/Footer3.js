import { Box, Grid } from "@mui/material";
import React from "react";
import Collapsable from "./Collapsable";

const Footer3 = () => {
  const list1 = [
    "My Account",
    "Track Order",
    "My Wishlist",
    "View Cart",
    "Client Diaries",
    "Contact Us",
  ];
  const list2 = [
    "Full Sets",
    "Kurtis",
    "Jewellery",
    "Dress Material",
    "Sarees",
  ];
  const list3 = [
    "Privacy Policy",
    "Refund Policy",
    "Shipping Policy",
    "Terms Of Services",
  ];
  return (
    <Grid item xs={12} md={5}>
      <Collapsable title="Quick Links" list={list1} />
      <Collapsable title="Categories" list={list2} />
      <Collapsable title="Policies" list={list3} />
    </Grid>
  );
};

export default Footer3;
