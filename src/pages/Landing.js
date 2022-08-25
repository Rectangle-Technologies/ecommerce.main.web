import { Grid } from "@mui/material";
import React from "react";
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
    </>
  );
};

export default Landing;
