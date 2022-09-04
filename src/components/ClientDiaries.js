import { Grid, Paper, Rating, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { get } from "../utils/apiHelper";
import ClientDiariesForm from "./ClientDiariesForm";
import DoubleTextComponent from "./DoubleText";

const ClientDiariesComponent = (props) => {
    const [feedbacks, setFeedback] = useState([]);
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        get("http://localhost:5000/diaries/latest", props?.auth?.token)
        .then((response) => {
            setFeedback(response.data.diary);
        })
        .catch((err) => {
            enqueueSnackbar(err.message || err?.response?.data?.message, {
                autoHideDuration: 3000,
                variant: "error"
            })
        })
    }, [])

    return (
        <>
            <DoubleTextComponent frontText="Client Diaries" backText="What our Client says" />
            <Grid container spacing={3} style={{ padding: "0px 8vw", marginBottom: "4em" }}>
                {feedbacks.map((feedback, index) => {return (<Grid item xs={12} md={4} key={index}>
                    <img style={{ width: "100%", aspectRatio: 1.75, objectFit: "cover", objectPosition: "top" }} src={feedback.imageUrl} />
                    <Typography style={{ fontFamily: "EB Garamond", fontSize: "16px", fontWeight: "700" }}>“ {feedback.message} “</Typography>
                    <Rating value={4.75} precision={0.25} />
                    <Typography style={{ fontFamily: "Poppins", fontStyle: "italic", color: "#330C3E", fontSize: "16px", fontWeight: "700" }}>- {feedback.name}</Typography>
                </Grid>)})}
                <Grid item xs={12} md={4}>
                    <img style={{ width: "100%", aspectRatio: 1.75, objectFit: "cover", objectPosition: "top" }} src="/r2.jpeg" />
                    <Typography style={{ fontFamily: "EB Garamond", fontSize: "16px", fontWeight: "700" }}>“ With thousands of stunning pieces and pleased clientele over the years “</Typography>
                    <Rating value={4.75} precision={0.25} />
                    <Typography style={{ fontFamily: "Poppins", fontStyle: "italic", color: "#330C3E", fontSize: "16px", fontWeight: "700" }}>- Neha Agrawal</Typography>
                </Grid>
            </Grid>
            <ClientDiariesForm />
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, {})(ClientDiariesComponent);