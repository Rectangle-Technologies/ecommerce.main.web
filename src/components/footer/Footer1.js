import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import textStyle from "../../helpers/textStyle";

const Footer1 = () => {
  const desc1 =
    "Bloom is India's most-loved online fashion store featuring new products every day!";
  const desc2 =
    "Established In Year 20XX And Catering More Than 5 Lac Customers In Year.";
  const contact = "+91 - 9857684857";
  const email = "bloomboutique@gmail.com";
  const address =
    "35 Anusuya enclave, Jagtap Chowk, Wanowrei, Pune, Maharashtra";
  return (
    <Grid item xs={12} md={3.5} my={1} px={2} mr={2}>
      <Typography style={textStyle} my={1}>
        {desc1}
      </Typography>
      <Typography style={textStyle} my={1}>
        {desc2}
      </Typography>
      <Typography style={{ ...textStyle, fontFamily: "Roboto" }} mt={3} mb={1}>
        <Box fontWeight="600" display="inline" color="#330C3E">
          Call us at:{" "}
        </Box>{" "}
        {contact}
      </Typography>
      <Typography style={{ ...textStyle, fontFamily: "Roboto" }} my={1}>
        <Box fontWeight="600" display="inline" color="#330C3E">
          Email:{" "}
        </Box>{" "}
        {email}
      </Typography>
      <Typography style={{ ...textStyle, fontFamily: "Roboto" }} my={1}>
        <Box fontWeight="600" display="inline" color="#330C3E">
          Address:{" "}
        </Box>{" "}
        {address}
      </Typography>
    </Grid>
  );
};

export default Footer1;
