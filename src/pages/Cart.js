import React, { useEffect, useState } from 'react'
import { BrowserView, MobileOnlyView, TabletView } from 'react-device-detect'
import { useSnackbar } from 'notistack'
import { connect } from 'react-redux'
import { addLoader, removeLoader } from '../redux/services/actions/loaderActions'
import axios from 'axios'
import CartDesktop from '../components/cart/desktop/CartDesktop'
import CartMobile from '../components/cart/mobile/CartMobile'

const Cart = (props) => {
    const [instructions, setInstructions] = useState()
    const [voucher, setVoucher] = useState()
    const [cart, setCart] = useState()
    const [total, setTotal] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [finalAmount, setFinalAmount] = useState(0)
    const { enqueueSnackbar } = useSnackbar()
    const config = {
        headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGM5ZmU3MDJiMzZhOWMxNGFiMzY5NCIsImlhdCI6MTY2MTg1MzQ4MX0.jICcee3MryAKyYvx1Ve9uTe-jGcb6bcR8EXdTUFtERw`
        }
    }

    const fetchCart = async () => {
        props.addLoader()
        try {
            const res = await axios.get(`http://localhost:4000/cart/get`, config)
            setCart(res.data.cart)
            setTotal(res.data.cart.total)
            setFinalAmount(res.data.cart.total)
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
        fetchCart()
    }, [])
    return (
        <>
            <BrowserView>
                {cart &&
                    <CartDesktop
                        cart={cart}
                        instructions={instructions}
                        setInstructions={setInstructions}
                        voucher={voucher}
                        setVoucher={setVoucher}
                        total={total}
                        discount={discount}
                        finalAmount={finalAmount}
                        setCart={setCart}
                        setTotal={setTotal}
                        setFinalAmount={setFinalAmount}
                    />
                }
            </BrowserView>
            <MobileOnlyView>
                {cart &&
                    <CartMobile
                        cart={cart}
                        instructions={instructions}
                        setInstructions={setInstructions}
                        voucher={voucher}
                        setVoucher={setVoucher}
                        total={total}
                        discount={discount}
                        finalAmount={finalAmount}
                        setCart={setCart}
                        setTotal={setTotal}
                        setFinalAmount={setFinalAmount}
                    />
                }
            </MobileOnlyView>
            <TabletView>
            {cart &&
                    <CartDesktop
                        cart={cart}
                        instructions={instructions}
                        setInstructions={setInstructions}
                        voucher={voucher}
                        setVoucher={setVoucher}
                        total={total}
                        discount={discount}
                        finalAmount={finalAmount}
                        setCart={setCart}
                        setTotal={setTotal}
                        setFinalAmount={setFinalAmount}
                    />
                }
            </TabletView>
        </>
    )
}

export default connect(null, { addLoader, removeLoader })(Cart)
