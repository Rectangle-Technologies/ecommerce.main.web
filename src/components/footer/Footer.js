import { Box, Container, Grid } from "@mui/material";
import React from "react";
import Footer1 from "./Footer1";
import Footer2 from "./Footer2";
import Footer3 from "./Footer3";
import Footer4 from "./Footer4";

const Footer = () => {
  return (
    <Box style={{ backgroundColor: "#e5e5e5" }}>
      <Container maxWidth="lg" sx={{ p: 4, ml: 5, mr: 5 }}>
        <Grid container>
          <center>
            <Grid item xs={12} md={3} my={1}>
              Icon
            </Grid>
          </center>
        </Grid>
        <Grid container>
          <Footer1 />
          <Footer2 />
          <Footer4 />
        </Grid>
        <Grid container>
          <Grid item xs={12} md={3} my={1}>
            <center>
              <img
                src="https://s3-alpha-sig.figma.com/img/9a46/9500/6f3948ba62843600ab4a655706064764?Expires=1662336000&Signature=M43px8ZLqOyIA~SusqE6D5lMUe6L0bb5MfrzLi0VMb4Jl0Bclme~DE~Gzk3dXnDRCip~uTiX0a4CbPcThV5jvA7Ozsp78ys5Qinq6F2JS3CxPFXvdDkqxE32GxMVEI1JFopZ-BGYLpGiHRDTJp6nR-e3anowbc5D8K4HPRcyekSwpbmMdzspeFdCpl5P-cojiGl7UI4lzBLFZ-BKkA00Otnmjc2Y-6py4YBEp8ncKuAdCRi5WUfAFhhVEDsH2kmnVO80pKMWvxh9az72Wg5pslCt-x12FVrPVejaf-4oBCXy7bOV2GHmTe3f5oy32bAS2rLw4H8z6BD08dMnC24mRA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="Payment Icons"
                width="300px"
              />
            </center>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
