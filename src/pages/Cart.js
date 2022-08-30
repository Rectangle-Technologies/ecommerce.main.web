import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import textStyle from '../helpers/textStyle'
import ProductsDesktop from '../components/cart/desktop/ProductsDesktop'
import { BrowserView } from 'react-device-detect'
import { styled } from "@mui/material/styles";

const Cart = () => {
    const [instructions, setInstructions] = useState()
    const [voucher, setVoucher] = useState()
    const CustomButton = styled(Button)({
        textTransform: "none",
        backgroundColor: "#eb31e2",
        "&:hover": {
            backgroundColor: "#fc03cf",
        },
    });
    return (
        <>
            <BrowserView>
                <div style={{ marginTop: 20 }}>
                    <Typography style={{ ...textStyle, fontWeight: 700, fontSize: 32, textAlign: 'center' }} my={2}>YOUR CART</Typography>
                    <div style={{ marginTop: 20, border: '1px solid #928C8C', width: '80%', margin: 'auto' }}>
                        <div style={{ display: 'flex', backgroundColor: '#F8F5CC', padding: 15 }}>
                            <Typography style={{ ...textStyle, fontWeight: 600, fontSize: 20, width: '50%' }}>Product</Typography>
                            <Typography style={{ ...textStyle, fontWeight: 600, fontSize: 20, width: '22%', textAlign: 'center' }}>Price</Typography>
                            <Typography style={{ ...textStyle, fontWeight: 600, fontSize: 20, width: '22%', textAlign: 'center' }}>Quantity</Typography>
                            <Typography style={{ ...textStyle, fontWeight: 600, fontSize: 20, width: '6%', textAlign: 'center' }}></Typography>
                        </div>
                        <ProductsDesktop />
                        <ProductsDesktop />
                        <ProductsDesktop />
                    </div>
                    <div style={{ marginTop: 10, width: '80%', margin: 'auto' }}>
                        <Grid container my={3} spacing={5}>
                            <Grid item xs={6}>
                                <Typography style={{ ...textStyle, fontWeight: 600, fontSize: 20 }} my={2}>Additional Instructions</Typography>
                                <TextField
                                    variant='outlined'
                                    fullWidth
                                    placeholder='Instructions for the seller'
                                    multiline
                                    rows={4}
                                    label='Instructions'
                                    value={instructions}
                                    onChange={(e) => setInstructions(e.target.value)}
                                />
                                <Typography style={{ ...textStyle, fontWeight: 600, fontSize: 20 }} my={2}>Apply Voucher</Typography>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <TextField
                                        variant='outlined'
                                        placeholder='Voucher Code'
                                        multiline
                                        label='Voucher'
                                        value={voucher}
                                        onChange={(e) => setVoucher(e.target.value)}
                                    />
                                    <CustomButton variant="contained" size='small' sx={{ mx: 1 }}>
                                        Apply
                                    </CustomButton>
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography style={{ ...textStyle, fontWeight: 600, fontSize: 20 }} my={2}>ORDER SUMMARY</Typography>
                                <div style={{ backgroundColor: '#BEB0B0 10%', padding: 15 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Typography style={{ ...textStyle, fontWeight: 500 }}>SUB TOTAL</Typography>
                                        <Typography style={{ ...textStyle, fontWeight: 500 }}>Rs. 1500</Typography>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 15 }}>
                                        <Typography style={{ ...textStyle, fontWeight: 500 }}>DISCOUNT (if any)</Typography>
                                        <Typography style={{ ...textStyle, fontWeight: 500 }}>-Rs. 100</Typography>
                                    </div>
                                    <hr style={{ backgroundColor: '#000000' }} />
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 15 }}>
                                        <Typography style={{ ...textStyle, fontWeight: 500 }}>TOTAL AMOUNT</Typography>
                                        <Typography style={{ ...textStyle, fontWeight: 500 }}>Rs. 1400</Typography>
                                    </div>
                                </div>
                                <center>
                                    <Link style={{ cursor: 'pointer' }}>
                                        <div style={{ backgroundColor: '#FA861B', border: '1px solid #330C3E', width: '80%', padding: 10, marginTop: 15 }}>
                                            <Typography style={{ ...textStyle, fontWeight: 500, color: '#F8F5CC', textAlign: 'center' }}>Proceed to Checkout</Typography>
                                        </div>
                                    </Link>
                                    <Link style={{ cursor: 'pointer' }}>
                                        <div style={{ backgroundColor: '#F8F5CC', border: '1px solid #330C3E', width: '80%', padding: 10, marginTop: 15 }}>
                                            <Typography style={{ ...textStyle, fontWeight: 500, color: '#330C3E', textAlign: 'center' }}>Continue Shopping</Typography>
                                        </div>
                                    </Link>
                                </center>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </BrowserView>

        </>
    )
}

export default Cart
