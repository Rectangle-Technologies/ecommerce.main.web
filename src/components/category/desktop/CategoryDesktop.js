import { Button, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DoubleText from '../../DoubleText';
import SortIcon from '@mui/icons-material/Sort';
import textStyle from '../../../helpers/textStyle';
import PriceMenu from './PriceMenu';
import SizeMenu from './SizeMenu';
import { styled } from "@mui/material/styles";
import ProductLayout from '../../ProductLayout';
import { addLoader, removeLoader } from '../../../redux/services/actions/loaderActions';
import { connect } from 'react-redux';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import { BASE_URL_2 } from '../../../constants/urls';

const CategoryDesktop = (props) => {
    const [priceRange, setPriceRange] = useState([0, 5000]);
    const [sizes, setSizes] = useState([])
    const { enqueueSnackbar } = useSnackbar()
    const CustomButton = styled(Button)({
        textTransform: "none",
        backgroundColor: "#eb31e2",
        "&:hover": {
            backgroundColor: "#fc03cf",
        },
    });

    const handleFilter = async () => {
        props.addLoader()
        try {
            const res = await axios.post(`${BASE_URL_2}/products/fetchByFilter`, {
                categoryId: props?.category?._id,
                priceRange: { min: priceRange[0], max: priceRange[1] },
                sizes
            })
            props.setProducts(res.data.products)
            props.removeLoader()
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
        <div style={{ margin: 'auto', width: '80%' }}>
            <DoubleText frontText={props?.category?.title} backText='' left='-130%' />
            <hr style={{ backgroundColor: '#000000' }} />
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <SortIcon fontSize='small' />
                <Typography style={{ ...textStyle, fontWeight: 500, fontSize: 20, fontStyle: 'medium' }} ml={1}>Refined By:</Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', margin: 15 }}>
                <PriceMenu value={priceRange} setValue={setPriceRange} />
                <SizeMenu sizes={sizes} setSizes={setSizes} />
                <CustomButton variant='contained' sx={{ mx: 1 }} onClick={handleFilter}>Apply</CustomButton>
            </div>
            <div style={{ margin: 20 }}>
                <Grid container spacing={6} style={{ padding: "0px 5vw 0px 5vw" }}>
                    <Grid item xs={6} lg={3}>
                        <ProductLayout
                            liked={true}
                            new={true}
                            title="Blue kurti with embroided neck"
                            mrp="523"
                        />
                    </Grid>
                    <Grid item xs={6} lg={3}>
                        <ProductLayout
                            liked={true}
                            title="Blue kurti with embroided neck"
                            mrp="523"
                        />
                    </Grid>
                    <Grid item xs={6} lg={3}>
                        <ProductLayout
                            new={true}
                            title="Blue kurti with embroided neck"
                            mrp="523"
                        />
                    </Grid>
                    <Grid item xs={6} lg={3}>
                        <ProductLayout title="Blue kurti with embroided neck" mrp="523" />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default connect(null, { addLoader, removeLoader })(CategoryDesktop)
