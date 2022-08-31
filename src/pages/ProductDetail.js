import { Box, Container, Grid, Link, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import textStyle from "../helpers/textStyle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DoubleTextComponent from "../components/DoubleText";
import ProductLayout from "../components/ProductLayout";
import { isMobile } from "react-device-detect";
import { useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import { connect } from "react-redux";
import { addLoader, removeLoader } from '../redux/services/actions/loaderActions'
import axios from 'axios'
import { BASE_URL_1, BASE_URL_2 } from "../constants/urls";

const ProductDetail = (props) => {
    const [product, setProduct] = useState();
    const [quantity, setQuantity] = useState(1)
    const [size, setSize] = useState()
    const { enqueueSnackbar } = useSnackbar()
    const { id } = useParams()

    const config = {
        headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGM5ZmU3MDJiMzZhOWMxNGFiMzY5NCIsImlhdCI6MTY2MTc5NDQyN30.Q1OHlULJRwh9MD5awOjBFLhuwcUdvJYGifv_U__0uIw`
        }
    }

    const fetchProduct = async () => {
        props.addLoader()
        try {
            const res = await axios.get(`${BASE_URL_2}/products/fetchDetails/${id}`)
            setProduct(res.data.product)
            props.removeLoader()
        } catch (err) {
            props.removeLoader()
            enqueueSnackbar(err?.response?.data?.message || 'Something went wrong', {
                variant: 'error',
                autoHideDuration: 3000
            })
        }
    }

    const handleAddToCart = async () => {
        if (!size) {
            enqueueSnackbar('Please select size', {
                variant: 'error',
                autoHideDuration: 3000
            })
            return
        }
        props.addLoader()
        try {
            await axios.post(`${BASE_URL_1}/cart/add`, {
                productId: id,
                quantity,
                size
            }, config)
            props.removeLoader()
            enqueueSnackbar('Product added to cart', {
                variant: 'success',
                autoHideDuration: 3000
            })
        } catch (err) {
            props.removeLoader()
            let message = 'Something went wrong'
            if (err?.response?.data?.errors) {
                message = err?.response?.data?.errors[0].msg
            } else if (err?.response?.data?.message) {
                message = err?.response?.data?.message
            }
            enqueueSnackbar(message, {
                variant: 'error',
                autoHideDuration: 3000
            })
        }
    }

    const handleAddToWishlist = async () => {
        props.addLoader()
        try {
            await axios.post(`${BASE_URL_1}/wishlist/add`, {
                productId: id
            }, config)
            props.removeLoader()
            enqueueSnackbar('Added to wishlist', {
                variant: 'success',
                autoHideDuration: 3000
            })
        } catch (err) {
            props.removeLoader()
            let message = 'Something went wrong'
            if (err?.response?.data?.errors) {
                message = err?.response?.data?.errors[0].msg
            } else if (err?.response?.data?.message) {
                message = err?.response?.data?.message
            }
            enqueueSnackbar(message, {
                variant: 'error',
                autoHideDuration: 3000
            })
        }
    }

    const updateQuantity = (action) => {
        if (action === '+') {
            setQuantity(quantity + 1);
        } else {
            if (quantity > 1) {
                setQuantity(quantity - 1);
            }
        }
    }

    useEffect(() => {
        fetchProduct()
    }, [])

    return (
        <>
            {product && <Container maxWidth="lg">
                <Grid container my={5}>
                    <Grid item xs={12} md={5}>
                        <center>
                            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" style={{ width: isMobile ? '100%' : '80%' }}>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img
                                            className="d-block w-100"
                                            src="https://i.pinimg.com/736x/33/66/50/336650d646d0f5d9e144e626323a3d42.jpg"
                                            alt={product.name}
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            className="d-block w-100"
                                            src="https://i.pinimg.com/736x/33/66/50/336650d646d0f5d9e144e626323a3d42.jpg"
                                            alt={product.name}
                                        />
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </center>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Typography style={{ ...textStyle, fontWeight: 500, fontSize: 24 }} my={1}>
                            {product.name}
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
                        <div style={{ display: 'flex', flexDirection: 'row', marginTop: 60 }}>
                            <Typography style={{ ...textStyle, fontWeight: 600, fontSize: 30 }}>
                                Rs. {product.price}
                            </Typography>
                            {product.mrp !== product.price &&
                                <Typography style={{ ...textStyle, fontSize: 30, color: '#928C8C', textDecoration: 'line-through' }} ml={2}>
                                    {product.mrp}
                                </Typography>
                            }
                        </div>
                        <Typography style={{ ...textStyle, fontFamily: "Roboto" }} my={2}>
                            Select size:
                        </Typography>
                        <Box style={{ display: "flex", flexDirection: "row" }}>
                            {product.sizes.map((s, key) => (
                                <Link key={key} style={{ cursor: 'pointer' }} onClick={() => setSize(s.title)}>
                                    <div
                                        style={{
                                            border: s.title === size ? "1px solid #eb31e2" : "1px solid #222222",
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
                                                color: s.title === size ? '#eb31e2' : '#222222'
                                            }}
                                        >
                                            {s.title}
                                        </Typography>
                                    </div>
                                </Link>
                            ))}
                        </Box>
                        <Box style={{ display: "flex" }} my={5}>
                            <Link style={{ cursor: 'pointer' }} onClick={() => updateQuantity('-')}>
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
                            </Link>
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
                                    {quantity}
                                </Typography>
                            </div>
                            <Link style={{ cursor: 'pointer' }} onClick={() => updateQuantity('+')}>
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
                            </Link>
                            <Link style={{ cursor: 'pointer' }} onClick={handleAddToWishlist}>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: "0px 0px 0px 30px",
                                        border: "1px solid #222222",
                                        padding: "7px",
                                        borderRadius: "30px",
                                        width: '300px',
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
                                            textAlign: 'center'
                                        }}
                                        ml={1}
                                    >
                                        Add to Wishlist
                                    </Typography>
                                </div>
                            </Link>
                        </Box>
                        <Link style={{ cursor: 'pointer' }} onClick={handleAddToCart}>
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
                        </Link>
                    </Grid>
                </Grid>
                <div style={{ margin: "20px" }}>
                    <Typography
                        style={{
                            ...textStyle,
                            fontFamily: "Playfair Display",
                            textDecoration: "underline",
                            fontSize: isMobile ? 25 : 36,
                            fontWeight: 500,
                        }}
                    >
                        Product Description
                    </Typography>
                    <Typography
                        style={{ ...textStyle, fontWeight: 300, fontSize: 18 }}
                        my={1}
                    >
                        {product.description}
                    </Typography>
                    {product.features.length > 0 && <Typography
                        style={{ ...textStyle, fontWeight: 300, fontSize: 18 }}
                        my={1}
                    >

                        <ul style={{ listStyleType: "disc" }}>
                            {product.features.map((f, key) => (
                                <li key={key}>{f.key}: {f.value}</li>
                            ))}
                        </ul>
                    </Typography>}
                </div>
                <div style={{ margin: 20 }}>
                    <DoubleTextComponent
                        backText="You might be interested"
                        frontText="Recommendations"
                    />
                    <Grid container spacing={3} style={{ padding: "0px 7.5vw 0px 7.5vw" }}>
                        <Grid item xs={6} lg={3}>
                            <ProductLayout
                                liked={true}
                                new={true}
                                title="Blue kurti with embroided neck"
                                mrp="523"
                            />
                        </Grid>
                        <Grid item xs={6} lg={3}>
                            <ProductLayout
                                liked={true}
                                title="Blue kurti with embroided neck"
                                mrp="523"
                            />
                        </Grid>
                        <Grid item xs={6} lg={3}>
                            <ProductLayout
                                new={true}
                                title="Blue kurti with embroided neck"
                                mrp="523"
                            />
                        </Grid>
                        <Grid item xs={6} lg={3}>
                            <ProductLayout title="Blue kurti with embroided neck" mrp="523" />
                        </Grid>
                    </Grid>
                </div>
                <div style={{ margin: 20 }}>
                    <Typography style={{ ...textStyle, fontFamily: 'Roboto', fontWeight: 500, fontSize: 30, textAlign: 'center' }}>
                        Return Policy
                    </Typography>
                </div>
            </Container>
            }
        </>
    );
};

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { addLoader, removeLoader })(ProductDetail);
