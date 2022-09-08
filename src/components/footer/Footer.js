import { Box, Container, Grid } from "@mui/material";
import Desktop from '../responsive/Desktop'
import Tablet from '../responsive/Desktop'
import Mobile from '../responsive/Desktop'
import React from "react";
import Footer1 from "./Footer1";
import Footer2 from "./Footer2";
import Footer3 from "./Footer3";
import Footer4 from "./Footer4";
import { BrowserView, MobileOnlyView, TabletView } from "react-device-detect";

const Footer = (props) => {
  return (
    <Box style={{ backgroundColor: "#e5e5e5" }} width="100%">
      <Container maxWidth="lg" sx={{ p: 4 }}>
        <Grid container>
          <center>
            <Grid item xs={12} md={3} my={1}>
              <img
                src="/logo.png"
                style={{ maxHeight: "80px", aspectRatio: 2.2 }}
              />
            </Grid>
          </center>
        </Grid>
        <BrowserView>
          <Grid container>
            <Footer1 />
            <Footer2 categories={props?.categories} />
            <Footer4 />
          </Grid>
        </BrowserView>
        <TabletView>
          <Grid container>
            <Footer1 />
            <Footer2 categories={props?.categories} />
            <Footer4 />
          </Grid>
        </TabletView>
        <MobileOnlyView>
          <Grid container>
            <Footer1 />
            <Footer3 categories={props?.categories} />
            <Footer4 />
          </Grid>
        </MobileOnlyView>
        <Grid container>
          <Grid item xs={12} md={3} my={1}>
            <center>
              <img
                src="https://s3-alpha-sig.figma.com/img/4c90/fc60/1aadc30cf43dacd92441bee2551cf456?Expires=1662940800&Signature=Ihm~3sNiVz0EKbw9wZODg6nlVg-oNyo4DwuQsfAEAOeCBNHAQmbExnGt37lj-Fikr9brXP1bzHixX~Fxs-PyFcGZRU3aLDhSOoMGa-DQKCUl~GgKEohxyUpVJUC6a5ja1C4rrtm43BwvkEQ5N-DZ2iPShOBwaD3WYr4hEYIXRjN-wsvgumBNHhk4zIiag~92Acr6ExbRIrnW7jFGAfjmcQouYLjIQbBJF8AgYHTf4N07p1RL46noCXlZkRpOwfz-e~aUqcG6oa5PZvVjf683XGKDOEy3BRIHzyI8bJyS9f5a1z1F6r9klg5yOhj6jqwVXD5HZ8cmITfH6jMKLbLpoQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="Payment Icons"
                maxWidth="300px"
                width="100%"
              />
            </center>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
