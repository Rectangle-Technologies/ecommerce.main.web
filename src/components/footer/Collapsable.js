import { Box, Collapse, Link, Typography } from "@mui/material";
import React, { useState } from "react";
import textStyle from "../../helpers/textStyle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import TypographyLink from "../TypographyLink";
import { useNavigate } from "react-router-dom";

const Collapsable = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()

  return (
    <Box my={2}>
      <Link
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: "pointer" }}
        underline="none"
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid #330C3E",
          }}
        >
          <Typography
            style={{
              ...textStyle,
              fontWeight: 600,
              fontSize: 18,
              color: "#330C3E",
            }}
            my={1}
          >
            {props.title}
          </Typography>
          {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </Box>
      </Link>
      <Collapse in={isOpen}>
        {props?.list?.map((item, key) => {
          return (
            <TypographyLink key={key} style={textStyle} my={1} onClick={() => navigate(`${item.url}`)}>
              {item.name}
            </TypographyLink>
          );
        })}
      </Collapse>
    </Box>
  );
};

export default Collapsable;
