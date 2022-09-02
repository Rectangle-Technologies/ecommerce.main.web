import { Grid, Paper, Rating, Typography } from "@mui/material";
import React from "react";
import ClientDiariesForm from "./ClientDiariesForm";
import DoubleTextComponent from "./DoubleText";

const ClientDiariesComponent = (props) => {
    return (
        <>
            <DoubleTextComponent frontText="Client Diaries" backText="What our Client says" />
            <Grid container spacing={3} style={{ padding: "0px 8vw", marginBottom: "4em" }}>
                <Grid item xs={12} md={4}>
                    <img style={{ width: "100%", aspectRatio: 1.75, objectFit: "cover", objectPosition: "top" }} src="/r1.jpeg" />
                    <Typography style={{ fontFamily: "EB Garamond", fontSize: "16px", fontWeight: "700" }}>“ With thousands of stunning pieces and pleased clientele over the years “</Typography>
                    <Rating value={4.75} precision={0.25} />
                    <Typography style={{ fontFamily: "Poppins", fontStyle: "italic", color: "#330C3E", fontSize: "16px", fontWeight: "700" }}>- Neha Agrawal</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <img style={{ width: "100%", aspectRatio: 1.75, objectFit: "cover", objectPosition: "top" }} src="/r2.jpeg" />
                    <Typography style={{ fontFamily: "EB Garamond", fontSize: "16px", fontWeight: "700" }}>“ With thousands of stunning pieces and pleased clientele over the years “</Typography>
                    <Rating value={4.75} precision={0.25} />
                    <Typography style={{ fontFamily: "Poppins", fontStyle: "italic", color: "#330C3E", fontSize: "16px", fontWeight: "700" }}>- Neha Agrawal</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <img style={{ width: "100%", aspectRatio: 1.75, objectFit: "cover", objectPosition: "top" }} src="/r3.jpeg" />
                    <Typography style={{ fontFamily: "EB Garamond", fontSize: "16px", fontWeight: "700" }}>“ With thousands of stunning pieces and pleased clientele over the years “</Typography>
                    <Rating value={4.75} precision={0.25} />
                    <Typography style={{ fontFamily: "Poppins", fontStyle: "italic", color: "#330C3E", fontSize: "16px", fontWeight: "700" }}>- Neha Agrawal</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <img style={{ width: "100%", aspectRatio: 1.75, objectFit: "cover", objectPosition: "top" }} src="/r1.jpeg" />
                    <Typography style={{ fontFamily: "EB Garamond", fontSize: "16px", fontWeight: "700" }}>“ With thousands of stunning pieces and pleased clientele over the years “</Typography>
                    <Rating value={4.75} precision={0.25} />
                    <Typography style={{ fontFamily: "Poppins", fontStyle: "italic", color: "#330C3E", fontSize: "16px", fontWeight: "700" }}>- Neha Agrawal</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <img style={{ width: "100%", aspectRatio: 1.75, objectFit: "cover", objectPosition: "top" }} src="/r2.jpeg" />
                    <Typography style={{ fontFamily: "EB Garamond", fontSize: "16px", fontWeight: "700" }}>“ With thousands of stunning pieces and pleased clientele over the years “</Typography>
                    <Rating value={4.75} precision={0.25} />
                    <Typography style={{ fontFamily: "Poppins", fontStyle: "italic", color: "#330C3E", fontSize: "16px", fontWeight: "700" }}>- Neha Agrawal</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <img style={{ width: "100%", aspectRatio: 1.75, objectFit: "cover", objectPosition: "top" }} src="/r3.jpeg" />
                    <Typography style={{ fontFamily: "EB Garamond", fontSize: "16px", fontWeight: "700" }}>“ With thousands of stunning pieces and pleased clientele over the years “</Typography>
                    <Rating value={4.75} precision={0.25} />
                    <Typography style={{ fontFamily: "Poppins", fontStyle: "italic", color: "#330C3E", fontSize: "16px", fontWeight: "700" }}>- Neha Agrawal</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <img style={{ width: "100%", aspectRatio: 1.75, objectFit: "cover", objectPosition: "top" }} src="/r1.jpeg" />
                    <Typography style={{ fontFamily: "EB Garamond", fontSize: "16px", fontWeight: "700" }}>“ With thousands of stunning pieces and pleased clientele over the years “</Typography>
                    <Rating value={4.75} precision={0.25} />
                    <Typography style={{ fontFamily: "Poppins", fontStyle: "italic", color: "#330C3E", fontSize: "16px", fontWeight: "700" }}>- Neha Agrawal</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <img style={{ width: "100%", aspectRatio: 1.75, objectFit: "cover", objectPosition: "top" }} src="/r2.jpeg" />
                    <Typography style={{ fontFamily: "EB Garamond", fontSize: "16px", fontWeight: "700" }}>“ With thousands of stunning pieces and pleased clientele over the years “</Typography>
                    <Rating value={4.75} precision={0.25} />
                    <Typography style={{ fontFamily: "Poppins", fontStyle: "italic", color: "#330C3E", fontSize: "16px", fontWeight: "700" }}>- Neha Agrawal</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <img style={{ width: "100%", aspectRatio: 1.75, objectFit: "cover", objectPosition: "top" }} src="/r3.jpeg" />
                    <Typography style={{ fontFamily: "EB Garamond", fontSize: "16px", fontWeight: "700" }}>“ With thousands of stunning pieces and pleased clientele over the years “</Typography>
                    <Rating value={4.75} precision={0.25} />
                    <Typography style={{ fontFamily: "Poppins", fontStyle: "italic", color: "#330C3E", fontSize: "16px", fontWeight: "700" }}>- Neha Agrawal</Typography>
                </Grid>
            </Grid>
            <ClientDiariesForm />
        </>
    )
}

export default ClientDiariesComponent;