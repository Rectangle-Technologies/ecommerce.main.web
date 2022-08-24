import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Typography } from "@mui/material";
import "./navbar.css";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const NavbarMobile = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div style={{
            borderBottom: "1px solid black",
            height: "60px",
            padding: "10px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            {/* logo section */}
            <img src="/logo.png" style={{ maxHeight: "100%", aspectRatio: 2.2 }} />

            {/* toggle menu */}
            <MenuIcon onClick={() => { setIsOpen(!isOpen) }} style={{ border: "1px solid black", padding: "5px", borderRadius: "5px", marginRight: "15px" }} />

            {/* important links */}
            {isOpen &&
                <>
                    <Typography onClick={() => { setIsOpen(false) }} style={{ fontSize: 24 }}><CloseIcon style={{ zIndex: 1, border: "1px solid black", padding: "5px", borderRadius: "5px", marginRight: "15px", position: "absolute", backgroundColor: "white", top: 15, right: 5 }} fontSize="large" /></Typography>
                    <div style={{ transition: "ease-in-out 1s", transitionDelay: "1s", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "white", position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh" }} >
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <Typography className="navbar_item navbar_item_selected" style={{ fontSize: 24 }}>New-in</Typography>
                        </Link>
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <Typography className="navbar_item" style={{ fontSize: 24 }} >Categories</Typography>
                        </Link>
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <Typography className="navbar_item" style={{ fontSize: 24 }} >Flash Sale</Typography>
                        </Link>
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <Typography className="navbar_item" style={{ fontSize: 24 }} >Client Diaries</Typography>
                        </Link>
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <Typography className="navbar_item" style={{ fontSize: 24 }} >My Account</Typography>
                        </Link>
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <Typography className="navbar_item" style={{ fontSize: 24 }} >Customize online</Typography>
                        </Link>
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <Typography className="navbar_item" style={{ fontSize: 24 }} >Contact us</Typography>
                        </Link>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <SearchIcon style={{ padding: "0px 7.5px 0px 7.5px", fontSize: 30 }} />
                            <Typography className="navbar_item" style={{ fontSize: 24 }} >
                                Search
                            </Typography>
                        </div>

                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <FavoriteBorderIcon style={{ padding: "0px 7.5px 0px 7.5px", fontSize: 30 }} />
                            <Typography className="navbar_item" style={{ fontSize: 24 }} >
                                Wishlist
                            </Typography>
                        </div>

                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <ShoppingCartOutlinedIcon style={{ padding: "0px 7.5px 0px 7.5px", fontSize: 30 }} />
                            <Typography className="navbar_item" style={{ fontSize: 24 }} >
                                Cart
                            </Typography>
                        </div>

                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <PersonOutlineOutlinedIcon style={{ padding: "0px 7.5px 0px 7.5px", fontSize: 30 }} />
                            <Typography className="navbar_item" style={{ fontSize: 24 }} >
                                Profile
                            </Typography>
                        </div>
                    </div></>}
        </div>
    )
}

export default NavbarMobile;