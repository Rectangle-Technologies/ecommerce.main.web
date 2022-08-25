import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import textStyle from "../helpers/textStyle";
import FavoriteIcon from "@mui/icons-material/Favorite";

const ProductDetail = () => {
  return (
    <Container maxWidth="lg">
      <Grid container m={5} spacing={1}>
        <Grid item xs={12} md={5}>
          <img
            src="https://i.pinimg.com/736x/33/66/50/336650d646d0f5d9e144e626323a3d42.jpg"
            alt="Product Name"
            style={{ width: "80%", aspectRatio: 0.8 }}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography
            style={{ ...textStyle, fontWeight: 500, fontSize: 24 }}
            my={1}
          >
            Product Name
          </Typography>
          <Typography
            style={{
              ...textStyle,
              fontFamily: "Roboto",
              color: "#928C8C",
            }}
            my={1}
          >
            Product by Bloom By Khushboo
          </Typography>
          <Typography
            style={{ ...textStyle, fontWeight: 600, fontSize: 40 }}
            mt={8}
          >
            Rs. 1500
          </Typography>
          <Typography style={{ ...textStyle, fontFamily: "Roboto" }} my={2}>
            Select size:
          </Typography>
          <Box style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={{
                border: "1px solid #222222",
                borderRadius: "50%",
                width: 40,
                height: 40,
                padding: "6px",
                margin: "0px 20px 0px 0px",
              }}
            >
              <Typography
                style={{
                  ...textStyle,
                  fontFamily: "Roboto",
                  textAlign: "center",
                }}
              >
                38
              </Typography>
            </div>
            <div
              style={{
                border: "1px solid #222222",
                borderRadius: "50%",
                width: 40,
                height: 40,
                padding: "6px",
                margin: "0px 20px 0px 0px",
              }}
            >
              <Typography
                style={{
                  ...textStyle,
                  fontFamily: "Roboto",
                  textAlign: "center",
                }}
              >
                40
              </Typography>
            </div>
            <div
              style={{
                border: "1px solid #222222",
                borderRadius: "50%",
                width: 40,
                height: 40,
                padding: "6px",
                margin: "0px 20px 0px 0px",
              }}
            >
              <Typography
                style={{
                  ...textStyle,
                  fontFamily: "Roboto",
                  textAlign: "center",
                }}
              >
                42
              </Typography>
            </div>
          </Box>
          <Box style={{ display: "flex" }} my={5}>
            <div
              style={{
                border: "1px solid #222222",
                width: 40,
                height: 40,
                padding: "6px",
              }}
            >
              <Typography
                style={{
                  ...textStyle,
                  fontFamily: "Roboto",
                  textAlign: "center",
                }}
              >
                -
              </Typography>
            </div>
            <div
              style={{
                border: "1px solid #222222",
                width: 40,
                height: 40,
                padding: "6px",
              }}
            >
              <Typography
                style={{
                  ...textStyle,
                  fontFamily: "Roboto",
                  textAlign: "center",
                }}
              >
                1
              </Typography>
            </div>
            <div
              style={{
                border: "1px solid #222222",
                width: 40,
                height: 40,
                padding: "6px",
              }}
            >
              <Typography
                style={{
                  ...textStyle,
                  fontFamily: "Roboto",
                  textAlign: "center",
                }}
              >
                +
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                margin: "0px 30px",
                border: "1px solid #222222",
                padding: "7px",
                borderRadius: "30px",
                width: 180,
                height: 40,
                backgroundColor: "#F8F5CC",
              }}
            >
              <FavoriteIcon style={{ color: "#fc03f8", margin: "0px 5px" }} />
              <Typography
                style={{
                  ...textStyle,
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#330C3E",
                }}
                ml={1}
              >
                Add to Wishlist
              </Typography>
            </div>
          </Box>
          <div
            style={{
              border: "1px solid #222222",
              width: "100%",
              padding: "5px",
              borderRadius: "30px",
              backgroundColor: "#F8F5CC",
            }}
          >
            <Typography
              style={{
                ...textStyle,
                color: "#330C3E",
                fontWeight: 500,
                textAlign: "center",
              }}
            >
              Add to Cart
            </Typography>
          </div>
        </Grid>
      </Grid>
      <div style={{ margin: "20px" }}>
        <Typography
          style={{
            ...textStyle,
            fontFamily: "Playfair Display",
            textDecoration: "underline",
            fontSize: 36,
            fontWeight: 500,
          }}
        >
          Product Description
        </Typography>
      </div>
    </Container>
  );
};

export default ProductDetail;
