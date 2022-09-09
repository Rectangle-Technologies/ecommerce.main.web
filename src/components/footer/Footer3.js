import { Grid } from "@mui/material";
import React from "react";
import Collapsable from "./Collapsable";

const Footer3 = (props) => {
  const list1 = [
    {
      name: "My Account",
      url: ''
    },
    {
      name: "Track Order",
      url: ''
    },
    {
      name: "My Wishlist",
      url: ''
    },
    {
      name: "View Cart",
      url: '/cart'
    },
    {
      name: "Client Diaries",
      url: ''
    },
    {
      name: "Contact Us",
      url: ''
    },
  ];
  const list2 = props?.categories?.map((category, idx) => {
    return {
      name: category.title,
      url: `/category/${category._id}`
    }
  });
  const list3 = [
    {
      name: "Privacy Policy",
      url: ''
    },
    {
      name: "Refund Policy",
      url: ''
    },
    {
      name: "Shipping Policy",
      url: ''
    },
    {
      name: "Terms Of Services",
      url: ''
    },
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
