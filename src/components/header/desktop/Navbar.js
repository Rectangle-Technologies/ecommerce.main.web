import React, { useEffect, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Typography } from "@mui/material";
import "./navbar.css";
import { Link } from "react-router-dom";
import { get } from "../../../utils/apiHelper";
import { connect } from "react-redux";

const NavbarDesktop = (props) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        get("http://localhost:5000/products/category/getall", props?.auth?.token)
            .then((res) => {
                setCategories(res.data.categories)
            })
            .catch((err) => { })
    }, []);

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
                        <Typography className="navbar_item navbar_item_selected" style={{ fontSize: 18 }}>New-in</Typography>
                    </Link>
                    {categories.map((category, index) => {
                        return (<>
                            <Link to={`/category/${category._id}`} style={{ textDecoration: "none" }}>
                                <Typography className="navbar_item" style={{ fontSize: 18 }} >{category.title}</Typography>
                            </Link>
                        </>)
                    })}
                </div>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }} >
                    <Link to="/diaries" style={{ textDecoration: "none" }}>
                        <Typography className="navbar_item" style={{ fontSize: 18 }} >Client Diaries</Typography>
                    </Link>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <Typography className="navbar_item" style={{ fontSize: 18 }} >My Account</Typography>
                    </Link>
                    <Link to="/about" style={{ textDecoration: "none" }}>
                        <Typography className="navbar_item" style={{ fontSize: 18 }} >About us</Typography>
                    </Link>
                    <Link to="/contact" style={{ textDecoration: "none" }}>
                        <Typography className="navbar_item" style={{ fontSize: 18 }} >Contact us</Typography>
                    </Link>
                </div>
            </div>
            {/* important icons */}
            <div style={{ padding: "10px" }}>
                <Link to="/about" style={{ textDecoration: "none", cursor: "pointer", color: "black" }}>
                    <SearchIcon style={{ padding: "0px 7.5px 0px 7.5px", fontSize: 40 }} />
                </Link>
                <Link to="/about" style={{ textDecoration: "none", cursor: "pointer", color: "black" }}>
                    <FavoriteBorderIcon style={{ padding: "0px 7.5px 0px 7.5px", fontSize: 40 }} />
                </Link>
                <Link to="/cart" style={{ textDecoration: "none", cursor: "pointer", color: "black" }}>
                    <ShoppingCartOutlinedIcon style={{ padding: "0px 7.5px 0px 7.5px", fontSize: 40 }} />
                </Link>
                <Link to="/about" style={{ textDecoration: "none", cursor: "pointer", color: "black" }}>
                    <PersonOutlineOutlinedIcon style={{ padding: "0px 7.5px 0px 7.5px", fontSize: 40 }} />
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, {})(NavbarDesktop);