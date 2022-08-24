import {
  Box,
  Grid,
  Typography,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import React from "react";
import textStyle from "../../helpers/textStyle";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { styled } from "@mui/material/styles";

const Footer4 = () => {
  const CustomButton = styled(Button)({
    textTransform: "none",
    backgroundColor: "#eb31e2",
    "&:hover": {
      backgroundColor: "#fc03cf",
    },
  });

  return (
    <Grid item xs={12} md={2.5} my={1}>
      <Typography
        style={{
          ...textStyle,
          fontWeight: 600,
          fontSize: 18,
          textDecoration: "underline",
          color: "#330C3E",
        }}
        my={1}
      >
        Follow us on:
      </Typography>
      <Box style={{ display: "flex", flexDirection: "row" }}>
        <IconButton color="primary">
          <FacebookIcon
            onClick={() => (window.location.href = "https://www.facebook.com/")}
          />
        </IconButton>
        <IconButton color="secondary">
          <InstagramIcon
            onClick={() => (window.location.href = "https://www.facebook.com/")}
          />
        </IconButton>
        <IconButton color="error">
          <YouTubeIcon
            onClick={() => (window.location.href = "https://www.facebook.com/")}
          />
        </IconButton>
      </Box>
      <Typography
        style={{
          ...textStyle,
          fontWeight: 600,
          fontSize: 18,
          textDecoration: "underline",
          color: "#330C3E",
        }}
        my={1}
      >
        Stay Connected:
      </Typography>
      <Typography style={textStyle} my={1}>
        Be the first to know about promotions and what's new at Bloom By
        Khushboo.
      </Typography>
      <TextField
        id="email"
        label="Email"
        placeholder="Enter your email"
        size="small"
        sx={{ my: 1 }}
      />
      <CustomButton variant="contained" sx={{ m: 1 }}>
        Subscribe
      </CustomButton>
    </Grid>
  );
};

export default Footer4;
