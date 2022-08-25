import { Grid } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import DoubleTextComponent from "../components/DoubleText";
import Footer from "../components/footer/Footer";
import Header from "../components/header";
import Caraousel from "../components/header/caraousel";
import ProductLayout from "../components/ProductLayout";

const Layout = (props) => {
  return (
    <>
      <Header />
      {/* <Caraousel /> */}
      <DoubleTextComponent backText="What We Design" frontText="New Arrivals" />
      <Grid container spacing={3} style={{ padding: "0px 7.5vw 0px 7.5vw" }}>
        <Grid item xs={6} lg={3}>
          <ProductLayout liked={true} new={true} title="Blue kurti with embroided neck" mrp="523" />
        </Grid>
        <Grid item xs={6} lg={3}>
          <ProductLayout liked={true} title="Blue kurti with embroided neck" mrp="523" />
        </Grid>
        <Grid item xs={6} lg={3}>
          <ProductLayout new={true} title="Blue kurti with embroided neck" mrp="523" />
        </Grid>
        <Grid item xs={6} lg={3}>
          <ProductLayout title="Blue kurti with embroided neck" mrp="523" />
        </Grid>
      </Grid>
      <DoubleTextComponent backText="What We Have" frontText="Categories" />
      <Footer />
    </>
  );
};

export default connect(null, {})(Layout);
