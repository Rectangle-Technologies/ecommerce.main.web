import React, { useState } from 'react'
import { Grid, Pagination } from '@mui/material';
import { connect } from 'react-redux';
import { addLoader, removeLoader } from '../../../redux/services/actions/loaderActions';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import { BASE_URL_2 } from '../../../constants/urls';
import ProductLayout from '../../ProductLayout';
import FiltersDrawer from '../../category/mobile/FiltersDrawer';

const CategoryMobile = (props) => {
    const { enqueueSnackbar } = useSnackbar()

    const handleFilter = async (setIsOpen) => {
        props.addLoader()
        try {
            const res = await axios.post(`${BASE_URL_2}/products/fetchByFilter?page=${props?.page}&limit=${props?.limit}`, {
                priceRange: { min: props?.priceRange[0], max: props?.priceRange[1] },
                sizes: props?.sizes,
                name: props.name
            })
            props.setProducts(res.data.products)
            props?.setMaxPages(Math.ceil(res.data.count / props?.limit))
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
            <div style={{ margin: '15px 0px' }}>
                <FiltersDrawer
                    handleFilter={handleFilter}
                    priceRange={props?.priceRange}
                    setPriceRange={props?.setPriceRange}
                    sizes={props?.sizes}
                    setSizes={props?.setSizes}
                />
            </div>
            <div style={{ margin: 0 }}>
                <Grid container spacing={2} style={{ padding: "0px 5vw 0px 5vw" }}>
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
