import { Grid, Link, Typography } from '@mui/material'
import axios from 'axios'
import { useSnackbar } from 'notistack'
import React, { useState } from 'react'
import textStyle from '../../../helpers/textStyle'
import { connect } from 'react-redux'
import { addLoader, removeLoader } from '../../../redux/services/actions/loaderActions'
import { useNavigate } from 'react-router-dom'
import { BASE_URL_1 } from '../../../constants/urls'
import formatAmount from '../../../helpers/formatAmount'

const ProductsDesktop = (props) => {
    const [quantity, setQuantity] = useState(props.product.quantity || 1)
    const { enqueueSnackbar } = useSnackbar()
    const navigate = useNavigate()
    const config = {
        headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGVmY2NjMDQ4MGRhYjllY2U5ZGY3NCIsImlhdCI6MTY2MTkyNjg3OH0.IOOtT5gzeuEq2hT5T7UpI4pxCkv9vgTP35Aye4PlUko`
        }
    }

    const updateQuantity = async (action) => {
        props.addLoader()
        try {
            if (action == '+') {
                const res = await axios.post(`${BASE_URL_1}/cart/add`, {
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
                const res = await axios.post(`${BASE_URL_1}/cart/delete/${props.product.productId._id}`, {
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
        <div style={{ display: 'flex' }}>
            <Link
                style={{ cursor: 'pointer', display: 'flex', width: '40%', padding: 10 }}
                onClick={() => navigate(`/product/${props.product.productId._id}`, { replace: true })}
            >
                <img src={props?.product?.productId?.imageUrls[0]}
                    style={{ width: '20%', aspectRatio: 0.65 }}
                    alt="Product image"
                />
                <Typography style={{ ...textStyle, fontWeight: 500 }} m={2}>{props.product.productId.name}</Typography>
            </Link>
            <div style={{ width: '20%', margin: 'auto', padding: 10 }}>
                <Typography style={{ ...textStyle, fontWeight: 500, fontSize: 24, textAlign: 'center' }} m={2}>{formatAmount(props.product.productId.price)}</Typography>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '20%', margin: 'auto', padding: 10 }}>
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
            <div style={{ width: '20%', margin: 'auto', padding: 10 }}>
                <Typography style={{ ...textStyle, fontWeight: 500, fontSize: 24, textAlign: 'center' }} m={2}>{props.product.size}</Typography>
            </div>
        </div>
    )
}

export default connect(null, { addLoader, removeLoader })(ProductsDesktop)
