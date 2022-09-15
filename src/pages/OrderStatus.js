import { Grid, Link, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import textStyle from '../helpers/textStyle'
import { connect } from 'react-redux'
import { addLoader, removeLoader } from '../redux/services/actions/loaderActions'
import axios from 'axios'
import { BASE_URL_1 } from '../constants/urls'
import { useSnackbar } from 'notistack'
import ProductsDesktop from '../components/cart/desktop/ProductsDesktop'
import formatAmount from '../helpers/formatAmount'

const OrderStatus = (props) => {
    const { status } = useParams()
    const data = JSON.parse(localStorage.getItem('order'))
    const [order, setOrder] = useState()
    const config = {
        headers: {
            Authorization: `Bearer ${props.auth.token}`
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

    // const fetchOrder = async () => {
    //     props.addLoader()
    //     try {
    //         const res = await axios.get(`${BASE_URL_1}/order/fetch/63205345923684517b10bf47`, config)
    //         setOrder(res.data.order)
    //         props.removeLoader()
    //     } catch (err) {
    //         console.log(err);
    //         props.removeLoader()
    //         let message = 'Something went wrong'
    //         if (err?.response?.data?.errors) {
    //             message = err?.response?.data?.errors[0].msg
    //         } else if (err?.response?.data?.message) {
    //             message = err?.response?.data?.message
    //         }
    //         enqueueSnackbar(message, {
    //             variant: 'error',
    //             autoHideDuration: 3000
    //         })
    //     }
    // }

    useEffect(() => {
        if (!localStorage.getItem('order')) { navigate("/") }
        else if (status === 'verified') {
            createOrder()
        }
    }, [])

    return (
        <div style={{ margin: 20, padding: window.innerWidth > 600 ? 20 : 0, width: '80%', margin: 'auto' }}>
            {status === "verified"
                ?
                order
                    ?
                    <>
                        <Typography style={{ ...textStyle, fontSize: window.innerWidth > 600 ? 36 : 30, fontWeight: 600 }} mt={5}>THANK YOU FOR YOUR ORDER :)</Typography>
                        <Typography style={{ ...textStyle, fontSize: window.innerWidth > 600 ? 22 : 16 }} my={2}>An email confirmation has been sent to {props?.auth?.user?.email}.</Typography>
                        <div style={{ margin: '15px 0px', padding: '20px', border: '1px solid #928C8C', borderRadius: '5px', width: window.innerWidth > 600 ? '60%' : '100%' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={3}>
                                    <Typography style={{ ...textStyle, fontWeight: 600, fontSize: '18px' }}>Order Total:</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography style={{ ...textStyle, fontWeight: 600, fontSize: '18px' }}>{formatAmount(order?.amount)}</Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} my={3}>
                                <Grid item xs={12} md={3}>
                                    <Typography style={{ ...textStyle, fontWeight: 600, fontSize: '18px' }}>Order Id:</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography style={{ ...textStyle, fontWeight: 600, fontSize: '18px' }}>{order?._id}</Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} mt={3}>
                                <Grid item xs={12} md={3}>
                                    <Typography style={{ ...textStyle, fontWeight: 600, fontSize: '18px' }}>Delivery To:</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography style={{ ...textStyle, fontWeight: 600, fontSize: '18px' }}>{order?.user?.name}</Typography>
                                    <Typography style={{ ...textStyle, fontSize: '18px' }}>
                                        {order?.user?.address?.line1 + ', ' + order?.user?.address?.city + ', ' + order?.user?.address?.state + ' - ' + order?.user?.address?.pincode}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{ margin: '30px 0px', padding: '20px', border: '1px solid #928C8C', borderRadius: '5px', width: window.innerWidth > 600 ? '80%' : '100%' }}>
                            {order?.products?.map((p, idx) => (
                                <Link key={idx} style={{ cursor: 'pointer' }} onClick={() => navigate(`/product/${p?.productId?._id}`)}>
                                    <Grid container spacing={1} my={2}>
                                        <Grid item xs={4.5} md={2}>
                                            <img src={p?.productId?.imageUrls[0]} style={{ width: window.innerWidth > 600 ? '90%' : '100%', aspectRatio: 0.7 }} />
                                        </Grid>
                                        <Grid item xs={7.5} md={10}>
                                            <Typography style={{ ...textStyle, fontSize: window.innerWidth > 600 ? 24 : 16 }}>
                                                {p?.productId?.name}
                                            </Typography>
                                            <Typography style={{ ...textStyle, fontSize: window.innerWidth > 600 ? 18 : 14 }} my={1}>
                                                {formatAmount(p?.productId?.price)}
                                            </Typography>
                                            <Typography style={{ ...textStyle, fontSize: window.innerWidth > 600 ? 18 : 14 }} my={1}>
                                                Size: {p?.size}
                                            </Typography>
                                            <Typography style={{ ...textStyle, fontSize: window.innerWidth > 600 ? 18 : 14 }} my={1}>
                                                Qty: {p?.quantity}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Link>
                            ))}
                        </div>
                    </>
                    :
                    <>
                        <Typography style={{ ...textStyle, fontSize: window.innerWidth > 600 ? 36 : 30, fontWeight: 600 }} mt={5}>SORRY, COULDN'T PLACE THE ORDER :(</Typography>
                        <Typography style={{ ...textStyle, fontSize: window.innerWidth > 600 ? 26 : 20 }} my={2}>Your amount will be refunded. Please try again later</Typography>
                    </>
                :
                <>
                    <Typography style={{ ...textStyle, fontSize: window.innerWidth > 600 ? 36 : 30, fontWeight: 600 }} mt={5}>SORRY, COULDN'T PLACE THE ORDER :(</Typography>
                    <Typography style={{ ...textStyle, fontSize: window.innerWidth > 600 ? 26 : 20 }} my={2}>Something went wrong with the payment. Please try again</Typography>
                </>
            }
            {/* {order?.products?.length > 0 &&
                <div style={{ marginTop: 20, border: '1px solid #928C8C', width: '80%', margin: 'auto' }}>
                    <div style={{ display: 'flex', backgroundColor: '#F8F5CC', padding: 15 }}>
                        <Typography style={{ ...textStyle, fontWeight: 600, fontSize: 20, width: '40%' }}>Product</Typography>
                        <Typography style={{ ...textStyle, fontWeight: 600, fontSize: 20, width: '20%', textAlign: 'center' }}>Price</Typography>
                        <Typography style={{ ...textStyle, fontWeight: 600, fontSize: 20, width: '20%', textAlign: 'center' }}>Quantity</Typography>
                        <Typography style={{ ...textStyle, fontWeight: 600, fontSize: 20, width: '20%', textAlign: 'center' }}>Size</Typography>
                    </div>
                    {order?.products?.map((p, key) => (
                        <ProductsDesktop
                            key={key}
                            product={p}
                            setCart={props.setCart}
                            setTotal={props.setTotal}
                            setFinalAmount={props.setFinalAmount}
                            discount={props.discount}
                        />
                    ))
                    }
                </div>
            } */}
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { addLoader, removeLoader })(OrderStatus)
