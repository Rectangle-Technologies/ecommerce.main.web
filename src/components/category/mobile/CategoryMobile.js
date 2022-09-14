import React, { useState } from 'react'
import { Box, Divider, Grid, List, ListItem, Pagination, Typography } from '@mui/material';
import PriceMenu from './PriceMenu';
import SizeMenu from './SizeMenu';
import { connect } from 'react-redux';
import { addLoader, removeLoader } from '../../../redux/services/actions/loaderActions';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import { BASE_URL_2 } from '../../../constants/urls';
import ProductLayout from '../../ProductLayout';
import FiltersDrawer from './FiltersDrawer';
import textStyle from '../../../helpers/textStyle';

const CategoryMobile = (props) => {
    const [priceRange, setPriceRange] = useState([0, 5000])
    const [sizes, setSizes] = useState([])
    const { enqueueSnackbar } = useSnackbar()

    const handleFilter = async (setIsOpen) => {
        props.addLoader()
        try {
            const res = await axios.post(`${BASE_URL_2}/products/fetchByFilter`, {
                categoryId: props?.category?._id,
                priceRange: { min: priceRange[0], max: priceRange[1] },
                sizes
            })
            props.setProducts(res.data.products)
            props.removeLoader()
            setIsOpen(false)
        } catch (err) {
            props.removeLoader()
            console.log(err)
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

    const handlePageChange = (event, value) => {
        props?.setPage(value)
    }

    return (
        <div style={{ margin: 'auto', width: '90%' }}>
            <div>
                <Typography mt={4} style={{
                    ...textStyle,
                    fontFamily: 'Playfair Display',
                    fontStyle: 'SemiBold',
                    letterSpacing: '0.3rem',
                    textAlign: 'center',
                    fontWeight: 500,
                    fontSize: window.innerWidth > 500 ? '40px' : '25px',
                    lineHeight: '53px',
                }}>
                    {props?.category?.title?.toUpperCase()}
                </Typography>
                <div style={{ borderTop: '2px solid black', width: window.innerWidth > 500 ? '130px' : '80px', margin: 'auto', marginTop: 2, marginBottom: 50 }}></div>
            </div>
            <div style={{ margin: '15px 0px' }}>
                <FiltersDrawer
                    handleFilter={handleFilter}
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                    sizes={sizes}
                    setSizes={setSizes}
                />
            </div>
            <div style={{ margin: window.innerWidth > 500 ? 20 : 0 }}>
                <Grid container spacing={window.innerWidth > 500 ? 3 : 1.5} style={{ padding: "0px 5vw 0px 5vw" }}>
                    {props?.products?.map((p, idx) => (
                        <Grid key={idx} item xs={6} md={3}>
                            <ProductLayout
                                liked={true}
                                new={true}
                                title={p?.name}
                                mrp={p?.price}
                                imageUrl={p?.imageUrls[0]}
                            />
                        </Grid>
                    ))}
                </Grid>
                <div style={{ display: 'flex', justifyContent: 'center', margin: '15px 0px' }}>
                    <Pagination count={props?.maxPages} page={props?.page} onChange={handlePageChange} />
                </div>
            </div>
        </div>
    )
}

export default connect(null, { addLoader, removeLoader })(CategoryMobile)
