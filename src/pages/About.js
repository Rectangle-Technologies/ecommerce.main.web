import { Grid, Typography } from "@mui/material";
import React from "react";
import DoubleTextComponent from "../components/DoubleText";
import "./about.css";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import InventoryIcon from '@mui/icons-material/Inventory';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import { BrowserView, MobileView } from "react-device-detect";

const AboutPage = () => {
    return (
        <>
            {/* ABOUT PAGE BANNER */}
            <BrowserView>
            <div style={{ position: "relative" }} className="about_page_banner_img">
                <div style={{ width: "100%", height: "100%", backgroundColor: "rgb(0,0,0,0.35)" }} ></div>
                <div style={{ position: "absolute", left: "50%", bottom: "0" }}>
                    <Typography style={{ position: "relative", left: "-50%", color: "white", fontFamily: "Poppins", fontWeight: "600", fontSize: "5vw" }} >#Khusboo_By_Bloom</Typography>
                </div>
            </div>
            </BrowserView>

            <MobileView>
            <div style={{ position: "relative", width: "100%" }} className="about_page_banner_img">
                <div style={{ width: "100%", height: "100%", backgroundColor: "rgb(0,0,0,0.35)" }} ></div>
                <div style={{ position: "absolute", left: "50%", bottom: "0" }}>
                    <Typography style={{ position: "relative", left: "-50%", color: "white", fontFamily: "Poppins", fontWeight: "600", fontSize: "5vw" }} >#Khusboo_By_Bloom</Typography>
                </div>
            </div>
            </MobileView>

            <Grid container spacing={5} style={{ padding: "8vw 8vw 0 8vw", marginBottom: "100px" }}>
                <Grid item xs={12} md={5}>
                    <center>
                        <img src="/about.png" style={{ maxWidth: "100%" }} />
                    </center>
                </Grid>
                <Grid item xs={12} md={7} style={{ marginBottom: "50px" }}>
                    <i>
                        <Typography style={{ color: "#330C3E", fontSize: "36px", fontWeight: "600", lineHeight: "36px" }}>Founded By</Typography>
                    </i>
                    <hr style={{ width: "50px", borderBottom: "5px solid #330C3E", margin: "0px" }} />
                    <hr style={{ width: "25px", borderBottom: "5px solid #330C3E", margin: "5px 0px" }} />
                    <Typography style={{ fontFamily: "Poppins", marginTop: "25px", fontSize: "16px" }} >Bloom Boutique is one of the most loved ethnic brand in India. It is a name that is recognized worldwide today, but the scenario was different 13 years back. Started in Bellary, Karnataka in a small room, Roshni Tulsian (CEO) had a dream, a passion to be self-dependent, self-sufficient, to follow her passion and to live her life on her own terms. A journey that had started in a room was now making space in the metro city. She just loved serving her customers. She loved it when ladies flaunted trying new dresses, and accepted the way they looked. Soon she was designing for models and fashion shows.</Typography>
                    <Typography style={{ fontFamily: "Roboto", marginTop: "25px", fontSize: "20px", lineHeight: "24px" }}>“The boutique stocks not only an exciting range of women's wear but also accessories, jewellery and bags.”</Typography>
                    <div style={{ display: "flex", alignItems: "center", marginTop: "25px" }}>
                        <div style={{ borderBottom: "5px solid #330C3E", width: "15px", marginRight: "10px" }} ></div>
                        <Typography style={{ fontFamily: "Kaushan Script", fontSize: "25px", lineHeight: "27px" }}>Khushboo Ma'am</Typography>
                    </div>
                </Grid>
                <DoubleTextComponent frontText="BLOOM BY KHUSHBOO" backText="Know About Us" frontTextFontFamily="Poppins" backTextFontSize="8vw" frontTextFontSize="2.6vw" frontTextTopDistance="6vw" underline={false} frontFontWeight="700" left="-35%" />
            </Grid>

            <div style={{ position: "relative" }} className="about_page_feature_img">
                <div style={{ width: "100%", height: "100%", backgroundColor: "rgb(0,0,0,0.5)", position: "absolute" }} ></div>
                <div style={{ width: "100%", position: "relative", padding: "0px 10vw 0px 10vw" }}>
                    <Grid container spacing={3}>
                        <Grid item xs={6} md={3} pb={2}>
                            <center>
                            <LocalShippingIcon style={{ color: "#F8F5CC", fontSize: "55px" }} />
                            <Typography color="#F8F5CC" style={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "22px" }} >Worldwide Delivery</Typography>
                            <Typography color="#F8F5CC">On-Time Delivery with Nominal Charges</Typography>
                            </center>
                        </Grid>
                        <Grid item xs={6} md={3} pb={2}>
                            <center>
                            <SupportAgentIcon style={{ color: "#F8F5CC", fontSize: "55px" }} />
                            <Typography color="#F8F5CC" style={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "22px" }} >Worldwide Delivery</Typography>
                            <Typography color="#F8F5CC">On-Time Delivery with Nominal Charges</Typography>
                            </center>
                        </Grid>
                        <Grid item md={3} xs={6} pb={2}>
                            <center>
                            <InventoryIcon style={{ color: "#F8F5CC", fontSize: "55px" }} />
                            <Typography color="#F8F5CC" style={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "22px" }} >Worldwide Delivery</Typography>
                            <Typography color="#F8F5CC">On-Time Delivery with Nominal Charges</Typography>
                            </center>
                        </Grid>
                        <Grid item md={3} xs={6} pb={2}>
                            <center>
                            <DesignServicesIcon style={{ color: "#F8F5CC", fontSize: "55px" }} />
                            <Typography color="#F8F5CC" style={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "22px" }} >Worldwide Delivery</Typography>
                            <Typography color="#F8F5CC">On-Time Delivery with Nominal Charges</Typography>
                            </center>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    )
}

export default AboutPage;