import { Button, Grid, Link, Typography } from '@mui/material'
import React, { useState } from 'react'
import textStyle from '../../../helpers/textStyle'
import { useSnackbar } from 'notistack'
import { connect } from 'react-redux'
import { addLoader, removeLoader } from '../../../redux/services/actions/loaderActions'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const ProductsMobile = (props) => {
    const [quantity, setQuantity] = useState(props.product.quantity || 1)
    const { enqueueSnackbar } = useSnackbar()
    const navigate = useNavigate()
    const config = {
        headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGM5ZmU3MDJiMzZhOWMxNGFiMzY5NCIsImlhdCI6MTY2MTg1MzQ4MX0.jICcee3MryAKyYvx1Ve9uTe-jGcb6bcR8EXdTUFtERw`
        }
    }

    const updateQuantity = async (action) => {
        props.addLoader()
        try {
            if (action == '+') {
                const res = await axios.post(`http://localhost:4000/cart/add`, {
                    productId: props.product.productId._id,
                    size: props.product.size,
                    quantity: 1
                }, config)
                props.setCart(res.data.cart)
                props.setTotal(res.data.cart.total)
                props.setFinalAmount(res.data.cart.total - props.discount)
                setQuantity(quantity + 1)
                props.removeLoader()
            } else if (action == '-') {
                const res = await axios.post(`http://localhost:4000/cart/delete/${props.product.productId._id}`, {
                    size: props.product.size
                }, config)
                props.setCart(res.data.cart)
                props.setTotal(res.data.cart.total)
                props.setFinalAmount(res.data.cart.total - props.discount)
                if (quantity > 1) {
                    setQuantity(quantity - 1)
                }
                props.removeLoader()
            }
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
    return (
        <Grid container my={2}>
            <Grid item xs={5} mx={1}>
                <Link style={{ cursor: 'pointer' }} onClick={() => navigate(`/product/${props.product.productId._id}`, { replace: true })}>
                    <img src='https://i.pinimg.com/736x/33/66/50/336650d646d0f5d9e144e626323a3d42.jpg'
                        style={{ width: '100%', aspectRatio: 0.65 }}
                    />
                </Link>
            </Grid>
            <Grid item xs={6}>
                <Link style={{ cursor: 'pointer' }} onClick={() => navigate(`/product/${props.product.productId._id}`, { replace: true })}>
                    <Typography style={{ ...textStyle, fontWeight: 500, textAlign: 'left' }} mx={1}>{props.product.productId.name}</Typography>
                </Link>
                <Typography style={{ ...textStyle, fontWeight: 500 }} m={1}>Rs. {props.product.productId.price}</Typography>
                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', padding: 10 }}>
                    <Link style={{ cursor: 'pointer' }} onClick={() => updateQuantity('-')}>
                        <div
                            style={{
                                border: "1px solid #222222",
                                width: 25,
                                height: 25,
                                fontSize: 14
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
                            width: 25,
                            height: 25,
                            fontSize: 14
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
                                width: 25,
                                height: 25,
                                fontSize: 14
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
                <Typography style={{ ...textStyle, fontWeight: 500 }} m={1}>Size: {props.product.size}</Typography>
            </Grid>
        </Grid>
    )
}

export default connect(null, { addLoader, removeLoader })(ProductsMobile)
