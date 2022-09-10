import React, { useState } from 'react'
import { Box, Divider, Grid, List, ListItem } from '@mui/material';
import PriceMenu from '../../category/mobile/PriceMenu';
import SizeMenu from '../../category/mobile/SizeMenu';
import { connect } from 'react-redux';
import { addLoader, removeLoader } from '../../../redux/services/actions/loaderActions';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import { BASE_URL_2 } from '../../../constants/urls';
import ProductLayout from '../../ProductLayout';
import FiltersDrawer from '../../category/mobile/FiltersDrawer';

const CategoryMobile = (props) => {
    const [priceRange, setPriceRange] = useState([0, 5000])
    const [sizes, setSizes] = useState([])
    const { enqueueSnackbar } = useSnackbar()

    const handleFilter = async (setIsOpen) => {
        props.addLoader()
        try {
            const res = await axios.post(`${BASE_URL_2}/products/fetchByFilter`, {
                priceRange: { min: priceRange[0], max: priceRange[1] },
                sizes,
                name: props.name
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

    return (
        <div style={{ margin: 'auto', width: '90%' }}>
            <div style={{ marginTop: 20 }}>
                <FiltersDrawer
                    handleFilter={handleFilter}
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                    sizes={sizes}
                    setSizes={setSizes}
                />
            </div>
            <div style={{ margin: 20 }}>
                <Grid container spacing={6} style={{ padding: "0px 5vw 0px 5vw" }}>
                    {props?.products?.map((p, idx) => (
                        <Grid key={idx} item xs={6} lg={3}>
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
            </div>
        </div>
    )
}

export default connect(null, { addLoader, removeLoader })(CategoryMobile)
