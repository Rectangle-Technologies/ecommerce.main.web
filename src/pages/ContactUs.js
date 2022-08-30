import { Grid, Typography } from "@mui/material";
import React from "react";
import DoubleText from "./../components/DoubleText";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const ContactUs = (props) => {
    return (
        <>
            <DoubleText frontTextTopDistance="5.5vw" backTextFontSize="8vw" frontTextFontSize="3.2vw" frontText="CONTACT US" underline={false} frontTextFontFamily="Poppins" backText="Get in Touch" />
            <Grid container spacing={0} style={{ padding: "0px 10vw", justifyContent: "center", alignItems: "center" }}>
                <Grid item xs={12} md={4}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <LocationOnOutlinedIcon style={{ fontSize: "56px" }} />
                        <Typography style={{ fontSize: "20px", padding: "0px 20px", fontFamily: "Poppins", lineHeight: "30px", letterSpacing: "2%" }} >Monte Carlo Fashions Limited
                            B-XXIX-106, G.T. Road, Sherpur,
                            Ludhiana-141003 Punjab</Typography>
                    </div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <PhoneInTalkOutlinedIcon style={{ fontSize: "56px" }} />
                        <Typography style={{ fontSize: "20px", fontFamily: "Poppins", padding: "0px 20px", lineHeight: "30px", letterSpacing: "2%" }} >+91 98765 43210</Typography>
                    </div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <EmailOutlinedIcon style={{ fontSize: "56px" }} />
                        <Typography style={{ fontSize: "20px", fontFamily: "Poppins", lineHeight: "30px", padding: "0px 20px", letterSpacing: "2%" }} >bloomByKhushboo <Typography style={{ fontSize: "20px", fontFamily: "Poppins", lineHeight: "30px", letterSpacing: "2%" }} color={"black"}>&nbsp;@gmailcom</Typography></Typography>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default ContactUs;