import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Typography } from "@mui/material";
import "./navbar.css";
import { Link } from "react-router-dom";

const NavbarDesktop = (props) => {
    return (
        <div style={{
            borderBottom: "1px solid black",
            height: "80px",
            padding: "10px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            {/* logo section */}
            <img src="/logo.png" style={{ maxHeight: "100%", aspectRatio: 2.2}} />
            {/* important links */}
            <div style={{ display: "flex", flexDirection: "column" }} >
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }} >
                    <Link to="/" style={{ textDecoration: "none" }}>
                    <Typography className="navbar_item navbar_item_selected" style={{ fontSize: 18 }}>New-in</Typography>
                    </Link>
                    <Link to="/" style={{ textDecoration: "none" }}>
                    <Typography className="navbar_item" style={{ fontSize: 18 }} >Categories</Typography>
                    </Link>
                    <Link to="/" style={{ textDecoration: "none" }}>
                    <Typography className="navbar_item" style={{ fontSize: 18 }} >Flash Sale</Typography>
                    </Link>
                    <Link to="/" style={{ textDecoration: "none" }}>
                    <Typography className="navbar_item" style={{ fontSize: 18 }} >Client Diaries</Typography>
                    </Link>
                    <Link to="/" style={{ textDecoration: "none" }}>
                    <Typography className="navbar_item" style={{ fontSize: 18 }} >My Account</Typography>
                    </Link>
                </div>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }} >
                    <Link to="/about" style={{ textDecoration: "none" }}>
                    <Typography className="navbar_item" style={{ fontSize: 18 }} >About us</Typography>
                    </Link>
                    <Link to="/" style={{ textDecoration: "none" }}>
                    <Typography className="navbar_item" style={{ fontSize: 18 }} >Contact us</Typography>
                    </Link>
                </div>
            </div>
            {/* important icons */}
            <div style={{ padding: "10px" }}>
                <SearchIcon style={{ padding: "0px 7.5px 0px 7.5px", fontSize: 40 }} />
                <FavoriteBorderIcon style={{ padding: "0px 7.5px 0px 7.5px", fontSize: 40 }} />
                <ShoppingCartOutlinedIcon style={{ padding: "0px 7.5px 0px 7.5px", fontSize: 40 }} />
                <PersonOutlineOutlinedIcon style={{ padding: "0px 7.5px 0px 7.5px", fontSize: 40 }} />
            </div>
        </div>
    )
}

export default NavbarDesktop;