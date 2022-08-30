import { Grid, Link, Typography } from '@mui/material'
import React, { useState } from 'react'
import textStyle from '../../../helpers/textStyle'

const ProductsDesktop = () => {
    const [quantity, setQuantity] = useState(1)

    const updateQuantity = (action) => {
        if (action === '+') {
            setQuantity(quantity + 1);
        } else {
            if (quantity > 1) {
                setQuantity(quantity - 1);
            }
        }
    }

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ display: 'flex', width: '50%', padding: 10 }}>
                <img src='https://i.pinimg.com/736x/33/66/50/336650d646d0f5d9e144e626323a3d42.jpg'
                    style={{ width: '20%', aspectRatio: 0.65 }}
                />
                <Typography style={{ ...textStyle, fontWeight: 500 }} m={2}>Product Name</Typography>
            </div>
            <div style={{ width: '22%', margin: 'auto', padding: 10 }}>
                <Typography style={{ ...textStyle, fontWeight: 500, fontSize: 24, textAlign: 'center' }} m={2}>Rs. 1150</Typography>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '22%', margin: 'auto', padding: 10 }}>
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
            </div>
            <div style={{ width: '6%', margin: 'auto', padding: 10 }}>
                <Typography style={{ ...textStyle, fontWeight: 600, fontSize: 20, textAlign: 'center' }} m={2}>X</Typography>
            </div>
        </div>
    )
}

export default ProductsDesktop
