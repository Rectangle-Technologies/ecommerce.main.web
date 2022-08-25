import { Avatar, Button, Fab, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/AddCircleTwoTone";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React from "react";

const ProductLayout = (props) => {
    const newButton = props.new ? { backgroundColor: "white", color: "#EB31E2" } : {};

    return (
        <>
            <div style={{ position: "relative" }}>
                <img style={{ aspectRatio: 0.65, width: "100%", objectFit: "cover", borderRadius: "5px" }} src="/BANNER1.jpeg" />
                {props.new && <div style={{ color: "white", width: "60px", height: "30px", position: "absolute", left: '10px', border: "1px solid white", borderRadius: "4px", top: "15px", display: "flex", "justifyContent": "center", alignItems: "center", ...newButton }}>
                    <center>
                        <Typography style={{ fontFamily: "Poppins", fontSize: "16px" }}>New</Typography>
                    </center>
                </div>}
                <div style={{ width: "60px", height: "30px", position: "absolute", right: '10px', borderRadius: "4px", top: "15px", display: "flex", "justifyContent": "center", alignItems: "center" }}>
                    <center>
                        <Fab
                            size="small"
                            style={{ zindex: 1 }}
                            onClick={(e) => {
                            }}
                        >
                            {/* SELECT ONE OF THE BELOW ACCORDING TO REQUIREMENT */}
                            {props.liked ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon color="error" />}
                        </Fab>
                    </center>
                </div>
                <div style={{ marginTop: "10px" }}>
                    <u>
                        <Typography style={{ fontSize: 14 }}>
                            {props.title}
                        </Typography>
                    </u>
                    <Typography style={{ fontSize: 14, fontWeight: "bold" }}>
                        Rs. {props.mrp}
                    </Typography>
                </div>
            </div>
        </>
    );
}

export default ProductLayout;