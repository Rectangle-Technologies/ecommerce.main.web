import React, { useEffect, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Button, Grid, Menu, MenuItem, TextField, Typography } from "@mui/material";
import "./navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../../redux/services/actions/authActions";
import { styled } from "@mui/material/styles";

const NavbarDesktop = (props) => {
    const [anchorElProfile, setAnchorElProfile] = useState(null);
    const openProfile = Boolean(anchorElProfile);
    const navigate = useNavigate()
    const location = useLocation()
    const url = location.pathname

    const handleProfileClick = (event) => {
        setAnchorElProfile(event.currentTarget);
    };
    const handleProfileClose = () => {
        setAnchorElProfile(null);
    };

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
            <img src="/logo.png" style={{ maxHeight: "100%", aspectRatio: 2.2 }} />
            {/* important links */}
            <div style={{ display: "flex", flexDirection: "column" }} >
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }} >
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <Typography className={url === '/' ? "navbar_item navbar_item_selected" : 'navbar_item'} style={{ fontSize: 18 }}>New-in</Typography>
                    </Link>
                    {props?.categories?.map((category, index) => {
                        return (
                            <Link to={`/category/${category._id}`} style={{ textDecoration: "none" }}>
                                <Typography className={url === `/category/${category._id}` ? "navbar_item navbar_item_selected" : 'navbar_item'} style={{ fontSize: 18 }} >{category.title}</Typography>
                            </Link>
                        )
                    })}
                </div>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: '6px' }} >
                    <Link to="/diaries" style={{ textDecoration: "none" }}>
                        <Typography className={url === '/diaries' ? "navbar_item navbar_item_selected" : 'navbar_item'} style={{ fontSize: 18 }} >Client Diaries</Typography>
                    </Link>
                    <Link to="/about" style={{ textDecoration: "none" }}>
                        <Typography className={url === '/about' ? "navbar_item navbar_item_selected" : 'navbar_item'} style={{ fontSize: 18 }} >About us</Typography>
                    </Link>
                    <Link to="/contact" style={{ textDecoration: "none" }}>
                        <Typography className={url === '/contact' ? "navbar_item navbar_item_selected" : 'navbar_item'} style={{ fontSize: 18 }} >Contact us</Typography>
                    </Link>
                </div>
            </div>
            {/* important icons */}
            <div style={{ padding: "10px" }}>
                <Link to="/search" style={{ textDecoration: "none", cursor: "pointer", color: "black" }}>
                    <SearchIcon style={{ padding: "0px 7.5px 0px 7.5px", fontSize: 40 }} />
                </Link>
                <Link to="/wishlist" style={{ textDecoration: "none", cursor: "pointer", color: "black" }}>
                    <FavoriteBorderIcon style={{ padding: "0px 7.5px 0px 7.5px", fontSize: 40 }} />
                </Link>
                <Link to="/cart" style={{ textDecoration: "none", cursor: "pointer", color: "black" }}>
                    <ShoppingCartOutlinedIcon style={{ padding: "0px 7.5px 0px 7.5px", fontSize: 40 }} />
                </Link>
                <Link to="#" style={{ textDecoration: "none", cursor: "pointer", color: "black" }} onClick={handleProfileClick}>
                    <PersonOutlineOutlinedIcon style={{ padding: "0px 7.5px 0px 7.5px", fontSize: 40 }} />
                </Link>
                {props?.auth?.isAuthenticated
                    ?
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorElProfile}
                        open={openProfile}
                        onClose={handleProfileClose}
                    >
                        <MenuItem onClick={() => {
                            handleProfileClose()
                            navigate(`/editdetails`)
                        }}>
                            Profile
                        </MenuItem>
                        <MenuItem onClick={() => {
                            handleProfileClose()
                            navigate(`/orders`)
                        }}>
                            Orders
                        </MenuItem>
                        <MenuItem onClick={() => {
                            props.logout()
                            navigate(`/login`)
                        }}>
                            Logout
                        </MenuItem>
                    </Menu>
                    :
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorElProfile}
                        open={openProfile}
                        onClose={handleProfileClose}
                    >
                        <MenuItem onClick={() => {
                            handleProfileClose()
                            navigate(`/login`)
                        }}>
                            Login
                        </MenuItem>
                    </Menu>
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { logout })(NavbarDesktop);