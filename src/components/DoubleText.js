import { Typography } from "@mui/material";
import React from "react";

const DoubleTextComponent = (props) => {
    const { backText, frontText } = props;
    return (
        <>
            <div style={{ position: "relative", width: "100vw", height: "12vw", marginTop: "4.5vw", marginBottom: "3.2vw" }}>
                <div style={{ position: "absolute", left: "50%" }}>
                    <Typography style={{ position: "relative", left: "-50%", fontFamily: "Cookie", fontSize: "7vw", color: "#928C8C4D" }}>{backText}</Typography>
                </div>
                <div style={{ position: "absolute", left: "50%" }}>
                    <Typography style={{ borderBottom: "4px solid black", position: "relative", left: "-50%", top: "4vw", fontFamily: "Playfair Display", fontSize: "3.5vw", color: "#222" }}>{frontText}</Typography>
                </div>
            </div>
        </>
    )
}

export default DoubleTextComponent;