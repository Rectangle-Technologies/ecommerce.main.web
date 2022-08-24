import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const TypographyLink = (props) => {
  return (
    <Link to="#" style={{ textDecoration: "none", color: "black" }}>
      <Typography style={props.style} my={props.my}>
        {props.children}
      </Typography>
    </Link>
  );
};

export default TypographyLink;
