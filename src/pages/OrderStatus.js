import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import textStyle from '../helpers/textStyle'
import { connect } from 'react-redux'
import { addLoader, removeLoader } from '../redux/services/actions/loaderActions'
import axios from 'axios'
import { BASE_URL_1 } from '../constants/urls'

const OrderStatus = (props) => {
    const { status } = useParams()
    const data = JSON.parse(localStorage.getItem('order'))
    const [order, setOrder] = useState()
    const config = {
        headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGVmY2NjMDQ4MGRhYjllY2U5ZGY3NCIsImlhdCI6MTY2MTkyNjg3OH0.IOOtT5gzeuEq2hT5T7UpI4pxCkv9vgTP35Aye4PlUko`
        }
    }

    const createOrder = async () => {
        props.addLoader()
        try {
            const res = await axios.post(`${BASE_URL_1}/order/create`, data, config)
            setOrder(res.data.order)
            localStorage.removeItem('order')
            props.removeLoader()
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

    useEffect(() => {
        if (status === 'verified') {
            createOrder()
        }
    }, [])
    return (
        <div style={{ margin: 20, padding: 20 }}>
            {order
                ?
                <Typography style={textStyle}>Order placed</Typography>
                :
                <Typography style={textStyle}>Couldn't place order</Typography>}

        </div>
    )
}

export default connect(null, { addLoader, removeLoader })(OrderStatus)
