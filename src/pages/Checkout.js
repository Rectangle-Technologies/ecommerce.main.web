import { Grid, Link, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import formatAmount from '../helpers/formatAmount'
import textStyle from '../helpers/textStyle'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useLocation, useNavigate } from 'react-router-dom';

const Checkout = () => {
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (!location.state) {
            navigate('/', { replace: true })
        }
    }, [])

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
                                        src="https://i.pinimg.com/736x/33/66/50/336650d646d0f5d9e144e626323a3d42.jpg"
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
                                    variant='outlined'
                                    placeholder='First Name'
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label='Last Name'
                                    variant='outlined'
                                    placeholder='Last Name'
                                />
                            </Grid>
                        </Grid>
                        <div style={{ marginTop: 20 }}>
                            <TextField
                                fullWidth
                                label='Address'
                                variant='outlined'
                                placeholder='Address'
                            />
                        </div>
                        <Grid container my={1} spacing={2}>
                            <Grid item xs={6} md={4}>
                                <TextField
                                    fullWidth
                                    label='City'
                                    variant='outlined'
                                    placeholder='City'
                                />
                            </Grid>
                            <Grid item xs={6} md={4}>
                                <TextField
                                    fullWidth
                                    label='State'
                                    variant='outlined'
                                    placeholder='State'
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField
                                    fullWidth
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
                                    <Link style={{ cursor: 'pointer' }}>
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

export default Checkout
