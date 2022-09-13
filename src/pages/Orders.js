import { Box, Grid, Link, Typography } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { BASE_URL_1 } from '../constants/urls'
import { addLoader, removeLoader } from '../redux/services/actions/loaderActions'
import textStyle from '../helpers/textStyle'
import { useSnackbar } from 'notistack'
import formatAmount from '../helpers/formatAmount'
import { useNavigate } from 'react-router-dom'
import capitalizeFirstLetter from '../helpers/capitaliseFirst'

const Orders = (props) => {
    const [orders, setOrders] = useState()
    const navigate = useNavigate()
    const config = {
        headers: {
            Authorization: `Bearer ${props.auth.token}`
        }
    }
    const { enqueueSnackbar } = useSnackbar()

    const fetchOrders = async () => {
        props.addLoader()
        try {
            const res = await axios.get(`${BASE_URL_1}/order/fetch`, config)
            setOrders(res.data.orders)
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
        if (!props?.auth?.isAuthenticated) {
            navigate('/login', { state: { navigateUrl: '/wishlist' } })
            return
        }
        fetchOrders()
    }, [])

    return (
        <>
            <Typography style={{ ...textStyle, fontWeight: 700, fontSize: window.innerWidth > 500 ? 32 : 26, textAlign: 'center' }} mt={2}>YOUR ORDERS</Typography>
            <div style={{ width: window.innerWidth > 600 ? '50%' : '100%', margin: 'auto', padding: '10px' }}>
                {orders &&
                    orders?.length > 0
                    ? orders?.map((order, idx) => (
                        <Link style={{ cursor: 'pointer' }} onClick={() => navigate(`/order/${order?._id}`)}>
                            <div style={{ padding: '10px', border: '1px solid black', margin: '20px 0px' }}>
                                <Typography style={textStyle} component='div'>Status: <Box display='inline' color='#eb31e2'>{capitalizeFirstLetter(order?.status)}</Box> </Typography>
                                <Grid key={idx} container my={1}>
                                    <Grid item xs={3} mr={1}>
                                        <img src={order?.products[0]?.productId?.imageUrls[0]} style={{ width: window.innerWidth > 600 ? '80%' : '100%', aspectRatio: 0.7 }} />
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography style={{ ...textStyle, textAlign: 'right' }}>
                                            {new Date(order?.createdAt).toLocaleString('en-IN', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                                        </Typography>
                                        <Typography style={{ ...textStyle, fontSize: window.innerWidth > 600 ? 20 : 16 }} my={1}>
                                            {order?.products[0]?.productId?.name}
                                        </Typography>
                                        <Typography style={{ ...textStyle, fontSize: window.innerWidth > 600 ? 20 : 16 }} my={1}>
                                            Total: {formatAmount(order?.amount)}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </div>
                        </Link>
                    ))
                    : <Typography stye={{ ...textStyle, fontSize: 24, textAlign: 'center' }}>You have no orders</Typography>
                }
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { addLoader, removeLoader })(Orders)
