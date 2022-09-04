import { Grid, Link } from "@mui/material";
import React from "react";
import { isMobile } from "react-device-detect";
import { connect } from "react-redux";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header";
import screen from "../utils/screen";

const Layout = (props) => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <div style={{ position: "fixed", right: 0, top: "50%", width: isMobile ? "10vw" : "4vw", transform: "translate(0%, -50%)" }} >
        <div style={{ position: "relative", top: "-50%" }}>
          <Grid container>
            <Grid item xs={12}>
              <Link href="https://www.facebook.com" rel="noopener" target="_blank">
                <img src="/fb.png" style={{ width: "100%" }} />
              </Link>
            </Grid>

            <Grid item xs={12}>
              <Link href="https://www.whatsapp.com" rel="noopener" target="_blank">
                <img src="/wa.png" style={{ width: "100%" }} />
              </Link>
            </Grid>

            <Grid item xs={12}>
              <Link href="https://www.twitter.com" rel="noopener" target="_blank">
                <img src="/tw.png" style={{ width: "100%" }} />
              </Link>
            </Grid>

            <Grid item xs={12}>
              <Link href="https://www.pinterest.com" rel="noopener" target="_blank">
                <img src="/pn.png" style={{ width: "100%" }} />
              </Link>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default connect(null, {})(Layout);
