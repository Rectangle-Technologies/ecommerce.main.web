import { Grid, Typography } from '@mui/material'
import React from 'react'
import textStyle from '../../../helpers/textStyle'

const ProductsDesktop = () => {
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
            <div style={{ width: '22%', margin: 'auto', padding: 10 }}>
                <Typography style={{ ...textStyle, fontWeight: 500, fontSize: 20, textAlign: 'center' }} m={2}>1</Typography>
            </div>
            <div style={{ width: '6%', margin: 'auto', padding: 10 }}>
                <Typography style={{ ...textStyle, fontWeight: 600, fontSize: 20, textAlign: 'center' }} m={2}>X</Typography>
            </div>
        </div>
        // <Grid container>
        //     <Grid item xs={12} md={6}>
        //         <div style={{ display: 'flex', flexDirection: 'row' }}>
        //             <img src='https://i.pinimg.com/736x/33/66/50/336650d646d0f5d9e144e626323a3d42.jpg'
        //                 style={{ width: '20%', aspectRatio: 0.65 }}
        //             />
        //             <Typography style={{ ...textStyle, fontWeight: 500 }} m={2}>Product Name</Typography>
        //         </div>
        //     </Grid>
        // </Grid>
    )
}

export default ProductsDesktop
