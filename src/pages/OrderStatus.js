import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import textStyle from '../helpers/textStyle'
import { connect } from 'react-redux'
import { addLoader, removeLoader } from '../redux/services/actions/loaderActions'
import axios from 'axios'
import { BASE_URL_1 } from '../constants/urls'
import { useSnackbar } from 'notistack'
import ProductsDesktop from '../components/cart/desktop/ProductsDesktop'

const OrderStatus = (props) => {
    const { status } = useParams()
    const data = JSON.parse(localStorage.getItem('order'))
    const [order, setOrder] = useState()
    const config = {
        headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGVmY2NjMDQ4MGRhYjllY2U5ZGY3NCIsImlhdCI6MTY2MTkyNjg3OH0.IOOtT5gzeuEq2hT5T7UpI4pxCkv9vgTP35Aye4PlUko`
        }
    }
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();

    const createOrder = async () => {
        props.addLoader()
        try {
            const res = await axios.post(`${BASE_URL_1}/order/create`, data, config)
            setOrder(res.data.order)
            localStorage.removeItem('order')
            props.removeLoader();
        } catch (err) {
            console.log(err);
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

    useEffect(() => {
        if (!localStorage.getItem('order')) { navigate("/", { replace: true }) }
        else if (status === 'verified') {
            createOrder()
        }
    }, [])

    return (
        <div style={{ margin: 20, padding: 20 }}>
            {status === "verified"
                ?
                <Typography style={textStyle}>Order placed</Typography>
                :
                <Typography style={textStyle}>Couldn't place order</Typography>}
            <div style={{ marginTop: 20, border: '1px solid #928C8C', width: '80%', margin: 'auto' }}>
                <div style={{ display: 'flex', backgroundColor: '#F8F5CC', padding: 15 }}>
                    <Typography style={{ ...textStyle, fontWeight: 600, fontSize: 20, width: '40%' }}>Product</Typography>
                    <Typography style={{ ...textStyle, fontWeight: 600, fontSize: 20, width: '20%', textAlign: 'center' }}>Price</Typography>
                    <Typography style={{ ...textStyle, fontWeight: 600, fontSize: 20, width: '20%', textAlign: 'center' }}>Quantity</Typography>
                    <Typography style={{ ...textStyle, fontWeight: 600, fontSize: 20, width: '20%', textAlign: 'center' }}>Size</Typography>
                </div>
                {order?.products?.length
                    ? order?.products?.map((p, key) => (
                        <ProductsDesktop
                            key={key}
                            product={p}
                            setCart={props.setCart}
                            setTotal={props.setTotal}
                            setFinalAmount={props.setFinalAmount}
                            discount={props.discount}
                        />
                    ))
                    : <Typography style={{ ...textStyle, fontWeight: 600, fontSize: 20, textAlign: 'center' }} my={2}>Your cart is empty</Typography>}
            </div>
        </div>
    )
}

export default connect(null, { addLoader, removeLoader })(OrderStatus)
