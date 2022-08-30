import { Typography } from '@mui/material'
import React from 'react'
import textStyle from '../helpers/textStyle'
import ProductsDesktop from '../components/cart/desktop/ProductsDesktop'
import { BrowserView } from 'react-device-detect'

const Cart = () => {
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
                    </div>
                </div>
            </BrowserView>

        </>
    )
}

export default Cart
