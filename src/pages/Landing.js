import { Grid } from "@mui/material";
import React from "react";
import CategoriesLayout from "../components/CategoriesLayout";
import DoubleTextComponent from "../components/DoubleText";
import Caraousel from "../components/header/caraousel";
import ProductLayout from "../components/ProductLayout";

const Landing = () => {
  return (
    <>
      {/* <Caraousel /> */}
      <DoubleTextComponent backText="What We Design" frontText="New Arrivals" />
      <Grid container spacing={3} style={{ padding: "0px 7.5vw 0px 7.5vw" }}>
        <Grid item xs={6} lg={3}>
          <ProductLayout
            liked={true}
            new={true}
            title="Blue kurti with embroided neck"
            mrp="523"
          />
        </Grid>
        <Grid item xs={6} lg={3}>
          <ProductLayout
            liked={true}
            title="Blue kurti with embroided neck"
            mrp="523"
          />
        </Grid>
        <Grid item xs={6} lg={3}>
          <ProductLayout
            new={true}
            title="Blue kurti with embroided neck"
            mrp="523"
          />
        </Grid>
        <Grid item xs={6} lg={3}>
          <ProductLayout title="Blue kurti with embroided neck" mrp="523" />
        </Grid>
      </Grid>
      <DoubleTextComponent backText="What We Have" frontText="Categories" />
      <Grid container spacing={3} style={{ padding: "0px 7.5vw 0px 7.5vw", marginBottom: "50px" }}>
        <Grid item xs={6} lg={3}>
          <CategoriesLayout image="/1.jpeg" title="Saree" />
        </Grid>
        <Grid item xs={6} lg={3}>
          <CategoriesLayout image="2.jpeg" title="Kurtis" />
        </Grid>
        <Grid item xs={6} lg={3}>
          <CategoriesLayout image="3.jpeg" title="Full Sets" />
        </Grid>
        <Grid item xs={6} lg={3}>
          <CategoriesLayout image="4.png" title="Jewellery" />
        </Grid>
      </Grid>
    </>
  );
};

export default Landing;
