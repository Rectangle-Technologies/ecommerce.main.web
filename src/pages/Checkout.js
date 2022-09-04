import { Grid, Link, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import formatAmount from '../helpers/formatAmount'
import textStyle from '../helpers/textStyle'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { BASE_URL_3 } from '../constants/urls';
import { useSnackbar } from 'notistack';
import { connect } from 'react-redux';
import { addLoader, removeLoader } from '../redux/services/actions/loaderActions';

const Checkout = (props) => {
    const location = useLocation()
    const navigate = useNavigate()
    const { enqueueSnackbar } = useSnackbar()

    useEffect(() => {
        if (!location.state) {
            navigate('/', { replace: true })
        }
    }, [])

    const checkoutHandler = async () => {
        props.addLoader()
        try {
            const res = await axios.post(`${BASE_URL_3}/payment/createOrder`, {
                amount: location?.state?.finalAmount,
            })
            localStorage.setItem('order', JSON.stringify({
                products: location?.state?.cart?.products,
                amount: location?.state?.finalAmount,
                instructions: location?.state?.instructions
            }))
            const options = {
                // SECRET KEY: AYaj4UxyYjSJZZD3bHYUwEP3
                key: res.data.data.key, // Enter the Key ID generated from the Dashboard
                amount: res.data.data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                currency: res.data.data.currency,
                name: "Bloom By Khushbu",
                description: "Test Transaction",
                image: "https://example.com/your_logo",
                order_id: res.data.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                callback_url: `${BASE_URL_3}/payment/verify`,
                prefill: {
                    name: "Gaurav Kumar",
                    email: "gaurav.kumar@example.com",
                    contact: "9999999999",
                },
                theme: {
                    color: "#3399cc",
                },
            };
            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
            props.removeLoader()
        } catch (err) {
            console.log(err)
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

    return (
        <>
            {location?.state?.cart?.products?.length > 0 &&
                <Grid container>
                    <Grid item xs={12} md={5} sx={{ backgroundColor: '#F8F5CC' }} p={4}>
                        <center>
                            <img src='./logo.png' style={{ width: '50%' }} />
                        </center>
                        <Typography style={{ ...textStyle, fontWeight: 600, fontSize: 24, color: '#330C3E', textDecoration: 'underline' }} mt={5}>ORDER SUMMARY</Typography>
                        {location.state.cart.products.map((p, key) => (
                            <Grid key={key} container mt={3}>
                                <Grid item xs={5} md={3} mx={2}>
                                    <img
                                        src={p.productId.imageUrls[0]}
                                        style={{ width: '100%', aspectRatio: 0.7 }}
                                    />
                                </Grid>
                                <Grid item xs={5} md={7}>
                                    <Typography style={{ ...textStyle, fontWeight: 500 }}>{p.productId.name}</Typography>
                                    <Typography style={{ ...textStyle, fontWeight: 500 }} my={1}>{formatAmount(p.productId.price)}</Typography>
                                    <Typography style={{ ...textStyle, fontWeight: 500 }} my={1}>Size: {p.size}</Typography>
                                    <Typography style={{ ...textStyle, fontWeight: 500 }} my={1}>Qty: {p.quantity}</Typography>
                                </Grid>
                            </Grid>
                        ))}
                        <div style={{ padding: 15, marginTop: 20 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography style={{ ...textStyle, fontWeight: 500 }}>SUB TOTAL</Typography>
                                <Typography style={{ ...textStyle, fontWeight: 500 }}>{formatAmount(location.state.total)}</Typography>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 15 }}>
                                <Typography style={{ ...textStyle, fontWeight: 500 }}>DISCOUNT (if any)</Typography>
                                <Typography style={{ ...textStyle, fontWeight: 500 }}>-{formatAmount(location.state.discount)}</Typography>
                            </div>
                            <hr style={{ backgroundColor: '#000000' }} />
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 15 }}>
                                <Typography style={{ ...textStyle, fontWeight: 500 }}>TOTAL AMOUNT</Typography>
                                <Typography style={{ ...textStyle, fontWeight: 500 }}>{formatAmount(location.state.finalAmount)}</Typography>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={7} p={4}>
                        <Typography style={{ ...textStyle, fontFamily: 'Playfair Display', fontWeight: 500, fontSize: 24, textDecoration: 'underline' }} my={3}>
                            Contact Information
                        </Typography>
                        <TextField
                            fullWidth
                            label='Mobile Number'
                            variant='outlined'
                            placeholder='Mobile Number'
                        />
                        <Typography style={{ ...textStyle, fontFamily: 'Playfair Display', fontWeight: 500, fontSize: 24, textDecoration: 'underline' }} my={3}>
                            Shipping Details
                        </Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label='First Name'
                                    name="first_name"
                                    variant='outlined'
                                    placeholder='First Name'
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label='Last Name'
                                    name="last_name"
                                    variant='outlined'
                                    placeholder='Last Name'
                                />
                            </Grid>
                        </Grid>
                        <div style={{ marginTop: 20 }}>
                            <TextField
                                fullWidth
                                label='Address'
                                name="address"
                                variant='outlined'
                                placeholder='Address'
                            />
                        </div>
                        <Grid container my={1} spacing={2}>
                            <Grid item xs={6} md={4}>
                                <TextField
                                    fullWidth
                                    label='City'
                                    name="city"
                                    variant='outlined'
                                    placeholder='City'
                                />
                            </Grid>
                            <Grid item xs={6} md={4}>
                                <TextField
                                    fullWidth
                                    name="state"
                                    label='State'
                                    variant='outlined'
                                    placeholder='State'
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField
                                    fullWidth
                                    name="pincode"
                                    label='Pincode'
                                    variant='outlined'
                                    placeholder='Pincode'
                                />
                            </Grid>
                        </Grid>
                        <Grid container my={2}>
                            <Grid item xs={12} md={6} my={2}>
                                <Link
                                    style={{ display: 'flex', cursor: 'pointer' }}
                                    onClick={() => navigate('/cart', { replace: true })}
                                >
                                    <KeyboardArrowLeftIcon />
                                    <Typography style={{ ...textStyle, fontSize: 18 }} mx={1}>Return to Cart</Typography>
                                </Link>
                            </Grid>
                            <Grid item xs={12} md={6} my={2}>
                                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <Link style={{ cursor: 'pointer' }} onClick={checkoutHandler}>
                                        <div style={{ backgroundColor: '#FA861B', padding: '10px 50px', borderRadius: 30 }}>
                                            <Typography style={{ ...textStyle, fontWeight: 500, fontSize: 18, color: '#F8F5CC', textAlign: 'center' }}>
                                                Proceed
                                            </Typography>
                                        </div>
                                    </Link>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            }
        </>
    )
}

export default connect(null, { addLoader, removeLoader })(Checkout)
