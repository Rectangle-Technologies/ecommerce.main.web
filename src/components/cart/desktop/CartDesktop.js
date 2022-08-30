import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import React from 'react'
import { styled } from "@mui/material/styles";
import textStyle from '../../../helpers/textStyle'
import ProductsDesktop from './ProductsDesktop'
import { useNavigate } from 'react-router-dom';

const CartDesktop = (props) => {
  const navigate = useNavigate()
  const CustomButton = styled(Button)({
    textTransform: "none",
    backgroundColor: "#eb31e2",
    "&:hover": {
      backgroundColor: "#fc03cf",
    },
  });

  return (
    <div style={{ marginTop: 20 }}>
      <Typography style={{ ...textStyle, fontWeight: 700, fontSize: 32, textAlign: 'center' }} my={2}>YOUR CART</Typography>
      <div style={{ marginTop: 20, border: '1px solid #928C8C', width: '80%', margin: 'auto' }}>
        <div style={{ display: 'flex', backgroundColor: '#F8F5CC', padding: 15 }}>
          <Typography style={{ ...textStyle, fontWeight: 600, fontSize: 20, width: '40%' }}>Product</Typography>
          <Typography style={{ ...textStyle, fontWeight: 600, fontSize: 20, width: '20%', textAlign: 'center' }}>Price</Typography>
          <Typography style={{ ...textStyle, fontWeight: 600, fontSize: 20, width: '20%', textAlign: 'center' }}>Quantity</Typography>
          <Typography style={{ ...textStyle, fontWeight: 600, fontSize: 20, width: '20%', textAlign: 'center' }}>Size</Typography>
          {/* <Typography style={{ ...textStyle, fontWeight: 600, fontSize: 20, width: '6%', textAlign: 'center' }}></Typography> */}
        </div>
        {props.cart.products.length
          ? props.cart.products.map((p, key) => (
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
              value={props.instructions}
              onChange={(e) => props.setInstructions(e.target.value)}
            />
            <Typography style={{ ...textStyle, fontWeight: 600, fontSize: 20 }} my={2}>Apply Voucher</Typography>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <TextField
                variant='outlined'
                placeholder='Voucher Code'
                multiline
                label='Voucher'
                value={props.voucher}
                onChange={(e) => props.setVoucher(e.target.value)}
              />
              <CustomButton variant="contained" size='small' sx={{ mx: 1 }}>
                Apply
              </CustomButton>
            </div>
          </Grid>
          <Grid item xs={6}>
            <Typography style={{ ...textStyle, fontWeight: 600, fontSize: 20 }} my={2}>ORDER SUMMARY</Typography>
            <div style={{ backgroundColor: '#E6E6E6', padding: 15 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography style={{ ...textStyle, fontWeight: 500 }}>SUB TOTAL</Typography>
                <Typography style={{ ...textStyle, fontWeight: 500 }}>Rs. {props.total}</Typography>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 15 }}>
                <Typography style={{ ...textStyle, fontWeight: 500 }}>DISCOUNT (if any)</Typography>
                <Typography style={{ ...textStyle, fontWeight: 500 }}>-Rs. {props.discount}</Typography>
              </div>
              <hr style={{ backgroundColor: '#000000' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 15 }}>
                <Typography style={{ ...textStyle, fontWeight: 500 }}>TOTAL AMOUNT</Typography>
                <Typography style={{ ...textStyle, fontWeight: 500 }}>Rs. {props.finalAmount}</Typography>
              </div>
            </div>
            <center>
              <Link style={{ cursor: 'pointer' }}>
                <div style={{ backgroundColor: '#FA861B', border: '1px solid #330C3E', width: '80%', padding: 10, marginTop: 15 }}>
                  <Typography style={{ ...textStyle, fontWeight: 500, color: '#F8F5CC', textAlign: 'center' }}>Proceed to Checkout</Typography>
                </div>
              </Link>
              <Link style={{ cursor: 'pointer' }} onClick={() => navigate('/', { replace: true })}>
                <div style={{ backgroundColor: '#F8F5CC', border: '1px solid #330C3E', width: '80%', padding: 10, marginTop: 15 }}>
                  <Typography style={{ ...textStyle, fontWeight: 500, color: '#330C3E', textAlign: 'center' }}>Continue Shopping</Typography>
                </div>
              </Link>
            </center>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default CartDesktop
